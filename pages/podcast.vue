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
          Ecouter depuis Spotify
        </h2>

        <!-- embeds spotify -->
        <div class="mt-4 md:mt-10 flex flex-col md:flex-row gap-5">
          <article class="flex-1 flex flex-col">
            <h2 class="flex items-center">
              <span
                class="
                  h-5
                  w-5
                  shrink-0
                  bg-black
                  dark:bg-white
                  text-white
                  dark:text-light-black
                  rounded-full
                  flex
                  items-center
                  justify-center
                "
              >
                <IconLockOpen class="h-3" />
              </span>
              <span class="ml-2"> Ecouter le dernier podcast </span>
              <span
                class="
                  bg-white bg-opacity-60
                  ml-2
                  px-1
                  rounded-sm
                  uppercase
                  text-sm
                  font-semibold
                  text-white
                  dark:text-light-black
                "
              >
                gratuit
              </span>
            </h2>
            <iframe
              class="mt-2 md:mt-4 w-full"
              src="https://open.spotify.com/embed/episode/2NO0OpMyay5TbZZpMPS66g?utm_source=generator&theme=0"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </article>
          <article class="flex-1 flex flex-col">
            <h2 class="flex items-center">
              <span
                class="
                  h-5
                  w-5
                  shrink-0
                  bg-black
                  dark:bg-white
                  text-white
                  dark:text-light-black
                  rounded-full
                  flex
                  items-center
                  justify-center
                "
              >
                <IconLock class="h-3" />
              </span>
              <span class="ml-2"> Ecouter le dernier podcast </span>
              <span
                class="
                  bg-white bg-opacity-60
                  ml-2
                  px-1
                  rounded-sm
                  uppercase
                  text-sm
                  font-semibold
                  text-white
                  dark:text-light-black
                "
              >
                Payant
              </span>
            </h2>
            <iframe
              class="mt-2 md:mt-4 w-full"
              src="https://open.spotify.com/embed/show/5XnBOuPu5fUW0DROVinvbg?utm_source=generator&theme=0"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </article>
        </div>
      </section>

      <!-- extern plateforme -->
      <section class="container mx-auto mt-8 md:mt-20">
        <!-- title -->
        <h2 class="flex items-center font-bold text-2xl md:text-3xl">
          Ecouter sur une autre plateforme
        </h2>

        <ul class="mt-4 md:mt-10 flex gap-10 overflow-x-auto">
          <li class="contents">
            <a
              class="flex flex-col items-center"
              href="https://music.amazon.fr/podcasts/0a53af38-888e-43d8-a6b3-3a4fd5255955/paroles-de-vie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconAmazon class="h-20" />
              <span class="mt-2">Ecouter sur Amazon Music</span>
            </a>
          </li>
          <li class="contents">
            <a
              class="flex flex-col items-center"
              href="https://open.spotify.com/show/5XnBOuPu5fUW0DROVinvbg?go=1&sp_cid=b07c80b40af1cad5b9c13cec447d0ccb&utm_source=embed_player_p&utm_medium=desktop&nd=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconSpotify class="h-20" />
              <span class="mt-2">Ecouter sur Spotify</span>
            </a>
          </li>
          <li class="contents">
            <a
              class="flex flex-col items-center"
              href="https://anchor.fm/paroles-de-vie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconAnchor class="h-20" />
              <span class="mt-2">Ecouter sur Anchor</span>
            </a>
          </li>
        </ul>
      </section>

      <a
        class="container mx-auto mt-8 md:mt-20 flex items-center"
        href="https://anchor.fm/s/d6d4ea28/podcast/rss"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconRssSquare class="h-6 w-6 text-orange-400" />
        <span class="ml-2 font-semibold hover:text-blue-500">
          Flux RSS du podcast
        </span>
      </a>
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconAmazon from '~/components/icons/IconAmazon.vue'
import IconSpotify from '~/components/icons/IconSpotify.vue'
import IconAnchor from '~/components/icons/IconAnchor.vue'
import IconRssSquare from '~/components/icons/IconRssSquare.vue'
import IconLock from '~/components/icons/IconLock.vue'
import IconLockOpen from '~/components/icons/IconLockOpen.vue'
import SectionIntroTopics from '~/components/topics/SectionIntroTopics.vue'
import { TopicService } from '~/services'

export default Vue.extend({
  name: 'PodcastPage',

  components: {
    SectionIntroTopics,
    IconRssSquare,
    IconAmazon,
    IconSpotify,
    IconAnchor,
    IconLock,
    IconLockOpen,
  },

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
