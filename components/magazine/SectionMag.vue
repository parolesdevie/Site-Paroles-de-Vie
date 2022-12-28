<template>
  <section>
    <!-- title -->
    <H2Title>Le journal des Theophilos</H2Title>

    <!-- intro -->
    <p
      class="
        mt-4
        md:mt-8
        font-semibold
        text-base text-gray-800
        dark:text-gray-300
        max-w-2xl
      "
    >
      <strong class="font-bold">Shalom,</strong>
      <br />
      Le Collectif Théophilos est une assemblée d' apologistes chrétiens qui
      s’engagent à préserver la pensée de l’ETERNEL DIEU énoncé dans ce livre
      saint qu’est la Bible. Nous abordons avec détermination, rigueur et
      passion des thématiques bibliques que nous défendons dans un échange
      ouvert avec d’autres mouvements religieux.
    </p>

    <ButtonYoutube
      class="mt-3 md:mt-4 hover:scale-110 duration-300"
      href="https://www.youtube.com/channel/UCfdYDVHJkT_UfdWRJahiFSQ"
    >
      Voir la chaine
    </ButtonYoutube>

    <!-- mags list -->
    <div class="mt-4 md:mt-8">
      <ul class="flex flex-wrap py-2 pr-2 md:py-4 md:pr-4 gap-2 md:gap-4">
        <CardMag v-for="n in 5" :key="n" :volume="n" />
      </ul>
    </div>
  </section>
</template>

<script lang="ts">

import CardMag from '~~/components/magazine/CardMag.vue'
import ButtonYoutube from '~~/components/forms/button/ButtonYoutube.vue'
import H2Title from '~~/components/global/H2Title.vue'

export default defineNuxtComponent({
  name: 'SectionMag',

  components: {
    CardMag,
    ButtonYoutube,
    H2Title,
  },
})
</script>
