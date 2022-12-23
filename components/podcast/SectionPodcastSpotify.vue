<template>
  <section>
    <!-- title -->
    <H2Title>Ecouter depuis Spotify</H2Title>

    <!-- embeds spotify -->
    <div class="mt-4 md:mt-10 flex flex-col md:flex-row gap-5">
      <article class="flex-1 flex flex-col">
        <h2 class="flex items-center">
          <span
            class="
              h-5
              w-5
              shrink-0
              bg-black
              dark:bg-white
              text-white
              dark:text-light-black
              rounded-full
              flex
              items-center
              justify-center
            "
          >
            <IconLockOpen class="h-2.5" />
          </span>
          <span class="ml-2"> Ecouter le dernier podcast </span>
          <span
            class="
              bg-white bg-opacity-60
              ml-2
              px-1
              rounded-sm
              uppercase
              text-sm
              font-semibold
              text-white
              dark:text-light-black
            "
          >
            gratuit
          </span>
        </h2>
        <IframSpotify class="mt-2 md:mt-4" :episode="lastEpisodeId" />
      </article>
      <article class="flex-1 flex flex-col">
        <h2 class="flex items-center">
          <span
            class="
              h-5
              w-5
              shrink-0
              bg-black
              dark:bg-white
              text-white
              dark:text-light-black
              rounded-full
              flex
              items-center
              justify-center
            "
          >
            <IconLockOpen class="h-2.5" />
          </span>
          <span class="ml-2"> Ecouter le dernier podcast </span>
          <span
            class="
              bg-white bg-opacity-60
              ml-2
              px-1
              rounded-sm
              uppercase
              text-sm
              font-semibold
              text-white
              dark:text-light-black
            "
          >
            Payant
          </span>
        </h2>
        <IframSpotify class="mt-2 md:mt-4" :podcast="podcastId" />
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import IconLockOpen from '~/components/icons/IconLockOpen.vue'
import IconLock from '~/components/icons/IconLock.vue'
import IframSpotify from '~/components/podcast/IframSpotify.vue'
import H2Title from '~/components/global/H2Title.vue'

export default Vue.extend({
  name: 'SectionPodcastSpotify',

  components: { H2Title, IconLockOpen, IconLock, IframSpotify },

  data() {
    return {
      lastEpisodeId: '3xdzlOWNBNANbUzQf0g0pX',
      podcastId: '5XnBOuPu5fUW0DROVinvbg',
    }
  },
})
</script>