<template>
  <div class="flex flex-col min-h-screen dark:bg-light-black dark:text-white">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- documment -->
      <SectionDocument
        class="mt-4 md:mt-10"
        :tags="tags"
        :pdfs="pdfs"
        fullHeight
      />
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionDocument from '~/components/document/SectionDocument.vue'
import Breadcrumb from '~/components/global/Breadcrumb.vue'
import { TagService, PdfService } from '~/services'

export default Vue.extend({
  name: 'DocumentPage',

  components: { Breadcrumb, SectionDocument },

  head() {
    return {
      title: 'Documents - Paroles de vie',
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
          content: 'https://paroles-de-vie.netlify.app/seo/document.webp',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://paroles-de-vie.netlify.app/seo/document.webp',
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
          name: 'Documents',
          to: '/documents/',
        },
      ],
      tags: TagService.getAll(),
      pdfs: PdfService.getAll(),
    }
  },
})
</script>
