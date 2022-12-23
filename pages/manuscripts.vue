<template>
  <div class="flex flex-col min-h-screen dark:bg-light-black dark:text-white">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
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
        playlistDailymotionId="x7op0q"
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
import { LanguageEnum, VideoLinkEnum } from '~/types'

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

  head() {
    return {
      title: 'Manuscrits de la Bible - Paroles de vie',
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
          content: 'https://www.paroles-de-vie.tk/seo/manuscripts.webp',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://www.paroles-de-vie.tk/seo/manuscripts.webp',
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
          name: 'Manuscrits',
          to: '/manuscripts/',
        },
      ],
      manuscripts: WebSiteService.getManuscripts(),
      ManuscriptsPlateformEnum,
      plateforms: ManuscriptService.getPlateforms(),
      videos: [
        {
          lang: LanguageEnum.EN,
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
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Codex Sinaiticus: A journey in Biblical discovery.',
          url: 'https://youtu.be/JSIbyS1rY3g',
          thumbnail: 'https://img.youtube.com/vi/JSIbyS1rY3g/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "L'histoire de la Bible 1 La copie de la Bible chez les Hébreux",
          url: 'https://youtu.be/M6ooPRUdd8E',
          thumbnail: 'https://img.youtube.com/vi/M6ooPRUdd8E/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "L'histoire de la Bible 2 Les Massorètes",
          url: 'https://youtu.be/j7JATum6aLc',
          thumbnail: 'https://img.youtube.com/vi/j7JATum6aLc/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "L'histoire de la Bible 4 Le Codex Sinaïticus",
          url: 'https://youtu.be/1fNzpKGzTw4',
          thumbnail: 'https://img.youtube.com/vi/1fNzpKGzTw4/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "L'histoire de la Bible 5 Le Codex Vaticanus",
          url: 'https://youtu.be/4OGmULikIXs',
          thumbnail: 'https://img.youtube.com/vi/4OGmULikIXs/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "L'histoire de la Bible 6 Le manuscrit P52",
          url: 'https://youtu.be/83FKNnZLdgU',
          thumbnail: 'https://img.youtube.com/vi/83FKNnZLdgU/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "L'histoire de la Bible 7 La version des Septante",
          url: 'https://youtu.be/RANp4RGx_Pc',
          thumbnail: 'https://img.youtube.com/vi/RANp4RGx_Pc/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "L'histoire de la Bible 8 La Vulgate",
          url: 'https://youtu.be/u0bC8kE9DEk',
          thumbnail: 'https://img.youtube.com/vi/u0bC8kE9DEk/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "L'histoire de la Bible 9 Les moines copistes",
          url: 'https://youtu.be/T9jKrlRHVEs',
          thumbnail: 'https://img.youtube.com/vi/T9jKrlRHVEs/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "L'histoire de la Bible 10 Gutenberg et l'invention de l'imprimerie",
          url: 'https://youtu.be/1WPPFV4sReI',
          thumbnail: 'https://img.youtube.com/vi/1WPPFV4sReI/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "L'histoire de la Bible 12 Traduction de la Bible en français",
          url: 'https://youtu.be/chq8Rmycay4',
          thumbnail: 'https://img.youtube.com/vi/chq8Rmycay4/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: "L'histoire de la Bible 13 L'évolution des formats de la Bible",
          url: 'https://youtu.be/Ppvz470EAPE',
          thumbnail: 'https://img.youtube.com/vi/Ppvz470EAPE/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'The Story of Codex Sinaiticus',
          url: 'https://youtu.be/EgY6jPf4Xkc',
          thumbnail: 'https://img.youtube.com/vi/EgY6jPf4Xkc/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'The Story of Codex Alexandrinus',
          url: 'https://youtu.be/lGmrIYvhSTM',
          thumbnail: 'https://img.youtube.com/vi/lGmrIYvhSTM/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'The Story of Codex Sinaiticus',
          url: 'https://youtu.be/EgY6jPf4Xkc',
          thumbnail: 'https://img.youtube.com/vi/EgY6jPf4Xkc/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'How can you trust the New Testament when the original manuscripts are different?',
          url: 'https://youtu.be/NikVdhp0YFs',
          thumbnail: 'https://img.youtube.com/vi/NikVdhp0YFs/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Dr Wallace on Codex Sinaiticus at the British Library',
          url: 'https://youtu.be/u1SClZRz4lw',
          thumbnail: 'https://img.youtube.com/vi/u1SClZRz4lw/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Constantin von Tischendorf and the Discovery of Codex Sinaiticus',
          url: 'https://youtu.be/OUSqMLb21WQ',
          thumbnail: 'https://img.youtube.com/vi/OUSqMLb21WQ/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'THE CODEX VATICANUS B - Browsing Facsimile Editions (4K / UHD)',
          url: 'https://youtu.be/NWWyDFNSg_U',
          thumbnail: 'https://img.youtube.com/vi/NWWyDFNSg_U/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Chaîne PRINCIPIA',
          url: 'https://youtu.be/CMfqILJJzoc',
          thumbnail: 'https://img.youtube.com/vi/CMfqILJJzoc/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: "The world's oldest bible reunited online",
          url: 'https://youtu.be/fd_x1yuIrZ8',
          thumbnail: 'https://img.youtube.com/vi/fd_x1yuIrZ8/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'THE VATICANUS BIBLE Gospels; Handheld Pseudofacsimile of Codex Vaticanus Greek NT + Verse References',
          url: 'https://youtu.be/bcDRRO7CVeE',
          thumbnail: 'https://img.youtube.com/vi/bcDRRO7CVeE/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'The Vaticanus Bible (vol 2): Acts and Epistles, Handheld Pseudofacsimile of Codex Vaticanus Greek NT',
          url: 'https://youtu.be/AU-R5_WLLaw',
          thumbnail: 'https://img.youtube.com/vi/AU-R5_WLLaw/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'The Vaticanus Bible',
          url: 'https://youtu.be/kaeh17U8bxE',
          thumbnail: 'https://img.youtube.com/vi/kaeh17U8bxE/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'The Vaticanus Bible (Book Review)',
          url: 'https://youtu.be/MsEsPdD-Ypg',
          thumbnail: 'https://img.youtube.com/vi/MsEsPdD-Ypg/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'The Vaticanus Bible , Gospels',
          url: 'https://youtu.be/bhVH5NRNL8k',
          thumbnail: 'https://img.youtube.com/vi/bhVH5NRNL8k/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Vatican Codex Manuscript Spotlight',
          url: 'https://youtu.be/0BqKBEgV7IA',
          thumbnail: 'https://img.youtube.com/vi/0BqKBEgV7IA/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Why We Digitize New Testament Manuscripts',
          url: 'https://www.youtube.com/watch?v=XhbPf2FCQv4',
          thumbnail: 'https://img.youtube.com/vi/XhbPf2FCQv4/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'The Codex Sinaiticus: The Oldest Surviving Christian New Testament - The Beauty of Books - BBC Four',
          url: 'https://youtu.be/U4Xkv2gjzZw',
          thumbnail: 'https://img.youtube.com/vi/U4Xkv2gjzZw/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Codex W: When Was It Made?',
          url: 'https://youtu.be/dorARe-ZkTc',
          thumbnail: 'https://img.youtube.com/vi/dorARe-ZkTc/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Ancient Bibles',
          url: 'https://youtu.be/tmVY1Az5ij4',
          thumbnail: 'https://img.youtube.com/vi/tmVY1Az5ij4/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Dr. Dan Wallace - Tischendorf and the Discovery of the Codex Sinaiticus',
          url: 'https://youtu.be/LVSzBGXXL1Y',
          thumbnail: 'https://img.youtube.com/vi/LVSzBGXXL1Y/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'PWS - Criticizing "The Oldest and Best"; Codex Vaticanus',
          url: 'https://youtu.be/nqRVHt4C9T0',
          thumbnail: 'https://img.youtube.com/vi/nqRVHt4C9T0/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Mysterious, Ancient Bible on Display | National Geographic',
          url: 'https://youtu.be/12wYfNKBrgA',
          thumbnail: 'https://img.youtube.com/vi/12wYfNKBrgA/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Book Minute: National Book Lovers Day - Codex Sinaiticus',
          url: 'https://youtu.be/MLk_kEiFiKw',
          thumbnail: 'https://img.youtube.com/vi/MLk_kEiFiKw/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'The Codex Bezae',
          url: 'https://youtu.be/WpAfvuHxyL4',
          thumbnail: 'https://img.youtube.com/vi/WpAfvuHxyL4/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.DE,
          source: VideoLinkEnum.YOUTUBE,
          name: 'The Codex Bezae',
          url: 'https://youtu.be/vW6NU4IH4io',
          thumbnail: 'https://img.youtube.com/vi/vW6NU4IH4io/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Un rouleau de la mer Morte résout un mystère du Nouveau Testament',
          url: 'https://youtu.be/sw1Dbe0yx_Y',
          thumbnail: 'https://img.youtube.com/vi/sw1Dbe0yx_Y/mqdefault.jpg',
        },
        {
          source: VideoLinkEnum.YOUTUBE,
          name: 'Les manuscrits de la mer Morte, perspectives bibliques et historiques – Leçon de rentrée',
          url: 'https://youtu.be/kQrfqiaCDj8',
          thumbnail: 'https://img.youtube.com/vi/kQrfqiaCDj8/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Studying the Manuscripts of the New Testament by Dirk Jongkind',
          url: 'https://youtu.be/MSY7ULZBWJk',
          thumbnail: 'https://img.youtube.com/vi/MSY7ULZBWJk/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Thank you for your support!- NehemiasWall.com',
          url: 'https://youtu.be/JDQX1EGBpg8',
          thumbnail: 'https://img.youtube.com/vi/JDQX1EGBpg8/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'The Discoverer of the Sinaiticus Codex Observed Its Irregularities',
          url: 'https://youtu.be/Wb47MLMVoXc',
          thumbnail: 'https://img.youtube.com/vi/Wb47MLMVoXc/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: "World's oldest Bible reunited",
          url: 'https://youtu.be/t1_6qqk2q-o',
          thumbnail: 'https://img.youtube.com/vi/t1_6qqk2q-o/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'The Text of the New Testament: Sinaiticus, Vaticanus, Reliability, etc',
          url: 'https://youtu.be/EAxjdWE_pEg',
          thumbnail: 'https://img.youtube.com/vi/EAxjdWE_pEg/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'History of Christianity in fifteen ojects. The Codex Sinaiticus',
          url: 'https://youtu.be/wpjK-Ij8SNQ',
          thumbnail: 'https://img.youtube.com/vi/wpjK-Ij8SNQ/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'The Bible (2 of 3, "What\'s the Deal With Bible Translations?!") - ROCC Equipping Class',
          url: 'https://youtu.be/d54Yi43fHn8',
          thumbnail: 'https://img.youtube.com/vi/d54Yi43fHn8/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Introduction to Exegesis, Lecture 5 - Textual Groupings in Ancient Greek Manuscripts',
          url: 'https://youtu.be/O5FYHwyogUo',
          thumbnail: 'https://img.youtube.com/vi/O5FYHwyogUo/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.IT,
          source: VideoLinkEnum.YOUTUBE,
          name: 'Vaticanus Pal. gr. 273: a fragmentary witness to the oldest New Testament catena(Panagiotis Manafis)',
          url: 'https://youtu.be/3CRKJiOD05c',
          thumbnail: 'https://img.youtube.com/vi/3CRKJiOD05c/mqdefault.jpg',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.DAILYMOTION,
          name: 'The Codex Sinaiticus: The Oldest Surviving Christian New Testament - The Beauty of Books - BBC Four',
          url: 'https://dai.ly/x7vmyb0',
          thumbnail: 'https://www.dailymotion.com/thumbnail/video/x7vmyb0',
        },
        {
          lang: LanguageEnum.EN,
          source: VideoLinkEnum.DAILYMOTION,
          name: 'Codex Sinaiticus',
          url: 'https://dai.ly/x300fk8',
          thumbnail: 'https://www.dailymotion.com/thumbnail/video/x300fk8',
        },
      ],
    }
  },
})
</script>
