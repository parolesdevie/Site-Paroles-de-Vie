<template>
  <div>
    <section class="container mx-auto mt-4 md:mt-10">
      <H2Title>Plan du site</H2Title>

      <nav class="mt-2 md:mt-4">
        <ul class="flex flex-col">
          <li>
            <NuxtLink to="/"> Accueil </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/live"> Direct LIVE </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/questions-answer/"> Questions / Réponses </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/search/"> Recherche </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/gospel-of-barnabas/">
              L'Évangile de Barnabé
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/deuteronomy-18-18/"> Deutéronome 18:18 </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/manuscripts/"> Manuscrits </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/gospel/"> Louanges </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/debates-tips/"> Conseils de débats </NuxtLink>
          </li>
          <li class="mt-2">
            <strong> Lecture </strong>
            <ul class="ml-2 md:ml-4 flex flex-col">
              <li>
                <NuxtLink to="/books/"> Livres </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/read-the-bible/"> Lire la bible </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/almanach/"> Almanach </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/magazines/"> Magazines </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/documents/"> Documents PDF </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="mt-2">
            <strong> Recommandations </strong>
            <ul class="ml-2 md:ml-4 flex flex-col">
              <li>
                <NuxtLink to="/sites/"> Recommandations de Sites </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/youtube/">
                  Recommandations de chaîne Youtube
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/social-networks/"> Réseaux sociaux </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="mt-2">
            <strong> Articles </strong>
            <ul class="ml-2 md:ml-4 flex flex-col">
              <li>
                <NuxtLink to="/paraclete/"> Le Paraclet </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/parable-of-the-winegrowers/">
                  La parabole des vignerons
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/the-divinity-of-jesus/">
                  La divinité de Jésus
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/the-messiah-of-jesus/">
                  La messianité de Jésus
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/the-falsification-of-the-bible/">
                  La falsification de la bible
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/the-crucifixion-in-the-bible/">
                  La crucifixion dans la bible
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/free-will/"> Le libre arbitre </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/soreg/"> Le Soreg </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Plan du site - Paroles de vie',
  meta: [
    {
      name: 'description',
      content:
        'Défendre la foi chrétienne, donner une éducation chrétienne, expression de la foi.'
    }
    // {
    //   property: 'og:image',
    //   content: 'https://www.paroles-de-vie.tk/seo/site-map.webp'
    // },
    // {
    //   property: 'twitter:image',
    //   content: 'https://www.paroles-de-vie.tk/seo/site-map.webp'
    // }
  ]
})
</script>

<script lang="ts">
import SectionDebate from '~~/components/debate/SectionDebate.vue'
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import { DebateService, TopicService } from '~~/services'

export default defineNuxtComponent({
  name: 'SiteMap',

  components: { SectionIntroTopics, SectionDebate },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Plan du site',
          to: '/sitemap/'
        }
      ],
      cover: TopicService.getTopicCoverBySlug('/sitemap/'),
      debates: DebateService.getByTopic('sitemap')
    }
  }
})
</script>
