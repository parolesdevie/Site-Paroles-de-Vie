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

    <template v-if="$config.server === 'local'">
      <div class="mt-2 md:mt-4" v-if="presets.length">
        <span class="font-semibold">Suggestion :</span>
        <ul class="mt-2 flex flex-wrap gap-2 md:gap-4">
          <li
            v-for="(preset, index) in presets"
            :key="index"
            :class="`select-none cursor-pointer text-xs md:text-base inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full 
          ${
            searchKeyWord === preset
              ? 'bg-blue-200 text-blue-700'
              : 'bg-gray-100 text-gray-700'
          }`"
            @click="selectPreset(preset)"
          >
            {{ preset }}
          </li>
        </ul>
      </div>

      <div class="mt-4 md:mt-8 mb-8">
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
    </template>

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
      presets: [
        'paraclet',
        'manuscrit',
        'bible',
        'cantique',
        'parabole',
        'debat',
        'divinité',
        'jésus',
      ],
    }
  },

  methods: {
    async search(searchKeyWord: string) {
      this.results = searchKeyWord
        ? [
            ...(await SearchService.searchOnEmcitv(searchKeyWord)),
            ...(await SearchService.searchOnTopChretien(searchKeyWord)),
            ...(await SearchService.searchOnJcsr(searchKeyWord)),
            ...(await SearchService.searchOnFamilleChretienne(searchKeyWord)),
          ]
        : []
    },
    selectPreset(preset: string) {
      this.searchKeyWord = preset
      this.search(preset)
    },
  },
})
</script>
