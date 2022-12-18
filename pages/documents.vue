<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- documment -->
      <SectionDocument class="mt-4 md:mt-10" :tags="tags" :pdfs="pdfs" />
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
  name: 'IndexPage',

  components: { Breadcrumb, SectionDocument },

  asyncData() {
    return {
      breadcrumbItems: [
        {
          name: 'Home',
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
