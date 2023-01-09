<script setup lang="ts">
// head
useHead({
  title: 'Nous contacter - Paroles de vie',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Défendre la foi chrétienne, donner une éducation chrétienne, expression de la foi.'
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://www.paroles-de-vie.tk/seo/contact.webp'
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.paroles-de-vie.tk/seo/contact.webp'
    }
  ]
})

// state
const breadcrumbItems = ref([
  {
    name: 'Accueil',
    to: '/'
  },
  {
    name: 'Nous contacter',
    to: '/contact/'
  }
])
</script>

<template>
  <div>
    <!-- breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <section class="mt-4 md:mt-10">
      <p>
        Addresse e-mail :
        <a
          class="text-blue-500 hover:underline"
          href="mailto:chaine.paroles.de.vie@gmail.com"
        >
          chaine.paroles.de.vie@gmail.com
        </a>
      </p>
    </section>
  </div>
</template>