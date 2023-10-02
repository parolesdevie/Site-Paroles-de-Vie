<template>
  <div class="shrink-0" :style="{ backgroundColor: color }">
    <img
      height="240"
      width="240"
      class="animate-fade"
      :srcset="computedSrrset"
      :src="computedSrc"
      :alt="alt"
    />
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'TopicImg',

  props: {
    color: {
      type: String,
      default: '#D1D5DB'
    },
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },

  computed: {
    computedSrrset(): string {
      const { src } = this
      return `/images/topic/${src}@1x.webp, /images/topic/${src}@1.5x.webp 1.5x, /images/topic/${src}@2x.webp 2x, /images/topic/${src}@3x.webp 3x, /images/topic/${src}@4x.webp 4x`
    },
    computedSrc(): string {
      const { src } = this
      return `/images/topic/${src}.webp 1x`
    }
  }
})
</script>
