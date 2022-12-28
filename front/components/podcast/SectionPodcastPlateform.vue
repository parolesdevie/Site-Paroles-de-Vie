<template>
  <section>
    <!-- title -->
    <H2Title>Ecouter sur une autre plateforme</H2Title>

    <ul class="mt-4 md:mt-10 flex gap-10 overflow-x-auto">
      <li class="contents">
        <a
          class="flex flex-col items-center"
          href="https://music.amazon.fr/podcasts/0a53af38-888e-43d8-a6b3-3a4fd5255955/paroles-de-vie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconAmazon class="h-20 text-orange-500" />
          <span class="mt-2">Ecouter sur Amazon Music</span>
        </a>
      </li>
      <li class="contents">
        <a
          class="flex flex-col items-center"
          href="https://open.spotify.com/show/5XnBOuPu5fUW0DROVinvbg?go=1&sp_cid=b07c80b40af1cad5b9c13cec447d0ccb&utm_source=embed_player_p&utm_medium=desktop&nd=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconSpotify class="h-20 text-green-500" />
          <span class="mt-2">Ecouter sur Spotify</span>
        </a>
      </li>
      <li class="contents">
        <a
          class="flex flex-col items-center"
          href="https://anchor.fm/paroles-de-vie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconAnchor class="h-20 text-yellow-400" />
          <span class="mt-2">Ecouter sur Anchor</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">

import H2Title from '~~/components/global/H2Title.vue'
import IconAmazon from '~~/components/icons/IconAmazon.vue'
import IconSpotify from '~~/components/icons/IconSpotify.vue'
import IconAnchor from '~~/components/icons/IconAnchor.vue'

export default defineNuxtComponent({
  name: 'SectionPodcastPlateform',

  components: {
    H2Title,
    IconAmazon,
    IconSpotify,
    IconAnchor,
  },
})
</script>