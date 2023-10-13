<script setup lang="ts">
useHead({
  title: 'L’ Évangile de Barnabé - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/gospel-of-barnabas.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/gospel-of-barnabas.webp'
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
      <template v-slot:title>L’ Évangile de Barnabé</template>
      <template v-slot:body>
        <b class="font-bold">NOTRE RAPPORT AUX APOCRYPHES</b>
        <br />
        <span>
          Il existe une énorme différence entre les apocryphes et les 4
          Évangiles que ce soit dans la clarté, la simplicité, la beauté et la
          richesse doctrinale. C'est pourquoi on peut considérer que l'Église
          primitive, à juste raison, devant la profusion d'écrits non inspirés,
          essaya au mieux de séparer le blé de l`ivraie. Aujourd'hui, nous
          pouvons facilement nous procurer ces apocryphes, les étudier, nous en
          faire une opinion personnelle et suivre l'exhortation de Paul. «
          Examinez toutes choses et retenez ce qui est bon. »
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
      :videos="videos"
    />

    <SectionDownloadDocumentsList
      class="container mx-auto mt-4 md:mt-10"
      :files="files"
    />
  </div>
</template>

<script lang="ts">
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import SectionDebate from '~~/components/debate/SectionDebate.vue'
import SectionVideo from '~~/components/videos/SectionVideo.vue'
import SectionDownloadDocumentsList from '~~/components/document/SectionDownloadDocumentsList.vue'
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
          name: 'L’ Évangile de Barnabé',
          to: '/gospel-of-barnabas/'
        }
      ],
      cover: TopicService.getTopicCoverBySlug('/gospel-of-barnabas/'),
      playlistYoutubeIdDebates: 'PLaBmOZ7eJG-WjAGO2gf5FnUbT-HEjD9pi',
      debates: DebateService.getByTopic('gospel-of-barnabas'),
      videos: [
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Évangile de Barnabé #PDV',
          url: 'https://youtu.be/NkhUMgoax4g',
          thumbnail: 'https://img.youtube.com/vi/NkhUMgoax4g/mqdefault.jpg'
        }
      ],
      files: ResourceService.getBySlug('gospel-of-barnabas')
    }
  }
})
</script>
