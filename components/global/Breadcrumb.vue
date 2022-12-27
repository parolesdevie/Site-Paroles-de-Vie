<template>
  <nav class="py-2">
    <ul class="flex text-base md:text-lg">
      <li
        class="flex items-center mr-2"
        v-for="({ to, name }, index) in items"
        :key="index"
      >
        <!-- icon -->
        <IconChevronRight class="h-3 w-3 md:h-4 md:w-4 mr-2" v-if="index" />

        <!-- link -->
        <NuxtLink class="hover:text-blue-500" :to="to">
          {{ name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { IBreadcrumbItem } from "~~/types";

const props = defineProps({
  items: {
    type: Array as PropType<IBreadcrumbItem[]>,
    default: () => [],
  },
});
</script>

<script lang="ts">
import IconChevronRight from "../icons/IconChevronRight.vue";

export default defineNuxtComponent({
  name: "Breadcrumb",

  components: { IconChevronRight },
});
</script>
