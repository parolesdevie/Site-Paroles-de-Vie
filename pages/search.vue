<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <Breadcrumb :items="breadcrumbItems" />

      <section class="mt-4 md:mt-10">
        <!-- title -->
        <h2 class="flex items-center font-bold text-2xl md:text-3xl">
          Recherche
        </h2>

        <!-- search -->
        <SearchInput
          v-model="searchKeyWord"
          @input="search"
          placeholder="Ex: le paraclet"
          :disabled="$config.server !== 'local'"
        />

        <div v-if="$config.server === 'local'" class="mt-4 md:mt-8 mb-8">
          <div class="contents" v-show="results.length">
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
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchInput from '~/components/forms/SearchInput.vue'
import Breadcrumb from '~/components/global/Breadcrumb.vue'
import SectionSite from '~/components/site/SectionSite.vue'
import { SearchResult } from '~/types'
import { SearchService } from '~/services'
import CardSearchResult from '~/components/search/CardSearchResult.vue'

export default Vue.extend({
  name: 'SearchPage',

  components: { SectionSite, Breadcrumb, SearchInput, CardSearchResult },

  asyncData() {
    return {
      breadcrumbItems: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Recherche',
          to: '/search/',
        },
      ],
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
