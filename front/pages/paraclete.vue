<script setup lang="ts">
import { DebateService } from '~~/services'

useHead({
  title: 'Le Paraclet dans la Bible - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/paraclet.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/paraclet.webp'
    }
  ]
})

const debates = useState(() => DebateService.getByTopic('the-paraclet'))
</script>

<template>
  <div class="mb-auto px-3 md:px-0 py-4 flex flex-col">
    <Breadcrumb class="container mx-auto" :items="breadcrumbItems" />

    <!-- intro -->
    <SectionIntroTopics :cover="cover" :frontFile="files[0]">
      <template v-slot:title>Le Paraclet</template>
      <template v-slot:body>
        Paraclet (<a
          class="hover:text-blue-700"
          href="https://fr.wiktionary.org/wiki/%CF%80%CE%B1%CF%81%CE%AC%CE%BA%CE%BB%CE%B7%CF%84%CE%BF%CF%82"
          target="_blank"
          rel="noopener noreferrer"
          >Παράκλητος, Parakletos</a
        >, en latin<a
          class="hover:text-blue-700"
          href="https://fr.wiktionary.org/wiki/paracletus"
          target="_blank"
          rel="noopener noreferrer"
          >Paracletus</a
        >) est un mot d'origine grecque qui signifie « <strong>
          celui qu'on appelle à son secours </strong
        >» (de παρακαλέω, « appeler auprès de soi »), ou « celui qui
        intercède », formant les substantifs « avocat », « défenseur »,
        « intercesseur ».
      </template>
    </SectionIntroTopics>

    <BgColorSection>
      <template v-slot:title>Réfutation de la thèse islamique</template>
      <template v-slot:body>
        Muhammad contredit les paroles de Jésus (<a
          class="hover:text-blue-700"
          href="https://www.tiktok.com/@chaine.coliseum/video/7129761699342601478"
          target="_blank"
          rel="noopener noreferrer"
          >dilemme de l'adultère</a
        >) donc il parle de lui-même et ne lui rend pas témoignage (<strong
          >Jn 14:26</strong
        >, <strong>Jn 15:26</strong>, <strong>Mat 24:35</strong>,
        <strong>Luc 16:18</strong>, <strong>Coran 33:37</strong>), il est ni
        dans la vérité, ni un esprit (<strong>Jn 14:26</strong>,
        <strong>Jn 15:26</strong>), ni éternel (<strong>Jn 14:16</strong>), ni
        connu des apôtres (<strong>Jn 14:16</strong>), ni dans les apôtres
        (<strong>Jn 14:17</strong>) et Il ne peut être celui qui nous vient en
        aide si on lui vient même en aide (<strong>Coran 7:157</strong>).
      </template>
    </BgColorSection>

    <DebateSectionDebate
      title="Découvrir en débats"
      class="container mx-auto mt-4 md:mt-10"
      :debates="debates"
      :hideSubject="false"
    />

    <!-- section youtube videos  -->
    <SectionVideo
      keepOnGrid
      class="container mx-auto mt-4 md:mt-10"
      :playlistYoutubeId="playlistYoutubeIdVideos"
      playlistDailymotionId="x7okrg"
      :videos="videos"
    />

    <!-- section download document  -->
    <SectionDownloadDocumentsList
      class="container mx-auto mt-4 md:mt-10"
      :files="files"
    />
  </div>
</template>

<script lang="ts">
import SectionDownloadDocumentsList from '~~/components/document/SectionDownloadDocumentsList.vue'
import BgColorSection from '~~/components/global/BgColorSection.vue'
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import SectionVideo from '~~/components/videos/SectionVideo.vue'
import { TopicService, ResourceService } from '~~/services'
import { VideoLinkEnum } from '~~/types'

definePageMeta({
  layout: 'article'
})

export default defineNuxtComponent({
  name: 'ParacletePage',

  components: {
    SectionVideo,
    SectionDownloadDocumentsList,
    BgColorSection,
    SectionIntroTopics
  },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Le Paraclet',
          to: '/paraclete/'
        }
      ],
      cover: TopicService.getTopicCoverBySlug('/paraclete/'),
      playlistYoutubeIdVideos: 'PLaBmOZ7eJG-WG_rv9QU7qomxydYrL_2KK',
      videos: [
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Le paraclet dans le corpus johannique',
          url: 'https://youtu.be/HSDONEoBWmU',
          thumbnail: 'https://img.youtube.com/vi/HSDONEoBWmU/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Analyse du débat sur le Paraclet entre Paroles de vie VS Jésus Musulman',
          url: 'https://youtu.be/c1hfywA9pco',
          thumbnail: 'https://img.youtube.com/vi/c1hfywA9pco/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Débat Paraclet Paroles de vie VS Jésus Musulman',
          url: 'https://youtu.be/ikXzGnoKjkM',
          thumbnail: 'https://img.youtube.com/vi/ikXzGnoKjkM/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "Débat Paraclet | Paroles de vie VS Les élèves d'Abdoul Madjid",
          url: 'https://youtu.be/nuF4nTxpikI',
          thumbnail: 'https://img.youtube.com/vi/nuF4nTxpikI/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Débat Paraclet | Paroles de vie Vs Cheick Adam',
          url: 'https://youtu.be/OjjBUpAlvUA',
          thumbnail: 'https://img.youtube.com/vi/OjjBUpAlvUA/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Mahomet / Muhammad est-il le Consolateur (Paraclet) annoncé dans la Bible ? Cas de Jean 14.',
          url: 'https://youtu.be/9cRFSqYefo8',
          thumbnail: 'https://img.youtube.com/vi/9cRFSqYefo8/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.TIKTOK,
          name: 'Le Dilemme du Paradis',
          url: 'https://www.tiktok.com/@chaine.coliseum/video/7199121958850579718',
          thumbnail: '/images/video/7199121958850579718.webp'
        },
        {
          source: VideoLinkEnum.TIKTOK,
          name: "Le Dilemme de l'adultère",
          url: 'https://www.tiktok.com/@chaine.coliseum.2/video/7199122527422024965',
          thumbnail: '/images/video/7199122527422024965.webp'
        },
        {
          source: VideoLinkEnum.TIKTOK,
          name: "Le Dilemme de l'Eucharistie",
          url: 'https://www.tiktok.com/@chaine.coliseum.2/video/7211733098558524678',
          thumbnail: '/images/video/7211733098558524678.webp'
        },
        {
          source: VideoLinkEnum.TIKTOK,
          name: 'Le Dilemme de la Crucifixion',
          url: 'https://www.tiktok.com/@chaine.coliseum.2/video/7199313848069836037',
          thumbnail: '/images/video/7199313848069836037.webp'
        },
        {
          source: VideoLinkEnum.TIKTOK,
          name: 'Le Dilemme du Baptême',
          url: 'https://www.tiktok.com/@chaine.coliseum.2/video/7199355834768362757',
          thumbnail: '/images/video/7199355834768362757.webp'
        },
        {
          source: VideoLinkEnum.TIKTOK,
          name: 'Le dilemme du Fils de Dieu',
          url: 'https://www.tiktok.com/@chaine.coliseum.2/video/7199400110386646278',
          thumbnail: '/images/video/7199400110386646278.webp'
        },
        {
          source: VideoLinkEnum.TIKTOK,
          name: "Le Dilemme de l'adultère",
          url: 'https://www.tiktok.com/@chaine.coliseum/video/7129761699342601478',
          thumbnail: '/images/video/7129761699342601478.webp'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "Chaîne Catholique d'Arnaud Dumouch",
          url: 'https://www.youtube.com/watch?v=4fuKpBOJLEg',
          thumbnail: 'https://img.youtube.com/vi/4fuKpBOJLEg/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne DBK Infinite',
          url: 'https://youtu.be/FP6XwXMPWpc',
          thumbnail: 'https://img.youtube.com/vi/FP6XwXMPWpc/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne KTOTV',
          url: 'https://youtu.be/8F8wdDNDoWQ',
          thumbnail: 'https://img.youtube.com/vi/8F8wdDNDoWQ/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne Saint Sauveur',
          url: 'https://www.youtube.com/watch?v=B8NJ3lO5Xi4',
          thumbnail: 'https://img.youtube.com/vi/B8NJ3lO5Xi4/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne Mother of Churches',
          url: 'https://youtu.be/OA86dpu7RJU',
          thumbnail: 'https://img.youtube.com/vi/OA86dpu7RJU/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne KEPHA TV',
          url: 'https://www.youtube.com/watch?v=MXg4BzaepBc',
          thumbnail: 'https://img.youtube.com/vi/MXg4BzaepBc/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne JesusIsGod',
          url: 'https://youtu.be/CJJFtA3_nH8',
          thumbnail: 'https://img.youtube.com/vi/CJJFtA3_nH8/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "Chaîne  Naître de nouveau avec Yeshoua Imanouel Hamashia'h",
          url: 'https://youtu.be/pUbIipopCuQ',
          thumbnail: 'https://img.youtube.com/vi/pUbIipopCuQ/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne Notre-Dame du Chêne',
          url: 'https://youtu.be/zO5IPd_KtDE',
          thumbnail: 'https://img.youtube.com/vi/zO5IPd_KtDE/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne Jésus Facile',
          url: 'https://youtu.be/l-w8l761EbE',
          thumbnail: 'https://img.youtube.com/vi/l-w8l761EbE/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne Françoise Breynaert',
          url: 'https://youtu.be/iPHKvPvA5Ws',
          thumbnail: 'https://img.youtube.com/vi/iPHKvPvA5Ws/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne Olivier Nedar',
          url: 'https://youtu.be/U37cIjPQeoU',
          thumbnail: 'https://img.youtube.com/vi/U37cIjPQeoU/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "Chaîne Église protestante unie de l'Étoile à Paris",
          url: 'https://youtu.be/LsohId7bgrk',
          thumbnail: 'https://img.youtube.com/vi/LsohId7bgrk/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne Mokrane Syphax 3x7',
          url: 'https://youtu.be/Xp77chG6CJQ',
          thumbnail: 'https://img.youtube.com/vi/Xp77chG6CJQ/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne Retour du Christ',
          url: 'https://youtu.be/oH0r4_YZZAg',
          thumbnail: 'https://img.youtube.com/vi/oH0r4_YZZAg/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "Chaîne Les amis d'EMCI TV",
          url: 'https://youtu.be/IYF21w9iqn8',
          thumbnail: 'https://img.youtube.com/vi/IYF21w9iqn8/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.DAILYMOTION,
          name: 'Le prophète de l’Islam est-il le Paraclet annoncé dans la sainte Bible?',
          url: 'https://dai.ly/xjdmko',
          thumbnail: 'https://www.dailymotion.com/thumbnail/video/xjdmko'
        },
        {
          source: VideoLinkEnum.DAILYMOTION,
          name: "Le prophète de l'Islam est-il le Paraclet annoncé dans la Bible? 2",
          url: 'https://dai.ly/xiukm3',
          thumbnail: 'https://www.dailymotion.com/thumbnail/video/xiukm3'
        },
        {
          source: VideoLinkEnum.DAILYMOTION,
          name: 'Mahomet est-il le Consolateur (Paraclet) ?',
          url: 'https://www.dailymotion.com/video/xp4li8',
          thumbnail: 'https://www.dailymotion.com/thumbnail/video/xp4li8'
        },
        {
          source: VideoLinkEnum.DAILYMOTION,
          name: 'Ahmed Deedat et le Paraclet',
          url: 'https://www.dailymotion.com/video/x19dz9v',
          thumbnail: 'https://www.dailymotion.com/thumbnail/video/x19dz9v'
        },
        {
          source: VideoLinkEnum.DAILYMOTION,
          name: 'Qui est le Paraclet dans la Bible ?',
          url: 'https://www.dailymotion.com/video/x10ks37',
          thumbnail: 'https://www.dailymotion.com/thumbnail/video/x10ks37'
        },
        {
          source: VideoLinkEnum.DAILYMOTION,
          name: 'Le Paraclet est-il Mohamed ?',
          url: 'https://www.dailymotion.com/video/xvfr4e',
          thumbnail: 'https://www.dailymotion.com/thumbnail/video/xvfr4e'
        },
        {
          source: VideoLinkEnum.DAILYMOTION,
          name: 'Was Muhammad the Comforter of John 14:16-17',
          url: 'https://www.dailymotion.com/video/xbyb3h',
          thumbnail: 'https://www.dailymotion.com/thumbnail/video/xbyb3h'
        }
      ],
      files: ResourceService.getBySlug('paraclete')
    }
  }
})
</script>
