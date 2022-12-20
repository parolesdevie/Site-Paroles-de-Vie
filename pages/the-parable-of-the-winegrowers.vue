<template>
  <div class="flex flex-col min-h-screen dark:bg-light-black dark:text-white">
    <!-- header -->
    <Header />
    <div class="mb-auto px-3 md:px-0 py-4 flex flex-col">
      <Breadcrumb class="container mx-auto" :items="breadcrumbItems" />

      <!-- intro -->
      <SectionIntroTopics :cover="cover" :frontFile="frontFile">
        <template v-slot:title>La parabole des vignerons</template>
        <template v-slot:body>
          Les Vignerons infidèles est une parabole de Jésus-Christ retranscrite
          dans les Évangiles de Matthieu (<strong> Mat 21:33-46</strong>), Marc
          (<strong>Mc 12:1-12</strong>) et Luc (<strong>Lc 20:9-19</strong>), et
          dans l'Evangile apocryphe de Thomas (<strong>Thomas 65</strong>). Elle
          incite à porter du fruit c'est-à-dire à être fidèle et obéissant aux
          commandements christiques. Elle menace du châtiment divin quiconque
          rejettera Jésus.
        </template>
      </SectionIntroTopics>

      <BgColorSection>
        <template v-slot:title>Réfutation de la thèse islamique</template>
        <template v-slot:body>
          La da’wa, le prosélytisme islamique, affirme que la prophétie du
          Christ en <strong>Mat 21:43</strong>, « le Royaume de Dieu vous sera
          retiré et donné à un autre peuple qui en rendra des fruits »
          prophétiserait l’arrivée de l’islam et de son supposé prophète,
          Muhammad. Il est donc important pour les Chrétiens de savoir répondre
          avec exactitude avec de ne laisser aucun doute s’immiscer dans la foi
          des plus fragiles.
          <strong
            >Cette étude montrera de manière exhaustive qu’une telle prétention
            ne s’appuie sur rien. Nous montrerons au contraire que tout
            chercheur sincère ne peut arriver qu’à la conclusion que le Christ
            annonce ici la naissance de son Eglise</strong
          >. Voir dans cette prophétie autre chose est une hérésie totale. Nous
          montrerons par ailleurs que cette prétention de la da’wa est en
          réalité une affirmation très grave car complètement
          <strong>antichrist</strong>.
        </template>
      </BgColorSection>

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
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionDebate from '~/components/debate/SectionDebate.vue'
import SectionDownloadDocumentsList from '~/components/document/SectionDownloadDocumentsList.vue'
import SectionIntroTopics from '~/components/topics/SectionIntroTopics.vue'
import SectionVideo from '~/components/videos/SectionVideo.vue'
import { BookService, DebateService, TopicService } from '~/services'
import { AuthorEnum, FormatEnum, ISourceFile, VideoLinkEnum } from '~/types'

export default Vue.extend({
  name: 'MagazinesPage',

  components: {
    SectionVideo,
    SectionDownloadDocumentsList,
    SectionDebate,
    SectionIntroTopics,
  },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/',
        },
        {
          name: 'La parabole des vignerons',
          to: '/the-parable-of-the-winegrowers/',
        },
      ],
      cover: TopicService.getBySlug('/the-parable-of-the-winegrowers/')?.cover,
      books: BookService.getAll(),
      playlistYoutubeIdDebates: 'PLaBmOZ7eJG-UWwZEGp_RWVnBqOe_iU0uw',
      playlistYoutubeIdVideos: 'PLaBmOZ7eJG-XE3u8rI1SBnoi6z4853aC5',
      frontFile: {
        author: AuthorEnum.BENEVOLENCE,
        format: FormatEnum.PDF,
        slug: 'la-parabole-des-vignerons-complet',
        thumbnail: '/images/pdf/le-paraclet',
        href: '/pdf/le-paraclet.pdf',
        title: 'Le Paraclet',
      } as ISourceFile,
      videos: [
        {
          source: VideoLinkEnum.TIKTOK,
          name: 'Chaîne Paroles de Vie (p1)',
          url: 'https://www.tiktok.com/@paroles.de.vie/video/7138382136482008325',
          thumbnail: '/images/video/7138382136482008325.webp',
        },
        {
          source: VideoLinkEnum.TIKTOK,
          name: 'Chaîne Paroles de Vie (p2)',
          url: 'https://www.tiktok.com/@paroles.de.vie/video/7138385953864928518',
          thumbnail: '/images/video/7138385953864928518.webp',
        },
        {
          source: VideoLinkEnum.TIKTOK,
          name: 'Chaîne Paroles de Vie (p3)',
          url: 'https://www.tiktok.com/@paroles.de.vie/video/7138455829904149766',
          thumbnail: '/images/video/7138455829904149766.webp',
        },
        {
          source: VideoLinkEnum.TIKTOK,
          name: 'Chaîne Paroles de Vie (p4)',
          url: 'https://www.tiktok.com/@paroles.de.vie/video/7138993803918101766',
          thumbnail: '/images/video/7138993803918101766.webp',
        },
        {
          source: VideoLinkEnum.TIKTOK,
          name: 'Chaîne Paroles de Vie (p5)',
          url: 'https://www.tiktok.com/@paroles.de.vie/video/7139474689625197829',
          thumbnail: '/images/video/7139474689625197829.webp',
        },
        {
          source: VideoLinkEnum.TIKTOK,
          name: 'Chaîne Paroles de Vie (p6)',
          url: 'https://www.tiktok.com/@paroles.de.vie/video/7139564753969581317',
          thumbnail: '/images/video/7139564753969581317.webp',
        },
        {
          source: VideoLinkEnum.TIKTOK,
          name: 'Chaîne Paroles de Vie (p7)',
          url: 'https://www.tiktok.com/@paroles.de.vie/video/7140479614119415045',
          thumbnail: '/images/video/7140479614119415045.webp',
        },
        {
          source: VideoLinkEnum.TIKTOK,
          name: 'Extrait débat Coliseum | JMS Vs Hanane & Ali',
          url: 'https://www.tiktok.com/@chaine.coliseum/video/7158836430087654661',
          thumbnail: '/images/video/7158836430087654661.webp',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Parabole des mauvais vignerons - Jean-Marc Thobois',
          url: 'https://www.youtube.com/watch?v=00lnO2Ws7Ak',
          thumbnail: 'https://img.youtube.com/vi/00lnO2Ws7Ak/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Débat Coliseum | Mengo Vs Sham',
          url: 'https://youtu.be/PVMAeP2virw',
          thumbnail: 'https://img.youtube.com/vi/PVMAeP2virw/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Débat Coliseum | JMS Vs Hanane & Ali',
          url: 'https://youtu.be/AsRVx4vxZ6w',
          thumbnail: 'https://img.youtube.com/vi/AsRVx4vxZ6w/mqdefault.jpg',
        },
      ],
      files: [
        {
          author: AuthorEnum.FIDELIS_AND_VERAX,
          format: FormatEnum.PDF,
          thumbnail: '/images/pdf/la-parabole-des-vignerons-1ere-partie',
          href: '/pdf/la-parabole-des-vignerons-1ere-partie.pdf',
          title: 'La Parabole des vignerons 1ére partie',
        },
        {
          author: AuthorEnum.FIDELIS_AND_VERAX,
          format: FormatEnum.PDF,
          thumbnail: '/images/pdf/la-parabole-des-vignerons-2eme-partie',
          href: '/pdf/la-parabole-des-vignerons-2eme-partie.pdf',
          title: 'La Parabole des vignerons 2éme partie',
        },
      ],
      debates: DebateService.getByTopic('the-parable-of-the-winegrowers'),
    }
  },
})
</script>
