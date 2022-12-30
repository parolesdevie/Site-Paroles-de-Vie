<template>
  <div>
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
</template>

<script setup lang="ts">
useHead({
  title: 'Documents - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/document.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/document.webp'
    }
  ]
})
</script>

<script lang="ts">
import SectionDocument from '~~/components/document/SectionDocument.vue'
import Breadcrumb from '~~/components/global/Breadcrumb.vue'
import { TagService, PdfService } from '~~/services'

export default defineNuxtComponent({
  name: 'DocumentPage',

  components: { Breadcrumb, SectionDocument },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Documents',
          to: '/documents/'
        }
      ],
      tags: TagService.getAll(),
      pdfs: PdfService.getAll()
    }
  }
})
</script>
