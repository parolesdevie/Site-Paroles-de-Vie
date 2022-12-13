<template>
  <section class="container mx-auto mt-4 md:mt-10">
    <div class="relative flex flex-col md:flex-row">
      <div class="contents">
        <img
          class="
            absolute
            md:relative
            top-0
            right-0
            h-9
            w-h-9
            md:h-56 md:w-56
            rounded-full
            md:rounded-xl
            flex-shrink-0
          "
          :src="'/images/topic/' + topicSlug + '.webp'"
          alt=""
        />
      </div>

      <div class="md:ml-4">
        <!-- title -->
        <h1
          class="
            font-bold
            text-3xl
            md:text-4xl
            pr-9
            truncate
            overflow-y-visible
            md:overflow-visible
          "
        >
          <slot name="title"></slot>
        </h1>

        <p class="mt-4 md:mt-8 font-semibold text-base text-gray-800 max-w-2xl">
          <slot name="body"></slot>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    topicSlug: {
      type: String,
      default: '',
    },
  },
})
</script>