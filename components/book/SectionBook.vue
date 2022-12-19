<template>
  <section>
    <!-- title -->
    <h2 class="flex items-center font-bold text-2xl md:text-3xl">
      {{ title }}
    </h2>

    <!-- intro -->
    <p
      v-if="intro"
      class="mt-4 md:mt-8 font-semibold text-base text-gray-800 max-w-2xl"
    >
      <strong class="font-bold">Shalom,</strong>
      <br />
      Voici un choix de livres Chrétiens, ces livres sont à la fois détaillés et
      approfondis , destinés à un large public.
      <br />
      Si vous souhaitez en acheter un sur Amazon,
      <strong>utilisez le lien en dessous du titre</strong>, ceci nous permet
      d'obtenir une commission de vente.
      <br />
      Bonne lecture.🕊️
    </p>

    <!-- books list -->
    <div class="mt-4 md:mt-8">
      <ul class="flex flex-wrap py-2 pr-2 md:py-4 md:pr-4 gap-2 md:gap-4">
        <CardBook
          v-for="(book, index) in books"
          :key="index"
          :title="book.title"
          :src="book.slug"
          :amazon="book.amazon"
        />
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import { IBook } from '~/types'
import CardBook from '~/components/book/CardBook.vue'

export default Vue.extend({
  name: 'SectionBook',

  components: {
    CardBook,
  },

  props: {
    books: {
      type: Array as PropType<IBook[]>,
      default: () => [],
    },
    title: {
      type: String,
      default: 'Recommandations de Livres',
    },
    intro: {
      type: Boolean,
      default: true,
    },
  },
})
</script>
