<template>
  <li class="contents">
    <NuxtLink
      to="/"
      class="
        border-2 border-blue-500
        rounded-lg
        bg-gray-100
        flex
        p-4
        font-semibold
      "
    >
      {{ title }}
    </NuxtLink>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CardQR',

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