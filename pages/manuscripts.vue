<template>
  <div class="flex flex-col min-h-screen dark:bg-light-black dark:text-white">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <section class="mt-4 md:mt-10">
        <div class="flex flex-col md:flex-row">
          <!-- demo -->
          <div
            class="
              self-center
              inline-flex
              flex-col
              items-end
              select-none
              px-16
              pb-10
            "
          >
            <div class="relative">
              <div
                tabindex="0"
                class="
                  mb-2
                  md:mb-3
                  h-40
                  w-40
                  md:h-56 md:w-56
                  lg:h-64 lg:w-64
                  bg-gray-300
                  dark:bg-gray-700
                  rounded-lg
                "
              >
                <HandDrownArrowComment title="aperçu" top="20" />
              </div>
              <div
                class="
                  absolute
                  inset-x-0
                  bottom-10
                  text-center
                  py-2
                  bg-black bg-opacity-60
                "
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
                class="
                  h-6
                  w-6
                  md:h-10 md:w-10
                  lg:h-12 lg:w-12
                  bg-gray-300
                  dark:bg-gray-700
                  rounded-lg
                  inline-flex
                  items-center
                  justify-center
                "
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
                  class="
                    h-10
                    w-10
                    md:h-12 md:w-12
                    bg-gray-300
                    dark:bg-gray-700
                    rounded-xl
                    inline-flex
                    items-center
                    justify-center
                  "
                >
                  <img
                    class="h-8 md:h-8"
                    :src="`/images/site/${plateform.icon}.webp`"
                    :alt="plateform.name"
                    :title="plateform.name"
                  />
                </span>
                <span class="ml-2">{{ plateform.name }}</span>
              </li>
              <li class="inline-flex items-center">
                <span
                  class="
                    h-10
                    w-10
                    md:h-12 md:w-12
                    bg-gray-300
                    dark:bg-gray-700
                    rounded-xl
                    inline-flex
                    items-center
                    justify-center
                  "
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
          class="
            mt-4
            md:mt-10
            flex flex-wrap
            gap-6
            md:gap-10 md:justify-center
            lg:justify-start
          "
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
            :title="manuscripts.OTHERS.name"
            :sites="manuscripts.OTHERS.sites"
            image="other"
          />
        </div>
      </section>

      <!-- section youtube videos  -->
      <SectionVideo
        left
        class="container mx-auto mt-4 md:mt-10"
        playlistYoutubeId="PLaBmOZ7eJG-Xp0v-AbfDTIe2dfEfU9ylW"
        :videos="videos"
      />
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ManuscriptCard from '~/components/document/ManuscriptCard.vue'
import Breadcrumb from '~/components/global/Breadcrumb.vue'
import HandDrownArrowComment from '~/components/global/HandDrownArrowComment.vue'
import IconBookOpen from '~/components/icons/IconBookOpen.vue'
import IconHandDrownArrowTopLeftCorner from '~/components/icons/IconHandDrownArrowTopLeftCorner.vue'
import SectionVideo from '~/components/videos/SectionVideo.vue'
import { ManuscriptService, WebSiteService } from '~/services'
import { ManuscriptsPlateformEnum } from '~/services/WebSiteService'
import { VideoLinkEnum } from '~/types'

export default Vue.extend({
  name: 'ManuscriptsPage',

  components: {
    Breadcrumb,
    ManuscriptCard,
    IconHandDrownArrowTopLeftCorner,
    HandDrownArrowComment,
    IconBookOpen,
    SectionVideo,
  },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/',
        },
        {
          name: 'Manuscrits',
          to: '/manuscripts/',
        },
      ],
      manuscripts: WebSiteService.getManuscripts(),
      ManuscriptsPlateformEnum,
      plateforms: ManuscriptService.getPlateforms(),
      videos: [
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Oldest Bible Manuscripts',
          url: 'https://youtu.be/TvmAaXUKkco',
          thumbnail: 'https://img.youtube.com/vi/TvmAaXUKkco/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Il était une fois... Le codex Sinaïticus',
          url: 'https://youtu.be/W6NCAdoFZ4s',
          thumbnail: 'https://img.youtube.com/vi/W6NCAdoFZ4s/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Dr Wallace on Codex Sinaiticus at the British Library',
          url: 'https://youtu.be/u1SClZRz4lw',
          thumbnail: 'https://img.youtube.com/vi/u1SClZRz4lw/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Why We Digitize New Testament Manuscripts',
          url: 'https://www.youtube.com/watch?v=XhbPf2FCQv4',
          thumbnail: 'https://img.youtube.com/vi/XhbPf2FCQv4/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "The world's oldest bible reunited online",
          url: 'https://youtu.be/fd_x1yuIrZ8',
          thumbnail: 'https://img.youtube.com/vi/fd_x1yuIrZ8/mqdefault.jpg',
        },
      ],
    }
  },
})
</script>
