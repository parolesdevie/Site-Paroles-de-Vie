<template>
  <li class="contents">
    <NuxtLink
      class="
        relative
        h-40
        w-40
        md:h-56 md:w-56
        lg:h-60 lg:w-60
        rounded-xl
        overflow-hidden
      "
      :to="to"
    >
      <TopicImg
        class="h-full w-full"
        v-if="cover"
        :src="cover.src"
        :color="cover.color"
        :alt="title"
      />

      <span
        class="
          absolute
          inset-0
          text-base
          md:text-xl
          lg:text-2xl
          uppercase
          bg-black bg-opacity-20
          hover:bg-opacity-40
          duration-300
          text-white
          font-semibold
          flex
          items-center
          justify-center
          text-center
        "
      >
        {{ title }}
      </span>
    </NuxtLink>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import TopicImg from './TopicImg.vue'

export default Vue.extend({
  name: 'TopicCard',

  components: { TopicImg },

  props: {
    cover: {
      type: Object as PropType<{ color: string; src: string }>,
      default: {},
    },
    to: {
      type: String,
      default: '/',
    },
    title: {
      type: String,
      default: '',
    },
  },
})
</script>