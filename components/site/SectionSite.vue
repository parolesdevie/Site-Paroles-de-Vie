<template>
  <section>
    <!-- title -->
    <h2 class="flex items-center font-bold text-2xl md:text-3xl">
      Recommandations de Sites
    </h2>

    <!-- links -->
    <nav class="mt-2 md:mt-4">
      <ul class="flex flex-col leading-7">
        <li v-for="(webSite, index) in sites" :key="index">
          <a
            class="flex items-center hover:text-blue-700"
            :href="webSite.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="block h-1.5 w-1.5 rounded-full bg-current mr-2" />
            <span>
              {{ webSite.name }}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import { IWebSite } from '~/types'

export default Vue.extend({
  name: 'SectionSite',

  components: {},

  props: {
    sites: {
      type: Array as PropType<IWebSite[]>,
      default: () => [],
    },
  },
})
</script>
