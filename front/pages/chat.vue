<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <section class="container mx-auto mt-4 md:mt-10">
        <iframe
          class="h-160 w-full"
          :src="API_ENDPOINT + '/index.html'"
          frameBorder="0"
        />
      </section>
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Messagerie instantanée - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/thumbnail.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/thumbnail.webp'
    }
  ]
})
</script>

<script lang="ts">
export default defineNuxtComponent({
  name: 'DivinityOfJesusPage',

  components: {},

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Messagerie instantanée',
          to: '/chat/'
        }
      ],
      API_ENDPOINT: 'http://178.170.13.79:8081'
    }
  }
})
</script>
