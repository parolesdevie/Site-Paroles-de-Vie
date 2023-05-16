<template>
  <section
    class="-mx-3 px-3 mt-4 md:mx-0 md:mt-10 bg-gray-200 dark:bg-gray-800 py-4 md:py-10 lg:px-40"
  >
    <div class="container mx-auto">
      <!-- title -->
      <H2Title>
        <slot name="title"></slot>
      </H2Title>

      <div class="mt-4 md:mt-8 font-semibold text-base max-w-5xl">
        <slot name="body"></slot>
      </div>
    </div>
  </section>
</template>