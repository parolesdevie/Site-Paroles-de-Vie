<template>
  <div class="flex flex-col min-h-screen">
    <!-- header -->
    <Header class="fixed top-0 left-0 right-0 w-full z-50" />

    <img
      class="fixed top-16 -z-10"
      src="/images/articles/article-banner-wallpaper@1x.jpg"
      alt=""
    />

    <div class="h-52 md:h-80 lg:h-96 bg-transparent"></div>

    <div class="pb-40 bg-white dark:bg-light-black">
      <div
        class="container mx-auto mb-auto px-3 md:px-4 py-4 flex flex-col z-10"
      >
        <slot />
      </div>
    </div>

    <!-- <EventPopup /> -->

    <!-- footer -->
    <Footer />
  </div>
</template>
  