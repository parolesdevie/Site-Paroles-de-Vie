<template>
  <section>
    <!-- title -->
    <H2Title>
      <slot name="title-icon" />
      {{ title }}
    </H2Title>

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

<script setup lang="ts">
import { PropType } from 'vue'
import { IWebSite } from '~~/types'

const props = defineProps({
  sites: {
    type: Array as PropType<IWebSite[]>,
    default: () => []
  },
  title: {
    type: String,
    default: 'Recommandations de Sites'
  }
})
</script>

<script lang="ts">
export default defineNuxtComponent({
  name: 'SectionSite'
})
</script>
