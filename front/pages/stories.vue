<script setup lang="ts">
useHead({
  title: 'Stories - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/stories.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/stories.webp'
    }
  ]
})
</script>

<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- story -->
    <StoriesSectionStories class="mt-4 md:mt-10" />
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'StoriesPage',

  components: {},

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Stories',
          to: '/stories/'
        }
      ]
    }
  }
})
</script>
