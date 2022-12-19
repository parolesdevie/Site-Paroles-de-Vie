<template>
  <li class="contents">
    <a :href="`/mag/${volume}.pdf`" target="_blank" rel="noopener noreferrer">
      <!-- cover -->
      <img
        loading="lazy"
        class="h-32 md:h-48 hover:scale-110 duration-300"
        :srcset="computedSrrset"
        :src="computedSrc"
        :alt="`Theophilos Mag Volume${volume}`"
      />

      <!-- title -->
      <span class="mt-2 md:mt-4 block font-semibold text-center">
        Volume {{ volume }}
      </span>
    </a>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CardMag',

  props: {
    volume: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    computedSrrset() {
      const { volume } = this
      return `/images/mag/thun-${volume}@1x.webp, /images/mag/thun-${volume}@1.5x.webp 1.5x, /images/mag/thun-${volume}@2x.webp 2x, /images/mag/thun-${volume}@3x.webp 3x, /images/mag/thun-${volume}@4x.webp 4x`
    },
    computedSrc() {
      const { volume } = this
      return `/images/mag/thun-${volume}.webp 1x`
    },
  },
})
</script>
