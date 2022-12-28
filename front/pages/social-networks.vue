<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <Breadcrumb :items="breadcrumbItems" />

      <!-- discord -->
      <SectionSite
        class="mt-4 md:mt-10"
        :sites="discord"
        title="Rejoins nous sur Discord"
      >
        <template v-slot:title-icon>
          <IconDiscord class="h-5 md:h-6 mr-2" />
        </template>
      </SectionSite>

      <!-- tiktok -->
      <SectionSite
        class="mt-4 md:mt-10"
        :sites="tiktok"
        title="Nos chaînes Tiktok"
      >
        <template v-slot:title-icon>
          <IconTikTok class="h-5 md:h-6 mr-2" />
        </template>
      </SectionSite>

      <a
        class="
          mt-4
          self-start
          border border-gray-500
          rounded-md
          p-2
          flex
          items-center
          text-sm
          md:text-base
        "
        href="https://vm.tiktok.com/ZMFGQMVpB/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconTikTok class="h-5 md:h-6 mr-2" />
        <span>Créer ton compte et rejoins nous sur Tiktok</span>
      </a>
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Réseaux sociaux - Paroles de vie',
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
      content: 'https://www.paroles-de-vie.tk/seo/social-networks.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/social-networks.webp'
    }
  ]
})
</script>

<script lang="ts">
import Breadcrumb from '~~/components/global/Breadcrumb.vue'
import IconDiscord from '~~/components/icons/IconDiscord.vue'
import IconTikTok from '~~/components/icons/IconTikTok.vue'
import SectionSite from '~~/components/site/SectionSite.vue'
import { MenuService } from '~~/services'

export default defineNuxtComponent({
  name: 'SocialNetworksPage',

  components: { Breadcrumb, SectionSite, IconTikTok, IconDiscord },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/'
        },
        {
          name: 'Réseaux sociaux',
          to: '/social-networks/'
        }
      ],
      discord: MenuService.getDiscordMenu(),
      tiktok: MenuService.getTikTokMenu()
    }
  }
})
</script>
