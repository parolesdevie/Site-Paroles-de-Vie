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
    <div v-show="open" class="fixed inset-0">
      <StoriesSlideShow @close="handleCloseEvent" />
    </div>

    <ul class="mt-4 md:mt-10 flex gap-2">
      <li
        class="flex flex-col justify-center items-center"
        tabindex="0"
        v-for="i in 1"
        :key="i"
        @click="handleOpenEvent"
      >
        <div class="cursor-pointer border-2 border-gray-700 rounded-full p-1">
          <div class="rounded-full" :style="{ backgroundColor: '#CDA625' }">
            <img
              class="h-20 w-20 rounded-full animate-fade"
              src="/images/stories/paraclet/Paraclet.jpg"
              alt=""
            />
          </div>
        </div>
        <p class="mt-3 font-semibold">Le Paraclet</p>
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
      open: false,
      cover: TopicService.getBySlug('/stories/')?.cover,
      debates: DebateService.getByTopic('stories')
    }
  },

  methods: {
    handleOpenEvent() {
      this.open = true
    },

    handleCloseEvent() {
      this.open = false
    }
  }
})
</script>
