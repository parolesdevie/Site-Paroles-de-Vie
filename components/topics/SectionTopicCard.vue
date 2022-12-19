<template>
  <section>
    <!-- title -->
    <h2 class="flex items-center font-bold text-2xl md:text-3xl">
      {{ title }}
    </h2>

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
import TopicCard from '~/components/topics/TopicCard.vue'
import { ITopic } from '~/types'

export default Vue.extend({
  name: 'SectionTopicCard',

  components: { TopicCard },

  props: {
    title: {
      type: String,
      default: 'Topics',
    },
    topics: {
      type: Array as PropType<ITopic[]>,
      default: () => [],
    },
  },
})
</script>