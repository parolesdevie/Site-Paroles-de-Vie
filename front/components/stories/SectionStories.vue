<script setup lang="ts">
import { StoriesService } from '~~/services'

const stories = useState(() => StoriesService.getAll())
</script>

<template>
  <div>
    <div v-if="currentStory" class="fixed inset-0 z-50">
      <StoriesSlideShow @close="handleCloseEvent" :story="currentStory" />
    </div>

    <ul class="flex overflow-x-auto gap-1 md:gap-2 pb-4">
      <li
        class="w-28 md:w-32 flex flex-col items-center cursor-pointer rounded-xl p-2 md:p-4 shrink-0"
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
              class="h-16 w-16 md:h-20 md:w-20 rounded-full animate-fade"
              :src="`/images/stories/${story.slug}/cover.jpg`"
              :alt="story.alt"
            />
          </div>
        </div>
        <p class="mt-3 font-medium text-center text-sm md:text-base">
          {{ story.title }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'SectionStoriesPage',

  components: {},

  data() {
    return {
      currentStory: undefined
      // open: false,
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