<template>
  <li
    v-if="slug"
    class="flex flex-col w-40 items-center p-2 md:p-4 hover:scale-125 duration-300"
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
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CardBook',

  props: {
    title: {
      type: String,
      default: 'Titre',
    },
    slug: {
      type: String,
      default: null,
    },
  },
})
</script>
