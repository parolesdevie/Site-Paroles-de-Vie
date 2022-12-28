<template>
  <section>
    <!-- title -->
    <H2Title>Recherche</H2Title>

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
          <Tag
            v-for="(preset, index) in presets"
            :key="index"
            :active="searchKeyWord === preset"
            @click.native="selectPreset(preset)"
          >
            {{ preset }}
          </Tag>
        </ul>
      </div>

      <div class="mt-2 md:mt-4">
        <span class="font-semibold">Plateformes :</span>
        <ul class="mt-2 flex flex-wrap gap-2 md:gap-4">
          <Tag
            v-for="(plateform, index) in searchPlateforms"
            :key="index"
            class="
              select-none
              cursor-pointer
              text-xs
              md:text-base
              inline-flex
              items-center
              font-bold
              leading-sm
              uppercase
              px-3
              py-1
              rounded-full
            "
            :active="plateformSelected === plateform"
            @click.native="selectPlateform(plateform)"
          >
            {{ plateform }}
          </Tag>
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

import { SearchService } from '~~/services'
import { SearchPlateformEnum, SearchResult } from '~~/types'
import SearchInput from '../forms/SearchInput.vue'
import Tag from '../global/Tag.vue'
import CardSearchResult from './CardSearchResult.vue'
export default defineNuxtComponent({
  name: 'SectionSearch',

  components: { SearchInput, CardSearchResult, Tag },

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
