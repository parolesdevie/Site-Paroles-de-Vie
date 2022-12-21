<template>
  <footer class="px-3 md:px-0 py-4 md:py-12 bg-black">
    <!-- scroll to top button -->
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
          bg-red-500
          dark:bg-red-700
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

    <div
      class="
        container
        mx-auto
        flex flex-col
        items-start
        lg:flex-row
        gap-10
        lg:gap-20
      "
    >
      <!-- logo -->
      <div
        class="
          mr-10
          flex
          lg:flex-col
          items-center
          text-white
          hover:text-blue-500
        "
      >
        <NuxtLink to="/">
          <IconsIconLogoUni class="h-12 w-12 md:h-14 md:w-14" />
        </NuxtLink>
        <a
          href="https://www.tiktok.com/@paroles.de.vie"
          target="_blank"
          rel="noopener noreferrer"
          class="
            ml-3
            lg:ml-0
            font-bold
            hover:text-blue-500
            inline-flex
            flex-col
            lg:items-center
          "
        >
          <span class="text-xl lg:text-base">Paroles</span>
          <span class="text-sm lg:text-base">de Vie</span>
        </a>
      </div>

      <!-- internal links -->
      <div class="flex flex-col mb-4" v-if="linksMainMenu.length">
        <div
          class="
            font-bold
            text-sm
            md:text-lg
            text-gray-300
            uppercase
            flex
            items-center
          "
        >
          <IconsIconLogoUni class="h-6" />
          <strong class="ml-2">Paroles de vie</strong>
        </div>

        <nav class="contents">
          <ul class="mt-2 md:mt-4 text-gray-400 flex flex-wrap flex-col gap-2">
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
        <div
          class="
            font-bold
            text-sm
            md:text-lg
            text-gray-300
            uppercase
            flex
            items-center
          "
        >
          <IconDiscord class="h-4" />
          <strong class="ml-2">Discord</strong>
        </div>

        <nav class="contents">
          <ul class="mt-2 md:mt-4 text-gray-400 flex flex-wrap flex-col gap-2">
            <li v-for="(link, index) in linksMenuDiscord" :key="index">
              <a
                class="
                  flex
                  items-center
                  hover:text-blue-500
                  text-xs
                  md:text-base
                "
                :href="link.to"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  {{ link.name }}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- tiktok -->
      <div class="flex flex-col mb-4" v-if="linksMenuTikTok.length">
        <div
          class="
            font-bold
            text-sm
            md:text-lg
            text-gray-300
            uppercase
            flex
            items-center
          "
        >
          <IconTikTok class="h-4" />
          <strong class="ml-2">TikTok</strong>
        </div>

        <nav class="contents">
          <ul class="mt-2 md:mt-4 text-gray-400 flex flex-wrap flex-col gap-2">
            <li v-for="(link, index) in linksMenuTikTok" :key="index">
              <a
                class="
                  flex
                  items-center
                  hover:text-blue-500
                  text-xs
                  md:text-base
                "
                :href="link.to"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  {{ link.name }}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- podcast -->
      <div class="flex flex-col mb-4" v-if="linksMenuPodcast.length">
        <div
          class="
            font-bold
            text-sm
            md:text-lg
            text-gray-300
            uppercase
            flex
            items-center
          "
        >
          <IconPodcast class="h-4" />
          <strong class="ml-2">Podcast</strong>
        </div>

        <nav class="contents">
          <ul class="mt-2 md:mt-4 text-gray-400 flex flex-wrap flex-col gap-2">
            <li v-for="(link, index) in linksMenuPodcast" :key="index">
              <a
                :href="link.to"
                target="_blank"
                rel="noopener noreferrer"
                class="
                  flex
                  items-center
                  hover:text-blue-500
                  text-xs
                  md:text-base
                "
              >
                <span>
                  {{ link.name }}
                </span>
              </a>
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
import IconTikTok from '~/components/icons/IconTikTok.vue'
import IconDiscord from '~/components/icons/IconDiscord.vue'
import IconPodcast from '~/components/icons/IconPodcast.vue'

export default Vue.extend({
  name: 'Footer',

  components: { IconChevronUp, IconTikTok, IconDiscord, IconPodcast },

  data() {
    return {
      linksMainMenu: MenuService.getMainMenu(),
      linksMenuDiscord: MenuService.getDiscordMenu(),
      linksMenuTikTok: MenuService.getTikTokMenu(),
      linksMenuPodcast: MenuService.getPodcastMenu(),
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
