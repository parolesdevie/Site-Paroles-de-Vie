<template>
  <div class="h-16 flex-shrink-0">
    <header
      class="absolute top-0 inset-x-0 px-3 md:px-0 py-4 bg-black text-white"
    >
      <div class="container mx-auto flex items-center">
        <!-- logo -->
        <NuxtLink class="mr-auto flex hover:text-blue-500" to="/">
          <IconLogoUni class="h-8 w-8 md:h-8 md:w-8 mr-3 md:mr-4" />
          <span class="text-2xl">Paroles de vie</span>
        </NuxtLink>

        <!-- <select
          v-model="$colorMode.preference"
          class="
            border
            w-24
            h-8
            dark:border-gray-700
          "
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select> -->

        <!-- burger -->
        <div
          class="
            flex
            items-center
            justify-center
            border
            rounded-full
            lg:px-4
            h-8
          "
        >
          <input
            type="text"
            class="
              hidden
              lg:inline
              outline-none
              text-white
              lg:pr-10
              xl:pr-20
              bg-transparent
            "
            placeholder="Recherche"
          />
          <NuxtLink to="/resource/">
            <IconSearch class="lg:ml-2 h-8 w-8 p-2" />
          </NuxtLink>
        </div>

        <!-- burger -->
        <!-- <IconBars class="h-8 w-8" /> -->

        <nav class="hidden md:contents">
          <ul class="ml-8 flex gap-2 md:gap-4">
            <li v-for="(link, index) in links" :key="index">
              <NuxtLink
                :to="link.to"
                class="text-base md:text-lg hover:text-blue-500"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { MenuService } from '~~/services';
import IconBars from '../icons/IconBars.vue';
import IconLogoUni from '../icons/IconLogoUni.vue';
import IconSearch from '../icons/IconSearch.vue';

export default defineNuxtComponent({
    async asyncData() {
        return {
            links: MenuService.getMainMenu(),
        };
    },
    components: { IconLogoUni, IconSearch, IconBars }
});
</script>

