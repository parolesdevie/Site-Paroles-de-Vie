<template>
  <IconYouTube
    v-if="source === VideoLinkEnum.YOUTUBE"
    playColor="#fff"
    class="absolute z-10 top-2 left-2 h-7 w-7 md:h-9 md:w-9 text-red-500"
  />
  <IconYouTube
    v-else-if="source === VideoLinkEnum.YOUTUBE_SHORT"
    playColor="#fff"
    class="absolute z-10 top-2 left-2 h-7 w-7 md:h-9 md:w-9 text-red-500"
  />
  <IconTikTok
    v-else-if="source === VideoLinkEnum.TIKTOK"
    class="absolute z-10 top-2 left-2 h-7 w-7 md:h-9 md:w-9 text-blue-500"
  />
  <IconDailymotion
    v-else-if="source === VideoLinkEnum.DAILYMOTION"
    class="absolute z-10 top-2 left-2 h-7 w-7 md:h-9 md:w-9 text-black bg-white"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import { VideoLinkEnum } from '~/types'
import IconYouTube from '~/components/icons/IconYouTube.vue'
import IconTikTok from '~/components/icons/IconTikTok.vue'
import IconDailymotion from '~/components/icons/IconDailymotion.vue'

export default Vue.extend({
  name: 'IconPlateformVideo',

  components: { IconYouTube, IconTikTok, IconDailymotion },

  props: {
    source: {
      type: String as PropType<VideoLinkEnum>,
      default: VideoLinkEnum.UNKNOW,
    },
  },

  data() {
    return {
      VideoLinkEnum,
    }
  },
})
</script>