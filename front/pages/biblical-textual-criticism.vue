<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- intro -->
    <SectionIntroTopics :cover="cover" :frontFile="frontFile">
      <template v-slot:title>La critique textuelle biblique</template>
      <template v-slot:body>
        En bref, la critique textuelle est une méthode permettant de
        reconstituer les manuscrits bibliques originaux. Ces manuscrits sont
        perdus, cachés ou n'existent plus, mais nous disposons de dizaines de
        milliers de copies datant du Ier au XVème Siècle ap. J.-C. (pour le
        Nouveau Testament) et du IVème Siècle av. J.-C. au XVème Siècle ap.
        J.-C. (pour l'Ancien Testament). Entre ces manuscrits, il y a de
        nombreuses différences mineures et quelques-unes plus importantes. La
        critique textuelle est l'étude de ces manuscrits afin de reconstituer le
        texte original.
        <br />
        <a
          class="inline-block mt-2 underline hover:text-blue-700 float-right"
          href="https://www.gotquestions.org/Francais/critique-textuelle.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Got Questions
        </a>
      </template>
    </SectionIntroTopics>

    <SectionDebate
      title="Découvrir en débats"
      class="container mx-auto mt-4 md:mt-10"
      :debates="debates"
      :hideSubject="false"
    />

    <!-- section youtube videos  -->
    <SectionVideo
      left
      keepOnGrid
      class="container mx-auto mt-4 md:mt-10"
      title="Découvrir en vidéos"
      playlistYoutubeId="PLaBmOZ7eJG-WHpCtPPRwhgTAEtikaGuFr"
      :videos="videos"
    />

    <!-- section download document  -->
    <SectionDownloadDocumentsList
      class="container mx-auto mt-4 md:mt-10"
      :files="files"
    />

    <!-- book -->
    <SectionBook
      class="container mx-auto mt-4 md:mt-10"
      title="Voici LA BIBLE pour faire de la critique textuelle biblique"
      :intro="false"
      :books="books"
    >
      <p class="max-w-2xl">
        Le Novum Testamentum Graece (expression latine signifiant « Nouveau
        Testament en grec ») est le compendium qui rassemble le corpus
        néotestamentaire dans sa langue d'origine, le grec ancien, en une
        édition critique qui fait référence et sert de base aux travaux
        universitaires d'exégèse et de traduction. L'actuelle version de
        référence est la 28e édition du Novum Testamentum Graece de Nestle-Aland
        (2012), texte établi sous la direction d'Eberhard Nestle, d'Erwin
        Nestle, de Kurt Aland et de Barbara Aland, et connu sous l'abréviation
        « NA28 ».
        <br />
        <a
          class="inline-block mt-2 underline hover:text-blue-700 float-right"
          href="https://fr.wikipedia.org/wiki/Novum_Testamentum_Graece"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia
        </a>
      </p>
    </SectionBook>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'La critique textuelle biblique - Paroles de vie',
  meta: [
    {
      name: 'description',
      content:
        'Défendre la foi chrétienne, donner une éducation chrétienne, expression de la foi.'
    },
    {
      property: 'og:image',
      content:
        'https://www.paroles-de-vie.tk/seo/biblical-textual-criticism.webp'
    },
    {
      property: 'twitter:image',
      content:
        'https://www.paroles-de-vie.tk/seo/biblical-textual-criticism.webp'
    }
  ]
})
</script>

<script lang="ts">
import SectionBook from '~~/components/book/SectionBook.vue'
import SectionDebate from '~~/components/debate/SectionDebate.vue'
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import SectionVideo from '~~/components/videos/SectionVideo.vue'
import SectionDownloadDocumentsList from '~~/components/document/SectionDownloadDocumentsList.vue'
import {
  BookService,
  DebateService,
  TopicService,
  TopicVideosService
} from '~~/services'
import { AuthorEnum, FormatEnum, ISourceFile } from '~~/types'

export default defineNuxtComponent({
  name: 'BiblicalTextCriticismPage',

  components: {
    SectionIntroTopics,
    SectionDebate,
    SectionBook,
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
          name: 'Critique textuelle',
          to: '/biblical-textual-criticism/'
        }
      ],
      cover: TopicService.getTopicCoverBySlug('/biblical-textual-criticism/'),
      frontFile: {
        author: AuthorEnum.BENEVOLENCE,
        format: FormatEnum.PDF,
        slug: 'marc-s-finale',
        thumbnail: '/images/pdf/marc-s-finale',
        href: '/pdf/marc-s-finale.pdf',
        title: 'La finale de Marc'
      } as ISourceFile,
      debates: DebateService.getByTopic('biblical-textual-criticism'),
      books: BookService.getBySlug('bible-nestle-aland'),
      videos: [
        ...TopicVideosService.getVideosByTopic('biblical-textual-criticism'),
        ...TopicVideosService.getVideosByTopic('bible-nestle-aland')
      ],
      files: [
        {
          author: AuthorEnum.BENEVOLENCE,
          format: FormatEnum.PDF,
          thumbnail: '/images/pdf/marc-s-finale',
          href: '/pdf/marc-s-finale.pdf',
          title: 'La finale de Marc'
        }
      ]
    }
  }
})
</script>
