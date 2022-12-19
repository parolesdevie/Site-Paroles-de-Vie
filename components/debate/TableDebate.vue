<template>
  <table class="table-auto text-sm md:text-sme">
    <thead>
      <tr class="text-base">
        <th
          class="
            border-b
            font-semibold
            p-2
            md:p-4 md:pl-8 md:pt-0 md:pb-3
            text-left
          "
        >
          Debateurs
        </th>
        <th
          v-if="!hideSubject"
          class="
            border-b
            font-semibold
            p-2
            md:p-4 md:pl-8 md:pt-0 md:pb-3
            text-left
          "
        >
          Sujet
        </th>
        <th
          class="
            border-b
            font-semibold
            p-2
            md:p-4 md:pl-8 md:pt-0 md:pb-3
            text-left
          "
        >
          Date
        </th>
        <th
          class="
            border-b
            font-semibold
            p-2
            md:p-4 md:pl-8 md:pt-0 md:pb-3
            text-left
            truncate
            max-w-0
            md:max-w-none
          "
        >
          Plateforme
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="odd:bg-gray-50" v-for="(debat, index) in debates" :key="index">
        <td class="border-b p-2 md:p-4 md:pl-8" v-if="debat.debaters.length">
          <template v-for="(debater, index) in filterByTeam(debat.debaters, 0)">
            <NuxtLink
              :key="'team-0-' + index"
              v-if="debater.id !== -1"
              :to="'/debaters/' + debater.id"
              class="text-sm md:text-base hover:text-blue-500"
            >
              {{ debater.name }}
            </NuxtLink>
            <span
              :key="'team-0-' + index"
              class="text-sm md:text-base text-gray-400"
              v-else
            >
              Inconnu
            </span>
            <IconQuran
              v-if="debater.religion === DebatReligionEnum.MUSLIM"
              class="inline h-3 shrink-0 text-green-500"
            />
            <IconCross
              v-else-if="debater.religion === DebatReligionEnum.CHRISTIAN"
              class="inline h-3 shrink-0 text-violet-500"
            />
            ,
          </template>
          <strong class="text-red-500"> VS </strong>
          <template v-for="(debater, index) in filterByTeam(debat.debaters, 1)">
            <NuxtLink
              :key="'team-1-' + index"
              v-if="debater.id !== -1"
              :to="'/debaters/' + debater.id"
              class="text-sm md:text-base hover:text-blue-500"
            >
              {{ debater.name }}
            </NuxtLink>
            <span
              :key="'team-0-' + index"
              class="text-sm md:text-base text-gray-400"
              v-else
            >
              Inconnu
            </span>
            <IconQuran
              v-if="debater.religion === DebatReligionEnum.MUSLIM"
              class="inline h-3 shrink-0 text-green-500"
            />
            <IconCross
              v-else-if="debater.religion === DebatReligionEnum.CHRISTIAN"
              class="inline h-3 shrink-0 text-violet-500"
            />
            ,
          </template>
        </td>
        <td class="border-b p-2 md:p-4 md:pl-8 text-gray-400" v-else>
          Inconnus
        </td>
        <td
          class="border-b p-2 md:p-4 md:pl-8 text-xs md:text-base"
          v-if="!hideSubject"
        >
          <a
            class="hover:text-blue-500"
            :href="debat.url"
            target="_blank"
            rel="noopener noreferrer"
            :title="debat.subject"
          >
            {{ debat.subject }}
          </a>
        </td>
        <td
          class="border-b p-2 md:p-4 md:pl-8 text-xs md:text-base"
          v-if="debat.date"
        >
          {{ debat.date }}
        </td>
        <td
          class="border-b p-2 md:p-4 md:pl-8 text-xs md:text-base text-gray-400"
          v-else
        >
          Inconnue
        </td>
        <td
          class="border-b p-2 md:p-4 md:pl-8"
          v-if="debat.url && debat.plateform"
        >
          <a
            :href="debat.url"
            target="_blank"
            rel="noopener noreferrer"
            :title="debat.subject"
          >
            <IconYouTube
              v-if="debat.plateform === DebatPlateformEnum.YOUTUBE"
              class="
                ml-auto
                h-6
                w-6
                shrink-0
                md:h-10 md:w-10
                text-red-500
                md:text-gray-500
                hover:text-red-500
              "
            />
            <IconTikTok
              v-else-if="debat.plateform === DebatPlateformEnum.TIKTOK"
              class="ml-auto h-6 w-6 md:h-10 md:w-10 hover:text-blue-500"
            />
            <IconDiscord
              v-else-if="debat.plateform === DebatPlateformEnum.DISCORD"
              class="ml-auto h-6 w-6 md:h-10 md:w-10 hover:text-violet-500"
            />
            <IconGlobe
              v-else
              class="ml-auto h-6 w-6 md:h-10 md:w-10 hover:text-blue-500"
            />
          </a>
        </td>
        <td class="border-b p-2 md:p-4 md:pl-8 text-gray-400" v-else>
          Inconnue
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import IconYouTube from '~/components/icons/IconYouTube.vue'
import IconTikTok from '~/components/icons/IconTikTok.vue'
import IconDiscord from '~/components/icons/IconDiscord.vue'
import IconGlobe from '~/components/icons/IconGlobe.vue'
import IconQuran from '~/components/icons/IconQuran.vue'
import IconCross from '~/components/icons/IconCross.vue'
import {
  IDebat,
  DebatPlateformEnum,
  DebatReligionEnum,
  IDebater,
} from '~/types'

export default Vue.extend({
  name: 'TableDebate.',

  components: {
    IconYouTube,
    IconTikTok,
    IconDiscord,
    IconGlobe,
    IconCross,
    IconQuran,
  },

  props: {
    debates: {
      type: Array as PropType<IDebat[]>,
      default: () => [],
    },
    hideSubject: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      DebatPlateformEnum,
      DebatReligionEnum,
    }
  },

  methods: {
    filterByTeam(debaters: IDebater[], team: number): IDebater[] {
      return debaters.filter((d) => d.team === team)
    },
  },
})
</script>
