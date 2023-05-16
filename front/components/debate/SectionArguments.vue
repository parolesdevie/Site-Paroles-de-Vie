<template>
  <section>
    <!-- title -->
    <H2Title>{{ title }}</H2Title>

    <ul class="mt-2 md:mt-4 flex flex-col gap-4">
      <CardArgument
        :argument="argument"
        v-for="(argument, index) in arguments"
        :key="index"
      />
    </ul>
  </section>
</template>

<script lang="ts">
import H2Title from '~~/components/global/H2Title.vue'
import CardArgument from '~~/components/debate/CardArgument.vue'
import { PropType } from 'vue'

export default defineNuxtComponent({
  name: 'SectionArguments.',

  components: {
    H2Title,
    CardArgument
  },

  props: {
    arguments: {
      type: Array as PropType<unknown[]>,
      default: () => []
    },
    title: {
      type: String,
      default: 'Arguments'
    }
  }
})
</script>
