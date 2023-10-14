<script setup lang="ts">
import { DebateService } from '~~/services'

useHead({
  title: "Jésus n'a jamais annoncer Ahmad - Paroles de vie",
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
      content: 'https://www.paroles-de-vie.tk/seo/ahmad.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/ahmad.webp'
    }
  ]
})
const debates = useState(() => DebateService.getByTopic('ahmad'))
</script>

<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- intro -->
    <SectionIntroTopics :cover="cover" :frontFile="files[0]">
      <template v-slot:title>Jésus n'a jamais annoncer Ahmad</template>
    </SectionIntroTopics>

    <!-- section debates  -->
    <DebateSectionDebate
      title="Découvrir en débats"
      class="container mx-auto mt-4 md:mt-10"
      :debates="debates"
      :hideSubject="false"
    />

    <!-- section download document  -->
    <DocumentSectionDownloadDocumentsList
      class="container mx-auto mt-4 md:mt-10"
      :files="files"
    />
  </div>
</template>

<script lang="ts">
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import { DebateService, TopicService, ResourceService } from '~~/services'

definePageMeta({
  layout: 'article'
})

export default defineNuxtComponent({
  name: 'AhmadPage',

  components: { SectionIntroTopics },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Annonce de Ahmad',
          to: '/ahmad/'
        }
      ],
      cover: TopicService.getTopicCoverBySlug('/ahmad/'),
      debates: DebateService.getByTopic('ahmad'),
      files: ResourceService.getBySlug('ahmad')
    }
  }
})
</script>
