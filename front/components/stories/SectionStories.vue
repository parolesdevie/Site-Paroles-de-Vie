<script setup lang="ts">
import { StoriesService } from '~~/services'

const stories = useState(() => StoriesService.getAll())
</script>

<template>
  <div>
    <div v-if="currentStory" class="fixed inset-0 z-50">
      <StoriesSlideShow @close="handleCloseEvent" :story="currentStory" />
    </div>

    <ul class="flex overflow-x-auto md:gap-2 pb-4">
      <li
        class="w-20 md:w-32 flex flex-col items-center cursor-pointer rounded-xl md:p-4 shrink-0"
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
            <picture>
              <source
                height="80"
                width="80"
                media="(min-width: 768px)"
                type="image/webp"
                :srcset="`/images/stories/${story.slug}/desktop/cover@1x.webp,
                          /images/stories/${story.slug}/desktop/cover@1.5x.webp 1.5x,
                          /images/stories/${story.slug}/desktop/cover@2x.webp 2x,
                          /images/stories/${story.slug}/desktop/cover@3x.webp 3x,
                          /images/stories/${story.slug}/desktop/cover@4x.webp 4x`"
              />
              <source
                height="56"
                width="56"
                type="image/webp"
                :srcset="`/images/stories/${story.slug}/mobile/cover@1x.webp,
                          /images/stories/${story.slug}/mobile/cover@1.5x.webp 1.5x,
                          /images/stories/${story.slug}/mobile/cover@2x.webp 2x,
                          /images/stories/${story.slug}/mobile/cover@3x.webp 3x,
                          /images/stories/${story.slug}/mobile/cover@4x.webp 4x`"
              />
              <img
                height="80"
                width="80"
                class="h-14 w-14 md:h-20 md:w-20 rounded-full animate-fade"
                :src="`/images/stories/${story.slug}/desktop/cover@1x.webp`"
                :alt="story.alt"
              />
            </picture>
          </div>
        </div>
        <p class="mt-3 font-medium text-center text-xs md:text-base">
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