<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <SectionPodcastSpotify class="container mx-auto mt-4 md:mt-10" />

      <!-- extern plateforme -->
      <SectionPodcastPlateform class="container mx-auto mt-8 md:mt-20" />

      <FluxRSSLink class="container mx-auto mt-8 md:mt-20" />
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionPodcastSpotify from '~/components/podcast/SectionPodcastSpotify.vue'
import SectionPodcastPlateform from '~/components/podcast/SectionPodcastPlateform.vue'
import FluxRSSLink from '~/components/podcast/FluxRSSLink.vue'

export default Vue.extend({
  name: 'PodcastPage',

  components: {
    SectionPodcastSpotify,
    SectionPodcastPlateform,
    FluxRSSLink,
  },

  head() {
    return {
      title: 'Podcast - Paroles de vie',
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
          content: 'https://www.paroles-de-vie.tk/seo/podcast.webp',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://www.paroles-de-vie.tk/seo/podcast.webp',
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
          name: 'Podcast',
          to: '/podcast/',
        },
      ],
    }
  },
})
</script>
