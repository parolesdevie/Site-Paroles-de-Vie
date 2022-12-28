<template>
  <section v-if="files.length">
    <!-- title -->
    <H2Title>Télécharger un document</H2Title>

    <div class="mt-4 md:mt-8 mb-8">
      <ul class="flex flex-wrap py-2 pr-2 md:py-4 md:pr-4 gap-2 md:gap-4">
        <SectionDownloadDocumentsListItem
          v-for="(document, index) in files"
          :key="index"
          :loading="index > 9 ? 'lazy' : ''"
          :author="document.author"
          :format="document.format"
          :thumbnail="document.thumbnail"
          :href="document.href"
          :title="document.title"
        />
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { ISourceFile } from '~~/types'
import SectionDownloadDocumentsListItem from '~~/components/document/SectionDownloadDocumentsListItem.vue'
import H2Title from '~~/components/global/H2Title.vue'
import { PropType } from 'vue'

export default defineNuxtComponent({
  name: 'SectionDownloadDocumentsList',

  components: {
    SectionDownloadDocumentsListItem,
    H2Title
  },

  props: {
    files: {
      type: Array as PropType<ISourceFile[]>,
      default: () => []
    }
  }
})
</script>
