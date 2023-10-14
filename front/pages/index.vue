<script setup lang="ts">
import {
  BookService,
  PdfService,
  TagService,
  WebSiteService
} from '~~/services'

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

// const tags = useState('tags', () => TagService.getAll())
// const pdfs = useState('pdfs', () => PdfService.getAll())
// const books = useState('books', () => BookService.getAll())
// const sites = useState('sites', () => WebSiteService.getAll())
</script>

<template>
  <div>
    <StoriesSectionStories />

    <TopicsSectionTopicCard class="mt-4 md:mt-10" title="Thémes" />

    <!-- <DocumentSectionDocument class="mt-4 md:mt-10" :tags="tags" :pdfs="pdfs" />

    <BookSectionBook class="mt-4 md:mt-10" :books="books" />

    <SiteSectionSite class="mt-4 md:mt-10" :sites="sites" />

    <MagazineSectionMag class="mt-4 md:mt-10" /> -->
  </div>
</template>
