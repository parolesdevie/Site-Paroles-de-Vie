<template>
  <section class="container mx-auto mt-4 md:mt-10">
    <div class="relative flex flex-col md:flex-row md:justify-start">
      <!-- thumbnail -->
      <div
        class="
          h-40
          w-40
          md:h-56 md:w-56
          lg:h-60 lg:w-60
          shrink-0
          rounded-xl
          overflow-hidden
        "
      >
        <TopicImg
          class="h-full w-full"
          v-if="cover"
          :src="cover.src"
          :color="cover.color"
          alt="topic"
        />
      </div>

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
        <div
          class="mt-4 md:mt-8 font-semibold text-base text-gray-800 max-w-2xl"
        >
          <p>
            <slot name="body"></slot>
          </p>
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
        </div>
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
import { IPdf } from '~/types'
import CardDocument from '../document/CardDocument.vue'
import TopicImg from './TopicImg.vue'

export default Vue.extend({
  name: 'SectionIntroTopics',

  components: { CardDocument, TopicImg },

  props: {
    cover: {
      type: Object as PropType<{ color: string; src: string }>,
      default: { color: undefined, src: undefined },
    },
    frontFile: {
      type: Object as PropType<IPdf>,
      default: undefined,
    },
  },
})
</script>