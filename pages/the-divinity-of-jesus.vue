<template>
  <div class="flex flex-col min-h-screen dark:bg-light-black dark:text-white">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- intro -->
      <SectionIntroTopics :cover="cover">
        <template v-slot:title>La divinité de Jésus</template>
        <template v-slot:body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut
          quaerat perferendis a totam et maiores sint libero similique eaque
          omnis qui iusto, nostrum impedit esse, adipisci corrupti molestias
          possimus !
        </template>
      </SectionIntroTopics>
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionIntroTopics from '~/components/topics/SectionIntroTopics.vue'
import { TopicService } from '~/services'

export default Vue.extend({
  name: 'DivinityOfJesusPage',

  components: { SectionIntroTopics },

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
    }
  },
})
</script>
