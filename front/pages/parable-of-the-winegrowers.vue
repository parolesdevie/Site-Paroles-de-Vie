<template>
  <div class="mb-auto px-3 md:px-4 py-4 flex flex-col">
    <Breadcrumb class="container mx-auto" :items="breadcrumbItems" />

    <!-- intro -->
    <SectionIntroTopics :cover="cover" :frontFile="files[0]">
      <template v-slot:title>La parabole des vignerons 🍇</template>
      <template v-slot:body>
        La parabole des mauvais vignerons raconte l'histoire de vignerons
        malhonnêtes qui tuent les serviteurs et le fils du propriétaire d'un
        vignoble, symbolisant le rejet de l'autorité divine et la punition qui
        s'ensuit.
      </template>
    </SectionIntroTopics>

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

    <SectionDownloadDocumentsList
      class="container mx-auto mt-4 md:mt-10"
      :files="files"
    />

    <SectionArguments
      class="container mx-auto mt-4 md:mt-10"
      title="Arguments Islamique"
      :arguments="islamicArguments"
    />

    <SectionArguments
      class="container mx-auto mt-4 md:mt-10"
      title="Arguments Chrétiens"
      :arguments="christianArguments"
    />

    <SectionGallery
      class="container mx-auto mt-4 md:mt-10"
      :gallery="gallery"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'La parabole des vignerons - Paroles de vie',
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
      content:
        'https://www.paroles-de-vie.tk/seo/parable-of-the-winegrowers.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content:
        'https://www.paroles-de-vie.tk/seo/parable-of-the-winegrowers.webp'
    }
  ]
})
</script>

<script lang="ts">
import SectionArguments from '~~/components/debate/SectionArguments.vue'
import SectionDebate from '~~/components/debate/SectionDebate.vue'
import SectionDownloadDocumentsList from '~~/components/document/SectionDownloadDocumentsList.vue'
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import SectionVideo from '~~/components/videos/SectionVideo.vue'
import SectionGallery from '~~/components/gallery/SectionGallery.vue'
import {
  BookService,
  DebateService,
  TopicService,
  ResourceService
} from '~~/services'
import { VideoLinkEnum } from '~~/types'

definePageMeta({
  layout: 'article'
})

export default defineNuxtComponent({
  name: 'ParableWinegrowersPage',

  components: {
    SectionVideo,
    SectionDownloadDocumentsList,
    SectionArguments,
    SectionDebate,
    SectionIntroTopics,
    SectionGallery
  },

  data() {
    const debatArguments = DebateService.getDebatArgumentsById(1)

    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'La parabole des vignerons',
          to: '/parable-of-the-winegrowers/'
        }
      ],
      cover: TopicService.getTopicCoverBySlug('/parable-of-the-winegrowers/'),
      books: BookService.getAll(),
      playlistYoutubeIdDebates: 'PLaBmOZ7eJG-UWwZEGp_RWVnBqOe_iU0uw',
      playlistYoutubeIdVideos: 'PLaBmOZ7eJG-XE3u8rI1SBnoi6z4853aC5',
      videos: [
        {
          source: VideoLinkEnum.YOUTUBE,
          name: ' ● La parabole des Vignerons : vous avez dit l’Islam, vraiment ?',
          url: 'https://youtu.be/N0Tm-e4qSxA',
          thumbnail: 'https://img.youtube.com/vi/N0Tm-e4qSxA/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Parabole des mauvais vignerons - Jean-Marc Thobois',
          url: 'https://www.youtube.com/watch?v=00lnO2Ws7Ak',
          thumbnail: 'https://img.youtube.com/vi/00lnO2Ws7Ak/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Débat Coliseum | Mengo Vs Sham',
          url: 'https://youtu.be/PVMAeP2virw',
          thumbnail: 'https://img.youtube.com/vi/PVMAeP2virw/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Débat Coliseum | JMS Vs Hanane & Ali',
          url: 'https://youtu.be/AsRVx4vxZ6w',
          thumbnail: 'https://img.youtube.com/vi/AsRVx4vxZ6w/mqdefault.jpg'
        }
      ],
      files: ResourceService.getBySlug('parable-of-the-winegrowers'),
      debates: DebateService.getByTopic('parable-of-the-winegrowers'),
      islamicArguments: debatArguments.filter(
        (argument) => argument.team == 'islam'
      ),
      christianArguments: debatArguments.filter(
        (argument) => argument.team == 'christianism'
      ),
      gallery: [
        { id: 'friW7xlD5xYlX3mV9YaE--3--68ztz', scale: '1x' },
        { id: 'friW7xlD5xYlX3mV9YaE--2--r8y35_8.9286x', scale: '8.9286x' },
        { id: 'friW7xlD5xYlX3mV9YaE--1--hx5np_4x', scale: '4x' },
        { id: 'friW7xlD5xYlX3mV9YaE--4--2s0l7', scale: '1x' },
        { id: 'friW7xlD5xYlX3mV9YaE--5--pncne', scale: '1x' },
        { id: 'friW7xlD5xYlX3mV9YaE--6--o461u', scale: '1x' },
        { id: 'friW7xlD5xYlX3mV9YaE--7--pgu3w_4x', scale: '4x' },
        { id: 'friW7xlD5xYlX3mV9YaE--8--ymid1', scale: '1x' },
        { id: 'friW7xlD5xYlX3mV9YaE--9--ml9ur_4x', scale: '4x' },
        { id: 'Ztaog24kJDqu6tiGDJlI--1--vrb6q', scale: '1x' },
        { id: 'Ztaog24kJDqu6tiGDJlI--2--aowji', scale: '1x' },
        { id: 'Ztaog24kJDqu6tiGDJlI--3--y55q6', scale: '1x' },
        { id: 'Ztaog24kJDqu6tiGDJlI--4--kxnvo_12.5x', scale: '12.5x' },
        { id: 'Nd375IYs110DBPNr2JzT--1--ftzx4_4x', scale: '4x' },
        { id: 'jdvmsCugxPLOM7bnBovR--1--wzka4', scale: '1x' },
        { id: 'jdvmsCugxPLOM7bnBovR--2--umsjc', scale: '1x' },
        { id: 'jdvmsCugxPLOM7bnBovR--3--dolgp', scale: '1x' },
        { id: 'jdvmsCugxPLOM7bnBovR--4--9h9ft', scale: '1x' },
        { id: 'E8TQJtJCALWJUmLsLxqp--1--2knxr', scale: '1x' },
        { id: 'E8TQJtJCALWJUmLsLxqp--2--t2uqj', scale: '1x' },
        { id: 'E8TQJtJCALWJUmLsLxqp--3--3pp5d', scale: '1x' },
        { id: 'E8TQJtJCALWJUmLsLxqp--4--hiqiw', scale: '1x' }
      ]
    }
  }
})
</script>
