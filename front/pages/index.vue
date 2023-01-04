<script setup lang="ts">
useHead({
  title: 'Accueil - Paroles de vie',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Défendre la foi chrétienne, donner une éducation chrétienne, expression de la foi.'
    }
  ]
})
</script>

<template>
  <div>
    <SectionTopicCard class="mt-4 md:mt-10" title="Thémes" />

    <SectionDocument class="mt-4 md:mt-10" :tags="tags" :pdfs="pdfs" />

    <SectionBook class="mt-4 md:mt-10" :books="books" />

    <SectionSite class="mt-4 md:mt-10" :sites="sites" />

    <SectionMag class="mt-4 md:mt-10" />
  </div>
</template>

<script lang="ts">
import SectionBook from '~~/components/book/SectionBook.vue'
import SectionDocument from '~~/components/document/SectionDocument.vue'
import SectionMag from '~~/components/magazine/SectionMag.vue'
import SectionSite from '~~/components/site/SectionSite.vue'
import SectionTopicCard from '~~/components/topics/SectionTopicCard.vue'
import {
  BookService,
  TagService,
  PdfService,
  WebSiteService
} from '~~/services'

export default defineNuxtComponent({
  name: 'IndexPage',

  components: {
    SectionDocument,
    SectionBook,
    SectionSite,
    SectionMag,
    SectionTopicCard
  },

  data() {
    return {
      tags: TagService.getAll(),
      pdfs: PdfService.getAll(),
      books: BookService.getAll(),
      sites: WebSiteService.getAll()
    }
  }
})
</script>
