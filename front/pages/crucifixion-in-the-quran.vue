<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- intro -->
    <SectionIntroTopics :cover="cover">
      <template v-slot:title>La crucifixion dans le coran</template>
      <!-- <template v-slot:body> </template> -->
    </SectionIntroTopics>

    <!-- section debates  -->
    <SectionDebate
      class="container mx-auto mt-4 md:mt-10"
      :playlistYoutubeId="playlistYoutubeIdDebates"
      :debates="debates"
    />

    <!-- section youtube videos  -->
    <SectionVideo
      left
      class="container mx-auto mt-4 md:mt-10"
      :playlistYoutubeId="playlistYoutubeIdVideos"
      :videos="videos"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'La crucifixion dans le coran - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/crucifixion-in-the-quran.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/crucifixion-in-the-quran.webp'
    }
  ]
})
</script>

<script lang="ts">
import SectionDebate from '~~/components/debate/SectionDebate.vue'
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import SectionVideo from '~~/components/videos/SectionVideo.vue'
import { DebateService, TopicService } from '~~/services'
import { VideoLinkEnum } from '~~/types'

export default defineNuxtComponent({
  name: 'CrucifixionInQuranPage',

  components: { SectionIntroTopics, SectionDebate, SectionVideo },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'La crucifixion dans le coran',
          to: '/crucifixion-in-the-quran/'
        }
      ],
      cover: TopicService.getTopicCoverBySlug('/crucifixion-in-the-quran/'),
      playlistYoutubeIdDebates: 'PLaBmOZ7eJG-VQSHM0rg-CRUEbWhRXbCpt',
      debates: DebateService.getByTopic('crucifixion-in-the-quran'),
      videos: [
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'CRUCIFIXION MYTHE OU RÉALITÉ | Rémi Gomez',
          url: 'https://youtu.be/dUa9YaVLDPk',
          thumbnail: 'https://img.youtube.com/vi/dUa9YaVLDPk/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: '// Conférence // Crucifixion : mythe ou réalité ? Réponse dans le Coran',
          url: 'https://youtu.be/vv3RojKXPco',
          thumbnail: 'https://img.youtube.com/vi/vv3RojKXPco/mqdefault.jpg'
        }
      ]
    }
  }
})
</script>
