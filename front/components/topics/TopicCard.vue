<template>
  <li class="contents">
    <NuxtLink
      class="shrink-0 relative w-40 md:w-56 rounded-lg overflow-hidden shadow flex flex-col"
      :to="to"
      :style="{ backgroundColor: cover.color }"
    >
      <TopicImg
        v-if="cover"
        :src="cover.src"
        :srcset="cover.srcset"
        :color="cover.color"
        :alt="cover.alt"
        :index="index"
      />
      <div
        class="text-base md:text-lg lg:text-xl uppercase bg-black bg-opacity-30 hover:bg-opacity-50 dark:bg-opacity-40 dark:hover:bg-opacity-60 duration-300 flex"
      >
        <span
          class="w-full h-16 md:h-20 p-2 flex items-center justify-center text-center text-white font-semibold text-shadow"
        >
          {{ title }}
        </span>
      </div>
    </NuxtLink>
  </li>
</template>

<script lang="ts">
import { PropType } from 'vue'
import TopicImg from './TopicImg.vue'

export default defineNuxtComponent({
  name: 'TopicCard',

  components: { TopicImg },

  props: {
    cover: {
      type: Object as PropType<{ color: string; src: string }>,
      default: {}
    },
    to: {
      type: String,
      default: '/'
    },
    title: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: -1
    }
  }
})
</script>

<style lang="css" scoped>
.text-shadow {
  text-shadow: #fff 1px 0 10px;
}

.shadow {
  -webkit-box-shadow: 0px 26px 26px -22px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 26px 26px -22px rgba(0, 0, 0, 0.5);
}
</style>
