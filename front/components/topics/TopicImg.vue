<template>
  <div class="shrink-0" :style="{ backgroundColor: color }">
    <picture>
      <source
        height="240"
        width="240"
        media="(min-width: 768px)"
        type="image/webp"
        :srcset="srcset.desktop"
      />
      <source
        height="160"
        width="160"
        type="image/webp"
        :srcset="srcset.mobile"
      />
      <img
        :fetchpriority="index === 0 ? 'high' : 'auto'"
        height="240"
        width="240"
        class="animate-fade"
        :srcset="srcset.desktop"
        :src="src.desktop['1x']"
        :alt="alt"
      />
    </picture>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'

export default defineNuxtComponent({
  name: 'TopicImg',

  props: {
    color: {
      type: String,
      default: '#D1D5DB'
    },
    src: {
      type: Object as PropType<{ mobile: unknown; desktop: { '1x': string } }>,
      default: undefined
    },
    srcset: {
      type: Object as PropType<{ mobile: string; desktop: string }>,
      default: undefined
    },
    alt: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: -1
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
    },
    computedSrrsetMobile(): string {
      const { src } = this
      return `/images/topic/${src}@mobile@1x.webp`
      // return `/images/topic/${src}@mobile@1x.webp, /images/topic/${src}@mobile@1.5x.webp 1.5x, /images/topic/${src}@mobile@2x.webp 2x, /images/topic/${src}@mobile@3x.webp 3x, /images/topic/${src}@mobile@4x.webp 4x`
    }
    // computedSrcMobile(): string {
    //   const { src } = this
    //   return `/images/topic/${src}@mobile.webp 1x`
    // }
  }
})
</script>
