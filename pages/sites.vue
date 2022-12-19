<template>
  <div class="flex flex-col min-h-screen dark:bg-light-black dark:text-white">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <Breadcrumb :items="breadcrumbItems" />
      <SectionSite class="mt-4 md:mt-10" :sites="sites" />
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Breadcrumb from '~/components/global/Breadcrumb.vue'
import SectionSite from '~/components/site/SectionSite.vue'
import { WebSiteService } from '~/services'

export default Vue.extend({
  name: 'SitesPage',

  components: { SectionSite, Breadcrumb },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/',
        },
        {
          name: 'Sites Recommandés',
          to: '/sites/',
        },
      ],
      sites: WebSiteService.getAll(),
    }
  },
})
</script>
