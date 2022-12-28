<template>
  <li class="contents">
    <a
      v-if="href"
      class="flex flex-col md:flex-row"
      :href="href"
      target="_blank"
      rel="noopener noreferrer"
      title=""
    >
      <img
        v-if="image"
        loading="lazy"
        class="w-full md:w-auto md:h-20 shrink-0 rounded-lg"
        :src="image"
        alt=""
      />
      <div
        :class="`${image ? 'mt-2 md:mt-0 md:ml-2' : ''}
          border-2 border-blue-500
          rounded-lg
          bg-gray-100
          dark:bg-gray-900
          flex-auto
          flex
          p-4
          `"
      >
        <div class="text-lg font-semibold">
          <p>{{ title }}</p>
          <p v-if="author" class="mt-4 text-blue-500">{{ author }}</p>
        </div>
        <IconEmcitvLogo
          v-if="plateform === SearchPlateformEnum.EMCITV"
          class="mt-4 md:mt-2 ml-auto h-6 md:h-4 text-blue-500 shrink-0"
        />
        <IconTopChretienLogo
          v-else-if="plateform === SearchPlateformEnum.TOP_CHRETIEN"
          class="mt-4 md:mt-2 ml-auto h-6 md:h-4 text-blue-500 shrink-0"
        />
        <IconFamilleChretienneLogo
          v-else-if="plateform === SearchPlateformEnum.FAMILLE_CHRETIENNE"
          class="mt-4 md:mt-2 ml-auto h-6 md:h-4 text-blue-500 shrink-0"
        />
        <IconAleteiaLogo
          v-else-if="plateform === SearchPlateformEnum.ALETEIA"
          class="mt-4 md:mt-2 ml-auto h-6 md:h-4 text-blue-500 shrink-0"
        />
        <img
          v-else-if="plateform === SearchPlateformEnum.JCSR"
          loading="lazy"
          class="mt-4 md:mt-2 ml-auto h-6 md:h-4 shrink-0"
          src="https://i0.wp.com/jcsr.church/wp-content/uploads/2019/09/JC2_edited3.jpg?fit=74%2C80&ssl=1"
          alt=""
        />
      </div>
    </a>
    <span
      v-else
      class="
        border-2 border-blue-500
        rounded-lg
        bg-gray-100
        dark:bg-gray-900
        flex-auto flex
        p-4
        line-through
      "
    >
      <div class="text-lg font-semibold">
        <p>{{ title }}</p>
        <p v-if="author" class="mt-4 text-blue-500">{{ author }}</p>
      </div>
    </span>
  </li>
</template>

<script lang="ts">
import IconChevronDown from '~~/components/icons/IconChevronDown.vue'
import IconChevronUp from '~~/components/icons/IconChevronUp.vue'
import IconEmcitvLogo from '~~/components/icons/IconEmcitvLogo.vue'
import IconTopChretienLogo from '~~/components/icons/IconTopChretienLogo.vue'
import IconFamilleChretienneLogo from '~~/components/icons/IconFamilleChretienneLogo.vue'
import { SearchPlateformEnum } from '~~/types'
import IconAleteiaLogo from '~~/components/icons/IconAleteiaLogo.vue'
import { PropType } from 'vue'

export default defineNuxtComponent({
  name: 'CardSearchResult',

  components: {
    IconEmcitvLogo,
    IconTopChretienLogo,
    IconFamilleChretienneLogo,
    IconChevronDown,
    IconChevronUp,
    IconAleteiaLogo
  },

  props: {
    href: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    plateform: {
      type: String as PropType<SearchPlateformEnum>,
      default: SearchPlateformEnum.UNKNOW
    }
  },

  data() {
    return {
      SearchPlateformEnum
      //   open: false,
    }
  },

  computed: {
    // computedTitle(): String {
    //   return this.plateform === QuestionPlateformEnum.UNKNOW
    //     ? this.title
    //     : `Lire <<${this.title}>> sur le site ${this.plateform}`
    // },
  }
})
</script>