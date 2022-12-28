<template>
  <li
    :class="`select-none cursor-pointer text-xs md:text-base inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full dark:text-white
          ${
            active
              ? 'bg-blue-200 dark:bg-blue-900 text-blue-700'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700'
          }`"
  >
    <slot />
  </li>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'Tag',

  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
})
</script>