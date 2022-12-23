<template>
  <iframe
    :style="{ backgroundColor: '#282828' }"
    class="h-38 w-full rounded-xl"
    :src="src"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'IframSpotify',

  props: {
    episode: {
      type: String,
      default: '',
    },
    podcast: {
      type: String,
      default: '',
    },
  },

  computed: {
    src(): string {
      const { podcast, episode } = this
      return `https://open.spotify.com/embed/${
        podcast ? `show/${podcast}` : `episode/${episode}`
      }?utm_source=generator&theme=0`
    },
  },
})
</script>