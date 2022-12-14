<template>
  <section class="container mx-auto mt-4 md:mt-10">
    <div class="relative flex flex-col md:flex-row">
      <!-- thumbnail -->
      <img
        class="
          absolute
          md:relative
          top-0
          right-0
          h-9
          w-h-9
          md:h-56 md:w-56
          rounded-full
          md:rounded-xl
          flex-shrink-0
        "
        :src="'/images/topic/' + topicSlug + '.webp'"
        alt=""
      />

      <div class="md:ml-4">
        <!-- title -->
        <h1
          class="
            font-bold
            text-3xl
            md:text-4xl
            pr-9
            truncate
            overflow-y-visible
            md:overflow-visible
          "
        >
          <slot name="title"></slot>
        </h1>

        <!-- intro text -->
        <p class="mt-4 md:mt-8 font-semibold text-base text-gray-800 max-w-2xl">
          <slot name="body"></slot>
          <!-- download link -->
          <a
            v-if="frontFile"
            class="
              mt-4
              md:hidden
              bg-gray-300
              rounded-md
              pl-2
              pr-4
              py-1
              inline-flex
            "
            :href="'/pdf/' + frontFile.slug + '.pdf'"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger le PDF
          </a>
        </p>
      </div>

      <!-- front file -->
      <ul class="hidden md:inline ml-auto" v-if="frontFile">
        <CardDocument
          onlyImage
          :size="0.75"
          :author="frontFile.author"
          :slug="frontFile.slug"
          :title="frontFile.title"
        />
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import { IPdf, ISourceFile } from '~/types'
import CardDocument from '../document/CardDocument.vue'

export default Vue.extend({
  props: {
    topicSlug: {
      type: String,
      default: '',
    },
    frontFile: {
      type: Object as PropType<IPdf>,
      default: undefined,
    },
  },
  components: { CardDocument },
})
</script>