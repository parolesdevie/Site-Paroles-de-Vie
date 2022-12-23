<template>
  <section>
    <!-- title -->
    <H2Title>Recommandations de Débats</H2Title>

    <!-- links -->
    <nav class="mt-2 md:mt-4">
      <!-- playlist -->
      <PlaylistLinks :playlistYoutubeId="playlistYoutubeId" />

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
import TableDebate from '~/components/debate/TableDebate.vue'
import H2Title from '~/components/global/H2Title.vue'
import PlaylistLinks from '~/components/videos/PlaylistLinks.vue'

export default Vue.extend({
  name: 'SectionDebate.',

  components: {
    IconPlay,
    IconYouTube,
    IconTikTok,
    TableDebate,
    H2Title,
    PlaylistLinks,
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
