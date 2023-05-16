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
    <SectionIntroTopics :cover="cover" :frontFile="frontFile">
      <template v-slot:title>Jésus n'a jamais annoncer Ahmad</template>
    </SectionIntroTopics>

    <DebateSectionDebate
      title="Découvrir en débats"
      class="container mx-auto mt-4 md:mt-10"
      :debates="debates"
      :hideSubject="false"
    />
  </div>
</template>

<script lang="ts">
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import { DebateService, TopicService } from '~~/services'
import { AuthorEnum, FormatEnum, ISourceFile } from '~~/types'

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
      cover: TopicService.getBySlug('/ahmad/')?.cover,
      debates: DebateService.getByTopic('ahmad'),
      frontFile: {
        author: AuthorEnum.BENEVOLENCE,
        format: FormatEnum.PDF,
        slug: 'ahmad',
        thumbnail: '/images/pdf/ahmad',
        href: '/pdf/ahmad.pdf',
        title: "Jésus n'a jamais annoncer Ahmad"
      } as ISourceFile
    }
  }
})
</script>
