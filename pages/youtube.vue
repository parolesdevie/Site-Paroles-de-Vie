<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <Breadcrumb :items="breadcrumbItems" />
      <SectionSite
        class="mt-4 md:mt-10"
        :sites="sites"
        title="Recommandations de chaîne Youtube"
      />
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
  name: 'YoutubePage',

  components: { SectionSite, Breadcrumb },

  head() {
    return {
      title: 'Chaîne Youtube Recommandés - Paroles de vie',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Défendre la foi chrétienne, donner une éducation chrétienne, expression de la foi.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.paroles-de-vie.tk/seo/youtube.webp',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://www.paroles-de-vie.tk/seo/youtube.webp',
        },
      ],
    }
  },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/',
        },
        {
          name: 'Chaîne Youtube Recommandées',
          to: '/youtube/',
        },
      ],
      sites: WebSiteService.getYoutubeChannels(),
    }
  },
})
</script>
