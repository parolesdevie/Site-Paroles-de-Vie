<template>
  <div class="flex flex-col min-h-screen dark:bg-light-black dark:text-white">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- book -->
      <SectionBook class="mt-4 md:mt-10" :books="books" />
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionBook from '~/components/book/SectionBook.vue'
import Breadcrumb from '~/components/global/Breadcrumb.vue'
import { BookService } from '~/services'

export default Vue.extend({
  name: 'MagazinesPage',

  components: { Breadcrumb, SectionBook },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/',
        },
        {
          name: 'Livres Recommandés',
          to: '/books/',
        },
      ],
      books: BookService.getAll(),
    }
  },
})
</script>
