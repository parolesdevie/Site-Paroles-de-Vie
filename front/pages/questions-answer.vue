<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- questions -->
    <SectionQR class="mt-4 md:mt-10" :questions="questions" />
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
