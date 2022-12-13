<template>
  <section v-if="files.length">
    <!-- title -->
    <h2 class="flex items-center font-bold text-2xl md:text-3xl">
      Télécharger un document
    </h2>

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
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import { ISourceFile } from '~/types'
import SectionDownloadDocumentsListItem from '~/components/document/SectionDownloadDocumentsListItem.vue'

export default Vue.extend({
  name: 'SectionDownloadDocumentsList',

  components: {
    SectionDownloadDocumentsListItem,
  },

  props: {
    files: {
      type: Array as PropType<ISourceFile[]>,
      default: () => [],
    },
  },
})
</script>
