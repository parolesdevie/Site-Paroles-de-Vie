<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <Breadcrumb :items="breadcrumbItems" />

      <!-- links -->
      <nav class="mt-2 md:mt-4">
        <ul class="flex flex-col leading-7">
          <li v-for="(webSite, index) in sites" :key="index">
            <a
              class="flex items-center hover:text-blue-700"
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
  name: 'MagazinesPage',

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
      sites: WebSiteService.getManuscripts(),
    }
  },
})
</script>
