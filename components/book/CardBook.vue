<template>
  <li
    v-if="slug"
    class="
      flex flex-col
      w-40
      items-center
      p-2
      md:p-4
      hover:scale-125
      duration-300
    "
    :title="title"
  >
    <!-- image -->
    <img
      loading="lazy"
      class="h-24 md:h-32"
      :src="'/images/book/' + slug + '.webp'"
      alt="Le feu sacré"
    />

    <!-- title -->
    <span class="mt-2 w-full text-sm md:text-base font-semibold text-center">
      {{ title }}
    </span>
    <a
      v-if="amazon"
      class="
        mt-2
        md:mt-3
        border border-orange-600
        text-orange-600
        hover:bg-orange-600 hover:text-white
        rounded-md
        px-2
        md:py-1
        flex
        items-center
        font-semibold
      "
      :href="'https://amzn.to/' + amazon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconAmazon class="h-4 md:h-6" />
      <span class="ml-2">Acheter</span>
    </a>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import IconAmazon from '~/components/icons/IconAmazon.vue'

export default Vue.extend({
  name: 'CardBook',

  components: { IconAmazon },

  props: {
    title: {
      type: String,
      default: 'Titre',
    },
    slug: {
      type: String,
      default: null,
    },
    amazon: {
      type: String,
      default: undefined,
    },
  },
})
</script>
