<template>
  <li class="contents">
    <a
      v-if="href"
      :href="href"
      class="
        border-2 border-blue-500
        rounded-lg
        bg-gray-100
        dark:bg-gray-900
        flex
        p-4
        font-semibold
      "
      target="_blank"
      rel="noopener noreferrer"
      :title="computedTitle"
    >
      <span>
        {{ title }}
      </span>
      <IconGotQuestionsLogo
        v-if="plateform === QuestionPlateformEnum.GOT_QUESTIONS"
        class="ml-auto h-6 text-blue-500 shrink-0"
      />
    </a>
    <div
      v-else
      class="
        border-2 border-blue-500
        rounded-lg
        bg-gray-100
        dark:bg-gray-900
        flex flex-col
        items-start
        p-4
        relative
      "
      @click.self="open = !open"
    >
      <div
        class="absolute top-0 right-0 p-3 cursor-pointer"
        @click="open = !open"
      >
        <IconChevronDown v-if="!open" class="h-6" />
        <IconChevronUp v-else class="h-6" />
      </div>

      <strong>
        {{ title }}
      </strong>

      <!-- <NuxtLink v-if="slug" to="/" class="font-semibold"> </NuxtLink> -->
      <div v-show="open">
        <slot />
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { QuestionPlateformEnum } from '~~/types'
import IconChevronDown from '~~/components/icons/IconChevronDown.vue'
import IconChevronUp from '~~/components/icons/IconChevronUp.vue'
import IconGotQuestionsLogo from '~~/components/icons/IconGotQuestionsLogo.vue'
import { PropType } from 'vue'

export default defineNuxtComponent({
  name: 'CardQR',

  components: { IconGotQuestionsLogo, IconChevronDown, IconChevronUp },

  props: {
    slug: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    plateform: {
      type: [Number, String] as PropType<QuestionPlateformEnum>,
      default: QuestionPlateformEnum.UNKNOW
    }
  },

  data() {
    return {
      open: false,
      QuestionPlateformEnum
    }
  },

  computed: {
    computedTitle(): string {
      return this.plateform === QuestionPlateformEnum.UNKNOW
        ? this.title
        : `Lire <<${this.title}>> sur le site ${this.plateform}`
    }
  }
})
</script>