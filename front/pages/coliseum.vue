<script setup lang="ts">
import { DebateService } from '~~/services'

useHead({
  title: 'Coliseum - Paroles de vie',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'COLISEUM, Participez à des débats passionnants et informatifs sur les différences religieuses avec des membres respectueux et ouverts.'
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://www.paroles-de-vie.tk/seo/coliseum.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/coliseum.webp'
    }
  ]
})
const debates = useState(() => DebateService.getByTopic('open-mic'))
</script>

<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- intro -->
    <SectionIntroTopics :cover="cover">
      <template v-slot:title>Coliseum</template>
      <template v-slot:body>
        <div
          class="flex items-center text-blue-500 md:text-white md:hover:text-blue-500"
        >
          <IconDiscord class="h-5 w-5 md:h-8 md:w-8 mr-2" />
          <a
            href="https://discord.com/servers/coliseum-882013217767960596"
            target="_blank"
            rel="noopener noreferrer"
          >
            Page de présentation du serveur
          </a>
        </div>
        <div class="mt-4">
          <p class="mt-4">Chers futurs membres,</p>
          <p class="mt-4">
            Bienvenue dans notre communauté de débat inter-religieux, où les
            discussions stimulantes et constructives sont au centre de tout ce
            que nous faisons. Si vous êtes intéressé par les différences
            religieuses et que vous souhaitez développer votre compréhension de
            ces croyances, alors vous êtes au bon endroit.
          </p>
          <p class="mt-4">
            Notre serveur Discord est un endroit accueillant et respectueux pour
            les membres de différentes croyances religieuses. Nous attendons de
            nos membres qu'ils participent avec des arguments solides et un
            langage respectueux. C'est l'occasion idéale pour vous de partager
            vos opinions et convictions en étant ouvert à d'autres perspectives.
          </p>
          <p class="mt-4">
            Rejoignez-nous pour participer à des débats passionnants et
            informatifs sur les différences religieuses, et développer votre
            compréhension de ces croyances. Nous sommes une communauté
            inclusive, ouverte à tous les membres, peu importe leur background
            religieux.
          </p>
          <p class="mt-4">
            En vous inscrivant, vous ferez partie d'une communauté stimulante et
            respectueuse, où vous pourrez partager vos opinions et convictions
            tout en apprenant des autres. Nous sommes ravis de vous accueillir à
            bord.
          </p>
          <p class="mt-4">Bien cordialement,</p>
          <p class="mt-4">L'équipe de votre serveur Discord.</p>
        </div>
      </template>
    </SectionIntroTopics>

    <DebateSectionDebate
      title="Open Mic"
      class="container mx-auto mt-4 md:mt-10"
      :debates="debates"
      :hideSubject="false"
    />
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
