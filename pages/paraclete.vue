<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="mb-auto px-3 md:px-0 py-4 flex flex-col">
      <Breadcrumb class="container mx-auto" :items="breadcrumbItems" />

      <section class="container mx-auto mt-4 md:mt-10">
        <div class="relative flex flex-col md:flex-row">
          <div class="contents">
            <img
              class="
                absolute
                md:relative
                top-0
                right-0
                h-9
                w-h-9
                md:h-56 md:w-56
                rounded-full
                md:rounded-xl
                flex-shrink-0
              "
              src="/images/topic/paraclete.webp"
              alt=""
            />
          </div>

          <div class="md:ml-4">
            <!-- title -->
            <h1 class="font-bold text-3xl md:text-4xl pr-9 truncate">
              Le Paraclet
            </h1>

            <p
              class="
                mt-4
                md:mt-8
                font-semibold
                text-base text-gray-800
                max-w-2xl
              "
            >
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
              <strong> celui qu'on appelle à son secours </strong>» (de
              παρακαλέω, « appeler auprès de soi»), ou « celui qui intercède »,
              formant les substantifs « avocat », « défenseur », « intercesseur
              ».
            </p>
          </div>
        </div>
      </section>

      <section
        class="-mx-3 px-3 mt-4 md:mt-10 bg-gray-200 py-4 md:py-10 md:px-40"
      >
        <!-- title -->
        <h2 class="flex items-center font-bold text-2xl md:text-3xl">
          Réfutation de la thèse islamique
        </h2>

        <p class="mt-4 md:mt-8 font-semibold text-base max-w-5xl">
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
        </p>
      </section>

      <SectionDownloadDocumentsList
        class="container mx-auto mt-4 md:mt-10"
        :files="files"
      />

      <!-- section youtube videos  -->
      <SectionVideo
        class="container mx-auto mt-4 md:mt-10"
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
          source: VideoLinkEnum.TIKTOK,
          name: "Le Dilemme de l'adultère",
          url: 'https://www.tiktok.com/@chaine.coliseum/video/7129761699342601478',
          thumbnail: '/images/video/7129761699342601478.webp',
        },
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
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne Retour du Christ',
          url: 'https://youtu.be/oH0r4_YZZAg',
          thumbnail: 'https://img.youtube.com/vi/oH0r4_YZZAg/mqdefault.jpg',
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
          thumbnail:
            '/sources/la-biographie-du-prophete-mahomet-ibn-hicham/thumbnail',
          href: '/sources/la-biographie-du-prophete-mahomet-ibn-hicham/pdf/la-biographie-du-prophete-mahomet-ibn-hicham.pdf',
          title: 'La biographie du Prophete Mahomet Ibn Hicham',
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
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/the-arabic-letters-of-the-byzantine-emperor-leo-iii-to-the-caliph-umar-ibn-abd-al-aziz/pdf/the-arabic-letters-of-the-byzantine-emperor-leo-iii-to-the-caliph-umar-ibn-abd-al-aziz.pdf',
          title:
            'The Arabic Letters of the Byzantine Emperor Leo III to the Caliph ‘Umar Ibn ‘Abd al-‘Aziz',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/2020-05-16-abbe-martin-billet-le-paraclet-et-la-verite/pdf/2020-05-16-abbe-martin-billet-le-paraclet-et-la-verite.pdf',
          title: 'Abbé Martin billet Le Paraclet et la Vérité (2020/05/16)',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/emery-verbe-esprit-vrit/pdf/emery-verbe-esprit-vrit.pdf',
          title: 'Le Verbe-Vérité et l ’ Esprit de Vérité',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/le-paraclet-dans-la-notice-antimontanis/pdf/le-paraclet-dans-la-notice-antimontanis.pdf',
          title: 'Le Paraclet dans la notice antimontanis',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/david-pastorelli-le-paraclet-dans-le-corpus-johannique/pdf/thlou-0080-2654-2007-num-38-4-3627-t1-0572-0000-2.pdf',
          title: 'David Pastorelli, Le Paraclet dans le corpus johannique',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/bulletin-johannique/pdf/bulletin-johannique.pdf',
          title: 'BULLETIN JOHANNIQUE',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/chronique-dexegese-du-nouveau-testament/pdf/chronique-dexegese-du-nouveau-testament.pdf',
          title: "Chronique d'exégèse du Nouveau Testament",
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/lexegese-de-mt-16-18-19-chez-tertullien/pdf/rhpr-0035-2403-1992-num-72-1-5169.pdf',
          title: "L'exégèse de Mt 16, 18-19 chez Tertullien",
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/le-paraclet-dans-le-corpus-johannique/pdf/le-paraclet-dans-le-corpus-johannique.pdf',
          title: 'Le Paraclet dans le corpus johannique',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/lanalyste-le-stratege-et-le-paraclet/pdf/lanalyste-le-stratege-et-le-paraclet.pdf',
          title: 'L’ANALYSTE, LE STRATÈGE ET LE PARACLET',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/le-montanisme/pdf/le-montanisme.pdf',
          title: 'Le Montanisme',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/la-pneumatologie-de-levangile-de-jean-un-essai-de-synthese/pdf/la-pneumatologie-de-levangile-de-jean-un-essai-de-synthese.pdf',
          title: 'LA PNEUMATOLOGIE DE L’ÉVANGILE DE JEAN. UN ESSAI DE SYNTHÈSE',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/le-commentaire-de-jean-zumstein-sur-levangile-de-jean/pdf/le-commentaire-de-jean-zumstein-sur-levangile-de-jean.pdf',
          title: 'LE COMMENTAIRE DE JEAN ZUMSTEIN SUR L’ÉVANGILE DE JEAN',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/parmi-les-livres/pdf/parmi-les-livres.pdf',
          title: 'PARMI LES LIVRES',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/parmi-les-livres/pdf/parmi-les-livres-2.pdf',
          title: 'PARMI LES LIVRES 2',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/laudatio-jean-zumstein/pdf/laudatio-jean-zumstein.pdf',
          title: 'LAUDATIO JEAN ZUMSTEIN',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/des-noms-et-des-nombres-dans-le-christianisme-primitif/pdf/des-noms-et-des-nombres-dans-le-christianisme-primitif.pdf',
          title: 'DES NOMS ET DES NOMBRES DANS LE CHRISTIANISME PRIMITIF',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/islamisme-et-religions-de-larabie/pdf/islamisme-et-religions-de-larabie.pdf',
          title: "Islamisme et religions de l'Arabie",
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/eskil-franck-revelation-taught-the-paraclete-in-the-gospel-of-john/pdf/rhpr-0035-2403-1986-num-66-2-4866-t1-0229-0000-1.pdf',
          title:
            'Eskil Franck, Revelation Taught, The Paraclete in the Gospel of John',
        },
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          href: '/sources/dieu-de-promesse/pdf/dieu-de-promesse.pdf',
          title: 'Dieu-de-Promesse',
        },
      ],
    }
  },
})
</script>