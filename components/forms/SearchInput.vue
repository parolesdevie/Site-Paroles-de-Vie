<template>
  <div
    class="
      mt-2
      md:mt-4
      rounded-md
      border-black border
      w-full
      max-w-lg
      p-2
      flex
      items-center
    "
  >
    <IconSearch class="h-6 w-6 flex-shrink-0" />
    <input
      class="ml-2 md:ml-4 w-full outline-none md:text-lg"
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="onInput"
      :disabled="disabled"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconSearch from '~/components/icons/IconSearch.vue'

export default Vue.extend({
  name: 'SearchInput',

  components: { IconSearch },

  props: {
    placeholder: {
      type: String,
      default: 'Recherche',
    },
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onInput(e: Event) {
      this.$emit('input', (e.target as HTMLInputElement).value)
    },
  },
})
</script>
