<template>
  <section>
    <!-- title -->
    <H2Title>{{ title }}</H2Title>

    <!-- topic list -->
    <ul
      class="
        flex flex-wrap
        py-2
        pr-2
        md:py-4 md:pr-4
        gap-2
        md:gap-6
        px-3
        md:px-5
      "
    >
      <TopicCard
        v-for="(topic, index) in topics"
        :key="index"
        :cover="topic.cover"
        :to="topic.to"
        :title="topic.title"
      />
    </ul>

    <NuxtLink
      class="
        float-right
        mt-2
        md:mt-4
        py-2
        px-4
        rounded
        hover:bg-gray-200
        dark:hover:bg-gray-700
        inline-flex
        items-center
      "
      to="/questions-answer/"
    >
      <IconQuestionCircle class="h-6 w-6" />
      <span class="ml-2">
        Tu as une question mais tu n'as pas trouvé le thème correspondant ?
      </span>
    </NuxtLink>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import TopicCard from '~/components/topics/TopicCard.vue'
import { ITopic } from '~/types'
import IconQuestionCircle from '../icons/IconQuestionCircle.vue'

export default Vue.extend({
  name: 'SectionTopicCard',

  components: { TopicCard, IconQuestionCircle },

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