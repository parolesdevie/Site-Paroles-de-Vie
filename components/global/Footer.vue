<template>
  <footer class="px-3 md:px-0 py-4 md:py-12 bg-black">
    <transition name="fade">
      <span
        tabindex="0"
        id="pagetop"
        class="
          cursor-pointer
          fixed
          right-8
          bottom-8
          h-12
          w-12
          md:h-14 md:w-14
          bg-orange-500
          text-white
          rounded-full
          flex
          justify-center
          items-center
        "
        v-show="scY > 300"
        @keypress.space.prevent="toTop"
        @keypress.enter="toTop"
        @click="toTop"
      >
        <IconChevronUp class="h-7 w-7 md:h-8 md:w-8" />
      </span>
    </transition>

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
                class="
                  flex
                  items-center
                  hover:text-blue-500
                  text-xs
                  md:text-base
                "
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
                class="
                  flex
                  items-center
                  hover:text-blue-500
                  text-xs
                  md:text-base
                "
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
import IconChevronUp from '~/components/icons/IconChevronUp.vue'

export default Vue.extend({
  name: 'Footer',

  components: { IconChevronUp },

  data() {
    return {
      linksMainMenu: MenuService.getMainMenu(),
      linksMenuDiscord: MenuService.getDiscordMenu(),
      scTimer: 0,
      scY: 0,
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll: function () {
      if (this.scTimer) return
      this.scTimer = window.setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
})
</script>
