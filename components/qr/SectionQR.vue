<template>
  <section>
    <!-- title -->
    <h2 class="flex items-center font-bold text-2xl md:text-3xl">
      Rechercher une question
    </h2>

    <!-- search -->
    <SearchInput
      v-model="searchKeyWord"
      @input="searchOnGotQuestions"
      placeholder="Ex: comment faire des crêpes ?"
    />

    <div class="mt-4 md:mt-8 mb-8">
      <!-- local -->
      <div :class="filteredQuestions.length ? 'contents' : 'hidden'">
        <p class="font-bold">Réponses</p>
        <ul class="mt-2 md:mt-4 flex flex-col gap-4">
          <CardQR
            v-for="(question, index) in filteredQuestions"
            :key="index"
            :plateform="question.plateform"
            :slug="question.slug"
            :href="question.href"
            :title="question.title"
          >
            <p class="mt-4" v-html="question.response" />
          </CardQR>
        </ul>
      </div>

      <!-- gotQuestions -->
      <template v-if="$config.server === 'local'">
        <div class="contents" v-show="gotQuestions.length">
          <p class="mt-4 font-bold">Réponses sur GotQuestions.org</p>
          <ul class="mt-4 flex flex-col gap-4">
            <CardQR
              v-for="(question, index) in gotQuestions"
              :key="index"
              :plateform="question.plateform"
              :slug="question.slug"
              :href="question.href"
              :title="question.title"
            />
          </ul>
        </div>
      </template>

      <p
        v-show="!filteredQuestions.length && !gotQuestions.length"
        class="text-lg md:text-2xl font-semibold"
      >
        <span class="text-2xl md:text-4xl">🤷‍♂️</span>
        Aucune réponses
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import { IQuestion } from '~/types'
import SearchInput from '~/components/forms/SearchInput.vue'
import CardDocument from '~/components/document/CardDocument.vue'
import CardQR from '~/components/qr/CardQR.vue'
import { QRService } from '~/services'

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
      gotQuestions: [] as IQuestion[],
    }
  },

  computed: {
    filteredQuestions(): IQuestion[] {
      return [
        ...this.questions.filter(
          (question) =>
            (question as any).slug.indexOf(this.slugify(this.searchKeyWord)) >
            -1
        ),
      ]
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
    async searchOnGotQuestions(searchKeyWord: string) {
      this.gotQuestions = [
        ...(await QRService.searchOnGotQuestions(searchKeyWord)),
      ]
    },
  },
})
</script>
