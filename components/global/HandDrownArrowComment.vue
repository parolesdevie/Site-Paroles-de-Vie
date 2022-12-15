<template>
  <div
    :class="`
      absolute
      z-10
      right-${right}
      top-${top}
      transform
      translate-x-full ${top && '-translate-y-5'}
      flex flex-col
      items-end
    `"
  >
    <IconHandDrownArrowTopLeftCorner class="h-10" />
    <span
      class="
        absolute
        right-0
        top-full
        pt-1
        transform
        translate-x-1/2
        text-xs
        font-['Comic_Sans_MS']
      "
    >
      {{ title }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconHandDrownArrowTopLeftCorner from '../icons/IconHandDrownArrowTopLeftCorner.vue'

export default Vue.extend({
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
      default: '5',
    },
  },
})
</script>