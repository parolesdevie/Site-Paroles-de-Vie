<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <ResponsiveImageGrid class="mt-4 md:mt-10" />
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ResponsiveImageGrid from '~/components/gallery/ResponsiveImageGrid.vue'

export default Vue.extend({
  name: 'GalleyPage',

  components: { ResponsiveImageGrid },

  head() {
    return {
      title: "Galerie d'images - Paroles de vie",
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
          content: 'https://www.paroles-de-vie.tk/seo/gallery.webp',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://www.paroles-de-vie.tk/seo/gallery.webp',
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
          name: "Galerie d'images",
          to: '/gallery/',
        },
      ],
    }
  },
})
</script>
