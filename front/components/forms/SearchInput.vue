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
      :value="modelValue"
      @input="onInput"
      :disabled="disabled"
    />
    <IconBackspace
      v-show="modelValue"
      class="h-6 w-6 flex-shrink-0"
      @click="onClear"
    />
  </div>
</template>

<script lang="ts">
import IconSearch from '~~/components/icons/IconSearch.vue'
import IconBackspace from '~~/components/icons/IconBackspace.vue'

export default defineNuxtComponent({
  name: 'SearchInput',

  components: { IconSearch, IconBackspace },

  props: {
    placeholder: {
      type: String,
      default: 'Recherche'
    },
    modelValue: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  emits: ['update:modelValue'],

  methods: {
    onInput(e: Event) {
      this.$emit('update:modelValue', (e.target as HTMLInputElement).value)
    },
    onClear() {
      this.$emit('update:modelValue', '')
    }
  }
})
</script>
