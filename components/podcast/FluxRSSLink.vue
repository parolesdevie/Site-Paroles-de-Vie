<template>
  <a
    class="flex items-center"
    href="https://anchor.fm/s/d6d4ea28/podcast/rss"
    target="_blank"
    rel="noopener noreferrer"
  >
    <IconRssSquare class="h-6 w-6 text-orange-400" />
    <span class="ml-2 font-semibold hover:text-blue-500">
      Flux RSS du podcast
    </span>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
import IconRssSquare from '~/components/icons/IconRssSquare.vue'

export default Vue.extend({
  name: 'FluxRSSLink',

  components: { IconRssSquare },
})
</script>