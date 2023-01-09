<script setup lang="ts">
// state
const phrases = ref([
  {
    text: "Ne crains pas, car je suis avec toi ; ne promène pas des regards tristes, car je suis ton Dieu. Je te donne la force, je t'aide, je te soutiens par ma droite triomphante.",
    ref: 'Ésaïe 41:10'
  },
  {
    text: 'Quand tu passes par les eaux, je serai avec toi ; et par les rivières, elles ne te submergeront pas. Quand tu marcheras au milieu du feu, tu ne te brûleras pas, et la flamme ne te dévorera pas.',
    ref: 'Ésaïe 43:2'
  },
  {
    text: "Je suis l'alpha et l'oméga, le premier et le dernier, le commencement et la fin.",
    ref: 'Apocalypse 22:13'
  },
  {
    text: "Je suis l'Éternel, ton Dieu, qui te prend par la main et qui te dit : Ne crains rien, je t'aide.",
    ref: 'Ésaïe 41:13'
  },
  {
    text: "Je suis avec vous tous les jours, jusqu'à la fin du monde.",
    ref: 'Matthieu 28:20'
  }
])

// computed
const randomPhrase = computed(
  () => phrases.value[Math.floor(Math.random() * phrases.value.length)]
)
</script>

<template>
  <div class="w-full max-w-sm md:max-w-3xl">
    <p class="text-xl md:text-4xl">{{ randomPhrase.text }}</p>
    <p class="float-right mt-4 md:mt-10 text-lg md:text-3xl">
      {{ randomPhrase.ref }}
    </p>
  </div>
</template>
