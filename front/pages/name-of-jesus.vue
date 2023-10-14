<script setup lang="ts">
useHead({
  title: 'Le nom de Jésus - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/name-of-jesus.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/name-of-jesus.webp'
    }
  ]
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb class="container mx-auto" :items="breadcrumbItems" />

      <!-- intro -->
      <SectionIntroTopics :cover="cover">
        <template v-slot:title>Le nom de Jésus</template>
      </SectionIntroTopics>

      <BgColorSection>
        <template v-slot:title>Annexes</template>
        <template v-slot:body>
          <!-- links -->
          <nav class="contents">
            <ul class="flex flex-col leading-7">
              <li>
                <a
                  class="inline-flex items-center hover:text-blue-700"
                  href="https://www.meaningofthename.com/isa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    class="block h-1.5 w-1.5 rounded-full bg-current mr-2"
                  />
                  <span>Meaning of the name "Isa"</span>
                </a>
              </li>
              <li>
                <a
                  class="inline-flex items-center hover:text-blue-700"
                  href="https://www.meaningofthename.com/issa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    class="block h-1.5 w-1.5 rounded-full bg-current mr-2"
                  />
                  <span>Meaning of the name "Issa"</span>
                </a>
              </li>
              <li>
                <a
                  class="inline-flex items-center hover:text-blue-700"
                  href="https://www.meaningofthename.com/jesus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    class="block h-1.5 w-1.5 rounded-full bg-current mr-2"
                  />
                  <span>Meaning of the name "Jésus"</span>
                </a>
              </li>
              <li>
                <a
                  class="inline-flex items-center hover:text-blue-700"
                  href="https://fr.wikipedia.org/wiki/Yeshoua"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    class="block h-1.5 w-1.5 rounded-full bg-current mr-2"
                  />
                  <span>Fiche wikipedia "Yeshoua"</span>
                </a>
              </li>
              <li>
                <a
                  class="inline-flex items-center hover:text-blue-700"
                  href="https://www.persee.fr/doc/rjuiv_0484-8616_1908_num_55_109_4877"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    class="block h-1.5 w-1.5 rounded-full bg-current mr-2"
                  />
                  <span>Le nom de Jésus chez les Juifs, Samuel Krauss</span>
                </a>
              </li>
              <li>
                <a
                  class="inline-flex items-center hover:text-blue-700"
                  href="http://www.lemessieetsonprophete.com/annexes/Nom%20de%20Jesus%20%27Isa-Yasu%27.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    class="block h-1.5 w-1.5 rounded-full bg-current mr-2"
                  />
                  <span>
                    Pourquoi le Coran utilise-t-il le nom de ‘Îsâ pour celui de
                    Yasû‘
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </template>
      </BgColorSection>
    </div>

    <!-- section download document  -->
    <DocumentSectionDownloadDocumentsList
      class="container mx-auto mt-4 md:mt-10"
      :files="files"
    />

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import SectionIntroTopics from '~~/components/topics/SectionIntroTopics.vue'
import BgColorSection from '~~/components/global/BgColorSection.vue'
import { TopicService, ResourceService } from '~~/services'

definePageMeta({
  layout: 'empty'
})

export default defineNuxtComponent({
  name: 'NameOfJesusPage',

  components: { SectionIntroTopics, BgColorSection },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Le nom de Jésus',
          to: '/name-of-jesus/'
        }
      ],
      cover: TopicService.getTopicCoverBySlug('/name-of-jesus/'),
      files: ResourceService.getBySlug('name-of-jesus')
    }
  }
})
</script>
