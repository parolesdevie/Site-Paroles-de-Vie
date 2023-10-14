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
    <SectionIntroTopics :cover="cover" :frontFile="files[0]">
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

    <SectionArguments
      class="container mx-auto mt-4 md:mt-10"
      title="Arguments Islamique"
      :arguments="islamicArguments"
    />

    <SectionArguments
      class="container mx-auto mt-4 md:mt-10"
      title="Arguments Chrétiens"
      :arguments="christianArguments"
    />

    <DocumentSectionDownloadDocumentsList
      class="container mx-auto mt-4 md:mt-10"
      :files="files"
    />
  </div>
</template>

<script lang="ts">
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import SectionVideo from '~~/components/videos/SectionVideo.vue'
import SectionArguments from '~~/components/debate/SectionArguments.vue'
import { TopicService, ResourceService, DebateService } from '~~/services'

definePageMeta({
  layout: 'article'
})

export default defineNuxtComponent({
  name: 'SchiloPage',

  components: {
    SectionIntroTopics,
    SectionVideo,
    SectionArguments
  },

  data() {
    const debatArguments = DebateService.getDebatArgumentsById(2)

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
      cover: TopicService.getTopicCoverBySlug('/schilo/'),
      files: ResourceService.getBySlug('schilo'),
      islamicArguments: debatArguments.filter(
        (argument) => argument.team == 'islam'
      ),
      christianArguments: debatArguments.filter(
        (argument) => argument.team == 'christianism'
      )
    }
  }
})
</script>
