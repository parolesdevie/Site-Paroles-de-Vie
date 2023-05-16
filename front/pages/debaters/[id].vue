<script setup lang="ts">
import { DebaterService, DebateService } from '~~/services'

useHead({
  title: 'Profils du débatteur - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/debaters.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/debaters.webp'
    }
  ]
})

const route = useRoute()
const id = parseInt(route.params.id)
const currentDebater = DebaterService.getById(id)
const debates = useState(() => DebateService.getByDebaterId(id))

// const backUrl = context?.from?.path || '/'
const { pseudo, name, religion } = currentDebater
</script>

<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- profils -->
    <section class="mt-4 md:mt-10">
      <!-- title -->
      <h1 class="flex items-center font-bold text-2xl md:text-3xl">
        Profils du débatteur
      </h1>

      <div class="mt-2 md:mt-4 flex flex-col md:flex-row">
        <div class="inline-flex flex-col items-center shrink-0 max-w-sm">
          <img
            loading="lazy"
            :src="'/images/user/' + id + '.webp'"
            class="h-20 w-20 rounded-full bg-gray-300"
            title="photo de profils"
          />
          <span
            class="mt-2 font-semibold text-center"
            title="pseudo du profils"
          >
            {{ pseudo }}#{{ id }}
          </span>
        </div>
        <div class="mt-10 md:mt-0 md:ml-10">
          <strong>Nom :</strong>
          {{ name }}
          <br />
          <strong>Religion :</strong>
          {{ religion }}
          <IconsIconQuran
            v-if="religion === DebatReligionEnum.MUSLIM"
            class="inline h-4 shrink-0 text-green-500"
          />
          <IconsIconCross
            v-else-if="religion === DebatReligionEnum.CHRISTIAN"
            class="inline h-4 shrink-0 text-violet-500"
          />
        </div>
      </div>
    </section>

    <section class="mt-4 md:mt-10">
      <!-- title -->
      <H2Title>Participations aux débats</H2Title>

      <!-- table of debates -->
      <DebateTableDebate class="mt-2 md:mt-4" :debates="debates" />
    </section>
  </div>
</template>
  


<script lang="ts">
import { DebatReligionEnum, IBreadcrumbItem } from '~~/types'

export default defineNuxtComponent({
  data(context: any) {
    const id = parseInt(context.route.params.id)
    const currentDebater = DebaterService.getById(id)
    // const debates = DebateService.getByDebaterId(id)
    const backUrl = context?.from?.path || '/'

    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        // {
        //   name: 'Débatteurs',
        //   to: backUrl
        // },
        {
          name: currentDebater?.name,
          to: '/debaters/' + id
        }
      ],
      backUrl
      // ...currentDebater
    }
  },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Débatteurs',
          to: this.backUrl
        },
        {
          name: this.currentDebater?.name,
          to: '/debaters/' + this.id
        }
      ] as IBreadcrumbItem[],
      debates: [],
      DebatReligionEnum,
      id: '',
      pseudo: '',
      name: '',
      religion: ''
    }
  }
})
</script>