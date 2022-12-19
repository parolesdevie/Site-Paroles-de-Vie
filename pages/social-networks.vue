<template>
  <div class="flex flex-col min-h-screen dark:bg-light-black dark:text-white">
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
        <IconDiscord class="h-5 md:h-6 mr-2" slot="title-icon" />
      </SectionSite>

      <!-- tiktok -->
      <SectionSite
        class="mt-4 md:mt-10"
        :sites="tiktok"
        title="Nos chaînes Tiktok"
      >
        <IconTikTok class="h-5 md:h-6 mr-2" slot="title-icon" />
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

<script lang="ts">
import Vue from 'vue'
import Breadcrumb from '~/components/global/Breadcrumb.vue'
import IconDiscord from '~/components/icons/IconDiscord.vue'
import IconTikTok from '~/components/icons/IconTikTok.vue'
import SectionSite from '~/components/site/SectionSite.vue'
import { MenuService } from '~/services'

export default Vue.extend({
  name: 'SocialNetworksPage',

  components: { SectionSite, Breadcrumb, IconTikTok, IconDiscord },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Accueil',
          to: '/',
        },
        {
          name: 'Réseaux sociaux',
          to: '/social-networks/',
        },
      ],
      discord: MenuService.getDiscordMenu(),
      tiktok: MenuService.getTikTokMenu(),
    }
  },
})
</script>
