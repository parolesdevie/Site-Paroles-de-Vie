<template>
  <li class="contents">
    <a
      class="flex flex-col md:flex-row"
      :href="href"
      target="_blank"
      rel="noopener noreferrer"
      title=""
    >
      <img
        v-if="image"
        class="w-full md:w-auto md:h-20 shrink-0 rounded-lg"
        :src="image"
        alt=""
      />
      <div
        :class="`${image ? 'mt-2 md:mt-0 md:ml-2' : ''}
          border-2 border-blue-500
          rounded-lg
          bg-gray-100
          flex-auto
          flex
          p-4
          `"
      >
        <div class="text-lg font-semibold">
          <p>{{ title }}</p>
          <p class="mt-4 text-blue-500">{{ author }}</p>
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
          src="https://i0.wp.com/jcsr.church/wp-content/uploads/2019/09/JC2_edited3.jpg?fit=74%2C80&ssl=1"
          alt=""
          class="mt-4 md:mt-2 ml-auto h-6 md:h-4 shrink-0"
        />
      </div>
    </a>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import IconChevronDown from '~/components/icons/IconChevronDown.vue'
import IconChevronUp from '~/components/icons/IconChevronUp.vue'
import IconEmcitvLogo from '~/components/icons/IconEmcitvLogo.vue'
import IconTopChretienLogo from '~/components/icons/IconTopChretienLogo.vue'
import IconFamilleChretienneLogo from '~/components/icons/IconFamilleChretienneLogo.vue'
import { SearchPlateformEnum } from '~/types'
import IconAleteiaLogo from '../icons/IconAleteiaLogo.vue'

export default Vue.extend({
  name: 'CardSearchResult',

  components: {
    IconEmcitvLogo,
    IconTopChretienLogo,
    IconFamilleChretienneLogo,
    IconChevronDown,
    IconChevronUp,
    IconAleteiaLogo,
  },

  props: {
    href: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    plateform: {
      type: String as PropType<SearchPlateformEnum>,
      default: SearchPlateformEnum.UNKNOW,
    },
  },

  data() {
    return {
      SearchPlateformEnum,
      //   open: false,
    }
  },

  computed: {
    // computedTitle(): String {
    //   return this.plateform === QuestionPlateformEnum.UNKNOW
    //     ? this.title
    //     : `Lire <<${this.title}>> sur le site ${this.plateform}`
    // },
  },
})
</script>