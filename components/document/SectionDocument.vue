<template>
  <section>
    <!-- title -->
    <h2 class="flex items-center font-bold text-2xl md:text-3xl">
      Rechercher un document
    </h2>

    <!-- search -->
    <SearchInput v-model="searchKeyWord" placeholder="Ex: le paraclet" />

    <!-- tags -->
    <p class="mt-2 md:mt-10 text-lg md:text-2xl">Tags</p>
    <ul class="mt-2 -m-1 md-m-2 flex flex-wrap">
      <Tag
        v-for="(tag, index) in tags"
        :key="index"
        :slug="tag.slug"
        :author="tag.author"
        :pdfCount="tag.pdfCount"
        :active="selectedTags.includes(tag.slug)"
        @click="onTagClick"
      />
    </ul>

    <div class="mt-4 md:mt-8 mb-8">
      <ul class="-m-4 p-2 md:p-4 pr-3 md:pr-5 flex flex-wrap">
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
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import { IPdf, ITag } from '~/types'
import SearchInput from '~/components/forms/SearchInput.vue'
import CardDocument from '~/components/document/CardDocument.vue'
import Tag from '~/components/document/Tag.vue'

export default Vue.extend({
  name: 'SectionDocument',

  components: { Tag, CardDocument, SearchInput },

  props: {
    tags: {
      type: Array as PropType<ITag[]>,
      default: () => [],
    },
    pdfs: {
      type: Array as PropType<IPdf[]>,
      default: () => [],
    },
  },

  data() {
    return {
      searchKeyWord: '',
      selectedTags: [] as string[],
    }
  },

  computed: {
    filteredDocuments(): IPdf[] {
      let pdfs = this.pdfs

      if (this.selectedTags.length) {
        pdfs = pdfs.filter(
          (pdf) =>
            this.selectedTags.findIndex((tag) => pdf.tags.indexOf(tag) > -1) >
              -1 || this.selectedTags.indexOf(pdf.author) > -1
        )
      }
      return pdfs.filter(
        (pdf) => pdf.slug.indexOf(this.slugify(this.searchKeyWord)) > -1
      )
    },
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
      console.log(this.selectedTags)
    },
  },
})
</script>
