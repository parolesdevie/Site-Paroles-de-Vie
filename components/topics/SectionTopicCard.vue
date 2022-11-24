<template>
  <section>
    <!-- title -->
    <h2 class="flex items-center font-bold text-2xl md:text-3xl">Topics</h2>

    <!-- topic list -->
    <ul class="flex flex-wrap py-2 pr-2 md:py-4 md:pr-4 gap-2 md:gap-4">
      <TopicCard
        v-for="(topic, index) in topics"
        :key="index"
        :cover="topic.cover"
        :to="topic.to"
        :title="topic.title"
      />
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import { ITopic } from '~/types'
import TopicCard from './TopicCard.vue'

export default Vue.extend({
  name: 'SectionTopicCard',

  components: { TopicCard },

  props: {
    topics: {
      type: Array as PropType<ITopic[]>,
      default: () => [
        {
          cover: 'manuscript',
          to: '/manuscripts/',
          title: 'Manuscrits',
        },
        {
          cover: 'debates-tips',
          to: '/debates-tips/',
          title: 'Conseils de débats',
        },
      ],
    },
  },
})
</script>