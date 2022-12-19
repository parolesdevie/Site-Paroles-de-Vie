<template>
  <div class="flex flex-col min-h-screen dark:bg-light-black dark:text-white">
    <!-- header -->
    <Header />
    <div
      class="
        container
        mx-auto
        mb-auto
        px-3
        md:px-0
        py-4
        flex flex-col
        min-h-1/2-screen
      "
    >
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- questions -->
      <SectionQR class="mt-4 md:mt-10" :questions="questions" />
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionQR from '~/components/qr/SectionQR.vue'
import { QRService } from '~/services'

export default Vue.extend({
  name: 'QRPage',

  components: { SectionQR },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/',
        },
        {
          name: 'Questions / Réponse',
          to: '/questions-answer/',
        },
      ],
      questions: QRService.getAll(),
    }
  },
})
</script>
