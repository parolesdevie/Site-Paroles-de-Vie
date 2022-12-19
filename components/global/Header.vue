<template>
  <div class="h-16 flex-shrink-0">
    <header
      class="absolute top-0 inset-x-0 px-3 md:px-0 py-4 bg-black text-white"
    >
      <div class="container mx-auto flex items-center">
        <!-- logo -->
        <NuxtLink class="mr-auto flex hover:text-blue-500" to="/">
          <IconLogoUni class="h-8 w-8 md:h-8 md:w-8 mr-3 md:mr-4" />
          <span class="text-2xl">Paroles de vie</span>
        </NuxtLink>

        <!-- <select
          v-model="$colorMode.preference"
          class="
            border
            w-24
            h-8
            dark:bg-gray-900 dark:text-white dark:border-gray-700
          "
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select> -->

        <!-- burger -->
        <IconBars class="h-8 w-8 md:h-8 md:w-8 hidden" />

        <nav class="hidden md:contents">
          <ul class="flex gap-2 md:gap-4">
            <li v-for="(link, index) in links" :key="index">
              <NuxtLink
                :to="link.to"
                class="text-base md:text-lg hover:text-blue-500"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconLogoUni from '~/components/icons/IconLogoUni.vue'
import IconBars from '~/components/icons/IconBars.vue'
import { MenuService } from '~/services'

export default Vue.extend({
  name: 'Header',

  components: {
    IconLogoUni,
    IconBars,
  },

  data() {
    return {
      links: MenuService.getMainMenu(),
    }
  },
})
</script>
