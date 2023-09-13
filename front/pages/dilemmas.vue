<script setup lang="ts">
useHead({
  title: 'Les Dilemmes - Paroles de vie',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Les Dilemmes'
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://www.paroles-de-vie.tk/seo/dilemmas.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/dilemmas.webp'
    }
  ]
})
</script>

<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- intro -->
    <SectionIntroTopics :cover="cover">
      <template v-slot:title>Les Dilemmes</template>
    </SectionIntroTopics>

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
</template>

<script lang="ts">
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import SectionVideo from '~~/components/videos/SectionVideo.vue'
import SectionDownloadDocumentsList from '~~/components/document/SectionDownloadDocumentsList.vue'
import { TopicService } from '~~/services'
import { AuthorEnum, FormatEnum, VideoLinkEnum } from '~~/types'

export default defineNuxtComponent({
  name: 'DilemmasPage',

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
          name: 'Les Dilemmes',
          to: '/dilemmas/'
        }
      ],
      cover: TopicService.getBySlug('/dilemmas/')?.cover,
      playlistYoutubeIdVideos: 'PLaUKVVcTcbOI_kk69CtWBhpMGVfrqU7eu',
      videos: [
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Le dilemme de la gestation',
          url: 'https://youtu.be/dY1eVVDNLO8',
          thumbnail: 'https://img.youtube.com/vi/dY1eVVDNLO8/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Le dilemme du Fils de Dieu',
          url: 'https://youtu.be/A6oQFB_00L8',
          thumbnail: 'https://img.youtube.com/vi/A6oQFB_00L8/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Le dilemme du Baptême',
          url: 'https://youtu.be/ecZLdHnlJT8',
          thumbnail: 'https://img.youtube.com/vi/ecZLdHnlJT8/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Le Dilemme de la Crucifixion',
          url: 'https://youtu.be/tbUxpZ96l_0',
          thumbnail: 'https://img.youtube.com/vi/tbUxpZ96l_0/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Le Dilemme du Paradis',
          url: 'https://youtu.be/kFzeNpjaBmc',
          thumbnail: 'https://img.youtube.com/vi/kFzeNpjaBmc/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "Le Dilemme de l'adultère",
          url: 'https://youtu.be/5bcJ6hN_ztQ',
          thumbnail: 'https://img.youtube.com/vi/5bcJ6hN_ztQ/mqdefault.jpg'
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "Le dilemme de l'Eucharistie",
          url: 'https://youtu.be/7WA9SAgKtSI',
          thumbnail: 'https://img.youtube.com/vi/7WA9SAgKtSI/mqdefault.jpg'
        }
      ],
      files: [
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          thumbnail: '/images/pdf/le-dilemme-de-la-gestation',
          href: '/pdf/le-dilemme-de-la-gestation.pdf',
          title: 'Le dilemme de la gestation'
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          thumbnail: '/images/pdf/le-dilemme-du-fils-de-dieu',
          href: '/pdf/le-dilemme-du-fils-de-dieu.pdf',
          title: 'Le dilemme du Fils de Dieu'
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          thumbnail: '/images/pdf/le-dilemme-du-bapteme',
          href: '/pdf/le-dilemme-du-bapteme.pdf',
          title: 'Le dilemme du Baptême'
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          thumbnail: '/images/pdf/le-dilemme-de-la-crucifixion',
          href: '/pdf/le-dilemme-de-la-crucifixion.pdf',
          title: 'Le Dilemme de la Crucifixion'
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          thumbnail: '/images/pdf/le-dilemme-du-paradis',
          href: '/pdf/le-dilemme-du-paradis.pdf',
          title: 'Le dilemme du Paradis'
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          thumbnail: '/images/pdf/le-dilemme-de-ladultere',
          href: '/pdf/le-dilemme-de-ladultere.pdf',
          title: "Le dilemme de l'adultère"
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          thumbnail: '/images/pdf/le-dilemme-de-l-eucharistie',
          href: '/pdf/le-dilemme-de-l-eucharistie.pdf',
          title: "Le dilemme de l'Eucharistie"
        }
      ]
    }
  }
})
</script>
