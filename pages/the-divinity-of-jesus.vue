<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- intro -->
      <SectionIntroTopics topicSlug="the-divinity-of-jesus">
        <template v-slot:title>La divinité de Jésus</template>
        <template v-slot:body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut
          quaerat perferendis a totam et maiores sint libero similique eaque
          omnis qui iusto, nostrum impedit esse, adipisci corrupti molestias
          possimus !
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
          name: 'La divinité de Jésus',
          to: '/the-divinity-of-jesus/',
        },
      ],
    }
  },
})
</script>
