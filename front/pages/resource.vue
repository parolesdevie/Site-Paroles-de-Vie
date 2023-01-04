<script setup lang="ts">
import SourceService from '~~/services/SourceService'

useHead({
  title: 'Rechercher une ressource - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/resource.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/resource.webp'
    }
  ]
})

const resources = useState(() => SourceService.getAll())
</script>

<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <section class="mt-4 md:mt-10">
      <H2Title>Resources</H2Title>

      <ul class="mt-2 md:mt-4 flex">
        <li
          class="contents"
          v-for="(resource, index) in resources"
          :key="index"
        >
          <ResourceCard :slug="resource.slug" :title="resource.title" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import H2Title from '~~/components/global/H2Title.vue'
import ResourceCard from '~~/components/resource/ResourceCard.vue'

export default defineNuxtComponent({
  name: 'SearchResourcePage',

  components: { H2Title, ResourceCard },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Rechercher une ressource',
          to: '/resource/'
        }
      ]
    }
  }
})
</script>
