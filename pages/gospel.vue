<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- intro -->
      <SectionIntroTopics topicSlug="gospel">
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
        playlistId="PLaBmOZ7eJG-VD9fBWOVjYZ3u4inQwt0NT"
        :videos="videos.ode"
      />
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        title="Chant liturgique"
        playlistId="PLaBmOZ7eJG-WPmxnbO5BLJRwi5iPg3tgP"
        :videos="videos.liturgicalSongs"
      />
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        title="Active Christianity"
        playlistId="PLaBmOZ7eJG-VyUORESelod2tkG4XN2WbU"
        :videos="videos.activeChristianity"
      />
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        title="Chant de la communauté de l' Emmanuel"
        playlistId="PLaBmOZ7eJG-XL71fbzjvbjSDulEGzmGCL"
        :videos="videos.emmanuelCommunity"
      />
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        title="Chant des témoins de Jéhovah"
        playlistId="PLaBmOZ7eJG-Uau4Ft-9GMRHrzDXYfD4Mj"
        :videos="videos.tj"
      />
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        title="Chants juif"
        playlistId="PLaBmOZ7eJG-UAkG289514PguUtY0pRgkE"
        :videos="videos.jewishSongs"
      />
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        title="Chants protestants"
        playlistId="PLaBmOZ7eJG-UAkG289514PguUtY0pRgkE"
        :videos="videos.protestantSongs"
      />
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        title="Moderne"
        playlistId="PLaBmOZ7eJG-V0hBZainCo2q-D1-ducPsT"
        :videos="videos.modern"
      />
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        title="Autres"
        playlistId="PLaBmOZ7eJG-WygTHv8Wn4kTfUASMY_gKk"
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
import { VideoLinkEnum } from '~/types'

export default Vue.extend({
  name: 'GospelPage',

  components: { SectionIntroTopics, SectionVideo },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Louanges',
          to: '/the-divinity-of-jesus/',
        },
      ],
      playlistIdVideos: 'PLaBmOZ7eJG-WG_rv9QU7qomxydYrL_2KK',
      videos: {
        ode: [
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'Samuel Barber - Agnus Dei',
            url: 'https://youtu.be/AiuC_CaObbI',
            thumbnail: 'https://img.youtube.com/vi/AiuC_CaObbI/mqdefault.jpg',
          },
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'Miserere mei',
            url: 'https://youtu.be/rs5bc_P1kKo',
            thumbnail: 'https://img.youtube.com/vi/rs5bc_P1kKo/mqdefault.jpg',
          },
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'Chorale Exultemus : Ô prends mon âme',
            url: 'https://youtu.be/tr4dkk5ThTk',
            thumbnail: 'https://img.youtube.com/vi/tr4dkk5ThTk/mqdefault.jpg',
          },
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'Plus près de Toi mon Dieu',
            url: 'https://youtu.be/ydWYZuTIq24',
            thumbnail: 'https://img.youtube.com/vi/ydWYZuTIq24/mqdefault.jpg',
          },
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'Gloire à Dieu au plus haut des cieux',
            url: 'https://youtu.be/axFrRnJfST4',
            thumbnail: 'https://img.youtube.com/vi/axFrRnJfST4/mqdefault.jpg',
          },
        ],
        liturgicalSongs: [
          {
            source: VideoLinkEnum.YOUTUBE,
            name: '09- طلبة القديس يوحنا الذهبي الفم - باللحن الأول',
            url: 'https://youtu.be/owex_ZvxrPg',
            thumbnail: 'https://img.youtube.com/vi/owex_ZvxrPg/mqdefault.jpg',
          },
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'Hosanna Filio David',
            url: 'https://youtu.be/cElTb_29dMo',
            thumbnail: 'https://img.youtube.com/vi/cElTb_29dMo/mqdefault.jpg',
          },
        ],
        activeChristianity: [
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'Thank You for calling me!',
            url: 'https://youtu.be/NQGrZ3ySEJI',
            thumbnail: 'https://img.youtube.com/vi/NQGrZ3ySEJI/mqdefault.jpg',
          },
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'Just Today - Shillong Chamber Choir',
            url: 'https://youtu.be/q6h1nS3F5f8',
            thumbnail: 'https://img.youtube.com/vi/q6h1nS3F5f8/mqdefault.jpg',
          },
          {
            source: VideoLinkEnum.YOUTUBE,
            name: '3 Hours Non Stop Uplifting Christian Music with Lyrics',
            url: 'https://youtu.be/d1fhUREzdAk',
            thumbnail: 'https://img.youtube.com/vi/d1fhUREzdAk/mqdefault.jpg',
          },
        ],
        emmanuelCommunity: [
          {
            source: VideoLinkEnum.YOUTUBE,
            name: "Mon pere je m'abandonne à toi - Chant de la communauté de l' Emmanuel",
            url: 'https://youtu.be/fgzIEltUbvc',
            thumbnail: 'https://img.youtube.com/vi/fgzIEltUbvc/mqdefault.jpg',
          },
        ],
        tj: [
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'Chantons à Jéhovah - Chant 134 - Imagine - toi dans le monde nouveau',
            url: 'https://youtu.be/h05Xi9fFPBk',
            thumbnail: 'https://img.youtube.com/vi/h05Xi9fFPBk/mqdefault.jpg',
          },
        ],
        jewishSongs: [
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'Shwekey & Zemiros | שויתי | Acapella Version',
            url: 'https://youtu.be/2I-ZO1k7pkI',
            thumbnail: 'https://img.youtube.com/vi/2I-ZO1k7pkI/mqdefault.jpg',
          },
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'Im Hashem Lo Yivneh Bayis - Shira Choir | מקהלת שירה מבצעת את ׳אם השם לא יבנה בית',
            url: 'https://youtu.be/ckVYO9oI8vc',
            thumbnail: 'https://img.youtube.com/vi/ckVYO9oI8vc/mqdefault.jpg',
          },
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'Shira Choir Singing New Rechnitz - Medley at Kumzits Live מקהלת שירה/ רכניץ קומזיץ',
            url: 'https://youtu.be/MnxO7LS4gq0',
            thumbnail: 'https://img.youtube.com/vi/MnxO7LS4gq0/mqdefault.jpg',
          },
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'אקפלה- סט ווקאלי 2021 | Acapella Playlist',
            url: 'https://youtu.be/PHzgERLpsXY',
            thumbnail: 'https://img.youtube.com/vi/PHzgERLpsXY/mqdefault.jpg',
          },
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'Matt Dubb - Adama V’shamayim | מאט דאב - אדמה ושמים',
            url: 'https://youtu.be/Hv4-EtH11Ew',
            thumbnail: 'https://img.youtube.com/vi/Hv4-EtH11Ew/mqdefault.jpg',
          },
        ],
        protestantSongs: [
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'What A Beautiful Name - Hillsong Worship',
            url: 'https://youtu.be/nQWFzMvCfLE',
            thumbnail: 'https://img.youtube.com/vi/nQWFzMvCfLE/mqdefault.jpg',
          },
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'Leeland - Way Maker',
            url: 'https://youtu.be/iJCV_2H9xD0',
            thumbnail: 'https://img.youtube.com/vi/iJCV_2H9xD0/mqdefault.jpg',
          },
        ],
        others: [
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'Promesses - Quels sont les mots',
            url: 'https://youtu.be/xDLfFls_uLw',
            thumbnail: 'https://img.youtube.com/vi/xDLfFls_uLw/mqdefault.jpg',
          },
          {
            source: VideoLinkEnum.YOUTUBE,
            name: "Promesses - J'ai eu faim",
            url: 'https://youtu.be/RjP5EmE0-I0',
            thumbnail: 'https://img.youtube.com/vi/RjP5EmE0-I0/mqdefault.jpg',
          },
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'Music of Forgotten Temples and Abandoned Places',
            url: 'https://youtu.be/737dP6K6dd8',
            thumbnail: 'https://img.youtube.com/vi/737dP6K6dd8/mqdefault.jpg',
          },
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'ARAMAEUS (The Prayer)',
            url: 'https://youtu.be/ciEd-YzlOr0',
            thumbnail: 'https://img.youtube.com/vi/ciEd-YzlOr0/mqdefault.jpg',
          },
          {
            source: VideoLinkEnum.YOUTUBE,
            name: "1 Hour of The Lord's Prayer in Aramaic",
            url: 'https://youtu.be/n3EhgrsfTnQ',
            thumbnail: 'https://img.youtube.com/vi/n3EhgrsfTnQ/mqdefault.jpg',
          },
        ],
        modern: [
          {
            source: VideoLinkEnum.YOUTUBE,
            name: 'for KING & COUNTRY - amen',
            url: 'https://youtu.be/jThYchneZvw',
            thumbnail: 'https://img.youtube.com/vi/jThYchneZvw/mqdefault.jpg',
          },
        ],
      },
    }
  },
})
</script>
