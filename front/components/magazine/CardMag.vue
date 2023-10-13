<template>
  <li class="contents">
    <a :href="`/mag/${volume}.pdf`" target="_blank" rel="noopener noreferrer">
      <!-- cover -->
      <picture>
        <source
          height="192"
          width="141"
          media="(min-width: 768px)"
          type="image/webp"
          :srcset="computedSrrset"
        />
        <source
          height="128"
          width="94"
          type="image/webp"
          :srcset="computedSrrsetMobile"
        />
        <img
          height="192"
          width="141"
          loading="lazy"
          class="h-32 md:h-48 hover:scale-110 duration-300"
          :srcset="computedSrrset"
          :src="computedSrc"
          :alt="`Theophilos Mag Volume${volume}`"
        />
      </picture>

      <!-- title -->
      <span class="mt-2 md:mt-4 block font-semibold text-center">
        Volume {{ volume }}
      </span>
    </a>
  </li>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'CardMag',

  props: {
    volume: {
      type: Number,
      default: 0
    }
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
    computedSrrsetMobile() {
      const { volume } = this
      return `/images/mag/thun-${volume}@mobile@1x.webp`
      // return `/images/mag/thun-${volume}@mobile@1x.webp, /images/mag/thun-${volume}@mobile@1.5x.webp 1.5x, /images/mag/thun-${volume}@mobile@2x.webp 2x, /images/mag/thun-${volume}@mobile@3x.webp 3x, /images/mag/thun-${volume}@mobile@4x.webp 4x`
    }
    // computedSrcMobile(): string {
    //   const { volume } = this
    //   return `/images/mag/thun-${volume}@mobile.webp 1x`
    // }
  }
})
</script>
