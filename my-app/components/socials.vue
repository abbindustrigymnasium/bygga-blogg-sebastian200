<template>
  <div>
    <div class="Hi flex-col">
      <div class="shadow-sm flex justify-center">
        <div
          class="w-80 h-80 my-12 flex-col border-dashed border-gray-600 border rounded-full content-center"
        >
          <h1 class="font-serif flex justify-center text-5xl m-4 mt-20">
            Lets Say Hi
          </h1>
          <p class="flex justify-center">Kotte.alin@gmail.com</p>
          <div class="flex justify-center my-6">
            <nuxt-link to="www.youtube.com"
              ><img
                class="socials"
                src="../assets/icons/600px-Instagram_icon.png"
                alt=""
            /></nuxt-link>
            <nuxt-link to="">
              <img
                class="socials"
                src="../assets/icons/twitter-logo-.png"
                alt=""
            /></nuxt-link>
            <nuxt-link to=""
              ><img
                class="socials"
                src="../assets/icons/Facebook_Logo_(2019).png"
                alt=""
            /></nuxt-link>
          </div>
        </div>
      </div>
      <div class="m-0">
        <div class="text-sm p-5 flex justify-center shadow-md shadow-white">
          2023 - form | All rights reserved
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.Hi {
  background-color: rgb(34, 25, 70);
}
</style>
