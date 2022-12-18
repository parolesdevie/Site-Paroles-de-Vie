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
        <span class="font-semibold">Suggestions :</span>
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

      <div class="mt-2 md:mt-4">
        <span class="font-semibold">Plateformes :</span>
        <ul class="mt-2 flex flex-wrap gap-2 md:gap-4">
          <li
            v-for="(plateform, index) in searchPlateforms"
            :key="index"
            :class="`select-none cursor-pointer text-xs md:text-base inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full 
          ${
            plateformSelected === plateform
              ? 'bg-blue-200 text-blue-700'
              : 'bg-gray-100 text-gray-700'
          }`"
            @click="selectPlateform(plateform)"
          >
            {{ plateform }}
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
              v-for="(result, index) in filteredResults"
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
import { SearchPlateformEnum, SearchResult } from '~/types'
import SearchInput from '../forms/SearchInput.vue'
import CardSearchResult from './CardSearchResult.vue'
export default Vue.extend({
  name: 'SectionSearch',

  components: { SearchInput, CardSearchResult },

  data() {
    return {
      searchKeyWord: '',
      plateformSelected: undefined as SearchPlateformEnum | undefined,
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

  computed: {
    searchPlateforms(): SearchPlateformEnum[] {
      return this.results.length
        ? Object.values(SearchPlateformEnum).filter(
            (plateform) =>
              this.results.findIndex(
                (result) => result.plateform === plateform
              ) != -1
          )
        : Object.values(SearchPlateformEnum)
      // return this.results.length
      //   ? this.results.map((result) => result.plateform)
      //   : Object.values(SearchPlateformEnum)
    },
    filteredResults(): SearchResult[] {
      return this.plateformSelected
        ? this.results.filter(
            (result) => result.plateform === this.plateformSelected
          )
        : this.results
    },
  },

  methods: {
    async search(searchKeyWord: string) {
      this.results = searchKeyWord
        ? [
            ...(await SearchService.searchOnEmcitv(searchKeyWord)),
            ...(await SearchService.searchOnTopChretien(searchKeyWord)),
            ...(await SearchService.searchOnJcsr(searchKeyWord)),
            ...(await SearchService.searchOnFamilleChretienne(searchKeyWord)),
            ...(await SearchService.searchOnAleteia(searchKeyWord)),
          ]
        : []
    },
    selectPreset(preset: string) {
      this.plateformSelected = undefined
      this.searchKeyWord = preset
      this.search(preset)
    },
    selectPlateform(plateform: SearchPlateformEnum) {
      this.plateformSelected = plateform
    },
  },
})
</script>
