<template>
  <li class="contents">
    <NuxtLink
      class="
        relative
        h-40
        w-40
        md:h-56 md:w-56
        bg-gray-200
        rounded-xl
        overflow-hidden
        flex
        items-center
        justify-center
      "
      :to="to"
    >
      <img v-if="cover" :src="`/images/topic/${cover}.webp`" :alt="title" />

      <span
        class="
          absolute
          inset-0
          text-base
          md:text-2xl
          uppercase
          bg-black bg-opacity-10
          hover:bg-opacity-30
          duration-300
          text-white
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

export default Vue.extend({
  name: 'TopicCard',

  components: {},

  props: {
    cover: {
      type: String,
      default: '',
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