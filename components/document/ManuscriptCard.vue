<template>
  <div class="inline-flex flex-col items-end select-none">
    <div class="relative">
      <img
        tabindex="0"
        class="mb-2 md:mb-3 h-40 w-40 md:h-64 md:w-64 bg-gray-300 rounded-xl"
        :src="'/images/manuscript/thumbnails/' + image + '.webp'"
        alt=""
      />
      <div
        class="
          absolute
          inset-x-0
          bottom-10
          text-center
          uppercase
          font-black
          text-lg
          tracking-wider
          py-2
          bg-black bg-opacity-60
          text-white
        "
      >
        {{ title }}
      </div>
    </div>
    <div class="flex gap-2 md:gap-3">
      <a
        v-for="(site, index) in sites"
        :key="index"
        class="
          h-10
          w-10
          md:h-12 md:w-12
          bg-gray-300
          rounded-xl
          inline-flex
          items-center
          justify-center
        "
        :href="site.href"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="h-8 w-8"
          v-if="site.name === ManuscriptsPlateformEnum.CODEX_SINATICUS_ORG"
          src="/images/site/logo-codexsinaiticus.webp"
          :alt="site.name"
          :title="site.name"
        />
        <img
          class="h-8 w-8"
          v-else-if="site.name === ManuscriptsPlateformEnum.CENTER_STUDY_NT"
          src="/images/site/logo-center-study-nt.webp"
          :alt="site.name"
          :title="site.name"
        />
        <img
          class="h-8 w-8"
          v-else-if="site.name === ManuscriptsPlateformEnum.BRITISH_LIBRARY"
          src="/images/site/logo-british-library.webp"
          :alt="site.name"
          :title="site.name"
        />
        <img
          class="h-8 w-8"
          v-else-if="
            site.name === ManuscriptsPlateformEnum.DIGITAL_VATICAN_LIBRARY
          "
          src="/images/site/logo-vatlib.webp"
          :alt="site.name"
          :title="site.name"
        />
        <IconBookOpen v-else class="h-8 w-8 text-white" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import { ManuscriptsPlateformEnum } from '~/services/WebSiteService'
import { IWebSite } from '~/types'
import IconBookOpen from '~/components/icons/IconBookOpen.vue'

export default Vue.extend({
  name: 'ManuscriptCard',

  components: { IconBookOpen },

  props: {
    title: {
      type: String,
      default: '',
    },
    sites: {
      type: Array as PropType<IWebSite[]>,
      default: () => [],
    },
    image: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      ManuscriptsPlateformEnum,
    }
  },
})
</script>