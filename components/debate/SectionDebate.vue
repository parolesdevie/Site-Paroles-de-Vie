<template>
  <section>
    <!-- title -->
    <h2 class="flex items-center font-bold text-2xl md:text-3xl">
      Recommandations de Débats
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
import IconYoutube from '~/components/icons/IconYoutube.vue'
import { IVideoLink, VideoLinkEnum } from '~/types'
import IconTikTok from '../icons/IconTikTok.vue'

export default Vue.extend({
  name: 'SectionDebate.',

  components: {
    IconPlay,
    IconYoutube,
    IconTikTok,
  },

  props: {
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
