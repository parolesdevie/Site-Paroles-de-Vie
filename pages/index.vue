<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <SectionTopicCard class="mt-4 md:mt-10" :topics="topics" title="Thémes" />

      <SectionDocument class="mt-4 md:mt-10" :tags="tags" :pdfs="pdfs" />

      <SectionBook class="mt-4 md:mt-10" :books="books" />

      <SectionSite class="mt-4 md:mt-10" :sites="sites" />

      <SectionMag class="mt-4 md:mt-10" />
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionBook from '~/components/book/SectionBook.vue'
import SectionDocument from '~/components/document/SectionDocument.vue'
import SectionMag from '~/components/magazine/SectionMag.vue'
import SectionSite from '~/components/site/SectionSite.vue'
import SectionTopicCard from '~/components/topics/SectionTopicCard.vue'
import {
  BookService,
  TopicService,
  TagService,
  PdfService,
  WebSiteService,
} from '~/services'

export default Vue.extend({
  name: 'IndexPage',

  components: {
    SectionDocument,
    SectionBook,
    SectionSite,
    SectionMag,
    SectionTopicCard,
  },

  head() {
    return {
      title: 'Accueil - Paroles de vie',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Défendre la foi chrétienne, donner une éducation chrétienne, expression de la foi.',
        },
      ],
    }
  },

  data() {
    return {
      topics: TopicService.getAll(),
      tags: TagService.getAll(),
      pdfs: PdfService.getAll(),
      books: BookService.getAll(),
      sites: WebSiteService.getAll(),
    }
  },
})
</script>
