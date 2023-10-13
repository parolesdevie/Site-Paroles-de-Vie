<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- intro -->
    <SectionIntroTopics :cover="cover" :frontFile="files[0]">
      <template v-slot:title>Le Soreg</template>
      <template v-slot:body>
        L'inscription du Soreg (en hébreu סורג — soreg — signifie grille) ou
        Inscription de la balustrade du Temple est une inscription sur plusieurs
        stèles du Temple de Jérusalem, plus précisément du Temple d'Hérode, qui
        avertissait les étrangers (à la Judée) de ne pas pénétrer dans
        l'enceinte sacrée du Temple.
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
      keepOnGrid
      title="Vidéos"
      class="container mx-auto mt-4 md:mt-10"
      playlistYoutubeId="PLaBmOZ7eJG-X_4RiHpVJg63snOwk5Kfcm"
      playlistDailymotionId="x7okt4"
      :videos="videos"
    />

    <!-- section download document  -->
    <SectionDownloadDocumentsList
      class="container mx-auto mt-4 md:mt-10"
      :files="files"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Le Soreg, le mur de Jérusalem - Paroles de vie',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Défendre la foi chrétienne, donner une éducation chrétienne, expression de la foi.'
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://www.paroles-de-vie.tk/seo/soreg.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/soreg.webp'
    }
  ]
})
</script>

<script lang="ts">
import SectionDownloadDocumentsList from '~~/components/document/SectionDownloadDocumentsList.vue'
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import SectionVideo from '~~/components/videos/SectionVideo.vue'
import { TopicService, ResourceService } from '~~/services'
import { LanguageEnum, VideoLinkEnum } from '~~/types'

definePageMeta({
  layout: 'article'
})

export default defineNuxtComponent({
  name: 'SoregPage',

  components: {
    SectionIntroTopics,
    SectionVideo,
    SectionDownloadDocumentsList
  },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Le Soreg',
          to: '/soreg/'
        }
      ],
      cover: TopicService.getTopicCoverBySlug('/soreg/'),
      videos: [
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Le SOREG, le mur de Jerusalem',
          url: 'https://youtu.be/on8xbPG7LsE',
          thumbnail: 'https://img.youtube.com/vi/on8xbPG7LsE/mqdefault.jpg'
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'What Was the Temple’s Wall of Separation? | BLP Connections: Balustrade Inscription',
          url: 'https://youtu.be/eegrfRuxL0I',
          thumbnail: 'https://img.youtube.com/vi/eegrfRuxL0I/mqdefault.jpg'
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Cheil and Soreg - The Wall the Lord Tore Down',
          url: 'https://youtu.be/itDfuPP5W5U',
          thumbnail: 'https://img.youtube.com/vi/itDfuPP5W5U/mqdefault.jpg'
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Soreg Unveiled- The Second Temple Sign From King Herod Found - The Wall Of Hostility From Ephesians',
          url: 'https://youtu.be/tI4K-S63fq8',
          thumbnail: 'https://img.youtube.com/vi/tI4K-S63fq8/mqdefault.jpg'
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'CHEIL & SOREG',
          url: 'https://youtu.be/vk53DIEzqnw',
          thumbnail: 'https://img.youtube.com/vi/vk53DIEzqnw/mqdefault.jpg'
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'The Wall of Hostility "Cheil and Soreg"',
          url: 'https://youtu.be/Im1dFP6vZrk',
          thumbnail: 'https://img.youtube.com/vi/Im1dFP6vZrk/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "Le temple de Jérusalem au temps de Jésus (Le temple d'Hérode [1/3])",
          url: 'https://youtu.be/MitH4c4rg0c',
          thumbnail: 'https://img.youtube.com/vi/MitH4c4rg0c/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "L'importance du temple au temps de Jésus (Le temple d'Hérode [2/3])",
          url: 'https://youtu.be/gBj0fRouZkk',
          thumbnail: 'https://img.youtube.com/vi/gBj0fRouZkk/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "Jésus et le temple de Jérusalem (Le temple d'Hérode [3/3])",
          url: 'https://youtu.be/lt95zDdM30s',
          thumbnail: 'https://img.youtube.com/vi/lt95zDdM30s/mqdefault.jpg'
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: "Ephesians 2:14-16 // What's the LAW OF COMMANDMENTS contained in ORDINANCES???",
          url: 'https://youtu.be/iSjr5Cygq1U',
          thumbnail: 'https://img.youtube.com/vi/iSjr5Cygq1U/mqdefault.jpg'
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'The Soreg - The Dividing Wall of Ephesians 2 is Gone!!!',
          url: 'https://youtu.be/MpX1ZPOsv4Q',
          thumbnail: 'https://img.youtube.com/vi/MpX1ZPOsv4Q/mqdefault.jpg'
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Breaking Down the Wall of Hostility Between Jews and Gentiles',
          url: 'https://youtu.be/2hRR_i1NdfA',
          thumbnail: 'https://img.youtube.com/vi/2hRR_i1NdfA/mqdefault.jpg'
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Not a hair of your head will be lost. Homily for the 33rd Sunday in Ordinary Time, Year C',
          url: 'https://youtu.be/Z5wcqaCzR5U',
          thumbnail: 'https://img.youtube.com/vi/Z5wcqaCzR5U/mqdefault.jpg'
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: ' Temple Warning inscription',
          url: 'https://youtu.be/jbaPTH772cI',
          thumbnail: 'https://img.youtube.com/vi/jbaPTH772cI/mqdefault.jpg'
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Ancient Middle Eastern Literature | The Temple Warning Inscription',
          url: 'https://youtu.be/WwMiWd0c6Cs',
          thumbnail: 'https://img.youtube.com/vi/WwMiWd0c6Cs/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.DAILYMOTION,
          name: 'Le SOREG, le mur de Jerusalem',
          url: 'https://www.dailymotion.com/video/x8ggxhx',
          thumbnail: 'https://www.dailymotion.com/thumbnail/video/x8ggxhx'
        }
      ],
      files: ResourceService.getBySlug('soreg')
    }
  }
})
</script>
