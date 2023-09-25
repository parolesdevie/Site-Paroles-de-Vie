<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <section class="mt-4 md:mt-10">
      <!-- title -->
      <h1 class="flex items-center font-bold text-2xl md:text-3xl">
        Les manuscrits de la Bible
      </h1>

      <div class="mt-2 md:mt-4 flex flex-col md:flex-row">
        <!-- demo -->
        <div
          class="self-center inline-flex flex-col items-end select-none px-16 pb-10"
        >
          <div class="relative">
            <div
              tabindex="0"
              class="mb-2 md:mb-3 h-40 w-40 md:h-56 md:w-56 lg:h-64 lg:w-64 bg-gray-300 dark:bg-gray-700 rounded-lg"
            >
              <HandDrownArrowComment title="aperçu" top="20" />
            </div>
            <div
              class="absolute inset-x-0 bottom-10 text-center py-2 bg-black bg-opacity-60"
            >
              <span
                class="uppercase font-black text-lg tracking-wider text-white"
              >
                Codex
              </span>
              <HandDrownArrowComment title="nom du manuscrit" inverse />
            </div>
          </div>
          <div class="relative flex gap-2 md:gap-3">
            <span
              v-for="i in 4"
              :key="i"
              class="h-6 w-6 md:h-10 md:w-10 lg:h-12 lg:w-12 bg-gray-300 dark:bg-gray-700 rounded-lg inline-flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            />
            <HandDrownArrowComment title="plateformes" />
          </div>
        </div>

        <!-- plateform -->
        <div class="mt-4 md:mt-0 md:ml-4">
          <strong class="text-lg">Plateformes</strong>
          <ul class="mt-2 md:mt-4 flex flex-col flex-wrap gap-2 md:gap-4">
            <li
              class="inline-flex items-center"
              v-for="(plateform, index) in plateforms"
              :key="index"
            >
              <span
                class="h-10 w-10 md:h-12 md:w-12 bg-gray-300 dark:bg-gray-700 rounded-xl inline-flex items-center justify-center"
              >
                <img
                  loading="lazy"
                  class="h-7 md:h-7"
                  :src="`/images/site/${plateform.icon}.webp`"
                  :alt="plateform.name"
                  :title="plateform.name"
                />
              </span>
              <span class="ml-2">{{ plateform.name }}</span>
            </li>
            <li class="inline-flex items-center">
              <span
                class="h-10 w-10 md:h-12 md:w-12 bg-gray-300 dark:bg-gray-700 rounded-xl inline-flex items-center justify-center"
              >
                <IconBookOpen class="h-7 w-7 text-white" />
              </span>
              <span class="ml-2">Autre</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- codex collection -->
      <div
        class="mt-4 md:mt-10 flex flex-wrap gap-6 md:gap-10 md:justify-center lg:justify-start"
      >
        <ManuscriptCard
          :title="manuscripts.CODEX_SINATICUS.name"
          :sites="manuscripts.CODEX_SINATICUS.sites"
          image="codex-sinaiticus"
        />
        <ManuscriptCard
          :title="manuscripts.CODEX_ALEXANDRINUS.name"
          :sites="manuscripts.CODEX_ALEXANDRINUS.sites"
          image="codex-alexandrinus"
        />
        <ManuscriptCard
          :title="manuscripts.CODEX_VATICANUS.name"
          :sites="manuscripts.CODEX_VATICANUS.sites"
          image="codex-vaticanus"
        />
        <ManuscriptCard
          :title="manuscripts.CODEX_EPHRAEMI_RESCRIPTUS.name"
          :sites="manuscripts.CODEX_EPHRAEMI_RESCRIPTUS.sites"
          image="codex-ephraemi-rescriptus"
        />
        <ManuscriptCard
          :title="manuscripts.OTHERS.name"
          :sites="manuscripts.OTHERS.sites"
          image="other"
        />
      </div>
    </section>

    <!-- section youtube videos  -->
    <SectionVideo
      left
      keepOnGrid
      class="container mx-auto mt-4 md:mt-10"
      title="Découvrir en vidéos"
      playlistYoutubeId="PLaBmOZ7eJG-Xp0v-AbfDTIe2dfEfU9ylW"
      playlistDailymotionId="x7op0q"
      :videos="videos"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Manuscrits de la Bible - Paroles de vie',
  meta: [
    {
      name: 'description',
      content:
        'Défendre la foi chrétienne, donner une éducation chrétienne, expression de la foi.'
    },
    {
      property: 'og:image',
      content: 'https://www.paroles-de-vie.tk/seo/manuscripts.webp'
    },
    {
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/manuscripts.webp'
    }
  ]
})
</script>

<script lang="ts">
import ManuscriptCard from '~~/components/document/ManuscriptCard.vue'
import Breadcrumb from '~~/components/global/Breadcrumb.vue'
import HandDrownArrowComment from '~~/components/global/HandDrownArrowComment.vue'
import IconBookOpen from '~~/components/icons/IconBookOpen.vue'
import IconHandDrownArrowTopLeftCorner from '~~/components/icons/IconHandDrownArrowTopLeftCorner.vue'
import SectionVideo from '~~/components/videos/SectionVideo.vue'
import { ManuscriptService, WebSiteService } from '~~/services'
import { ManuscriptsPlateformEnum } from '~~/services/WebSiteService'

export default defineNuxtComponent({
  name: 'ManuscriptsPage',

  components: {
    Breadcrumb,
    ManuscriptCard,
    IconHandDrownArrowTopLeftCorner,
    HandDrownArrowComment,
    IconBookOpen,
    SectionVideo
  },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Manuscrits',
          to: '/manuscripts/'
        }
      ],
      manuscripts: WebSiteService.getManuscripts(),
      ManuscriptsPlateformEnum,
      plateforms: ManuscriptService.getPlateforms(),
      videos: ManuscriptService.getVideos()
    }
  }
})
</script>
