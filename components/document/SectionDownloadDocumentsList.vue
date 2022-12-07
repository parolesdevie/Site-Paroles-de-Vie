<template>
  <section>
    <!-- title -->
    <h2 class="flex items-center font-bold text-2xl md:text-3xl">
      Télécharger un document
    </h2>

    <div class="mt-4 md:mt-8 mb-8">
      <ul class="-m-4 p-2 md:p-4 pr-3 md:pr-5 flex flex-wrap" id="pdf-list">
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
