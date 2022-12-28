<template>
  <li class="contents">
    <a
      class="shrink-0 w-20 md:w-28 p-2 md:p-4 flex flex-col"
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
            backgroundColor: formatLabelBackColor
          }"
          class="
            absolute
            top-2
            right-2
            px-2
            text-xs
            md:text-sm
            text-white
            font-semibold
          "
        >
          {{ format }}
        </span>

        <!-- image -->
        <img
          :loading="loading"
          class="w-20 md:w-28 rounded-xl"
          :src="thumbnail + '.webp'"
          alt="aperçu"
        />

        <!-- download -->
        <IconDownload
          :style="{
            color: formatLabelBackColor
          }"
          class="absolute -right-3 -bottom-1 h-3 w-3 md:h-4 md:w-4"
        />
      </div>

      <!-- title footer -->
      <div class="mt-4 flex items-center">
        <span
          class="
            text-xs
            md:text-sm
            font-semibold
            max-h-8
            md:max-h-10
            overflow-hidden
            break-all
          "
        >
          {{ title }}
        </span>
      </div>
    </a>
  </li>
</template>

<script lang="ts">
import { PropType } from 'vue'
import IconDownload from '~~/components/icons/IconDownload.vue'
import { AuthorEnum, FormatEnum } from '~~/types'

export default defineNuxtComponent({
  name: 'Tag',

  components: { IconDownload },

  props: {
    author: {
      type: String as PropType<AuthorEnum>,
      default: AuthorEnum.UNKNOW
    },
    format: {
      type: String as PropType<FormatEnum>,
      default: FormatEnum.UNKNOW
    },
    thumbnail: {
      type: String,
      default: '/images/pdf/default'
    },
    href: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Sans Titre'
    },
    loading: {
      type: String,
      default: ''
    }
  },

  data() {
    return { FormatEnum }
  },

  computed: {
    formatLabelBackColor(): string {
      switch (this.format) {
        case FormatEnum.EPUB:
          return '#3498db'
        case FormatEnum.PDF:
          return '#e74c3c'
      }
      return '#9b59b6'
    }
  }
})
</script>
