<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="mb-auto px-3 md:px-0 py-4 flex flex-col">
      <Breadcrumb class="container mx-auto" :items="breadcrumbItems" />

      <section class="container mx-auto mt-4 md:mt-10">
        <div class="relative flex flex-col md:flex-row">
          <div class="contents">
            <img
              class="
                absolute
                md:relative
                top-0
                right-0
                h-9
                w-h-9
                md:h-56 md:w-56
                rounded-full
                md:rounded-xl
                flex-shrink-0
              "
              src="/images/topic/the-falsification-of-the-bible.webp"
              alt=""
            />
          </div>

          <div class="md:ml-4">
            <!-- title -->
            <h1 class="font-bold text-3xl md:text-4xl pr-9 truncate">
              La falsification de la bible
            </h1>

            <p
              class="
                mt-4
                md:mt-8
                font-semibold
                text-base text-gray-800
                max-w-2xl
              "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut
              quaerat perferendis a totam et maiores sint libero similique eaque
              omnis qui iusto, nostrum impedit esse, adipisci corrupti molestias
              possimus !
            </p>
          </div>
        </div>
      </section>

      <section
        class="-mx-3 px-3 mt-4 md:mt-10 bg-gray-200 py-4 md:py-10 md:px-40"
      >
        <!-- title -->
        <h2 class="flex items-center font-bold text-2xl md:text-3xl">
          Réfutation de la thèse islamique
        </h2>

        <p class="mt-4 md:mt-8 font-semibold text-base max-w-5xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          cupiditate facilis unde amet sapiente repellat aspernatur ullam esse
          dolore quae! Hic, incidunt necessitatibus. Laboriosam suscipit ad,
          corrupti perspiciatis vitae quam.
        </p>
      </section>

      <SectionDownloadDocumentsList
        class="container mx-auto mt-4 md:mt-10"
        :files="files"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionDownloadDocumentsList from '~/components/document/SectionDownloadDocumentsList.vue'
import { AuthorEnum, FormatEnum } from '~/types'
export default Vue.extend({
  name: 'MagazinesPage',

  components: { SectionDownloadDocumentsList },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'La falsification de la bible',
          to: '/the-falsification-of-the-bible/',
        },
      ],
      files: [
        {
          author: AuthorEnum.SHAM,
          format: FormatEnum.PDF,
          thumbnail: '/images/pdf/la-falsification-de-la-bible',
          href: '/pdf/la-falsification-de-la-bible.pdf',
          title: 'La falsification de la bible',
        },
      ],
    }
  },
})
</script>