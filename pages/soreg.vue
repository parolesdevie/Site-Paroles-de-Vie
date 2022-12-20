<template>
  <div class="flex flex-col min-h-screen dark:bg-light-black dark:text-white">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- intro -->
      <SectionIntroTopics :cover="cover">
        <template v-slot:title>Le Soreg</template>
        <template v-slot:body>
          L'inscription du Soreg (en hébreu סורג — soreg — signifie grille) ou
          Inscription de la balustrade du Temple est une inscription sur
          plusieurs stèles du Temple de Jérusalem, plus précisément du Temple
          d'Hérode, qui avertissait les étrangers (à la Judée) de ne pas
          pénétrer dans l'enceinte sacrée du Temple.
          <br />
          On en a retrouvé deux exemplaires qui constituent aujourd'hui les
          vestiges les plus proches de l'ancien Temple de Jérusalem.
          <br />
          <a
            class="inline-block mt-2 underline hover:text-blue-700 float-right"
            href="https://fr.wikipedia.org/wiki/Inscription_du_Soreg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </a>
        </template>
      </SectionIntroTopics>

      <!-- section youtube videos  -->
      <SectionVideo
        left
        title="Vidéos"
        class="container mx-auto mt-4 md:mt-10"
        playlistYoutubeId="PLaBmOZ7eJG-X_4RiHpVJg63snOwk5Kfcm"
        playlistDailymotionId="x7okt4"
        :videos="videos"
      />
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionIntroTopics from '~/components/topics/SectionIntroTopics.vue'
import SectionVideo from '~/components/videos/SectionVideo.vue'
import { TopicService } from '~/services'
import { VideoLinkEnum } from '~/types'

export default Vue.extend({
  name: 'SoregPage',

  components: { SectionIntroTopics, SectionVideo },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/',
        },
        {
          name: 'Le Soreg',
          to: '/soreg/',
        },
      ],
      cover: TopicService.getBySlug('/soreg/')?.cover,
      videos: [
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Le SOREG, le mur de Jerusalem',
          url: 'https://youtu.be/on8xbPG7LsE',
          thumbnail: 'https://img.youtube.com/vi/on8xbPG7LsE/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "Le temple de Jérusalem au temps de Jésus (Le temple d'Hérode [1/3])",
          url: 'https://youtu.be/MitH4c4rg0c',
          thumbnail: 'https://img.youtube.com/vi/MitH4c4rg0c/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "L'importance du temple au temps de Jésus (Le temple d'Hérode [2/3])",
          url: 'https://youtu.be/gBj0fRouZkk',
          thumbnail: 'https://img.youtube.com/vi/gBj0fRouZkk/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "Jésus et le temple de Jérusalem (Le temple d'Hérode [3/3])",
          url: 'https://youtu.be/lt95zDdM30s',
          thumbnail: 'https://img.youtube.com/vi/lt95zDdM30s/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.DAILYMOTION,
          name: 'Le SOREG, le mur de Jerusalem',
          url: 'https://www.dailymotion.com/video/x8ggxhx',
          thumbnail: 'https://www.dailymotion.com/thumbnail/video/x8ggxhx',
        },
      ],
    }
  },
})
</script>
