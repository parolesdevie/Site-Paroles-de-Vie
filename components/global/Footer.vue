<template>
  <footer class="px-3 md:px-0 py-4 md:py-12 bg-black">
    <div class="container mx-auto flex flex-col md:flex-row gap-10">
      <!-- internal links -->
      <div class="flex flex-col mb-4" v-if="linksMainMenu.length">
        <strong class="font-bold text-sm md:text-lg text-gray-300 uppercase">
          Paroles de vie
        </strong>

        <nav class="contents">
          <ul
            class="mt-2 md:mt-4 text-gray-400 flex flex-wrap md:flex-col gap-2"
          >
            <li v-for="(link, index) in linksMainMenu" :key="index">
              <NuxtLink
                class="flex items-center hover:text-blue-500 text-xs md:text-base"
                :to="link.to"
              >
                <span>
                  {{ link.name }}
                </span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <!-- discord -->
      <div class="flex flex-col mb-4" v-if="linksMenuDiscord.length">
        <strong class="font-bold text-sm md:text-lg text-gray-300 uppercase">
          Discord
        </strong>

        <nav class="contents">
          <ul
            class="mt-2 md:mt-4 text-gray-400 flex flex-wrap md:flex-col gap-2"
          >
            <li v-for="(link, index) in linksMenuDiscord" :key="index">
              <NuxtLink
                class="flex items-center hover:text-blue-500 text-xs md:text-base"
                :to="link.to"
              >
                <span>
                  {{ link.name }}
                </span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { MenuService } from '~/services'

export default Vue.extend({
  name: 'Footer',

  data() {
    return {
      linksMainMenu: MenuService.getMainMenu(),
      linksMenuDiscord: MenuService.getDiscordMenu(),
    }
  },
})
</script>
