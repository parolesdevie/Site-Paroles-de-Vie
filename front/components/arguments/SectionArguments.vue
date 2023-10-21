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
      class="mt-4 md:mt-10 flex md:justify-center overflow-x-auto py-2 pr-2 md:py-4 md:pr-4 gap-2 md:gap-3 lg:gap-5 xl:gap-6 px-3 md:px-5 lg:px-4 2xl:px-5"
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

    <!-- board result mobile -->
    <div class="md:hidden">
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

    <!-- board result desktop -->
    <div
      class="hidden md:flex mt-4 md:mt-10 gap-3 min-h-1/2-screen"
      v-if="selectedTopic"
    >
      <!-- board -->
      <div
        class="flex-shrink-0 w-full lg:w-2/3 bg-gray-100 dark:bg-gray-700 rounded-t-3xl p-5"
      >
        <ul
          v-if="filteredArguments.length"
          class="mt-2 md:mt-4 flex gap-4 overflow-x-auto pb-4"
        >
          <!-- bg-gray-100 dark:bg-gray-900   relative md:text-lg`" -->
          <li
            class="flex flex-col items-start"
            v-for="(argument, index) in filteredArguments"
            :key="index"
            @click="onArgumentClick(argument)"
          >
            <!-- main argument card -->
            <div
              class="p-1 border-4 rounded-3xl"
              :class="`${
                selectedArgument == argument
                  ? `border-${
                      argument.team === 'chrétien' ? 'violet' : 'green'
                    }-700 dark:border-${
                      argument.team === 'chrétien' ? 'violet' : 'green'
                    }-500`
                  : 'border-transparent'
              } `"
            >
              <div
                class="relative h-10 w-10 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-56 xl:w-56 border-2 lg:border-4 rounded-3xl rounded-br-none cursor-pointer"
                :class="`border-${
                  argument.team === 'chrétien' ? 'violet' : 'green'
                }-700 dark:border-${
                  argument.team === 'chrétien' ? 'violet' : 'green'
                }-500`"
              >
                <span
                  class="p-4 h-full w-full flex items-center justify-center font-semibold italic text-xs md:text-sm xl:text-xl overflow-hidden"
                >
                  {{ argument.title }}
                </span>
                <IconsIconChevronDown
                  class="absolute left-1/2 transform -translate-x-1/2 bottom-1 h-4 w-4"
                  v-if="argument.responses?.length"
                />
                <ul
                  class="absolute -bottom-5 right-0"
                  v-if="argument.authors.length"
                >
                  <li v-for="(author, index) in argument.authors" :key="index">
                    <img
                      loading="lazy"
                      :src="'/images/user/' + author.id + '.webp'"
                      class="h-10 w-10 lg:h-12 lg:w-12 flex-shrink-0 border-2 lg:border-4 rounded-full bg-gray-300"
                      :class="`border-${
                        argument.team === 'chrétien' ? 'violet' : 'green'
                      }-700 dark:border-${
                        argument.team === 'chrétien' ? 'violet' : 'green'
                      }-500`"
                      title="photo de profils"
                    />
                  </li>
                </ul>
              </div>
            </div>

            <!-- responses -->
            <ul v-show="selectedArgument === argument" class="mt-10 flex gap-4">
              <li
                class="relative"
                v-for="(response, index) in argument.responses"
                :key="index"
                @click.stop="onResponseClick(response)"
              >
                <span
                  class="absolute left-16 lg:left-20 xl:left-28 block w-1"
                  :class="`bg-${
                    response.team === 'chrétien' ? 'violet' : 'green'
                  }-700 dark:bg-${
                    response.team === 'chrétien' ? 'violet' : 'green'
                  }-500 ${index ? '-top-5 h-5' : '-top-10 h-10'}`"
                />
                <span
                  v-if="index"
                  class="absolute block -top-5 -left-20 lg:-left-24 xl:-left-32 h-1 w-36 lg:w-44 xl:w-60"
                  :class="`bg-${
                    response.team === 'chrétien' ? 'violet' : 'green'
                  }-700 dark:bg-${
                    response.team === 'chrétien' ? 'violet' : 'green'
                  }-500`"
                />
                <div
                  class="relative h-10 w-10 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-56 xl:w-56 p-4 border-2 lg:border-4 rounded-3xl rounded-br-none cursor-pointer"
                  :class="`border-${
                    response.team === 'chrétien' ? 'violet' : 'green'
                  }-700 dark:border-${
                    response.team === 'chrétien' ? 'violet' : 'green'
                  }-500`"
                >
                  <span
                    class="p-4 h-full w-full flex items-center justify-center font-semibold italic text-xs md:text-sm xl:text-xl overflow-hidden"
                  >
                    {{ response.title }}
                  </span>
                  <ul
                    class="absolute -bottom-5 right-0"
                    v-if="response.authors.length"
                  >
                    <li
                      v-for="(author, index) in response.authors"
                      :key="index"
                    >
                      <img
                        loading="lazy"
                        :src="'/images/user/' + author.id + '.webp'"
                        class="h-10 w-10 lg:h-12 lg:w-12 flex-shrink-0 border-2 lg:border-4 rounded-full bg-gray-300"
                        :class="`border-${
                          response.team === 'chrétien' ? 'violet' : 'green'
                        }-700 dark:border-${
                          response.team === 'chrétien' ? 'violet' : 'green'
                        }-500`"
                        title="photo de profils"
                      />
                    </li>
                  </ul>
                </div>

                <!-- responses x2 -->
                <ul class="mt-10 flex gap-4">
                  <li
                    class="relative"
                    v-for="(response, index) in response.responses"
                    :key="index"
                    @click.stop="onResponseClick(response)"
                  >
                    <span
                      class="absolute left-16 lg:left-20 xl:left-28 block w-1"
                      :class="`bg-${
                        response.team === 'chrétien' ? 'violet' : 'green'
                      }-700 dark:bg-${
                        response.team === 'chrétien' ? 'violet' : 'green'
                      }-500 ${index ? '-top-5 h-5' : '-top-10 h-10'}`"
                    />
                    <span
                      v-if="index"
                      class="absolute block -top-5 -left-20 lg:-left-24 xl:-left-32 h-1 w-36 lg:w-44 xl:w-60"
                      :class="`bg-${
                        response.team === 'chrétien' ? 'violet' : 'green'
                      }-700 dark:bg-${
                        response.team === 'chrétien' ? 'violet' : 'green'
                      }-500`"
                    />
                    <div
                      class="h-10 w-10 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-56 xl:w-56 p-4 border-2 lg:border-4 rounded-3xl rounded-br-none cursor-pointer"
                      :class="`border-${
                        argument.team === 'chrétien' ? 'violet' : 'green'
                      }-700 dark:border-${
                        argument.team === 'chrétien' ? 'violet' : 'green'
                      }-500`"
                    >
                      <span
                        class="p-4 h-full w-full flex items-center justify-center font-semibold italic text-xs md:text-sm xl:text-xl overflow-hidden"
                      >
                        {{ response.title }}
                      </span>
                      <IconsIconChevronDown
                        class="absolute left-1/2 transform -translate-x-1/2 bottom-1 h-4 w-4"
                        v-if="response.responses?.length"
                      />
                      <ul
                        class="absolute -bottom-5 right-0"
                        v-if="response.authors.length"
                      >
                        <li
                          v-for="(author, index) in response.authors"
                          :key="index"
                        >
                          <img
                            loading="lazy"
                            :src="'/images/user/' + author.id + '.webp'"
                            class="h-10 w-10 lg:h-12 lg:w-12 flex-shrink-0 border-2 lg:border-4 rounded-full bg-gray-300"
                            :class="`border-${
                              response.team === 'chrétien' ? 'violet' : 'green'
                            }-700 dark:border-${
                              response.team === 'chrétien' ? 'violet' : 'green'
                            }-500`"
                            title="photo de profils"
                          />
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- details -->
      <div
        class="hidden lg:block flex-auto bg-gray-100 dark:bg-gray-700 rounded-t-3xl p-6"
      >
        <div v-if="selectedDetails">
          <div class="flex">
            <!-- avatar -->
            <img
              loading="lazy"
              :src="'/images/user/' + selectedDetails.author.id + '.webp'"
              class="h-20 xl:h-24 w-20 xl:w-24 flex-shrink-0 rounded-full bg-gray-300"
              title="photo de profils"
            />
            <!-- <span
              class="h-24 w-24 block flex-shrink-0 rounded-full bg-gray-300"
            /> -->
            <p class="ml-6 xl:text-xl font-semibold italic">
              {{ selectedDetails.title }}
            </p>
          </div>

          <div
            class="mt-10 p-4 bg-white dark:bg-black h-72 overflow-y-scroll"
            v-html="selectedDetails.text"
          />

          <figure class="mt-4" v-if="selectedDetails.audio">
            <figcaption>
              <strong>Ecoutez l'argument :</strong>
            </figcaption>
            <audio class="mt-2" controls :src="selectedDetails.audio.src">
              <a :hred="selectedDetails.audio.src"> Télécharger l'audio </a>
            </audio>
          </figure>
        </div>
      </div>
    </div>
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
      selectedArgument: undefined as IArgument,
      selectedDetails: undefined as IArgument,
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
      this.selectedTopic = value
      this.opened = null
    },
    onArgumentClick(value: IArgument) {
      console.log('onArgumentClick')

      this.selectedArgument = value
      this.selectedDetails = value
    },
    onResponseClick(value: IArgument) {
      console.log('onResponseClick')

      this.selectedDetails = value
    }
  }
})
</script>