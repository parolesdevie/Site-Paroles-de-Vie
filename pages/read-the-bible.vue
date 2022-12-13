<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb class="container mx-auto" :items="breadcrumbItems" />

      <!-- intro -->
      <SectionIntroTopics topicSlug="read-the-bible">
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
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionIntroTopics from '~/components/topics/SectionIntroTopics.vue'
import { WebSiteService } from '~/services'

export default Vue.extend({
  name: 'DivinityOfJesusPage',

  components: { SectionIntroTopics },

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
      bibles: WebSiteService.getBibles(),
    }
  },
})
</script>
