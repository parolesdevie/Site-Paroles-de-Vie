<template>
  <div class="flex flex-col min-h-screen">
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
        :playlistId="playlistIdDebates"
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

  asyncData() {
    return {
      breadcrumbItems: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'La crucifixion dans la bible',
          to: '/the-crucifixion-in-the-bible/',
        },
      ],
      cover: TopicService.getBySlug('/the-crucifixion-in-the-bible/')?.cover,
      playlistIdDebates: 'PLaBmOZ7eJG-Wr3qx0unYjwXWNOoXTKCci',
      debates: DebateService.getByTopic('the-crucifixion-in-the-bible'),
    }
  },
})
</script>
