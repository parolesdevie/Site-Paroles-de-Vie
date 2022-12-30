<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <ResponsiveImageGrid class="mt-4 md:mt-10" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Galerie d'images - Paroles de vie",
  meta: [
    {
      name: 'description',
      content:
        'Défendre la foi chrétienne, donner une éducation chrétienne, expression de la foi.'
    },
    {
      property: 'og:image',
      content: 'https://www.paroles-de-vie.tk/seo/gallery.webp'
    },
    {
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/gallery.webp'
    }
  ]
})
</script>

<script lang="ts">
import ResponsiveImageGrid from '~~/components/gallery/ResponsiveImageGrid.vue'

export default defineNuxtComponent({
  name: 'GalleyPage',

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: "Galerie d'images",
          to: '/gallery/'
        }
      ]
    }
  },
  components: { ResponsiveImageGrid }
})
</script>
