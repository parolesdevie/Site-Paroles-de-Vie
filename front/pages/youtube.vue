<template>
  <div>
    <Breadcrumb :items="breadcrumbItems" />
    <SectionSite
      class="mt-4 md:mt-10"
      :sites="sites"
      title="Recommandations de chaîne Youtube"
    />
  </div>
</template>


<script setup lang="ts">
useHead({
  title: 'Chaîne Youtube Recommandés - Paroles de vie',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Défendre la foi chrétienne, donner une éducation chrétienne, expression de la foi.'
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://www.paroles-de-vie.tk/seo/youtube.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/youtube.webp'
    }
  ]
})
</script>

<script lang="ts">
import Breadcrumb from '~~/components/global/Breadcrumb.vue'
import SectionSite from '~~/components/site/SectionSite.vue'
import { WebSiteService } from '~~/services'

export default defineNuxtComponent({
  name: 'YoutubePage',

  components: { SectionSite, Breadcrumb },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Chaîne Youtube Recommandées',
          to: '/youtube/'
        }
      ],
      sites: WebSiteService.getYoutubeChannels()
    }
  }
})
</script>
