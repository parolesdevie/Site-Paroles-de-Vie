<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <section class="mt-4 md:mt-10">
        <!-- title -->
        <h2 class="flex items-center font-bold text-2xl md:text-3 xl">
          {{ manuscripts.CODEX_SINATICUS.name }}
        </h2>
        <!-- links -->
        <nav class="mt-2 md:mt-4">
          <ul class="flex flex-col leading-7">
            <li
              v-for="(webSite, index) in manuscripts.CODEX_SINATICUS.sites"
              :key="index"
            >
              <a
                class="inline-flex items-center hover:text-blue-700"
                :href="webSite.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="block h-1.5 w-1.5 rounded-full bg-current mr-2" />
                <span>
                  {{ webSite.name }}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <section class="mt-4 md:mt-10">
        <!-- title -->
        <h2 class="flex items-center font-bold text-2xl md:text-3 xl">
          {{ manuscripts.CODEX_ALEXANDRINUS.name }}
        </h2>
        <!-- links -->
        <nav class="mt-2 md:mt-4">
          <ul class="flex flex-col leading-7">
            <li
              v-for="(webSite, index) in manuscripts.CODEX_ALEXANDRINUS.sites"
              :key="index"
            >
              <a
                class="inline-flex items-center hover:text-blue-700"
                :href="webSite.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="block h-1.5 w-1.5 rounded-full bg-current mr-2" />
                <span>
                  {{ webSite.name }}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <section class="mt-4 md:mt-10">
        <!-- title -->
        <h2 class="flex items-center font-bold text-2xl md:text-3 xl">
          {{ manuscripts.CODEX_VATICANUS.name }}
        </h2>
        <!-- links -->
        <nav class="mt-2 md:mt-4">
          <ul class="flex flex-col leading-7">
            <li
              v-for="(webSite, index) in manuscripts.CODEX_VATICANUS.sites"
              :key="index"
            >
              <a
                class="inline-flex items-center hover:text-blue-700"
                :href="webSite.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="block h-1.5 w-1.5 rounded-full bg-current mr-2" />
                <span>
                  {{ webSite.name }}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <section class="mt-4 md:mt-10">
        <!-- title -->
        <h2 class="flex items-center font-bold text-2xl md:text-3 xl">
          Autres manuscrits
        </h2>
        <!-- links -->
        <nav class="mt-2 md:mt-4">
          <ul class="flex flex-col leading-7">
            <li v-for="(webSite, index) in manuscripts.OTHERS" :key="index">
              <a
                class="inline-flex items-center hover:text-blue-700"
                :href="webSite.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="block h-1.5 w-1.5 rounded-full bg-current mr-2" />
                <span>
                  {{ webSite.name }}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Breadcrumb from '~/components/global/Breadcrumb.vue'
import { WebSiteService } from '~/services'

export default Vue.extend({
  name: 'ManuscriptsPage',

  components: { Breadcrumb },

  data() {
    return {
      breadcrumbItems: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Manuscrits',
          to: '/manuscripts/',
        },
      ],
      manuscripts: WebSiteService.getManuscripts(),
    }
  },
})
</script>
