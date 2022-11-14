<template>
  <nav class="py-2">
    <ul class="flex text-base md:text-lg">
      <li
        class="flex items-center mr-2"
        v-for="(item, index) in items"
        :key="index"
      >
        <!-- icon -->
        <IconChevronRight class="h-3 w-3 md:h-4 md:w-4 mr-2" v-if="index" />

        <!-- link -->
        <NuxtLink class="hover:text-blue-500" :to="item.to">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import { IBreadcrumbItem } from '~/types'
import IconChevronRight from '~/components/icons/IconChevronRight.vue'

export default Vue.extend({
  name: 'Breadcrumb',

  components: {
    IconChevronRight,
  },
  props: {
    items: {
      type: Array as PropType<IBreadcrumbItem[]>,
      default: () => [],
    },
  },
})
</script>
