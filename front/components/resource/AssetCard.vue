<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="
      w-40
      flex flex-col
      bg-white bg-opacity-0
      hover:bg-opacity-40
      rounded-lg
      p-2
    "
  >
    <span class="absolute bg-slate-400 text-white dark:bg-slate-700 px-2">
      #{{ index + 1 }}
    </span>
    <!-- thumbnail -->
    <img
      loading="lazy"
      class="dark:hidden h-full object-contain"
      :src="thumbnail"
      alt=""
    />
    <img
      loading="lazy"
      class="hidden dark:block h-full object-contain"
      :src="thumbnail"
      alt=""
    />

    <!-- title -->
    <div class="text-center">
      <span>{{ title }}</span>
    </div>
  </a>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'AssetCard',

  props: {
    index: {
      type: Number,
      default: 0
    },
    href: {
      type: String,
      default: ''
    },
    thumbnail: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
})
</script>