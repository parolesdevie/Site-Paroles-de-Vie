<template>
  <div class="flex flex-col min-h-screen dark:bg-light-black dark:text-white">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- mag -->
      <SectionMag class="mt-4 md:mt-10" />
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionMag from '~/components/magazine/SectionMag.vue'
import { BookService } from '~/services'

export default Vue.extend({
  name: 'MagazinesPage',

  components: { SectionMag },

  head() {
    return {
      title: 'Magazines des Théophilos - Paroles de vie',
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
          content: 'https://www.paroles-de-vie.tk/seo/magazines.webp',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://www.paroles-de-vie.tk/seo/magazines.webp',
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
          name: 'Magazines des Théophilos',
          to: '/magazines/',
        },
      ],
      books: BookService.getAll(),
    }
  },
})
</script>
