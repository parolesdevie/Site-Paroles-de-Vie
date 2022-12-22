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
        v-if="playlistYoutubeId"
        class="hover:text-blue-700 inline-flex items-center"
        :href="'https://youtube.com/playlist?list=' + playlistYoutubeId"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconPlay class="h-7 w-7 md:h-9 md:w-9" />
        <span class="ml-2">Lire la playlist de débats sur YouTube</span>
      </a>

      <!-- table of debates -->
      <TableDebate
        class="mt-2 md:mt-4 w-full md:w-auto md:mx-auto"
        :debates="debates"
        hideSubject
      />
    </nav>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import IconPlay from '~/components/icons/IconPlay.vue'
import IconYouTube from '~/components/icons/IconYouTube.vue'
import IconTikTok from '~/components/icons/IconTikTok.vue'
import { IDebat, DebatPlateformEnum } from '~/types'
import TableDebate from './TableDebate.vue'

export default Vue.extend({
  name: 'SectionDebate.',

  components: {
    IconPlay,
    IconYouTube,
    IconTikTok,
    TableDebate,
  },

  props: {
    playlistYoutubeId: {
      type: String,
      default: '',
    },
    debates: {
      type: Array as PropType<IDebat[]>,
      default: () => [],
    },
  },

  data() {
    return {
      DebatPlateformEnum,
    }
  },
})
</script>
