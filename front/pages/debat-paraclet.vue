<script setup lang="ts">
const end = useState('end', () => new Date('2023-01-05T12:00:00'))
const hidde = useState('hidde', () => true)

function finish() {
  hidde.value = false
}

useHead({
  title: 'Qui est le paraclet annoncé par Jésus ? - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/debat-paraclet.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/debat-paraclet.webp'
    }
  ]
})

const id = useState('id', () => 'y9u3QimaTls')
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
      "
    >
      <div
        class="
          absolute
          inset-0
          bg-black bg-opacity-90
          hover:bg-opacity-100
          duration-500
          flex flex-col
          items-center
          justify-center
        "
        v-if="hidde"
      >
        <span class="text-xl">LIVE disponible dans</span>
        <CountDown
          class="mt-2 md:mt-4 text-white"
          :date="end"
          @onFinish="finish()"
        />
      </div>

      <iframe
        class="h-full w-full"
        :src="
          'https://www.youtube.com/embed/' + id + (hidde ? '' : '?autoplay=1')
        "
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script lang="ts">
import SectionDebate from '~~/components/debate/SectionDebate.vue'
import { DebateService, TopicService } from '~~/services'

export default defineNuxtComponent({
  name: 'DebatParacletPage',

  components: { SectionDebate },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Qui est le paraclet annoncé par Jésus ?',
          to: '/debat-paraclet/'
        }
      ],
      cover: TopicService.getBySlug('/debat-paraclet/')?.cover,
      debates: DebateService.getByTopic('debat-paraclet')
    }
  }
})
</script>
