<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb class="container mx-auto" :items="breadcrumbItems" />

      <!-- intro -->
      <SectionIntroTopics :cover="cover">
        <template v-slot:title>La falsification de la bible</template>
        <template v-slot:body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut
          quaerat perferendis a totam et maiores sint libero similique eaque
          omnis qui iusto, nostrum impedit esse, adipisci corrupti molestias
          possimus !
        </template>
      </SectionIntroTopics>

      <section
        class="-mx-3 px-3 mt-4 md:mt-10 bg-gray-200 py-4 md:py-10 md:px-40"
      >
        <!-- title -->
        <h2 class="flex items-center font-bold text-2xl md:text-3xl">
          Réfutation de la thèse islamique
        </h2>

        <p class="mt-4 md:mt-8 font-semibold text-base max-w-5xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          cupiditate facilis unde amet sapiente repellat aspernatur ullam esse
          dolore quae! Hic, incidunt necessitatibus. Laboriosam suscipit ad,
          corrupti perspiciatis vitae quam.
        </p>
      </section>

      <SectionDownloadDocumentsList
        class="container mx-auto mt-4 md:mt-10"
        :files="files"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionDownloadDocumentsList from '~/components/document/SectionDownloadDocumentsList.vue'
import SectionIntroTopics from '~/components/topics/SectionIntroTopics.vue'
import { TopicService } from '~/services'
// import { AuthorEnum, FormatEnum } from '~/types'
export default Vue.extend({
  name: 'FalsificationBiblePage',

  components: { SectionDownloadDocumentsList, SectionIntroTopics },

  asyncData() {
    return {
      breadcrumbItems: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'La falsification de la bible',
          to: '/the-falsification-of-the-bible/',
        },
      ],
      cover: TopicService.getBySlug('/the-falsification-of-the-bible/')?.cover,
      files: [
        // {
        //   author: AuthorEnum.SHAM,
        //   format: FormatEnum.PDF,
        //   thumbnail: '/images/pdf/la-falsification-de-la-bible',
        //   href: '/pdf/la-falsification-de-la-bible.pdf',
        //   title: 'La falsification de la bible',
        // },
      ],
    }
  },
})
</script>