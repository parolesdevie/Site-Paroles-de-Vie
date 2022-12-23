<template>
  <div class="dark:bg-light-black dark:text-white min-h-screen">
    <FluxRSSLink />
    <IframSpotify episode="4ZEhKWVhTo6s8EeXF0zM1w" />
    <CardQR :title="title" />
    <CardQR :slug="slug" :title="title">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
        cupiditate tempore voluptatem modi assumenda reiciendis. Accusantium,
        assumenda. Nisi, quae. Eius quidem minus delectus, obcaecati illo
        blanditiis soluta dicta repellendus id.
      </p>
    </CardQR>
    <CardQR :plateform="plateform" :href="href" :title="title" />
    <CardSearchResult :title="title" />
    <CardSearchResult :title="title" :author="author" />
    <CardSearchResult
      :href="href"
      :title="title"
      :image="image"
      :author="author"
      :plateform="plateform"
    />
    <div class="flex">
      <TopicImg :src="src" class="h-40 w-40" />
      <TopicCard :cover="cover" :to="to" :title="title" class="h-40 w-40" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FluxRSSLink from '~/components/podcast/FluxRSSLink.vue'
import IframSpotify from '~/components/podcast/IframSpotify.vue'
import CardQR from '~/components/qr/CardQR.vue'
import CardSearchResult from '~/components/search/CardSearchResult.vue'
import TopicCard from '~/components/topics/TopicCard.vue'
import TopicImg from '~/components/topics/TopicImg.vue'
import { QuestionPlateformEnum } from '~/types'

export default Vue.extend({
  name: 'UiPage',

  components: {
    FluxRSSLink,
    IframSpotify,
    CardQR,
    CardSearchResult,
    TopicImg,
    TopicCard,
  },

  data() {
    return {
      plateform: QuestionPlateformEnum.GOT_QUESTIONS,
      slug: 'slug',
      href: 'https://www.google.fr/',
      title: 'Titre',
      image: 'https://via.placeholder.com/600x600',
      author: 'Auteur',
      src: 'placeholder',
      cover: {
        color: '#000',
        src: 'placeholder',
      },
      to: '/ui/',
    }
  },
})
</script>