<script setup lang="ts">
import SourceService from '~~/services/SourceService'

// const end = useState('end', () => new Date('2023-01-05T12:00:00'))
// const hidde = useState('hidde', () => true)

// function finish() {
//   hidde.value = false
// }

useHead({
  title: 'Live - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/live.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/live.webp'
    }
  ]
})

const id = useState('id', () => 'y9u3QimaTls')
const resources = useState(() => SourceService.getByDebat('paraclet'))
</script>

<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <div
      class="
        relative
        mt-4
        md:mt-10
        h-56
        md:h-160
        lg:h-190
        w-full
        rounded-3xl
        overflow-hidden
        flex
      "
    >
      <!-- <div
        class="
          absolute
          bg-black bg-opacity-90
          hover:bg-opacity-100
          duration-500
          flex flex-col
          rounded-3xl
          p-10
          md:p-20
        "
        v-if="hidde"
      >
        <span class="text-xl text-center">Prochain LIVE dans</span>
        <CountDown
          class="mt-2 md:mt-4 text-white"
          :date="end"
          @onFinish="finish()"
        />
      </div> -->

      <iframe
        class="h-full w-full"
        :src="`https://www.youtube.com/embed/${id}?autoplay=1`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <!-- <iframe
        class="h-full w-120 px-4"
        :src="API_ENDPOINT + '/index.html'"
        frameBorder="0"
      /> -->
    </div>

    <!-- assets -->
    <section class="mt-4 md:mt-10">
      <H2Title>Sources</H2Title>

      <ul class="mt-2 md:mt-4 flex flex-wrap gap-4">
        <li
          class="contents"
          v-for="(resource, index) in resources"
          :key="index"
        >
          <AssetCard
            :index="index"
            :href="resource.href"
            :thumbnail="resource.thumbnail"
            :title="resource.title"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import SectionDebate from '~~/components/debate/SectionDebate.vue'
import AssetCard from '../components/resource/AssetCard.vue'

export default defineNuxtComponent({
  name: 'DebatParacletPage',

  components: { SectionDebate, AssetCard },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Direct LIVE',
          to: '/live/'
        }
      ],
      API_ENDPOINT: 'http://localhost:8080' || 'http://178.170.13.79:8081'
    }
  }
})
</script>
