<template>
  <section class="container mx-auto mt-4 md:mt-10">
    <div
      class="relative flex flex-col md:flex-row md:items-center lg:items-start"
    >
      <!-- thumbnail -->
      <div
        class="absolute top-0 right-0 md:relative h-10 w-10 md:h-40 md:w-40 md:m-4 lg:h-56 lg:w-56 lg:m-0 xl:h-60 xl:w-60 shrink-0 rounded-full lg:rounded-xl overflow-hidden"
      >
        <TopicImg
          class="h-full w-full"
          v-if="cover"
          :src="cover.src"
          :srcset="cover.srcset"
          :color="cover.color"
          :alt="cover.alt"
        />
      </div>

      <div class="md:ml-4 md:self-start md:max-w-xs lg:max-w-none">
        <!-- title -->
        <h1
          class="font-bold text-3xl leading-10 md:text-4xl pr-9 md:pr-0 truncate overflow-y-visible md:overflow-visible"
        >
          <slot name="title"></slot>
        </h1>

        <!-- intro text -->
        <div
          class="mt-4 md:mt-8 font-semibold text-base text-gray-800 dark:text-gray-300 max-w-2xl"
        >
          <p>
            <slot name="body"></slot>
          </p>
          <!-- download link -->
          <a
            v-if="frontFile"
            class="mt-4 md:hidden bg-gray-300 dark:bg-gray-700 dark:text-white rounded-md pl-2 pr-4 py-1 inline-flex"
            :href="frontFile.href || '/pdf/' + frontFile.slug + '.pdf'"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger le PDF
          </a>
        </div>
      </div>

      <!-- front file -->
      <div
        v-if="$slots.frontFile"
        class="hidden md:inline-flex ml-auto shrink-0"
      >
        <slot name="frontFile" />
      </div>

      <a
        class="hidden md:inline absolute right-0 -top-36 lg:-top-52 hover:scale-110 duration-300"
        v-else-if="frontFile?.href"
        :href="frontFile.href"
        target="_blank"
      >
        <picture>
          <source
            height="305"
            width="224"
            media="(min-width: 1440px)"
            type="image/webp"
            :srcset="frontFile.thumbnail.srcset.desktop"
          />
          <source
            height="109.28"
            width="80"
            type="image/webp"
            :srcset="frontFile.thumbnail.srcset.mobile"
          />
          <img
            height="305"
            width="224"
            :fetchpriority="index === 0 ? 'high' : 'auto'"
            class="animate-fade"
            :alt="alt"
            :src="frontFile.thumbnail.src.desktop['1x']"
          />
        </picture>
      </a>

      <!-- <ul class="hidden md:inline ml-auto shrink-0" v-else-if="frontFile">
        <CardDocument
          onlyImage
          :size="0.75"
          :author="frontFile.author"
          :href="frontFile.href"
          :slug="frontFile.slug"
          :thumbnail="frontFile.thumbnail"
          :title="frontFile.title"
        />
      </ul> -->
    </div>
  </section>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { IPdf, ISourceFile, ITopicCover } from '~~/types'
import CardDocument from '../document/CardDocument.vue'
import TopicImg from './TopicImg.vue'

export default defineNuxtComponent({
  name: 'SectionIntroTopics',

  components: { CardDocument, TopicImg },

  props: {
    cover: {
      type: Object as PropType<ITopicCover>,
      default: { color: undefined, src: undefined }
    },
    frontFile: {
      type: Object as PropType<IPdf | ISourceFile>,
      default: undefined
    }
  }
})
</script>