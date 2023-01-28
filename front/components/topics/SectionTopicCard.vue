<script setup lang="ts">
const { topics, filter, filteredTopics } = useTopicList()
</script>

<template>
  <section class="pb-20 md:pb-10 lg:pb-0">
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
        md:gap-3
        lg:gap-5
        xl:gap-6
        px-3
        md:px-5
        lg:px-4
        2xl:px-5
      "
    >
      <TopicsTopicCard
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
        duration-300
        inline-flex
        items-center
      "
      to="/questions-answer/"
    >
      <IconsIconQuestionCircle class="h-6 w-6" />
      <span class="ml-2">
        Tu as une question mais tu n'as pas trouvé le thème correspondant ?
      </span>
    </NuxtLink>
  </section>
</template>

<script lang="ts">
const DEFAULT_TITLE = 'Topics'

export default defineNuxtComponent({
  name: 'SectionTopicCard',

  props: {
    title: {
      type: String,
      default: DEFAULT_TITLE
    }
  }
})
</script>