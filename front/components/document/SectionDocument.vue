<template>
  <section>
    <!-- title -->
    <H2Title>Rechercher un document</H2Title>

    <!-- search -->
    <div class="flex">
      <SearchInput v-model="searchKeyWord" placeholder="Ex: le paraclet" />
      <!-- show all -->
      <input
        :class="`mt-2 md:mt-4 h-11 w-11 ${showHereticTesis ? '' : 'opacity-0'}`"
        v-model="showHereticTesis"
        type="checkbox"
        name="heretic thesis"
        id=""
      />
    </div>

    <!-- tags -->
    <p class="mt-2 md:mt-10 text-lg md:text-2xl">Tags</p>
    <ul class="mt-2 flex flex-wrap gap-2 md:gap-4">
      <Tag
        v-show="showHereticTesis"
        :active="selectedTags.includes(ThemeEnum.HERETIC_THESIS)"
        @click="onTagClick(ThemeEnum.HERETIC_THESIS)"
      >
        <span> Thèses hérétiques </span>
        <span class="ml-2 text-xs">(0)</span>
      </Tag>

      <Tag
        v-for="(tag, index) in tags"
        :key="index"
        :active="selectedTags.includes(tag.slug)"
        @click="onTagClick(tag.slug)"
      >
        <span>
          {{ tag.author }}
        </span>
        <span class="ml-2 text-xs">({{ tag.pdfCount }})</span>
      </Tag>
    </ul>

    <div class="mt-4 md:mt-8 mb-8">
      <ul
        :class="`
          -m-4
          p-2
          md:p-4
          pr-3
          md:pr-5
          flex flex-wrap
          ${fullHeight ? '' : 'max-h-160 overflow-y-auto scroll-hidden'}
        `"
      >
        <CardDocument
          v-for="(document, index) in filteredDocuments"
          :key="index"
          loading="lazy"
          :author="document.author"
          :slug="document.slug"
          :title="document.title"
        />
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { IPdf, ITag, TagEnum, ThemeEnum } from '~~/types'
import SearchInput from '~~/components/forms/SearchInput.vue'
import CardDocument from '~~/components/document/CardDocument.vue'
import Tag from '~~/components/global/Tag.vue'
import H2Title from '~~/components/global/H2Title.vue'
import { PropType } from 'vue'

export default defineNuxtComponent({
  name: 'SectionDocument',

  components: { Tag, CardDocument, SearchInput, H2Title },

  props: {
    fullHeight: {
      type: Boolean,
      default: false
    },
    tags: {
      type: Array as PropType<ITag[]>,
      default: () => []
    },
    pdfs: {
      type: Array as PropType<IPdf[]>,
      default: () => []
    }
  },

  data() {
    return {
      searchKeyWord: '',
      selectedTags: [] as TagEnum[],
      showHereticTesis: false,
      ThemeEnum
    }
  },

  computed: {
    filteredDocuments(): IPdf[] {
      let pdfs = this.pdfs

      if (this.selectedTags.length) {
        pdfs = pdfs.filter(
          (pdf: IPdf) =>
            this.selectedTags.findIndex(
              (tag: TagEnum) => pdf.tags.indexOf(tag) > -1
            ) > -1 || this.selectedTags.indexOf(pdf.author) > -1
        )
      }
      if (!this.showHereticTesis) {
        pdfs = pdfs.filter(
          (pdf: IPdf) => !pdf.tags.includes(ThemeEnum.HERETIC_THESIS)
        )
      }
      return pdfs.filter(
        (pdf: IPdf) => pdf.slug.indexOf(this.slugify(this.searchKeyWord)) > -1
      )
    }
  },

  methods: {
    slugify(value: string): string {
      const a =
        'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
      const b =
        'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------'
      const p = new RegExp(a.split('').join('|'), 'g')

      return value
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(p, (c) => b.charAt(a.indexOf(c)))
        .replace(/&/g, '-and-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
    },
    onTagClick(value: string) {
      const index = this.selectedTags.indexOf(value)

      if (index > -1) {
        this.selectedTags.splice(index, 1)
      } else {
        this.selectedTags.push(value)
      }
    }
  }
})
</script>
