<script setup lang="ts">
import { BookService } from '~~/services'

useHead({
  title: 'La divinité de Jésus dans la Bible - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/the-divinity-of-jesus.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/the-divinity-of-jesus.webp'
    }
  ]
})

const books = useState(() => BookService.getDivinity())
</script>

<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- intro -->
    <SectionIntroTopics :cover="cover">
      <template v-slot:title>La divinité de Jésus</template>
      <!-- <template v-slot:body> </template> -->
    </SectionIntroTopics>

    <SectionDebate
      title="Découvrir en débats"
      class="container mx-auto mt-4 md:mt-10"
      :debates="debates"
      :hideSubject="false"
    />

    <!-- book -->
    <BookSectionBook
      class="container mx-auto mt-4 md:mt-10"
      title="Acheter un livre sur le sujet"
      :intro="false"
      :books="books"
    />
  </div>
</template>

<script lang="ts">
import SectionDebate from '~~/components/debate/SectionDebate.vue'
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import { DebateService, TopicService } from '~~/services'

export default defineNuxtComponent({
  name: 'DivinityOfJesusPage',

  components: { SectionIntroTopics, SectionDebate },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'La divinité de Jésus',
          to: '/the-divinity-of-jesus/'
        }
      ],
      cover: TopicService.getTopicCoverBySlug('/the-divinity-of-jesus/'),
      debates: DebateService.getByTopic('the-divinity-of-jesus')
    }
  }
})
</script>
