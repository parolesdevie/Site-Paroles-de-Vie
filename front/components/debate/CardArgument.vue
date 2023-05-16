<template>
  <li class="contents">
    <div
      class="border-2 border-blue-500 rounded-lg bg-gray-100 dark:bg-gray-900 flex flex-col p-4 relative md:text-lg"
    >
      <!-- title -->
      <div class="flex items-center cursor-pointer" @click="open = !open">
        <strong>
          #{{ argument.id }}
          {{ argument.title }}
        </strong>
        <span class="ml-auto select-none">
          <IconChevronDown v-if="!open" class="h-6" />
          <IconChevronUp v-else class="h-6" />
        </span>
      </div>

      <!-- body -->
      <div class="mt-4" v-show="open">
        <p class="mb-4" v-if="argument.dependency">
          Avant de lire ce argument, lisez l'argument
          <strong>#{{ argument.dependency }}</strong>
        </p>

        <!-- text -->
        <strong>Lire l'argument :</strong>
        <p class="mt-2 md:leading-8" v-html="argument.explanation" />

        <!-- audio -->
        <figure class="mt-4">
          <figcaption>
            <strong>Ecoutez l'argument :</strong>
          </figcaption>
          <audio
            class="mt-2"
            controls
            :src="`/audio/arguments/arg-${argument.audio}.mp3`"
          >
            <a :href="`/audio/arguments/arg-${argument.audio}.mp3`">
              Télécharger l'audio
            </a>
          </audio>
        </figure>

        <!-- responses -->
        <div class="mt-10">
          <strong>Réponses</strong>

          <ul class="mt-2 md:mt-4 flex flex-col gap-4">
            <li
              class="contents"
              v-for="(response, index) in argument.responses"
              :key="index"
            >
              <div
                class="border-2 border-green-500 rounded-lg bg-gray-100 dark:bg-gray-900 flex flex-col p-4 relative md:text-lg"
              >
                <!-- title -->
                <strong>
                  #{{ response.id }}
                  {{ response.title }}
                </strong>

                <!-- text -->
                <p class="mt-2 md:leading-8" v-html="response.responses" />

                <!-- audio -->
                <figure class="mt-4">
                  <figcaption>
                    <strong>Ecoutez la réponse:</strong>
                  </figcaption>
                  <audio
                    class="mt-2"
                    controls
                    :src="`/audio/arguments/arg-${argument.audio}-response-${response.audio}.mp3`"
                  >
                    <a
                      :href="`/audio/arguments/arg-${argument.audio}-response-${response.audio}.mp3`"
                    >
                      Télécharger l'audio
                    </a>
                  </audio>
                </figure>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import IconChevronDown from '~~/components/icons/IconChevronDown.vue'
import IconChevronUp from '~~/components/icons/IconChevronUp.vue'

export default defineNuxtComponent({
  name: 'CardArgument',

  components: {
    IconChevronDown,
    IconChevronUp
  },

  props: {
    argument: {
      type: Object as unknown,
      default: undefined
    }
  },

  data() {
    return {
      open: false
    }
  }
})
</script>