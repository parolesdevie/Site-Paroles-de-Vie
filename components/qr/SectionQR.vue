<template>
  <section>
    <!-- title -->
    <h2 class="flex items-center font-bold text-2xl md:text-3xl">
      Rechercher une question
    </h2>

    <!-- search -->
    <SearchInput
      v-model="searchKeyWord"
      placeholder="Ex: comment faire des crêpes ?"
    />

    <div class="mt-4 md:mt-8 mb-8">
      <ul class="flex flex-col gap-4">
        <CardQR
          v-for="(document, index) in filteredQuestions"
          :key="index"
          loading="lazy"
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
import { IQuestion } from '~/types'
import SearchInput from '~/components/forms/SearchInput.vue'
import CardDocument from '~/components/document/CardDocument.vue'
import CardQR from './CardQR.vue'

export default Vue.extend({
  name: 'SectionQRDocument',

  components: { CardDocument, SearchInput, CardQR },

  props: {
    questions: {
      type: Array as PropType<IQuestion[]>,
      default: () => [],
    },
  },

  data() {
    return {
      searchKeyWord: '',
    }
  },

  computed: {
    filteredQuestions(): IQuestion[] {
      return this.questions.filter(
        (question) =>
          question.slug.indexOf(this.slugify(this.searchKeyWord)) > -1
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
  },
})
</script>
