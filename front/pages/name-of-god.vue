<script setup lang="ts">
useHead({
  title: 'Le Nom de Dieu - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/name-of-god.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/name-of-god.webp'
    }
  ]
})
</script>

<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- intro -->
    <SectionIntroTopics :cover="cover" :frontFile="files[0]">
      <template v-slot:title>Le nom de Dieu</template>
      <!-- <template v-slot:body></template> -->
    </SectionIntroTopics>

    <!-- section download document  -->
    <DocumentSectionDownloadDocumentsList
      class="container mx-auto mt-4 md:mt-10"
      :files="files"
    />
  </div>
</template>

<script lang="ts">
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import { DebateService, TopicService, ResourceService } from '~~/services'

definePageMeta({
  layout: 'article'
})

export default defineNuxtComponent({
  name: 'NameOfGodPage',

  components: { SectionIntroTopics },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Le Nom de Dieu',
          to: '/name-of-god/'
        }
      ],
      cover: TopicService.getTopicCoverBySlug('/name-of-god/'),
      debates: DebateService.getByTopic('name-of-god'),
      files: ResourceService.getBySlug('name-of-god')
    }
  }
})
</script>
