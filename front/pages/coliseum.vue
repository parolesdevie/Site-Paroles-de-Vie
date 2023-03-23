<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- intro -->
    <SectionIntroTopics :cover="cover">
      <template v-slot:title>Coliseum</template>
      <template v-slot:body>
        <div class="flex items-center hover:text-blue-500">
          <IconDiscord class="h-5 w-5 md:h-8 md:w-8 mr-2" />
          <a
            href="https://discord.com/servers/coliseum-882013217767960596"
            target="_blank"
            rel="noopener noreferrer"
          >
            Page de présentation du serveur
          </a>
        </div>
      </template>
    </SectionIntroTopics>
  </div>
</template>

<script lang="ts">
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import IconDiscord from '~~/components/icons/IconDiscord.vue'
import { TopicService } from '~~/services'

export default defineNuxtComponent({
  name: 'Coliseum',

  components: { SectionIntroTopics, IconDiscord },

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
