<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <!-- breadcrumb -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- profils -->
      <section class="mt-4 md:mt-10">
        <div class="flex flex-col md:flex-row">
          <div class="inline-flex flex-col items-center shrink-0 max-w-sm">
            <img
              :src="'/images/user/' + id + '.webp'"
              class="h-20 w-20 rounded-full bg-gray-300"
              title="photo de profils"
            />
            <span class="mt-2 font-semibold text-center" title="pseudo">
              {{ pseudo }}#{{ id }}
            </span>
          </div>
          <div class="mt-10 md:mt-0 md:ml-10">
            <strong>Nom :</strong>
            {{ name }}
            <br />
            <strong>Religion :</strong>
            {{ religion }}
            <IconQuran
              v-if="religion === 'Musulman'"
              class="inline h-4 w-4 shrink-0 text-green-500"
            />
            <IconCross
              v-if="religion === 'Chrétien'"
              class="inline h-4 w-4 shrink-0 text-violet-500"
            />
          </div>
        </div>
      </section>

      <section class="mt-4 md:mt-10">
        <!-- title -->
        <h2 class="flex items-center font-bold text-2xl md:text-3xl">
          Participations aux débats
        </h2>

        <!-- table of debates -->
        <TableDebate class="mt-2 md:mt-4" :debates="debates" />
      </section>
    </div>

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>
  
<script lang="ts">
import Vue from 'vue'
import TableDebate from '~/components/debate/TableDebate.vue'
import IconQuran from '~/components/icons/IconQuran.vue'
import IconCross from '~/components/icons/IconCross.vue'
import { DebaterService, DebateService } from '~/services'

export default Vue.extend({
  components: { TableDebate, IconQuran, IconCross },

  async asyncData(context) {
    const id = parseInt(context.route.params.id)
    const currentDebater = DebaterService.getById(id)
    const debates = DebateService.getByDebaterId(id)
    const backUrl = context?.from?.path || '/'

    return {
      breadcrumbItems: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Débatteurs',
          to: backUrl,
        },
        {
          name: currentDebater?.name,
          to: '/debaters/' + id,
        },
      ],
      backUrl,
      debates,
      ...currentDebater,
    }
  },
})
</script>