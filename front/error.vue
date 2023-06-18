<script setup lang="ts">
const props = defineProps({ error: Object })
</script>

<template>
  <div class="relative min-h-screen min-w-screen">
    <!-- background image -->
    <img
      class="absolute h-full w-full object-cover z-10 animate-fade-slow"
      src="/images/error-background.webp"
      alt="Jésus habillé en grec qui est assis dans un jardin entouré de ses amis les apôtres, très détaillé, hyper-réaliste, photographique, objectif grand angle, par Richard Avedon, Patrick Demarchelier, Vogue, Baron Adolphe De Meyer"
    />

    <div
      class="absolute z-20 inset-0 bg-gray-100 dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 flex flex-col items-center justify-center p-10"
    >
      <!-- error -->
      <!-- <div class="absolute z-30 top-8 left-4">
        <span class="bg-white text-black rounded-l-lg px-4 py-2">Erreur</span>
        <span class="bg-black text-white rounded-r-lg px-4 py-2">
          {{ error.statusCode }}
        </span>
      </div> -->

      <IconsIconCross class="h-12 md:h-16" />

      <!-- verse -->
      <RandomVerse class="mt-2 md:mt-10" />

      <!-- home -->
      <NuxtLink class="mt-10 text-lg text-blue-500 hover:underline" to="/">
        Retour à l'accueil
      </NuxtLink>

      <div class="hidden md:">
        <p class="mt-2">ou</p>

        <!-- links -->
        <ul class="mt-2">
          <li class="contents">
            <NuxtLink
              class="text-lg text-blue-500 hover:underline"
              to="/gospel"
            >
              Louanges
            </NuxtLink>
          </li>
          \
          <li class="contents">
            <NuxtLink class="text-lg text-blue-500 hover:underline" to="/live">
              Direct LIVE
            </NuxtLink>
          </li>
          \
          <li class="contents">
            <NuxtLink
              class="text-lg text-blue-500 hover:underline"
              to="/questions-answer"
            >
              Questions
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- contact us -->
      <NuxtLink
        class="absolute z-30 bottom-8 mt-2 md:mt-4 py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-black dark:hover:bg-opacity-40 duration-300 inline-flex items-center"
        to="/contact/"
      >
        <IconsIconQuestionCircle class="h-6 w-6" />
        <span class="ml-2">
          Vous avez besoin d'aide, nous pouvons vous offrir une assistance
        </span>
      </NuxtLink>
    </div>
  </div>
</template>