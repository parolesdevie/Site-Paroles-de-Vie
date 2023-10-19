<script setup lang="ts">
useHead({
  title: 'Arguments - Paroles de vie',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: '[description]'
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://www.paroles-de-vie.tk/seo/arguments.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/arguments.webp'
    }
  ]
})
</script>

<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- section -->
    <ArgumentsSectionArguments class="container mx-auto mt-4 md:mt-10" />
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'ArgumentsPage',

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Arguments',
          to: '/arguments/'
        }
      ]
    }
  }
})
</script>
