<script setup lang="ts">
import { StoriesService } from '~~/services'

useHead({
  title: 'Stories - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/stories.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/stories.webp'
    }
  ]
})

const stories = useState(() => StoriesService.getAll())
</script>

<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- story -->
    <div v-if="currentStory" class="fixed inset-0">
      <StoriesSlideShow @close="handleCloseEvent" :story="currentStory" />
    </div>

    <ul class="mt-4 md:mt-10 flex overflow-x-auto">
      <li
        class="w-32 flex flex-col items-center gap-2 cursor-pointer rounded-xl p-4 shrink-0"
        tabindex="0"
        @keydown.esc="handleOpenEvent(undefined)"
        v-for="(story, index) in stories"
        :key="index"
        @click="handleOpenEvent(story)"
      >
        <div
          class="border-2 border-gray-200 dark:border-gray-700 rounded-full p-1"
        >
          <div class="rounded-full" :style="{ backgroundColor: story.color }">
            <img
              class="h-20 w-20 rounded-full animate-fade"
              :src="`/images/stories/${story.slug}/cover.jpg`"
              :alt="story.alt"
            />
          </div>
        </div>
        <p class="mt-3 font-medium text-center">
          {{ story.title }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import SectionDebate from '~~/components/debate/SectionDebate.vue'
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import { DebateService, TopicService } from '~~/services'

export default defineNuxtComponent({
  name: 'StoriesPage',

  components: { SectionIntroTopics, SectionDebate },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Stories',
          to: '/stories/'
        }
      ],
      currentStory: undefined,
      // open: false,
      cover: TopicService.getTopicCoverBySlug('/stories/'),
      debates: DebateService.getByTopic('stories')
    }
  },

  methods: {
    handleOpenEvent(story) {
      this.currentStory = story
      // this.open = true
    },

    handleCloseEvent() {
      this.currentStory = undefined
      // this.open = false
    }
  }
})
</script>
