<template>
  <div class="blog py-20">
    <div class="header">
      <div
        class="flex justify-center font-serif font-extralight shadow-sm shadow-slate-800"
      >
        <button @click="value = !value">
          <h1>Blog</h1>
        </button>
      </div>
    </div>
    <div
      class="flex justify-center p-16 px-12 md:px-28 text-center shadow-md shadow-black"
    >
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam cupiditate
        reprehenderit nihil, recusandae sint voluptatibus minus assumenda, eos
        tenetur explicabo corrupti incidunt consequatur officiis perspiciatis
        dolore, similique excepturi molestiae ipsa?
      </div>
    </div>

    <div class="body"></div>
    <portfolio />
  </div>
  <socials />
</template>

<script setup>
import multiButton from "../../components/multiButton.vue";
</script>

<style scoped>
.blog {
  background-color: rgb(17, 11, 41);
}

.body {
  top: 20px;
  position: relative;
  display: block;
}

.portfolioSettings {
  display: none;
}

.header:hover .portfolioSettings {
  display: block;
}
</style>
