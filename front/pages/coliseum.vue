<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- intro -->
    <SectionIntroTopics :cover="cover">
      <template v-slot:title>Coliseum</template>
    </SectionIntroTopics>
  </div>
</template>

<script lang="ts">
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import { TopicService } from '~~/services'

export default defineNuxtComponent({
  name: 'Coliseum',

  components: { SectionIntroTopics },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Coliseum',
          to: '/coliseum/'
        }
      ],
      cover: TopicService.getBySlug('/coliseum/')?.cover
    }
  }
})
</script>
