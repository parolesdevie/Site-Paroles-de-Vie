<template>
  <div class="flex flex-col min-h-screen dark:bg-light-black dark:text-white">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- intro -->
      <SectionIntroTopics :cover="cover">
        <template v-slot:title>La critique textuelle biblique</template>
        <!-- <template v-slot:body> </template> -->
      </SectionIntroTopics>

      <SectionDebate
        title="Découvrir en débats"
        class="container mx-auto mt-4 md:mt-10"
        :debates="debates"
        :hideSubject="false"
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
  name: 'BiblicalTextCriticismPage',

  components: { SectionIntroTopics, SectionDebate },

  head() {
    return {
      title: 'La critique textuelle biblique - Paroles de vie',
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
            'https://www.paroles-de-vie.tk/seo/biblical-textual-criticism.webp',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content:
            'https://www.paroles-de-vie.tk/seo/biblical-textual-criticism.webp',
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
          name: 'Critique textuelle',
          to: '/biblical-textual-criticism/',
        },
      ],
      cover: TopicService.getBySlug('/biblical-textual-criticism/')?.cover,
      debates: DebateService.getByTopic('biblical-textual-criticism'),
    }
  },
})
</script>
