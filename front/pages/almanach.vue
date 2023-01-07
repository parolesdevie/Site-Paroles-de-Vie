<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <div class="flex items-center justify-center">
      <BookReader class="mt-4 md:mt-10" />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Almanach - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/almanach.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/almanach.webp'
    }
  ]
})
</script>

<script lang="ts">
export default defineNuxtComponent({
  name: 'AlmanachPage',

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Almanach',
          to: '/almanach/'
        }
      ]
    }
  }
})
</script>
