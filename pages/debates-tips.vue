<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <section class="mt-4 md:mt-10">
        <!-- title -->
        <h2 class="flex items-center font-bold text-2xl md:text-3 xl">
          Conseils de débats
        </h2>

        <p
          class="
            mt-4
            md:mt-8
            font-semibold
            text-base text-gray-800
            dark:text-gray-300
            max-w-2xl
          "
        >
          Connaitre la
          <a
            class="hover:text-blue-700"
            href="https://fr.wikipedia.org/wiki/Loi_de_Brandolini"
            target="_blank"
            rel="noopener noreferrer"
            >Loi de Brandolini</a
          >.
        </p>
      </section>
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BookService } from '~/services'

export default Vue.extend({
  name: 'DebatesTipsPage',

  components: {},

  head() {
    return {
      title: 'Conseils de débats - Paroles de vie',
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
          content: 'https://www.paroles-de-vie.tk/seo/debates-tips.webp',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://www.paroles-de-vie.tk/seo/debates-tips.webp',
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
          name: 'Conseils de débats',
          to: '/debates-tips/',
        },
      ],
      books: BookService.getAll(),
    }
  },
})
</script>
