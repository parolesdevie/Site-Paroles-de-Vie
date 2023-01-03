<script setup lang="ts">
const open = useState('open', () => true)
const end = useState('end', () => new Date('2023-01-05T12:00:00'))

function finish() {
  open.value = false
}
</script>

<template>
  <div
    v-show="open && Date.now() < end.getTime()"
    @click.self="open = false"
    class="
      fixed
      inset-0
      bg-black bg-opacity-60
      flex
      items-start
      justify-center
      p-10
    "
  >
    <div
      class="
        relative
        w-full
        max-w-sm
        bg-white
        dark:bg-light-black
        rounded-xl
        p-4
        flex flex-col
        shadow-2xl
      "
    >
      <IconsIconTimes
        @click="open = false"
        class="absolute top-3 right-3 h-6"
      />
      <strong>Événement à venir</strong>

      <CountDown class="mt-10" :date="end" @onFinish="finish()" />

      <p class="mt-10 text-sm">Débat <strong>Paraclet</strong></p>
      <p>
        Débatteurs <span>Paroles de vie</span> vs
        <span>Caliph</span>
      </p>
      <NuxtLink
        @click="open = false"
        class="
          mt-2
          self-end
          border border-black
          dark:border-white
          hover:bg-light-black
          dark:hover:bg-white
          hover:text-white
          dark:hover:text-light-black
          rounded
          py-1
          px-4
        "
        to="/debat-paraclet/"
      >
        Voir
      </NuxtLink>

      <NuxtLink @click="open = false" class="contents" to="/debat-paraclet/">
        <div
          class="
            mt-10
            bg-white
            dark:bg-black dark:bg-opacity-20
            shadow-inner
            flex-1
            rounded-lg
          "
        >
          <img
            class=""
            src="/images/events/2023-01-05T12-00-00@4x.webp"
            alt="affiche débat"
          />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
