<script setup lang="ts">
const { topics, filter, filteredTopics } = useTopicList()
</script>

<template>
  <section>
    <!-- title -->
    <H2Title>{{ title }}</H2Title>

    <FormsSearchInput v-model="filter" placeholder="Recherche" />
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
        v-for="(topic, index) in filteredTopics"
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
import TopicCard from '~~/components/topics/TopicCard.vue'
import IconQuestionCircle from '~~/components/icons/IconQuestionCircle.vue'

const DEFAULT_TITLE = 'Topics'

export default defineNuxtComponent({
  name: 'SectionTopicCard',

  components: { TopicCard, IconQuestionCircle },

  props: {
    title: {
      type: String,
      default: DEFAULT_TITLE
    }
  }
})
</script>