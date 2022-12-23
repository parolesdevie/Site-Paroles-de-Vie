<template>
  <div class="flex flex-col min-h-screen dark:bg-light-black dark:text-white">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- intro -->
      <SectionIntroTopics :cover="cover">
        <template v-slot:title>Louanges</template>
        <template v-slot:body>
          Au Ier siècle, Paul et Silas ont loué Dieu par leurs chants alors
          qu’ils étaient en prison (<strong>Ac 16:25</strong>). À notre époque,
          des chrétiens ont chanté des cantiques alors qu’ils étaient détenus
          dans le camp de concentration de Sachsenhausen en Allemagne nazie ou
          qu’ils étaient exilés en Sibérie. Ces exemples montrent que les
          cantiques ont le pouvoir d’insuffler du courage face aux épreuves.
          <br />
          <span class="inline-block w-80 truncate">
            L’esprit saint nous aidera alors à nous en souvenir
          </span>
          <br />
          <a
            class="inline-block mt-2 underline hover:text-blue-700"
            href="https://www.jw.org/fr/biblioth%C3%A8que/jw-cahier-vie-et-ministere/mwb-avril-2017/programme-reunion-17-23-avril/les-cantiques-insufflent-du-courage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lire l'article
          </a>
        </template>
      </SectionIntroTopics>

      <!-- section youtube videos  -->
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        title="Ode"
        playlistYoutubeId="PLaBmOZ7eJG-VD9fBWOVjYZ3u4inQwt0NT"
        :videos="videos.ode"
      />
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        title="Chant liturgique"
        playlistYoutubeId="PLaBmOZ7eJG-WPmxnbO5BLJRwi5iPg3tgP"
        :videos="videos.liturgicalSongs"
      />
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        title="Active Christianity"
        playlistYoutubeId="PLaBmOZ7eJG-VyUORESelod2tkG4XN2WbU"
        :videos="videos.activeChristianity"
      />
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        title="Chant de la communauté de l' Emmanuel"
        playlistYoutubeId="PLaBmOZ7eJG-XL71fbzjvbjSDulEGzmGCL"
        :videos="videos.emmanuelCommunity"
      />
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        title="Chant des témoins de Jéhovah"
        playlistYoutubeId="PLaBmOZ7eJG-Uau4Ft-9GMRHrzDXYfD4Mj"
        :videos="videos.tj"
      />
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        title="Chants juif"
        playlistYoutubeId="PLaBmOZ7eJG-UAkG289514PguUtY0pRgkE"
        :videos="videos.jewishSongs"
      />
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        title="Chants protestants"
        playlistYoutubeId="PLaBmOZ7eJG-UAkG289514PguUtY0pRgkE"
        :videos="videos.protestantSongs"
      />
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        title="Moderne"
        playlistYoutubeId="PLaBmOZ7eJG-V0hBZainCo2q-D1-ducPsT"
        :videos="videos.modern"
      />
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        title="Autres"
        playlistYoutubeId="PLaBmOZ7eJG-WygTHv8Wn4kTfUASMY_gKk"
        :videos="videos.others"
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
import { GospelService, TopicService } from '~/services'
import { GospelCategoryEnum } from '~/types'

export default Vue.extend({
  name: 'GospelPage',

  components: { SectionIntroTopics, SectionVideo },

  head() {
    return {
      title: 'Louanges - Paroles de vie',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Défendre la foi chrétienne, donner une éducation chrétienne, expression de la foi.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.paroles-de-vie.tk/seo/gospel.webp',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://www.paroles-de-vie.tk/seo/gospel.webp',
        },
      ],
    }
  },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/',
        },
        {
          name: 'Louanges',
          to: '/gospel/',
        },
      ],
      cover: TopicService.getBySlug('/gospel/')?.cover,
      playlistYoutubeIdVideos: 'PLaBmOZ7eJG-WG_rv9QU7qomxydYrL_2KK',
      videos: {
        ode: GospelService.getByCategory(GospelCategoryEnum.ODE),
        liturgicalSongs: GospelService.getByCategory(
          GospelCategoryEnum.LITURGICAL_SONGS
        ),
        activeChristianity: GospelService.getByCategory(
          GospelCategoryEnum.ACTIVE_CHRISTIANITY
        ),
        emmanuelCommunity: GospelService.getByCategory(
          GospelCategoryEnum.EMMANUEL_COMMUNITY
        ),
        tj: GospelService.getByCategory(GospelCategoryEnum.TJ),
        jewishSongs: GospelService.getByCategory(
          GospelCategoryEnum.JEWISH_SONGS
        ),
        protestantSongs: GospelService.getByCategory(
          GospelCategoryEnum.PROTESTANT_SONGS
        ),
        modern: GospelService.getByCategory(GospelCategoryEnum.MODERN),
        others: GospelService.getByCategory(GospelCategoryEnum.OTHERS),
      },
    }
  },
})
</script>
