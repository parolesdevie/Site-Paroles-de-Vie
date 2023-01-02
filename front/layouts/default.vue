<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header />
    <div class="container mx-auto mb-auto px-3 md:px-0 py-4 flex flex-col">
      <slot />
    </div>

    <EventPopup />

    <!-- footer -->
    <Footer class="mt-40" />
  </div>
</template>
  