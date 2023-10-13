<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- intro -->
    <SectionIntroTopics :cover="cover">
      <template v-slot:title>La crucifixion dans la bible</template>
      <!-- <template v-slot:body> </template> -->
    </SectionIntroTopics>

    <SectionDebate
      class="container mx-auto mt-4 md:mt-10"
      :playlistYoutubeId="playlistYoutubeIdDebates"
      :debates="debates"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'La crucifixion dans la bible - Paroles de vie',
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
        'https://www.paroles-de-vie.tk/seo/the-crucifixion-in-the-bible.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content:
        'https://www.paroles-de-vie.tk/seo/the-crucifixion-in-the-bible.webp'
    }
  ]
})
</script>

<script lang="ts">
import SectionDebate from '~~/components/debate/SectionDebate.vue'
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import { DebateService, TopicService } from '~~/services'

export default defineNuxtComponent({
  name: 'CrucifixionInBiblePage',

  components: { SectionIntroTopics, SectionDebate },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'La crucifixion dans la bible',
          to: '/the-crucifixion-in-the-bible/'
        }
      ],
      cover: TopicService.getTopicCoverBySlug('/the-crucifixion-in-the-bible/'),
      playlistYoutubeIdDebates: 'PLaBmOZ7eJG-Wr3qx0unYjwXWNOoXTKCci',
      debates: DebateService.getByTopic('the-crucifixion-in-the-bible')
    }
  }
})
</script>
