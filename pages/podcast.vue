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
          class="mt-4 md:mt-10 w-full"
          src="https://open.spotify.com/embed/show/5XnBOuPu5fUW0DROVinvbg?utm_source=generator&theme=0"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </section>

      <section class="container mx-auto mt-4 md:mt-10">
        <!-- title -->
        <h2 class="flex items-center font-bold text-2xl md:text-3xl">Anchor</h2>

        <!-- embed anchor -->
        <iframe
          class="mt-4 md:mt-10 w-full md:w-120"
          src="https://anchor.fm/paroles-de-vie/embed/episodes/Le-symbole-des-aptres--mon-CREDO-e1sgrmu"
          height="102px"
          loading="lazy"
          scrolling="no"
        />
      </section>

      <section class="container mx-auto mt-4 md:mt-10">
        <!-- title -->
        <h2 class="flex items-center font-bold text-2xl md:text-3xl">
          Amazon Music
        </h2>

        <a
          class="mt-4 md:mt-10 inline-block"
          href="https://music.amazon.fr/podcasts/0a53af38-888e-43d8-a6b3-3a4fd5255955/paroles-de-vie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ecouter sur Amazon Music
        </a>
      </section>

      <a
        class="container mx-auto mt-4 md:mt-10 flex items-center"
        href="https://anchor.fm/s/d6d4ea28/podcast/rss"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconRssSquare class="h-6 w-6 text-orange-400" />
        <span class="ml-2 font-semibold hover:text-blue-500">Flux RSS</span>
      </a>
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconRssSquare from '~/components/icons/IconRssSquare.vue'
import SectionIntroTopics from '~/components/topics/SectionIntroTopics.vue'
import { TopicService } from '~/services'

export default Vue.extend({
  name: 'PodcastPage',

  components: { SectionIntroTopics, IconRssSquare },

  head() {
    return {
      title: 'Podcast - Paroles de vie',
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
          content: 'https://www.paroles-de-vie.tk/seo/podcast.webp',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://www.paroles-de-vie.tk/seo/podcast.webp',
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
          name: 'Podcast',
          to: '/podcast/',
        },
      ],
      cover: TopicService.getBySlug('/podcast/')?.cover,
    }
  },
})
</script>
