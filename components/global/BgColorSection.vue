<template>
  <section
    class="-mx-3 px-3 mt-4 md:mx-0 md:mt-10 bg-gray-200 py-4 md:py-10 lg:px-40"
  >
    <div class="container mx-auto">
      <!-- title -->
      <h2 class="flex items-center font-bold text-2xl md:text-3xl">
        <slot name="title"></slot>
      </h2>

      <div class="mt-4 md:mt-8 font-semibold text-base max-w-5xl">
        <slot name="body"></slot>
      </div>
    </div>
  </section>
</template>