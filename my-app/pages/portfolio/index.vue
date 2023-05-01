<template>
  <div class="blog py-20">
    <div class="header">
      <div
        class="flex justify-center font-serif font-extralight shadow-sm shadow-slate-800"
      >
        <button @click="value = !value">
          <h1>Portfolio</h1>
        </button>
      </div>

      <div
        class="portfolioSettings bg-slate-600 bg-opacity-80 z-10 m-0 shadow-md shadow-black"
      >
        <h1
          class="text-4xl p-6 m-0 flex justify-center shadow-md font-semibold"
        >
          filter
        </h1>
        <div class=" ">
          <div class="shadow-md p-4">
            <div class="flex justify-center m-2 font-semibold">Topic</div>
            <multiButton
              one="Software"
              two="Hardware"
              three="Ai"
              @Software="topicClick('Software')"
              @ai="topicClick('ai')"
              @Hardware="topicClick('Hardware')"
              class="flex m- justify-center"
            />
          </div>
          <div class="shadow-md p-4">
            <div class="flex justify-center m-2 font-semibold">Author</div>
            <div class="flex justify-center">
              <input
                class="author rounded-2xl border-solid border-gray-500 border-2 bg-fuchsia-900 bg-opacity-30 p-2 shadow-inner"
                type="text"
                v-model="dub"
              />
            </div>
          </div>

          <div class="shadow-md p-4">
            <div class="flex justify-center">Year</div>
            <multiButton
              one="2022"
              two="2023"
              three="2024"
              class="flex justify-center"
              @2023="yearClick('2023')"
              @2022="yearClick('2022')"
              @2024="yearClick('2024')"
            />
          </div>
          <div class="flex justify-center m-4">
            <button @click="submit()" class="btn bg-rose-700">submit</button>
          </div>
          <div class="flex justify-center m-4">
            <a
              class="text-blue-500 active:text-gray-500"
              @click="yearClick('bruh'), topicClick('bruh')"
              >clear filter</a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex justify-center p-16 px-12 md:px-28 text-center shadow-md shadow-black"
    >
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nobis
        accusamus numquam reprehenderit quisquam autem exercitationem quidem
        deleniti, veritatis, quasi blanditiis molestiae consequuntur, harum
        nulla modi quo alias unde dignissimos!
      </div>
    </div>

    <div class="body"></div>
    <portfolio :author="author" :category="category" :year="year" />
  </div>
  <socials />
</template>

<script setup>
import multiButton from "../../components/multiButton.vue";
import portfolio from "../../components/portfolio.vue";

let author = "";
let category = "";
let year = "";

function portfolioFilter() {}

function submit() {
  if (document.getElementsByClassName("author").value != undefined) {
    document.cookie = document.getElementsByClassName("author").value;
  }
  window.location.reload();
}

function deleteAllCookies() {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

function topicClick(n) {
  deleteAllCookies();

  console.log(document.cookie);
}
function yearClick(n) {
  deleteAllCookies();
  document.cookie = n;
  console.log(document.cookie);
}
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
