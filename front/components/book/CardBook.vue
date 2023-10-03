<script setup lang="ts">
import { PropType } from 'vue'

// props
const props = defineProps({
  title: {
    type: String,
    default: 'Titre'
  },
  src: {
    type: String,
    default: 'slug'
  },
  alt: {
    type: String,
    default: 'alt'
  },
  amazon: {
    type: String as PropType<String | undefined>,
    default: undefined
  }
})

// computed
const computedSrrset = computed(
  () =>
    `/images/book/${props.src}@1x.webp, /images/book/${props.src}@1.5x.webp 1.5x, /images/book/${props.src}@2x.webp 2x, /images/book/${props.src}@3x.webp 3x, /images/book/${props.src}@4x.webp 4x`
)
const computedSrc = computed(() => `/images/book/${props.src}.webp 1x`)
</script>

<template>
  <li
    v-if="src"
    class="shrink-0 flex flex-col w-40 items-center p-2 md:p-4"
    :title="title"
  >
    <!-- image -->
    <picture>
      <source
        height="128"
        width="94"
        media="(min-width: 768px)"
        type="image/webp"
        :srcset="computedSrrset"
      />
      <source
        height="96"
        width="70.5"
        type="image/webp"
        :srcset="computedSrrset"
      />
      <img
        height="128"
        width="94"
        loading="lazy"
        class="h-24 md:h-32 hover:scale-125 duration-300"
        :srcset="computedSrrset"
        :src="computedSrc"
        :alt="alt"
      />
    </picture>

    <!-- amazon -->
    <a
      v-if="amazon"
      class="mt-4 md:mt-6 border border-orange-800 text-orange-800 hover:bg-orange-800 hover:text-white dark:border-orange-600 dark:text-orange-600 dark:hover:bg-orange-600 dark:hover:text-white rounded-md px-2 md:py-1 flex items-center font-semibold"
      :href="'https://amzn.to/' + amazon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconsIconAmazon class="h-4 md:h-6" />
      <span class="ml-2">Acheter</span>
    </a>

    <!-- title -->
    <span
      class="mt-2 text-sm md:text-base font-semibold text-center h-32 overflow-y-hidden"
    >
      {{ title }}
    </span>
  </li>
</template>
