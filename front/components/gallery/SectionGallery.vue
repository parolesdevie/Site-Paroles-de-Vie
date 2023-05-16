<template>
  <section>
    <!-- title -->
    <H2Title>{{ title }}</H2Title>

    <!-- images -->
    <div class="mt-2 md:mt-4 flex flex-wrap gap-3">
      <a
        class="relative"
        v-for="({ id, scale }, index) in gallery"
        :key="index"
        :href="getDownloadUrl(id)"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <img loading="lazy" class="w-full rounded-2xl" :src="getImageUrl(id)" />
        <span
          class="absolute top-2 right-4 bg-black bg-opacity-50 py-1 px-3 rounded-md"
          >{{ scale }}</span
        >
      </a>
    </div>
  </section>
</template>


<script lang="ts">
import { PropType } from 'vue'

export default defineNuxtComponent({
  name: 'SectionGallery',

  props: {
    gallery: {
      type: Array as PropType<unknown[]>,
      default: () => []
    },
    title: {
      type: String,
      default: 'Gallerie Photos'
    }
  },

  methods: {
    getDownloadUrl(id: string): string {
      const job = id.slice(0, 20)
      return `https://storage.googleapis.com/nightcafe-creator.appspot.com/jobs/${job}/${id}.jpg`
    },
    getImageUrl(id: string): string {
      const job = id.slice(0, 20)
      const quality = 374
      return `https://images.nightcafe.studio/jobs/${job}/${id}.jpg?tr=w-${quality},c-at_max`
    }
  }
})
</script>