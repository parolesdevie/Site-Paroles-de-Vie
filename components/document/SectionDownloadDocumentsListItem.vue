<template>
  <li class="contents">
    <a
      class="m-2 md:m-4 w-40 md:w-56 p-2 rounded-lg flex flex-col"
      :href="href"
      :title="title + ' de ' + author"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="relative hover:scale-110 duration-300">
        <!-- format label -->
        <span
          v-if="format !== FormatEnum.UNKNOW"
          :style="{
            backgroundColor: formatLabelBackColor,
          }"
          class="
            absolute
            top-2
            right-2
            px-2
            text-sm
            md:text-base
            text-white
            font-semibold
          "
        >
          {{ format }}
        </span>

        <!-- image -->
        <img
          :loading="loading"
          class="w-40 md:w-56 rounded-xl"
          :src="thumbnail + '.webp'"
          alt="aperçu"
        />
      </div>

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
import { PropType } from 'vue/types/v3-component-props'
import IconDownload from '~/components/icons/IconDownload.vue'
import { AuthorEnum, FormatEnum } from '~/types'

export default Vue.extend({
  name: 'Tag',

  components: { IconDownload },

  props: {
    author: {
      type: String as PropType<AuthorEnum>,
      default: AuthorEnum.UNKNOW,
    },
    format: {
      type: String as PropType<FormatEnum>,
      default: FormatEnum.UNKNOW,
    },
    thumbnail: {
      type: String,
      default: '/images/pdf/default',
    },
    href: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'Sans Titre',
    },
    loading: {
      type: String,
      default: '',
    },
  },

  data() {
    return { FormatEnum }
  },

  computed: {
    formatLabelBackColor(): String {
      switch (this.format) {
        case FormatEnum.EPUB:
          return '#3498db'
        case FormatEnum.PDF:
          return '#e74c3c'
      }
      return '#9b59b6'
    },
  },
})
</script>
