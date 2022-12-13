<template>
  <a
    :href="href"
    class="
      bg-red-500
      text-white
      rounded-md
      pl-2
      pr-4
      py-1
      inline-flex
      items-center
    "
    target="_blank"
    rel="noopener noreferrer"
  >
    <IconYouTube class="h-7 w-7 md:h-9 md:w-9 mr-2" />
    <div class="font-semibold">
      <slot></slot>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
import IconYouTube from '~/components/icons/IconYouTube.vue'

export default Vue.extend({
  name: 'ButtonYoutube',

  components: {
    IconYouTube,
  },

  props: {
    href: {
      type: String,
      default: 'https://www.youtube.com/',
    },
  },
})
</script>
