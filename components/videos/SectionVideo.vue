<template>
  <section>
    <!-- title -->
    <h2 class="flex items-center font-bold text-2xl md:text-3xl">
      {{ title }}
    </h2>

    <!-- links -->
    <nav class="mt-2 md:mt-4">
      <!-- playlist -->
      <a
        v-if="playlistId"
        class="hover:text-blue-700 inline-flex items-center"
        :href="'https://youtube.com/playlist?list=' + playlistId"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconPlay class="h-7 w-7 md:h-9 md:w-9" />
        <span class="ml-2">Lire la playlist sur YouTube</span>
      </a>

      <!-- videos cards -->
      <ul
        class="
          flex flex-wrap
          py-2
          pr-2
          md:py-4 md:pr-4
          gap-2
          md:gap-4
          justify-center
        "
      >
        <li class="contents" v-for="(video, index) in videos" :key="index">
          <a
            class="
              relative
              h-24
              w-32
              md:h-52 md:w-80
              pb-6
              md:pb-8
              bg-gray-200
              rounded-lg
              overflow-hidden
              flex
              items-center
            "
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
            <img
              v-if="video.thumbnail"
              class="h-full w-full object-cover"
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
import IconTikTok from '../icons/IconTikTok.vue'

export default Vue.extend({
  name: 'SectionVideo',

  components: {
    IconPlay,
    IconYouTube,
    IconTikTok,
  },

  props: {
    title: {
      type: String,
      default: 'Recommandations de Vidéos',
    },
    playlistId: {
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
