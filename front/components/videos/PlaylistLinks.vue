<template>
  <div class="flex flex-col md:flex-row gap-2 md:gap-4">
    <a
      v-if="playlistYoutubeId"
      class="hover:text-blue-700 inline-flex items-center"
      :href="'https://youtube.com/playlist?list=' + playlistYoutubeId"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconPlay class="h-7 w-7 md:h-9 md:w-9" />
      <span class="ml-2">{{ playlistYoutubeLabel }}</span>
    </a>
    <a
      v-if="playlistDailymotionId"
      class="hover:text-blue-700 inline-flex items-center"
      :href="'https://dailymotion.com/playlist/' + playlistDailymotionId"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconDailymotion class="h-7 w-7 md:h-9 md:w-9" />
      <span class="ml-2">{{ playlistDailymotionLabel }}</span>
    </a>
  </div>
</template>

<script lang="ts">
import IconDailymotion from '~~/components/icons/IconDailymotion.vue'
import IconPlay from '~~/components/icons/IconPlay.vue'

export default defineNuxtComponent({
  name: 'PlaylistLink',

  components: { IconPlay, IconDailymotion },

  props: {
    playlistYoutubeId: {
      type: String,
      default: ''
    },
    playlistYoutubeLabel: {
      type: String,
      default: 'Lire la playlist sur YouTube'
    },
    playlistDailymotionId: {
      type: String,
      default: ''
    },
    playlistDailymotionLabel: {
      type: String,
      default: 'Lire la playlist sur Dailymotion'
    }
  }
})
</script>