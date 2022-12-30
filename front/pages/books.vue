<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- book -->
    <SectionBook class="mt-4 md:mt-10" :books="books" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Livres Recommandés - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/books.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/books.webp'
    }
  ]
})
</script>

<script lang="ts">
import SectionBook from '~~/components/book/SectionBook.vue'
import Breadcrumb from '~~/components/global/Breadcrumb.vue'
import { BookService } from '~~/services'

export default defineNuxtComponent({
  name: 'BooksPage',

  components: { Breadcrumb, SectionBook },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Livres Recommandés',
          to: '/books/'
        }
      ],
      books: BookService.getAll()
    }
  }
})
</script>
