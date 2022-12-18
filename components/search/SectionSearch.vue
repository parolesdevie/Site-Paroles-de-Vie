<template>
  <section>
    <!-- title -->
    <h2 class="flex items-center font-bold text-2xl md:text-3xl">Recherche</h2>

    <!-- search -->
    <SearchInput
      v-model="searchKeyWord"
      @input="search"
      placeholder="Ex: le paraclet"
      :disabled="$config.server !== 'local'"
    />

    <div v-if="$config.server === 'local'" class="mt-4 md:mt-8 mb-8">
      <div :class="results.length ? 'contents' : 'hidden'">
        <ul class="flex flex-col gap-4">
          <p class="font-bold">
            Résulats pour <strong>{{ searchKeyWord }}</strong> :
          </p>
          <CardSearchResult
            v-for="(result, index) in results"
            :key="index"
            :href="result.href"
            :title="result.title"
            :image="result.image"
            :author="result.author"
            :plateform="result.plateform"
          />
        </ul>
      </div>
    </div>
    <p v-else class="mt-4 md:mt-8 mb-8 font-bold">
      Fonctionalité non disponible pour le moment
    </p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { SearchService } from '~/services'
import { SearchResult } from '~/types'
import SearchInput from '../forms/SearchInput.vue'
import CardSearchResult from './CardSearchResult.vue'
export default Vue.extend({
  name: 'SectionSearch',

  components: { SearchInput, CardSearchResult },

  data() {
    return {
      searchKeyWord: '',
      results: [] as SearchResult[],
    }
  },

  methods: {
    async search(searchKeyWord: string) {
      this.results = [
        ...(await SearchService.searchOnEmcitv(searchKeyWord)),
        ...(await SearchService.searchOnTopChretien(searchKeyWord)),
        ...(await SearchService.searchOnJcsr(searchKeyWord)),
        ...(await SearchService.searchOnFamilleChretienne(searchKeyWord)),
      ]
    },
  },
})
</script>