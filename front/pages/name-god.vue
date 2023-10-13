<script setup lang="ts">
useHead({
  title: 'Le nom de Dieu - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/name-god.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/name-god.webp'
    }
  ]
})
</script>

<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- intro -->
    <SectionIntroTopics :cover="cover" :frontFile="frontFile">
      <template v-slot:title>Le nom de Dieu</template>
      <!-- <template v-slot:body></template> -->
    </SectionIntroTopics>
  </div>
</template>

<script lang="ts">
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import { DebateService, TopicService } from '~~/services'
import { AuthorEnum, FormatEnum, ISourceFile } from '~~/types'

export default defineNuxtComponent({
  name: 'NameOfGodPage',

  components: { SectionIntroTopics },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Le nom de Dieu',
          to: '/name-god/'
        }
      ],
      cover: TopicService.getTopicCoverBySlug('/name-god/'),
      debates: DebateService.getByTopic('name-god'),
      frontFile: {
        author: AuthorEnum.BENEVOLENCE,
        format: FormatEnum.PDF,
        slug: 'name-god',
        thumbnail: '/images/pdf/name-god',
        href: '/pdf/name-god.pdf',
        title: 'Nom de Dieu'
      } as ISourceFile
    }
  }
})
</script>
