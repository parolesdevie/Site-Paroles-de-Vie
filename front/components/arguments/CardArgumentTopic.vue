<script setup lang="ts">
import { PropType } from 'vue'
import { IThumbnail } from '~/types'

const props = defineProps({
  cover: {
    type: Object as PropType<IThumbnail>,
    default: {
      srcset: undefined,
      src: undefined,
      alt: 'undefined alt'
    }
  },
  title: {
    type: String,
    default: 'undefined title'
  },
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <li
    tabindex="0"
    height="180"
    width="320"
    :class="`
    shrink-0
    relative
    rounded-lg
    overflow-hidden
    shadow
    flex
    flex-col
    pb-16
    md:pb-20
    border-2 
         ${
           active
             ? 'bg-blue-200 dark:bg-blue-900 border-blue-700'
             : 'bg-gray-100 dark:bg-gray-800 border-gray-700'
         }
          `"
  >
    <picture>
      <source
        height="180"
        width="320"
        media="(min-width: 768px)"
        type="image/webp"
        :srcset="cover.srcset.desktop"
      />
      <source
        height="90"
        width="160"
        type="image/webp"
        :srcset="cover.srcset.mobile"
      />
      <img
        height="180"
        width="320"
        v-if="cover.src"
        loading="lazy"
        class="rounded-t-lg object-cover bg-gray-200"
        :src="cover.src.desktop['1x']"
        :alt="alt"
      />
    </picture>
    <div
      class="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-50 dark:bg-opacity-20 dark:hover:bg-opacity-60 duration-300 flex items-end"
    >
      <span
        class="w-full h-16 md:h-20 p-2 flex items-center justify-center text-center text-white font-semibold text-shadow text-base md:text-lg lg:text-xl uppercase"
      >
        {{ title }}
      </span>
    </div>
  </li>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'CardArgumentTopic'
})
</script>