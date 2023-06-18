<script setup lang="ts">
const EVENT_DATE = new Date('2023-04-28T21:00:00')
const END_DATE = new Date('2023-04-28T23:00:00')

const open = useState('open', () => true)
const isNow = useState(
  'isNow',
  () => Date.now() > EVENT_DATE.getTime() && Date.now() < END_DATE.getTime()
)
const eventDate = useState('eventDate', () => EVENT_DATE)
const end = useState('end', () => END_DATE)

function finish() {
  isNow.value = true
}
</script>

<template>
  <div
    v-show="
      !$route.path.startsWith('/live') &&
      !$route.path.startsWith('/debat-') &&
      open &&
      Date.now() < end.getTime()
    "
    @click.self="open = false"
    class="fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center p-10"
  >
    <div
      class="relative w-full max-w-sm bg-white dark:bg-light-black rounded-xl p-4 flex flex-col shadow-2xl"
    >
      <IconsIconTimes
        @click="open = false"
        class="absolute top-3 right-3 h-6"
      />
      <strong>Événement {{ isNow ? 'en cours' : 'à venir' }}</strong>

      <template v-if="!isNow">
        <CountDown class="mt-10" :date="eventDate" @onFinish="finish()" />

        <p class="mt-10 text-sm">
          Débat <strong>Jésus n'a jamais annoncer Ahmad</strong>
        </p>
        <!-- <p>
          Débatteurs
          <NuxtLink @click="open = false" class="underline" to="/debaters/10">
            Débatteur 1
          </NuxtLink>
          vs
          <NuxtLink @click="open = false" class="underline" to="/debaters/9">
            Débatteur 2
          </NuxtLink>
        </p> -->
      </template>

      <div class="mt-4 flex gap-4">
        <!-- tiktok -->
        <a
          v-show="isNow"
          class="border border-black dark:border-white hover:bg-light-black dark:hover:bg-white hover:text-white dark:hover:text-light-black rounded py-2 px-4 flex items-center"
          href="https://www.tiktok.com/@paroles.de.vie.2/live"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconsIconTikTok class="h-4 mr-2 shrink-0" />
          <span class="text-xs md:text-base">Ecouter sur TikTok</span>
        </a>
        <NuxtLink
          @click="open = false"
          class="border border-black dark:border-white hover:bg-light-black dark:hover:bg-white hover:text-white dark:hover:text-light-black rounded py-2 px-4 text-xs md:text-base"
          to="/debat-ahmad-2023-04-28"
        >
          Découvrir
        </NuxtLink>
      </div>

      <NuxtLink @click="open = false" class="contents" to="/debat-sujet/">
        <div
          class="mt-10 bg-white dark:bg-black dark:bg-opacity-20 shadow-inner flex-1 rounded-lg"
        >
          <img
            class="rounded-lg"
            src="/images/events/2023-04-28T21-00-00@4x.webp"
            alt="affiche débat"
          />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
