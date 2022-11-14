<template>
  <li class="contents" :data-slug="slug + '-par-' + author" :data-tag="author">
    <a
      class="m-2 md:m-4 w-40 md:w-56 p-2 rounded-lg flex flex-col"
      :href="'/pdf/' + slug + '.pdf'"
      :title="title"
      target="_blank"
      rel="noopener noreferrer"
    >
      <!-- image -->
      <img
        class="w-40 md:w-56 rounded-xl hover:scale-110 duration-300"
        :src="'/images/pdf/' + slug + '.webp'"
        alt="aperçu"
      />

      <!-- title footer -->
      <div class="mt-4 flex items-center">
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
import Vue from 'vue'
import IconDownload from '~/components/icons/IconDownload.vue'

export default Vue.extend({
  name: 'Tag',

  components: { IconDownload },

  props: {
    author: {
      type: String,
      default: '',
    },
    slug: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
})
</script>
