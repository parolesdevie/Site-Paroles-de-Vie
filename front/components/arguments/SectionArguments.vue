<script setup lang="ts">
const { topics, filter, filteredTopics } = useArgumentTopicList()
</script>

<template>
  <div>
    <!-- search -->
    <FormsSearchInput
      class="mx-auto"
      v-model="filter"
      placeholder="Recherche"
    />

    <!-- argument topic list -->
    <ul
      class="mt-2 md:mt-4 flex justify-center overflow-x-auto py-2 pr-2 md:py-4 md:pr-4 gap-2 md:gap-3 lg:gap-5 xl:gap-6 px-3 md:px-5 lg:px-4 2xl:px-5"
    >
      <ArgumentsCardArgumentTopic
        v-for="(topic, index) in filteredTopics"
        :key="index"
        :active="topic === selectedTopic"
        :cover="topic.cover"
        :title="topic.title"
        @click="onTopicClick(topic)"
        @keypress.enter="onTopicClick(topic)"
      />
    </ul>

    <!-- selection result -->
    <div class="mt-4 md:mt-10" v-if="selectedTopic">
      <h3 class="flex flex-wrap items-center font-bold text-xl md:text-2xl">
        Arguments pour le sujet : <span class="italic font-normal">
          {{ selectedTopic.title }}
        </span>
      </h3>
      <!-- <img
        class="mt-2 md:mt-4 border-2 border-blue-500 rounded-3xl"
        :src="selectedTopic.cover.src.desktop['1x']"
      /> -->
      <ul
        v-if="filteredArguments.length"
        class="mt-2 md:mt-4 flex flex-col gap-4"
      >
        <li
          :class="`border-2 
          border-${argument.team === 'chrétien' ? 'violet' : 'green'}-700
          dark:border-${argument.team === 'chrétien' ? 'violet' : 'green'}-500
           rounded-3xl bg-gray-100 dark:bg-gray-900 flex flex-col p-4 relative md:text-lg`"
          v-for="(argument, index) in filteredArguments"
          :key="index"
          @click="opened = index"
        >
          <IconsIconCross
            v-if="argument.team === 'chrétien'"
            class="inline h-5 shrink-0 text-violet-500"
          />
          <IconsIconQuran
            v-else-if="argument.team === 'musulman'"
            class="inline h-5 shrink-0 text-green-700 dark:text-green-500"
          />
          <span class="block mt-2"> {{ index }}) {{ argument.title }} </span>

          <!-- hidden part -->
          <div v-show="opened === index">
            <!-- <span class="block mt-2">
              Date :
              <strong>{{ argument.date }}</strong>
            </span> -->
            <span class="block mt-2" v-html="argument.text" />

            <!-- audio -->
            <figure class="mt-4" v-if="argument.audio">
              <figcaption>
                <strong>Ecoutez l'argument :</strong>
              </figcaption>
              <audio class="mt-2" controls :src="argument.audio.src">
                <a :hred="argument.audio.src"> Télécharger l'audio </a>
              </audio>
            </figure>
            <figure
              class="mt-4"
              v-else-if="argument.audios"
              v-for="(audio, index) in argument.audios"
              :key="index"
            >
              <figcaption>
                <strong>Ecoutez l'argument :</strong>
              </figcaption>
              <audio class="mt-2" controls :src="audio.src">
                <a :hred="audio.src"> Télécharger l'audio </a>
              </audio>
            </figure>

            <!-- responses -->
            <div class="mt-4 pl-4 md:pl-20" v-if="argument.responses?.length">
              <strong>Réponses : </strong>
              <ul>
                <li
                  :class="`
                  mt-2 md:mt-4
                  text-${argument.team === 'chrétien' ? 'violet' : 'green'}-700
                  dark:text-${
                    argument.team === 'chrétien' ? 'violet' : 'green'
                  }-500
                  `"
                  v-for="(argument, index) in argument.responses"
                  :key="index"
                >
                  {{ index + 1 }}) {{ argument.title }}<br />
                  {{ argument.text }}
                  <!-- audio -->
                  <figure class="mt-4" v-if="argument.audio">
                    <figcaption>
                      <strong>Ecoutez l'argument :</strong>
                    </figcaption>
                    <audio class="mt-2" controls :src="argument.audio.src">
                      <a :hred="argument.audio.src"> Télécharger l'audio </a>
                    </audio>
                  </figure>
                  <figure
                    class="mt-4"
                    v-else-if="argument.audios"
                    v-for="(audio, index) in argument.audios"
                    :key="index"
                  >
                    <figcaption>
                      <strong>Ecoutez l'argument :</strong>
                    </figcaption>
                    <audio class="mt-2" controls :src="audio.src">
                      <a :hred="audio.src"> Télécharger l'audio </a>
                    </audio>
                  </figure>
                </li>
              </ul>
            </div>
            <p v-else>
              <strong>Aucune réponses</strong>
            </p>
          </div>
        </li>
      </ul>

      <p v-else class="mt-2 md:mt-4">Aucun arguments</p>
    </div>

    <p v-else>Choissi un théme</p>
  </div>
</template>

<script lang="ts">
import { IArgumentTopic, IArgument } from '~~/types'
import { ArgumentService } from '~~/services'

export default defineNuxtComponent({
  name: 'SectionArguments.',

  components: {},

  data() {
    return {
      opened: null,
      selectedTopic: undefined as IArgumentTopic,
      debatArguments: ArgumentService.getAll()
    }
  },

  computed: {
    filteredArguments(): IArgument[] {
      let debatArguments = this.debatArguments

      return debatArguments.filter(
        (argument: IArgument) =>
          argument.topics.findIndex(
            (topic) => topic.slug === this.selectedTopic.slug
          ) > -1
      )
    }
  },

  methods: {
    onTopicClick(value: IArgumentTopic) {
      console.log(value)

      this.selectedTopic = value
      this.opened = null
    }
  }
})
</script>