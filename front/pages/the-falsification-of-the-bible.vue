<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="mb-auto px-3 md:px-4 py-4 flex flex-col">
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

      <BgColorSection>
        <template v-slot:title>Réfutation de la thèse islamique</template>
        <!-- <template v-slot:body> </template> -->
      </BgColorSection>

      <SectionDebate
        title="Découvrir en débats"
        class="container mx-auto mt-4 md:mt-10"
        :debates="debates"
        :hideSubject="false"
      />

      <SectionDownloadDocumentsList
        class="container mx-auto mt-4 md:mt-10"
        :files="files"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'La falsification de la bible - Paroles de vie',
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
        'https://www.paroles-de-vie.tk/seo/the-falsification-of-the-bible.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content:
        'https://www.paroles-de-vie.tk/seo/the-falsification-of-the-bible.webp'
    }
  ]
})
</script>

<script lang="ts">
import SectionDebate from '~~/components/debate/SectionDebate.vue'
import SectionDownloadDocumentsList from '~~/components/document/SectionDownloadDocumentsList.vue'
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import { DebateService, TopicService } from '~~/services'

definePageMeta({
  layout: 'empty'
})

export default defineNuxtComponent({
  name: 'FalsificationBiblePage',

  components: {
    SectionDownloadDocumentsList,
    SectionIntroTopics,
    SectionDebate
  },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'La falsification de la bible',
          to: '/the-falsification-of-the-bible/'
        }
      ],
      cover: TopicService.getTopicCoverBySlug(
        '/the-falsification-of-the-bible/'
      ),
      debates: DebateService.getByTopic('the-falsification-of-the-bible'),
      files: [
        // {
        //   author: AuthorEnum.SHAM,
        //   format: FormatEnum.PDF,
        //   thumbnail: '/images/pdf/la-falsification-de-la-bible',
        //   href: '/pdf/la-falsification-de-la-bible.pdf',
        //   title: 'La falsification de la bible',
        // },
      ]
    }
  }
})
</script>