<template>
  <div class="flex flex-col min-h-screen dark:bg-light-black dark:text-white">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- intro -->
      <SectionIntroTopics :cover="cover">
        <template v-slot:title>La crucifixion dans la bible</template>
        <template v-slot:body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut
          quaerat perferendis a totam et maiores sint libero similique eaque
          omnis qui iusto, nostrum impedit esse, adipisci corrupti molestias
          possimus !
        </template>
      </SectionIntroTopics>

      <SectionDebate
        class="container mx-auto mt-4 md:mt-10"
        :playlistYoutubeId="playlistYoutubeIdDebates"
        :debates="debates"
      />
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionDebate from '~/components/debate/SectionDebate.vue'
import SectionIntroTopics from '~/components/topics/SectionIntroTopics.vue'
import { DebateService, TopicService } from '~/services'

export default Vue.extend({
  name: 'CrucifixionInBiblePage',

  components: { SectionIntroTopics, SectionDebate },

  head() {
    return {
      title: 'La crucifixion dans la bible - Paroles de vie',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Défendre la foi chrétienne, donner une éducation chrétienne, expression de la foi.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://www.paroles-de-vie.tk/seo/the-crucifixion-in-the-bible.webp',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content:
            'https://www.paroles-de-vie.tk/seo/the-crucifixion-in-the-bible.webp',
        },
      ],
    }
  },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/',
        },
        {
          name: 'La crucifixion dans la bible',
          to: '/the-crucifixion-in-the-bible/',
        },
      ],
      cover: TopicService.getBySlug('/the-crucifixion-in-the-bible/')?.cover,
      playlistYoutubeIdDebates: 'PLaBmOZ7eJG-Wr3qx0unYjwXWNOoXTKCci',
      debates: DebateService.getByTopic('the-crucifixion-in-the-bible'),
    }
  },
})
</script>
