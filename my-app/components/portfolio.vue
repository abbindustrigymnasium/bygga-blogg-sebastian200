<template>
  <div class="py-4">
    <ul class="flex justify-around flex-wrap -z-0">
      <li v-for="i in posts">
        <div
          v-if="
            cookie.includes('bruh') ||
            cookie.includes(post[i - 1].year) ||
            cookie.includes(
              post[i - 1].category || cookie.includes(post[i - 1].author)
            )
          "
          :class="'img m-6 w-72 lg:w-90 lg:h-96 h-80 border-dashed border-rose-700 border rounded-3xl shadow-xl shadow-black'"
          v-bind:style="{ backgroundImage: 'url(' + post[i - 1].img + ')' }"
        >
          <div class="portCard rounded-3xl p-3 h-full">
            <nuxt-link class="" :to="post[i - 1]._path">
              <h1
                class="text-3xl font-semibold flex justify-center m-2 mb-8 text-center"
              >
                {{ post[i - 1].title }}
              </h1>
              <div>
                {{ post[i - 1].date }}
              </div>
              <div
                class="flex justify-center text-center content-end"
                v-if="post[i - 1].author != undefined"
              >
                By
                {{ post[i - 1].author }}
              </div>
              <div class="flex justify-center text-center">
                {{ post[i - 1].description }}
              </div>
            </nuxt-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
let cookie = document.cookie;

let product = {};
const route = useRoute();

let src = route.path;
if (src == "/") {
  src = "portfolio/";
}
console.log(src);

const { data } = await useAsyncData("blog", () => queryContent(src).find());
console.log(data);

let post = data.value;

console.log(post[0].img);

console.log(post[0]);
console.log(post[0].img);
let posts = data.value.length;
</script>

<script>
export default {
  watch: {},
  props: ["author", "category", "year"],
};
</script>

<style scoped>
.blog {
  background-color: rgb(17, 11, 41);
}

.portCard {
  background-color: rgba(128, 128, 128, 0.199);
}

.portCard:hover {
  background-color: rgba(138, 138, 138, 0);
}

.img {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
