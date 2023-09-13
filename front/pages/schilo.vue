<script setup lang="ts">
useHead({
  title: 'Le Schilo - Paroles de vie',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Le Schilo'
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://www.paroles-de-vie.tk/seo/schilo.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/schilo.webp'
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
      <template v-slot:title>
        L'Accomplissement de Genèse 49:10 par Jésus
      </template>
      <template v-slot:body>
        <p>
          Cet article explore la relation entre la prophétie de Genèse 49:10 et
          les récits évangéliques de l'entrée triomphale de Jésus à Jérusalem.
          Bien que traditionnellement associée à Mahomet, la prophétie du Shiloh
          est également liée à Jésus dans les évangiles. Nous examinons ces
          parallèles tout en remettant en question certaines interprétations
          religieuses. De plus, nous explorons les liens entre Genèse 49:10 et
          Zacharie 9,9, ainsi que l'impact de ces prophéties sur la da'wa.
          Enfin, nous évoquons la relation entre Genèse 49:10 et Daniel 2,
          ouvrant ainsi la voie à une analyse approfondie de ces prophéties.
        </p>
      </template>
    </SectionIntroTopics>
  </div>
</template>

<script lang="ts">
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import { DebateService, TopicService } from '~~/services'
import { AuthorEnum, FormatEnum, ISourceFile } from '~~/types'

export default defineNuxtComponent({
  name: 'Schilo',

  components: { SectionIntroTopics },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Le Schilo',
          to: '/schilo/'
        }
      ],
      cover: TopicService.getBySlug('/schilo/')?.cover,
      debates: DebateService.getByTopic('template'),
      frontFile: {
        author: AuthorEnum.BENEVOLENCE,
        format: FormatEnum.PDF,
        slug: 'jesus-realizes-genesis-49-10',
        title: 'Le Schilo'
      } as ISourceFile
    }
  }
})
</script>
