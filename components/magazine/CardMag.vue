<template>
  <li class="contents">
    <a :href="`/mag/${volume}.pdf`" target="_blank" rel="noopener noreferrer">
      <!-- cover -->
      <img
        class="h-32 md:h-48 hover:scale-110 duration-300"
        :src="`/images/mag/thun-${volume}.webp`"
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
})
</script>
