<template>
  <div
    class="
      mt-2
      md:mt-4
      rounded-md
      border-black border
      dark:border-white
      w-full
      max-w-lg
      p-2
      flex
      items-center
    "
  >
    <IconSearch class="h-6 w-6 flex-shrink-0" />
    <input
      class="
        ml-2
        md:ml-4
        w-full
        outline-none
        md:text-lg
        bg-transparent
        dark:text-white
      "
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="onInput"
      :disabled="disabled"
    />
    <IconBackspace
      v-show="value"
      class="h-6 w-6 flex-shrink-0"
      @click.native="onClear"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconSearch from '~/components/icons/IconSearch.vue'
import IconBackspace from '~/components/icons/IconBackspace.vue'

export default Vue.extend({
  name: 'SearchInput',

  components: { IconSearch, IconBackspace },

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
    onClear() {
      this.$emit('input', '')
    },
  },
})
</script>
