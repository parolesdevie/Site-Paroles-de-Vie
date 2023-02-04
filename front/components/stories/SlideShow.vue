<template>
  <div
    tabindex="0"
    @keydown.esc="emitCloseEvent"
    class="h-screen bg-black bg-opacity-60 flex justify-center items-center"
  >
    <div class="relative">
      <!-- header -->
      <header class="absolute top-0 inset-x-0 p-4 flex">
        <div
          class="
            absolute
            top-8
            inline-block
            p-3
            bg-black bg-opacity-40
            text-white
            rounded-full
            mr-4
            md:-left-16 md:bg-white md:text-black
          "
          @click="emitCloseEvent"
        >
          <IconsIconTimes class="h-3 w-3 md:h-6 md:w-6" />
        </div>
        <ul class="w-full flex gap-2">
          <li
            :class="
              'h-1 flex-shrink-0 w-2 duration-300 ' +
              (currentIndex % 10 === i - 1
                ? 'flex-3 bg-slate-500'
                : 'flex-2 bg-slate-300')
            "
            v-for="i in imagesCount < 10 ? imagesCount : 10"
            :key="i"
          />
        </ul>
        <div class="absolute top-8 right-4 font-bold flex">
          <a
            class="flex justify-center items-center text-blue-500"
            :href="`/images/stories/${story.slug}/${story.slug}.zip`"
            rel="noopener noreferrer"
            :download="`/images/stories/${story.slug}/${story.slug}.zip`"
          >
            <IconsIconDownload
              class="mr-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0"
            />
            Télécharger
          </a>
          <span class="ml-2 text-black">
            {{ currentIndex + 1 }}/{{ imagesCount }}
          </span>
        </div>
      </header>

      <!-- images -->
      <img
        class="max-w-full max-h-screen select-none"
        v-if="currentImage"
        :src="currentImage"
      />

      <!-- buttons -->
      <button
        v-show="currentIndex"
        class="
          absolute
          top-3/4
          md:top-1/2
          left-2
          md:-left-16
          p-2
          bg-black bg-opacity-40
          text-white
          rounded-full
          md:bg-white md:text-black
        "
        @click="prevSlide"
      >
        <IconsIconChevronLeft class="h-3 w-3 md:h-4 md:w-4" />
      </button>
      <button
        class="
          absolute
          top-3/4
          md:top-1/2
          right-2
          md:-right-16
          p-2
          bg-black bg-opacity-40
          text-white
          rounded-full
          md:bg-white md:text-black
        "
        @click="nextSlide"
      >
        <IconsIconChevronRight class="h-3 w-3 md:h-4 md:w-4" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    story: {
      type: Object,
      default: undefined
    }
  },

  data() {
    return {
      currentImage: null as String | null,
      images: [] as String[],
      currentIndex: 0,
      imagesCount: 0
    }
  },

  mounted() {
    console.log('mounted')
    console.log(this.story)
    this.loadImages()
  },

  // watch: {
  //   story: {
  //     immediate: true,
  //     handler(newValue, oldValue) {
  //       console.log('newValue', newValue)
  //       console.log('oldValue', oldValue)
  //       this.currentIndex = 0
  //       this.imagesCount = 0
  //     }
  //   }
  // },

  created() {},

  methods: {
    async loadImages() {
      const { slug, imgSlug, stroriesCount } = this.story
      const images = []
      for (let i = 1; i <= stroriesCount; i++) {
        images.push(`/images/stories/${slug}/${imgSlug}${i}.jpg`)
      }

      this.images = images
      this.imagesCount = images.length
      this.currentImage = images[0]
    },
    emitCloseEvent() {
      this.$emit('close')
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex + this.images.length - 1) % this.images.length
      this.currentImage = this.images[this.currentIndex]
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
      this.currentImage = this.images[this.currentIndex]
    }
  }
}
</script>
