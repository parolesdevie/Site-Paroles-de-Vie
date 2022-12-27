<template>
  <div class="flex flex-wrap justify-center px-1">
    <div class="column">
      <a
        v-for="({ id }, index) in col1"
        :key="index"
        :href="getDownloadUrl(id)"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <img class="mt-2 w-full" :src="getImageUrl(id)" />
      </a>
    </div>
    <div class="column">
      <a
        v-for="({ id }, index) in col2"
        :key="index"
        :href="getDownloadUrl(id)"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <img class="mt-2 w-full" :src="getImageUrl(id)" />
      </a>
    </div>
    <div class="column">
      <a
        v-for="({ id }, index) in col3"
        :key="index"
        :href="getDownloadUrl(id)"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <img class="mt-2 w-full" :src="getImageUrl(id)" />
      </a>
    </div>
    <div class="column">
      <a
        v-for="({ id }, index) in col4"
        :key="index"
        :href="getDownloadUrl(id)"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <img class="mt-2 w-full" :src="getImageUrl(id)" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { GalleryService } from '~~/services'
import { IGalleryImage, RatioEnum } from '~~/types'

export default defineNuxtComponent({
  name: 'ResponsiveImageGrid',

  data() {
    const images = GalleryService.getAll()
    const square = images.filter(({ ratio }) => ratio === RatioEnum.SQUARE)
    const double = images.filter(({ ratio }) => ratio === RatioEnum.DOUBLE)
    const wide = images.filter(({ ratio }) => ratio === RatioEnum.WIDE_SCREEN)
    const mobile = images.filter(
      ({ ratio }) => ratio === RatioEnum.MOBILE_VERTICAL
    )
    const col1: IGalleryImage[] = [],
      col2: IGalleryImage[] = [],
      col3: IGalleryImage[] = [],
      col4: IGalleryImage[] = []

    let i = 0,
      j = 0
    while (mobile.length && wide.length) {
      const image = (i % 2 ? mobile.shift() : wide.shift()) as IGalleryImage
      if (j <= 1) {
        col1.push(image)
      } else {
        if (j >= 3) {
          j = -1
        }
        col3.push(image)
      }

      i++
      j++
    }
    i = 0
    j = 0
    while (square.length && double.length) {
      const image = (i % 2 ? double.shift() : square.shift()) as IGalleryImage
      if (j <= 1) {
        col2.push(image)
      } else {
        if (j >= 3) {
          j = -1
        }
        col4.push(image)
      }

      i++
      j++
    }
    i = 0
    j = 0
    while (mobile.length || wide.length || square.length || double.length) {
      const image =
        (mobile.length && mobile.shift()) ||
        (square.length && square.shift()) ||
        (double.length && double.shift()) ||
        ((wide.length && wide.shift()) as IGalleryImage)
      switch (j) {
        case 0:
          col1.push(image)
          break
        case 1:
          col2.push(image)
          break
        case 2:
          col3.push(image)
          break
        case 3:
          col4.push(image)
          j = -1
          break
      }
      i++
      j++
    }

    return {
      images,
      col1,
      col2,
      col3,
      col4,
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
    },
  },
})
</script>

<style scoped>
/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  /* vertical-align: middle; */
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
