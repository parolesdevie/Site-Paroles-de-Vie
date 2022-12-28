<template>
  <li class="contents">
    <a
      :class="`shrink-0 m-2 md:m-4 w-40 ${scaledSize} p-2 flex flex-col`"
      :href="'/pdf/' + slug + '.pdf'"
      :title="title"
      target="_blank"
      rel="noopener noreferrer"
    >
      <!-- image -->
      <img
        :loading="loading"
        :class="`w-40 ${scaledSize} rounded-xl hover:scale-110 duration-300`"
        :src="'/images/pdf/' + slug + '.webp'"
        alt="aperçu"
      />

      <!-- title footer -->
      <div v-if="!onlyImage" class="mt-4 flex items-center">
        <span
          class="mr-2 md:mr-4 pr-2 text-sm md:text-base font-semibold truncate"
        >
          {{ title }}
        </span>
        <IconDownload
          class="ml-auto h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-gray-400"
        />
      </div>
    </a>
  </li>
</template>

<script lang="ts">
import IconDownload from '~~/components/icons/IconDownload.vue'

export default defineNuxtComponent({
  name: 'CardDocument',

  components: { IconDownload },

  props: {
    size: {
      type: Number,
      default: 1
    },
    slug: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    loading: {
      type: String,
      default: ''
    },
    onlyImage: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    scaledSize(): string {
      const scaledSize = this.size * 56
      return ` md:w-${scaledSize}`
    }
  }
})
</script>
