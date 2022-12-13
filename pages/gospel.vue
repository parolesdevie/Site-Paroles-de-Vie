<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- intro -->
      <SectionIntroTopics topicSlug="gospel">
        <template v-slot:title>Louanges</template>
        <template v-slot:body>
          Au Ier siècle, Paul et Silas ont loué Dieu par leurs chants alors
          qu’ils étaient en prison (<strong>Ac 16:25</strong>). À notre époque,
          des chrétiens ont chanté des cantiques alors qu’ils étaient détenus
          dans le camp de concentration de Sachsenhausen en Allemagne nazie ou
          qu’ils étaient exilés en Sibérie. Ces exemples montrent que les
          cantiques ont le pouvoir d’insuffler du courage face aux épreuves.
          <br />
          <span class="inline-block w-80 truncate">
            L’esprit saint nous aidera alors à nous en souvenir
          </span>
          <br />
          <a
            class="inline-block mt-2 underline hover:text-blue-700"
            href="https://www.jw.org/fr/biblioth%C3%A8que/jw-cahier-vie-et-ministere/mwb-avril-2017/programme-reunion-17-23-avril/les-cantiques-insufflent-du-courage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lire l'article
          </a>
        </template>
      </SectionIntroTopics>

      <!-- section -->
      <section class="mt-4 md:mt-10"></section>
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionIntroTopics from '~/components/topics/SectionIntroTopics.vue'

export default Vue.extend({
  name: 'GospelPage',

  components: { SectionIntroTopics },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Louanges',
          to: '/the-divinity-of-jesus/',
        },
      ],
    }
  },
})
</script>
