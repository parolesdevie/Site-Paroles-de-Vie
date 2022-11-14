<template>
  <li
    :class="`select-none cursor-pointer m-1 md:m-2 text-xs md:text-base inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full
      ${active ? 'bg-blue-200 text-blue-700' : 'bg-gray-100 text-gray-700'}`"
    @click="onClick"
  >
    <span>
      {{ author }}
    </span>
    <span class="ml-2 text-xs">({{ pdfCount }})</span>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Tag',

  props: {
    slug: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    pdfCount: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onClick() {
      this.$emit('click', this.slug)
    },
  },
})
</script>
