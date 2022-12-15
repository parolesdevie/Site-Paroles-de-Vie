<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <section
        class="
          mt-4
          md:mt-10
          flex flex-wrap flex-col
          md:flex-row
          gap-10
          items-center
        "
      >
        <ManuscriptCard
          :title="manuscripts.CODEX_SINATICUS.name"
          :sites="manuscripts.CODEX_SINATICUS.sites"
          image="codex-sinaiticus"
        />
        <ManuscriptCard
          :title="manuscripts.CODEX_ALEXANDRINUS.name"
          :sites="manuscripts.CODEX_ALEXANDRINUS.sites"
          image="codex-alexandrinus"
        />
        <ManuscriptCard
          :title="manuscripts.CODEX_VATICANUS.name"
          :sites="manuscripts.CODEX_VATICANUS.sites"
          image="codex-vaticanus"
        />
        <ManuscriptCard
          :title="manuscripts.OTHERS.name"
          :sites="manuscripts.OTHERS.sites"
          image="other"
        />
      </section>
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ManuscriptCard from '~/components/document/ManuscriptCard.vue'
import Breadcrumb from '~/components/global/Breadcrumb.vue'
import { WebSiteService } from '~/services'

export default Vue.extend({
  name: 'ManuscriptsPage',

  components: { Breadcrumb, ManuscriptCard },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Manuscrits',
          to: '/manuscripts/',
        },
      ],
      manuscripts: WebSiteService.getManuscripts(),
    }
  },
})
</script>
