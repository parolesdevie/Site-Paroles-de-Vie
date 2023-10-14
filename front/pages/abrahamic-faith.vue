<script setup lang="ts">
useHead({
  title: 'La foi Abrahamique - Paroles de vie',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'La foi Abrahamique'
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://www.paroles-de-vie.tk/seo/abrahamic-faith.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/abrahamic-faith.webp'
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
      <template v-slot:title>La foi Abrahamique</template>
      <template v-slot:body>
        Dans cet article, nous nous plongeons dans la profondeur de la foi
        abrahamique, explorant les croyances et les différences entre les trois
        grandes religions monothéistes : le christianisme, l'islam et le
        judaïsme.
        <br />
        Alors que beaucoup prétendent que les prophètes de ces religions
        partagent une foi similaire, cette série se penche sur les nuances
        théologiques et les divergences qui les séparent.
        <br />
        Nous aborderons des questions cruciales, allant de la reconnaissance
        prophétique à la signification de concepts clés dans l'islam, en passant
        par la véritable origine de la Ka'ba.
        <br />
        Préparez-vous à une exploration approfondie de la foi abrahamique, de
        ses similitudes apparentes et de ses différences souvent sous-estimées.
      </template>
    </SectionIntroTopics>

    <!-- section article -->
    <!-- <section class="container mx-auto mt-4 md:mt-10">
      <H2Title>La foi Abrahamique</H2Title>

      <div class="mt-4 md:mt-8 font-semibold text-base max-w-2xl mx-auto">
        <h3 class="uppercase font-bold">La dissemblance prophétique</h3>
        <p>
          Les musulmans soutiennent à tort que les prophètes professent la même
          religion et transmettent le même message de monothéisme. Ainsi pour
          eux , les prophètes partagent une foi similaire, tandis que les
          divergences se situent uniquement dans les nuances de leurs
          jurisprudences respectives. [...]
        </p>
        <h3 class="mt-2 md:mt-4 uppercase font-bold">
          La fausse reconnaissance prophétique islamique
        </h3>
        <p>
          Les musulmans croient en des noms de prophètes mais pas en des
          prophètes, la preuve étant qu'ils disent que les écrits prophétiques
          de la bible sont falsifiés. C'est pour eux une fuite en avant qui a
          pour objectif de leur éviter de se justifier des textes d'isaïe etc.
          Les musulmans pensent qu'ils sont la communauté qui ont reconnu tous
          les prophètes mais ce sont en fait les chrétiens.
        </p>
        <p>
          Les Isra'iliyat ne constituent pas un fondement de croyance, mais
          plutôt des informations secondaires dans l'islam. Ils sont simplement
          des récits informatifs, et l'authenticité de leur contenu ainsi que
          des personnages qui y sont décrits n'est pas garantie.
        </p>
        <p>
          Il est fréquent de constater que lorsqu'on interroge un musulman sur
          sa foi en Isaïe, sa réponse est généralement affirmative. En revanche,
          lorsque la question porte sur sa croyance en ce que le prophète Isaïe
          a écrit dans son rouleau au chapitre 53, la réponse devient négative,
          et il considère cette position comme légitime. Cependant, si l'on lui
          pose la question de savoir s'il est concevable de croire en Muhammad
          tout en rejetant le Coran, il insistera sur l'impossibilité de cette
          proposition, la qualifiant de non-sens.
        </p>
        <p></p>
      </div>
    </section> -->

    <!-- section youtube videos  -->
    <SectionVideo
      keepOnGrid
      class="container mx-auto mt-4 md:mt-10"
      :playlistYoutubeId="playlistYoutubeIdVideos"
      playlistYoutubeLabel="Voir le LIVE du 8 oct 2023"
      title="Ressources"
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
import SectionVideo from '~~/components/videos/SectionVideo.vue'
import { DebateService, TopicService, ResourceService } from '~~/services'

definePageMeta({
  layout: 'article'
})

export default defineNuxtComponent({
  name: 'AbrahamicFaithPage',

  components: {
    SectionIntroTopics,
    SectionVideo
  },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'La foi Abrahamique',
          to: '/abrahamic-faith/'
        }
      ],
      cover: TopicService.getTopicCoverBySlug('/abrahamic-faith/'),
      debates: DebateService.getByTopic('abrahamic-faith'),
      playlistYoutubeIdVideos: 'PLMeqOcWm_t0jq-bWdv6T6gLMHUFVZI1fG',
      files: ResourceService.getBySlug('abrahamic-faith')
    }
  }
})
</script>
