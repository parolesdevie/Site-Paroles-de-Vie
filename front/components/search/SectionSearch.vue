<template>
  <section>
    <!-- title -->
    <H2Title>Recherche</H2Title>

    <!-- search -->
    <SearchInput
      v-model="searchKeyWord"
      @input="search"
      placeholder="Ex: le paraclet"
    />

    <!-- preset -->
    <div class="mt-2 md:mt-4" v-if="presets.length">
      <span class="font-semibold">Suggestions :</span>
      <ul class="mt-2 flex flex-wrap gap-2 md:gap-4">
        <Tag
          v-for="(preset, index) in presets"
          :key="index"
          :active="searchKeyWord === preset"
          @click="selectPreset(preset)"
        >
          {{ preset }}
        </Tag>
      </ul>
    </div>

    <!-- plateform -->
    <div class="mt-2 md:mt-4">
      <span class="font-semibold">Plateformes :</span>
      <ul class="mt-2 flex flex-wrap gap-2 md:gap-4">
        <Tag
          v-for="(plateform, index) in searchPlateforms"
          :key="index"
          class="select-none cursor-pointer text-xs md:text-base inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full"
          :active="plateformSelected === plateform"
          @click="selectPlateform(plateform)"
        >
          {{ plateform }}
        </Tag>
      </ul>
    </div>

    <div class="mt-4 md:mt-8 mb-8">
      <p v-show="loading">Recherche en cours ...</p>
      <div v-show="!loading && results.length">
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
        'jésus'
      ],
      loading: false
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
    }
  },

  methods: {
    async search() {
      this.loading = true
      this.results = this.searchKeyWord
        ? [
            ...(await SearchService.searchOnEmcitv(this.searchKeyWord)),
            ...(await SearchService.searchOnTopChretien(this.searchKeyWord)),
            ...(await SearchService.searchOnJcsr(this.searchKeyWord)),
            ...(await SearchService.searchOnFamilleChretienne(
              this.searchKeyWord
            )),
            ...(await SearchService.searchOnAleteia(this.searchKeyWord))
          ]
        : []
      this.loading = false
    },
    selectPreset(preset: string) {
      this.plateformSelected = undefined
      this.searchKeyWord = preset
      this.search()
    },
    selectPlateform(plateform: SearchPlateformEnum) {
      this.plateformSelected = plateform
    }
  }
})
</script>
