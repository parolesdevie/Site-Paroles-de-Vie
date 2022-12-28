<template>
  <div
    :class="`
      absolute
      z-10
      ${inverse ? 'left-' + right : 'right-' + right}
      top-${top}
      transform
      ${inverse ? '-translate-x-full' : 'translate-x-full'} 
      ${top && '-translate-y-' + right}`"
  >
    <IconHandDrownArrowTopLeftCorner
      :class="`h-10 ${inverse ? '-scale-x-100' : ''}`"
    />
    <span
      :class="`
        absolute
        ${inverse ? 'left-0' : 'right-0'}
        top-full
        pt-1
        transform
        ${inverse ? '-translate-x-1/2' : 'translate-x-1/2'}
        text-xs
        font-manuscrit
      `"
    >
      {{ title }}
    </span>
  </div>
</template>

<script lang="ts">

import IconHandDrownArrowTopLeftCorner from '~~/components/icons/IconHandDrownArrowTopLeftCorner.vue'

export default defineNuxtComponent({
  name: 'HandDrownArrowComment',

  components: { IconHandDrownArrowTopLeftCorner },

  props: {
    title: {
      type: String,
      default: '',
    },
    top: {
      type: [String, Number],
      default: 'full',
    },
    right: {
      type: [String, Number],
      default: '3',
    },
    inverse: {
      type: Boolean,
      default: false,
    },
  },
})
</script>