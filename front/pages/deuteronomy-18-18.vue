<script setup lang="ts">
useHead({
  title: 'Deutéronome 18:18 - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/deuteronomy-18-18.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/deuteronomy-18-18.webp'
    }
  ]
})
</script>

<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- intro -->
    <SectionIntroTopics :cover="cover" :frontFile="files[0]">
      <template v-slot:title>Deutéronome 18:18</template>
      <template v-slot:body>
        <b class="font-bold">
          LE DEUTÉRONOME : UN LIVRE CENTRÉ SUR L'ALLIANCE AVEC ISRAËL
        </b>
        <br />
        <span>
          Le livre du Deutéronome occupe une place centrale dans la Bible
          hébraïque et joue un rôle essentiel dans l'histoire du peuple
          d'Israël. Son objectif principal est de renouveler l'alliance entre
          Dieu et Israël, en fournissant des directives pour la vie religieuse
          et sociale du peuple avant son entrée dans la Terre promise.
          Cependant, il est important de noter que le Deutéronome ne mentionne
          pas Ismaël ou sa descendance, les Ismaélites.
        </span>
      </template>
    </SectionIntroTopics>

    <SectionDebate
      class="container mx-auto mt-4 md:mt-10"
      :playlistYoutubeId="playlistYoutubeIdDebates"
      :debates="debates"
    />

    <SectionVideo
      left
      class="container mx-auto mt-4 md:mt-10"
      :playlistYoutubeId="playlistYoutubeIdVideos"
      :videos="videos"
    />

    <DocumentSectionDownloadDocumentsList
      class="container mx-auto mt-4 md:mt-10"
      :files="files"
    />
  </div>
</template>

<script lang="ts">
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import SectionDebate from '~~/components/debate/SectionDebate.vue'
import SectionVideo from '~~/components/videos/SectionVideo.vue'
import { DebateService, TopicService, ResourceService } from '~~/services'
import { VideoLinkEnum } from '~~/types'

definePageMeta({
  layout: 'article'
})

export default defineNuxtComponent({
  name: 'Deuteronomy18_18Page',

  components: {
    SectionIntroTopics,
    SectionDebate,
    SectionVideo
  },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Deutéronome 18:18',
          to: '/deuteronomy-18-18/'
        }
      ],
      cover: TopicService.getTopicCoverBySlug('/deuteronomy-18-18/'),
      playlistYoutubeIdDebates: 'PLaBmOZ7eJG-WK-vSynJA7lEwgmjH1Hn7b',
      playlistYoutubeIdVideos: 'PLaBmOZ7eJG-UACH9YAyyi8guqe4hfca6r',
      debates: DebateService.getByTopic('deuteronomy-18-18'),
      videos: [
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Deutéronome 18:18',
          url: 'https://youtu.be/eeszR3xBQuw',
          thumbnail: 'https://img.youtube.com/vi/eeszR3xBQuw/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'FIN DU DÉBAT : Muhammad est effectivement « profitisé » dans la Torah !',
          url: 'https://youtu.be/61L_bQs77-M',
          thumbnail: 'https://img.youtube.com/vi/61L_bQs77-M/mqdefault.jpg'
        }
      ],
      files: ResourceService.getBySlug('deuteronomy-18-18')
    }
  }
})
</script>
