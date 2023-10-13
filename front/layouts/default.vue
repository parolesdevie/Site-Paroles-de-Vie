<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header class="fixed top-0 left-0 right-0 w-full z-50" />

    <div
      class="container mt-16 mx-auto mb-auto px-3 md:px-4 py-4 flex flex-col"
    >
      <slot />
    </div>

    <!-- <EventPopup /> -->

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>
  