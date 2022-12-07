<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <Breadcrumb :items="breadcrumbItems" />

      <section class="mt-4 md:mt-10">
        <!-- title -->
        <h1 class="flex items-center font-bold text-3xl md:text-4xl">
          Le Paraclet
        </h1>

        <p class="mt-4 md:mt-8 font-semibold text-base text-gray-800 max-w-2xl">
          Paraclet (<a
            class="hover:text-blue-700"
            href="https://fr.wiktionary.org/wiki/%CF%80%CE%B1%CF%81%CE%AC%CE%BA%CE%BB%CE%B7%CF%84%CE%BF%CF%82"
            target="_blank"
            rel="noopener noreferrer"
            >Παράκλητος, Parakletos</a
          >, en latin
          <a
            class="hover:text-blue-700"
            href="https://fr.wiktionary.org/wiki/paracletus"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paracletus</a
          >) est un mot d'origine grecque qui signifie «
          <strong> celui qu'on appelle à son secours </strong>» (de παρακαλέω, «
          appeler auprès de soi»), ou « celui qui intercède », formant les
          substantifs « avocat », « défenseur », « intercesseur ».
        </p>
      </section>

      <SectionDownloadDocumentsList class="mt-4 md:mt-10" :files="files" />

      <!-- section youtube videos  -->
      <SectionVideo
        class="mt-4 md:mt-10"
        :playlistUrl="playlistUrl"
        :videos="videos"
      />
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionDownloadDocumentsList from '~/components/document/SectionDownloadDocumentsList.vue'
import SectionMag from '~/components/magazine/SectionMag.vue'
import SectionVideo from '~/components/videos/SectionVideo.vue'
import { BookService } from '~/services'
import { AuthorEnum, FormatEnum, VideoLinkEnum } from '~/types'

export default Vue.extend({
  name: 'MagazinesPage',

  components: { SectionMag, SectionVideo, SectionDownloadDocumentsList },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Le Paraclet',
          to: '/paraclete/',
        },
      ],
      books: BookService.getAll(),
      playlistUrl:
        'https://youtube.com/playlist?list=PLaBmOZ7eJG-WG_rv9QU7qomxydYrL_2KK',
      videos: [
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "Chaîne Catholique d'Arnaud Dumouch",
          url: 'https://www.youtube.com/watch?v=4fuKpBOJLEg',
          thumbnail: 'https://img.youtube.com/vi/4fuKpBOJLEg/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne DBK Infinite',
          url: 'https://youtu.be/FP6XwXMPWpc',
          thumbnail: 'https://img.youtube.com/vi/FP6XwXMPWpc/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne KTOTV',
          url: 'https://youtu.be/8F8wdDNDoWQ',
          thumbnail: 'https://img.youtube.com/vi/8F8wdDNDoWQ/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne Saint Sauveur',
          url: 'https://www.youtube.com/watch?v=B8NJ3lO5Xi4',
          thumbnail: 'https://img.youtube.com/vi/B8NJ3lO5Xi4/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne Mother of Churches',
          url: 'https://youtu.be/OA86dpu7RJU',
          thumbnail: 'https://img.youtube.com/vi/OA86dpu7RJU/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne KEPHA TV',
          url: 'https://www.youtube.com/watch?v=MXg4BzaepBc',
          thumbnail: 'https://img.youtube.com/vi/MXg4BzaepBc/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne JesusIsGod',
          url: 'https://youtu.be/CJJFtA3_nH8',
          thumbnail: 'https://img.youtube.com/vi/CJJFtA3_nH8/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "Chaîne  Naître de nouveau avec Yeshoua Imanouel Hamashia'h",
          url: 'https://youtu.be/pUbIipopCuQ',
          thumbnail: 'https://img.youtube.com/vi/pUbIipopCuQ/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne Notre-Dame du Chêne',
          url: 'https://youtu.be/zO5IPd_KtDE',
          thumbnail: 'https://img.youtube.com/vi/zO5IPd_KtDE/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne Jésus Facile',
          url: 'https://youtu.be/l-w8l761EbE',
          thumbnail: 'https://img.youtube.com/vi/l-w8l761EbE/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne Françoise Breynaert',
          url: 'https://youtu.be/iPHKvPvA5Ws',
          thumbnail: 'https://img.youtube.com/vi/iPHKvPvA5Ws/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne Olivier Nedar',
          url: 'https://youtu.be/U37cIjPQeoU',
          thumbnail: 'https://img.youtube.com/vi/U37cIjPQeoU/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "Chaîne Église protestante unie de l'Étoile à Paris",
          url: 'https://youtu.be/LsohId7bgrk',
          thumbnail: 'https://img.youtube.com/vi/LsohId7bgrk/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne Mokrane Syphax 3x7',
          url: 'https://youtu.be/Xp77chG6CJQ',
          thumbnail: 'https://img.youtube.com/vi/Xp77chG6CJQ/mqdefault.jpg',
        },
      ],
      files: [
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          thumbnail: '/images/pdf/le-paraclet',
          href: '/pdf/le-paraclet.pdf',
          title: 'Le Paraclet',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          thumbnail:
            '/sources/ghevonds-text-of-the-correspondence-between-umar-ii-and-leo-iii/thumbnail',
          href: '/sources/ghevonds-text-of-the-correspondence-between-umar-ii-and-leo-iii/pdf/jeffrey-1944-htr-ghevond.pdf',
          title:
            "Ghevond's Text of the Correspondence between 'Umar II and Leo III",
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.EPUB,
          thumbnail:
            '/sources/ghevonds-text-of-the-correspondence-between-umar-ii-and-leo-iii/thumbnail',
          href: '/sources/ghevonds-text-of-the-correspondence-between-umar-ii-and-leo-iii/epub/jeffrey1944htrghevond-jeffrey-1944-htr-ghevond.epub',
          title:
            "Ghevond's Text of the Correspondence between 'Umar II and Leo III",
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          thumbnail: undefined,
          href: '/sources/the-arabic-letters-of-the-byzantine-emperor-leo-iii-to-the-caliph-umar-ibn-abd-al-aziz/pdf/the-arabic-letters-of-the-byzantine-emperor-leo-iii-to-the-caliph-umar-ibn-abd-al-aziz.pdf',
          title:
            'The Arabic Letters of the Byzantine Emperor Leo III to the Caliph ‘Umar Ibn ‘Abd al-‘Aziz',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.EPUB,
          thumbnail:
            '/sources/theological-issues-in-christian-muslim-dialogue-tieszen-charles/thumbnail',
          href: '/sources/theological-issues-in-christian-muslim-dialogue-tieszen-charles/epub/theological-issues-in-christian-muslim-dialogue-tieszen-charles-z-liborg.epub',
          title:
            'Theological Issues in Christian-Muslim Dialogue (Tieszen Charles)',
        },
      ],
    }
  },
})
</script>
