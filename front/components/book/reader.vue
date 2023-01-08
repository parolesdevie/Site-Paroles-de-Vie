<template>
  <div class="flex bg-black bg-opacity-10">
    <!-- For Next/Prev Controls -->
    <input class="hidden" type="checkbox" id="c1" />
    <input class="hidden" type="checkbox" id="c2" />
    <input class="hidden" type="checkbox" id="c3" />

    <!-- Book Cover -->
    <div
      class="
        h-[13.4375rem]
        w-38
        md:h-[28.3125rem] md:w-80
        xl:h-[53.75rem] xl:w-152
      "
      id="cover"
    >
      <a
        class="relative h-full w-full p-8 flex items-center justify-center"
        href="/sources/almanach/pdf/almanach.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="/sources/almanach/pdf/almanach.pdf"
      >
        <span
          class="
            rounded-md
            border border-orange-600
            text-orange-600
            hover:bg-orange-600 hover:text-white
            px-4
            md:px-6
            py-1
          "
        >
          Télécharger en PDF
        </span>
      </a>
    </div>
    <!-- Pages -->
    <div
      class="
        flip-book
        relative
        pers
        h-[13.4375rem]
        w-38
        md:h-[28.3125rem] md:w-80
        xl:h-[53.75rem] xl:w-152
      "
    >
      <!-- Page 1 -->
      <div class="flip absolute top-0 left-0 h-full w-full" id="p1">
        <div class="front">
          <img src="/sources/almanach/images/cover.jpg" />
          <label for="c1" class="absolute inset-0 cursor-pointer" />
        </div>
        <div class="back">
          <img src="/sources/almanach/images/001.jpg" />
          <label for="c1" class="absolute inset-0 cursor-pointer" />
        </div>
      </div>

      <!-- Page 2 -->
      <div class="flip absolute top-0 left-0 h-full w-full" id="p2">
        <div class="front">
          <img src="/sources/almanach/images/002.jpg" />
          <label for="c2" class="absolute inset-0 cursor-pointer" />
        </div>
        <div class="back">
          <img src="/sources/almanach/images/003.jpg" />
          <label for="c2" class="absolute inset-0 cursor-pointer" />
        </div>
      </div>

      <!-- Page 3 -->
      <div class="flip absolute top-0 left-0 h-full w-full" id="p3">
        <div class="front">
          <label for="c3" class="absolute inset-0 cursor-pointer" />
        </div>
        <div class="back">
          <img src="/sources/almanach/images/back-cover.jpg" />
          <label for="c3" class="absolute inset-0 cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip-book {
  perspective: 1500px;
}
.flip {
  width: 100%;
  height: 100%;
  transform-origin: left;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: 0.5s;
  color: #000;
}
.front {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  box-sizing: border-box;
}
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  background-color: #fff;
}

#p1 {
  z-index: 3;
}
#p2 {
  z-index: 2;
}
#p3 {
  z-index: 1;
}
#c1:checked ~ .flip-book #p1 {
  transform: rotateY(-180deg);
  z-index: 1;
}
#c2:checked ~ .flip-book #p2 {
  transform: rotateY(-180deg);
  z-index: 2;
}
#c3:checked ~ .flip-book #p3 {
  transform: rotateY(-180deg);
  z-index: 3;
}
</style>