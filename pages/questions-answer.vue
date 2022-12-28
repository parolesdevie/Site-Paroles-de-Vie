<template>
  <div class="flex flex-col min-h-screen">
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

<script setup lang="ts">
useHead({
  title: 'Questions - Réponse - Paroles de vie',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Défendre la foi chrétienne, donner une éducation chrétienne, expression de la foi.'
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://www.paroles-de-vie.tk/seo/questions-answer.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/questions-answer.webp'
    }
  ]
})
</script>

<script lang="ts">
import SectionQR from '~~/components/qr/SectionQR.vue'
import { QRService } from '~~/services'

export default defineNuxtComponent({
  name: 'QRPage',

  components: { SectionQR },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Questions / Réponse',
          to: '/questions-answer/'
        }
      ],
      questions: QRService.getAll()
    }
  }
})
</script>
