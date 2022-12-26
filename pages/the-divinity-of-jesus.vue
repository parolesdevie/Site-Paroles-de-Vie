<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- intro -->
      <SectionIntroTopics :cover="cover">
        <template v-slot:title>La divinité de Jésus</template>
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
  name: 'DivinityOfJesusPage',

  components: { SectionIntroTopics, SectionDebate },

  head() {
    return {
      title: 'La divinité de Jésus dans la Bible - Paroles de vie',
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
            'https://www.paroles-de-vie.tk/seo/the-divinity-of-jesus.webp',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content:
            'https://www.paroles-de-vie.tk/seo/the-divinity-of-jesus.webp',
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
          name: 'La divinité de Jésus',
          to: '/the-divinity-of-jesus/',
        },
      ],
      cover: TopicService.getBySlug('/the-divinity-of-jesus/')?.cover,
      debates: DebateService.getByTopic('the-divinity-of-jesus'),
    }
  },
})
</script>
