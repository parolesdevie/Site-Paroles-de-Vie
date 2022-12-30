<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- search -->
    <SectionSearch class="mt-4 md:mt-10" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Recherche - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/search.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/search.webp'
    }
  ]
})
</script>

<script lang="ts">
import Breadcrumb from '~~/components/global/Breadcrumb.vue'
import SectionSearch from '~~/components/search/SectionSearch.vue'

export default defineNuxtComponent({
  name: 'SearchPage',

  components: {
    Breadcrumb,
    SectionSearch
  },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Recherche',
          to: '/search/'
        }
      ]
    }
  }
})
</script>
