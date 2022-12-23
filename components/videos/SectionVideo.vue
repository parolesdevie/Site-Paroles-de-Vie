<template>
  <section>
    <!-- title -->
    <H2Title>{{ title }}</H2Title>

    <!-- links -->
    <nav class="mt-2 md:mt-4">
      <!-- playlist -->
      <PlaylistLinks
        :playlistYoutubeId="playlistYoutubeId"
        :playlistDailymotionId="playlistDailymotionId"
      />

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
            <IconPlateformVideo :source="video.source" />
            <span
              v-if="video.lang"
              class="
                absolute
                top-4
                right-0
                bg-black
                text-white text-sm
                px-3
                py-1
                font-medium
              "
            >
              {{ video.lang }}
            </span>
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
import { IVideoLink } from '~/types'
import IconPlateformVideo from './IconPlateformVideo.vue'
import PlaylistLinks from './PlaylistLinks.vue'

export default Vue.extend({
  name: 'SectionVideo',

  components: {
    IconPlay,
    IconYouTube,
    IconPlateformVideo,
    PlaylistLinks,
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
})
</script>
