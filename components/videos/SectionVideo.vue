<template>
  <section>
    <!-- title -->
    <h2 class="flex items-center font-bold text-2xl md:text-3xl">
      {{ title }}
    </h2>

    <!-- links -->
    <nav class="mt-2 md:mt-4">
      <!-- playlist -->
      <div class="flex flex-col md:flex-row gap-2 md:gap-4">
        <a
          v-if="playlistYoutubeId"
          class="hover:text-blue-700 inline-flex items-center"
          :href="'https://youtube.com/playlist?list=' + playlistYoutubeId"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconPlay class="h-7 w-7 md:h-9 md:w-9" />
          <span class="ml-2">Lire la playlist sur YouTube</span>
        </a>
        <a
          v-if="playlistDailymotionId"
          class="hover:text-blue-700 inline-flex items-center"
          :href="'https://dailymotion.com/playlist/' + playlistDailymotionId"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconDailymotion class="h-7 w-7 md:h-9 md:w-9" />
          <span class="ml-2">Lire la playlist sur Dailymotion</span>
        </a>
      </div>

      <!-- videos cards -->
      <ul
        :class="`
          mt-2
          md:mt-4
          flex
          md:flex-wrap
          py-2
          md:py-4
          gap-2
          md:gap-4
          ${keepOnGrid ? 'flex-wrap' : 'overflow-x-auto'}
          ${
            left ? 'md:px-14 lg:px-4 xl:px-36 2xl:px-24' : 'md:justify-center'
          }`"
      >
        <li class="contents" v-for="(video, index) in videos" :key="index">
          <a
            :class="`
              relative
              h-24
              w-32
              md:h-52 md:w-80
              pb-6
              md:pb-8
              bg-gray-200
              rounded-lg
              overflow-hidden
              shrink-0
              flex
              items-center
              ${keepOnGrid ? 'h-32 flex-auto md:flex-initial' : ''}
          `"
            :href="video.url"
            target="_blank"
            rel="noopener noreferrer"
            :title="video.name"
          >
            <IconYouTube
              v-if="video.source === VideoLinkEnum.YOUTUBE"
              playColor="#fff"
              class="
                absolute
                z-10
                top-2
                left-2
                h-7
                w-7
                md:h-9 md:w-9
                text-red-500
              "
            />
            <IconTikTok
              v-else-if="video.source === VideoLinkEnum.TIKTOK"
              class="
                absolute
                z-10
                top-2
                left-2
                h-7
                w-7
                md:h-9 md:w-9
                text-blue-500
              "
            />
            <IconDailymotion
              v-else-if="video.source === VideoLinkEnum.DAILYMOTION"
              class="
                absolute
                z-10
                top-2
                left-2
                h-7
                w-7
                md:h-9 md:w-9
                text-black
                bg-white
              "
            />
            <img
              v-if="video.thumbnail"
              class="h-full w-full rounded-t-lg object-cover"
              :src="video.thumbnail"
              alt=""
            />
            <span
              class="
                absolute
                inset-x-0
                bottom-0
                w-full
                py-1
                px-2
                text-xs
                md:text-base
                bg-black
                duration-300
                text-white
                font-semibold
                text-right
                truncate
                rounded-b-lg
              "
            >
              {{ video.name }}
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
import IconPlay from '~/components/icons/IconPlay.vue'
import IconYouTube from '~/components/icons/IconYouTube.vue'
import { IVideoLink, VideoLinkEnum } from '~/types'
import IconDailymotion from '../icons/IconDailymotion.vue'
import IconTikTok from '../icons/IconTikTok.vue'

export default Vue.extend({
  name: 'SectionVideo',

  components: {
    IconPlay,
    IconYouTube,
    IconTikTok,
    IconDailymotion,
  },

  props: {
    left: {
      type: Boolean,
      default: false,
    },
    keepOnGrid: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'Recommandations de Vidéos',
    },
    playlistYoutubeId: {
      type: String,
      default: '',
    },
    playlistDailymotionId: {
      type: String,
      default: '',
    },
    videos: {
      type: Array as PropType<IVideoLink[]>,
      default: () => [],
    },
  },

  data() {
    return {
      VideoLinkEnum,
    }
  },
})
</script>
