<template>
  <div class="flex flex-col min-h-screen dark:bg-light-black dark:text-white">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <section class="container mx-auto mt-4 md:mt-10">
        <!-- title -->
        <h2 class="flex items-center font-bold text-2xl md:text-3xl">
          Spotify
        </h2>

        <!-- embed spotify -->
        <iframe
          class="mt-4 md:mt-10"
          src="https://open.spotify.com/embed/show/5XnBOuPu5fUW0DROVinvbg?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </section>
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
  name: 'PodcastPage',

  components: { SectionIntroTopics },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/',
        },
        {
          name: 'Podcast',
          to: '/podcast/',
        },
      ],
      cover: TopicService.getBySlug('/podcast/')?.cover,
    }
  },
})
</script>
