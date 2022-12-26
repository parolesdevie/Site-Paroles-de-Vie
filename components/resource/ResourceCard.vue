<template>
  <div
    class="
      flex flex-col
      bg-white bg-opacity-0
      hover:bg-opacity-40
      rounded-lg
      p-2
    "
  >
    <!-- thumbnail -->
    <div class="h-40 w-40 flex items-center justify-center">
      <img
        loading="lazy"
        class="dark:hidden h-full"
        :srcset="`/resource/${slug}/thumbnail@1x.webp, /resource/${slug}/thumbnail@1.5x.webp 1.5x, /resource/${slug}/thumbnail@2x.webp 2x, /resource/${slug}/thumbnail@3x.webp 3x, /resource/${slug}/thumbnail@4x.webp 4x`"
        :src="`/resource/${slug}/thumbnail.webp 1x`"
        alt=""
      />
      <img
        loading="lazy"
        class="hidden dark:block h-full"
        :srcset="`/resource/${slug}/dark-thumbnail@1x.webp, /resource/${slug}/dark-thumbnail@1.5x.webp 1.5x, /resource/${slug}/dark-thumbnail@2x.webp 2x, /resource/${slug}/dark-thumbnail@3x.webp 3x, /resource/${slug}/dark-thumbnail@4x.webp 4x`"
        :src="`/resource/${slug}/dark-thumbnail.webp 1x`"
        alt=""
      />
    </div>

    <!-- title -->
    <div class="text-center">
      <span class="">{{ title }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ResourceCard',

  props: {
    slug: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
})
</script>