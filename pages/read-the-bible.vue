<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb class="container mx-auto" :items="breadcrumbItems" />

      <!-- intro -->
      <SectionIntroTopics :cover="cover">
        <template v-slot:title>Lire la Bible</template>
        <template v-slot:body>
          <strong class="font-bold">Shalom,</strong>
          <br />
          Voici un choix de sites pour lire la bible.
          <br />
          Bonne lecture.🕊️
        </template>
      </SectionIntroTopics>

      <BgColorSection>
        <template v-slot:title>Sites</template>
        <template v-slot:body>
          <!-- links -->
          <nav class="contents">
            <ul class="flex flex-col leading-7">
              <li v-for="(webSite, index) in bibles" :key="index">
                <a
                  class="inline-flex items-center hover:text-blue-700"
                  :href="webSite.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    class="block h-1.5 w-1.5 rounded-full bg-current mr-2"
                  />
                  <span>
                    {{ webSite.name }}
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </template>
      </BgColorSection>

      <!-- document -->
      <SectionDownloadDocumentsList
        class="container mx-auto mt-4 md:mt-10"
        :files="files"
      />

      <!-- book -->
      <SectionBook
        class="container mx-auto mt-4 md:mt-10"
        title="Acheter une Bible"
        :intro="false"
        :books="books"
      />
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionBook from '~/components/book/SectionBook.vue'
import SectionDownloadDocumentsList from '~/components/document/SectionDownloadDocumentsList.vue'
import BgColorSection from '~/components/global/BgColorSection.vue'
import SectionIntroTopics from '~/components/topics/SectionIntroTopics.vue'
import { BookService, TopicService, WebSiteService } from '~/services'
import { AuthorEnum, FormatEnum } from '~/types'

export default Vue.extend({
  name: 'ReadBiblePage',

  components: {
    SectionIntroTopics,
    BgColorSection,
    SectionDownloadDocumentsList,
    SectionBook,
  },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Lire la Bible',
          to: '/read-the-bible/',
        },
      ],
      cover: TopicService.getBySlug('/read-the-bible/')?.cover,
      bibles: WebSiteService.getBibles(),
      files: [
        {
          author: AuthorEnum.UNKNOW,
          format: FormatEnum.PDF,
          thumbnail: '/images/pdf/evangile-de-matthieu-en-hebreu-shem-tov',
          href: '/pdf/evangile-de-matthieu-en-hebreu-shem-tov.pdf',
          title: 'Evangile de matthieu en hébreu shem tov',
        },
      ],
      books: BookService.getBible(),
    }
  },
})
</script>
