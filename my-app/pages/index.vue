<template>
  <ClientOnly>
    <div class="page pt-20">
      <div class="flex lg:px-10">
        <div class="intro flex flex-col lg:flex-row justify-between lg-p-30">
          <div class="introText p-5 md:p-5 md:py-20 lg:m-30">
            <div>
              <button class="btn bg-pink-900 bg-opacity-90 z-0 px-5">
                Welcome! I'M
              </button>
              <h1
                class="header font-serif font-extralight text-6xl md:text-7xl mx-0 my-10"
              >
                Sebastian Alin
              </h1>
              <div class>From ABB Gymnasiet in Västerås</div>
            </div>
            <br />
            <div class="leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium voluptatem laboriosam a ut unde tenetur deleniti
              corrupti deserunt, reprehenderit est vel doloremque nisi quae quos
              incidunt blanditiis nulla doloribus dicta.
            </div>
          </div>
          <div class="person flex">
            <img class="w-screen" src="../assets/icons/me.png" alt="" />
          </div>
        </div>
        <div id="socials" class="p-2 pb-0 md:p-6 tracking-widest text-rose-700">
          FOLLOW ME ON: ---------
          <button><img src="" alt="" /></button>
          <button><img src="" alt="" /></button>
          <button><img src="" alt="" /></button>
        </div>
      </div>
      <div
        class="accoplishments flex content-start justify-around flex-wrap p-8"
      >
        <div class="awardbox">
          <h1 class="font-bold text-5xl m-0">02</h1>
          <p class="text-2xl">Awards</p>
        </div>
        <div class="awardbox border-solid">
          <h1 class="font-bold text-5xl m-0">50+</h1>
          <p class="text-2xl">Clients</p>
        </div>
        <div class="awardbox">
          <h1 class="font-bold text-5xl m-0">03</h1>
          <p class="text-2xl">Years Experience</p>
        </div>
        <div class="awardbox">
          <h1 class="font-bold text-5xl m-0">80+</h1>
          <p class="text-2xl">Projects</p>
        </div>
      </div>
      <div class="portfolio m-8 lg:m-10 xl:mx-24">
        <div class="flex flex-col justify-around lg:flex-row">
          <div>
            <nuxt-link to="portfolio"
              ><h1 class="header font-serif font-extralight">Portfolio</h1>
            </nuxt-link>
            <p class="p-5 xl:w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              fugiat culpa ad magnam blanditiis est vitae perferendis, cumque
              incidunt corporis placeat provident id earum ducimus fuga ut.
              Dolorem, quaerat labore.
            </p>
          </div>

          <div class="flex justify-center">
            <div
              class="inline-flex rounded-md h-20 shadow-sm m-10 lg:my-24 mc justify-center"
            >
              <a
                href="portfolio"
                aria-current="page"
                class="p-6 text-sm font-medium text-rose-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-rose-700 focus:text-rose-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-rose-500 dark:focus:text-white"
              >
                Software
              </a>
              <a
                href="portfolio"
                class="p-6 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-rose-700 focus:z-10 focus:ring-2 focus:ring-rose-700 focus:text-rose-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-rose-500 dark:focus:text-white"
              >
                hardware
              </a>
              <a
                href="portfolio"
                class="p-6 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-rose-700 focus:z-10 focus:ring-2 focus:ring-rose-700 focus:text-rose-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-rose-500 dark:focus:text-white"
              >
                ShowAll
              </a>
            </div>
          </div>
        </div>
        <portfolio />
        <div class="flex justify-center">
          <nuxt-Link to="portfolio/" class="btn bg-rose-700"
            >show all my work</nuxt-Link
          >
        </div>
      </div>
      <div class="myExperience p-5 md:px-16">
        <div>
          <h1
            class="font-serif font-extralight text-6xl md:text-7xl text-center"
          >
            My Experience
          </h1>
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            temporibus accusamus quibusdam sunt amet unde aspernatur sequi
            magnam iste cupiditate reiciendis maxime veritatis pariatur, fugit
            mollitia odio voluptatem natus laborum.
          </p>
        </div>

        <ol class="items-center sm:flex my-10 justify-center">
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div
                class="z-10 flex items-center justify-center w-6 h-6 bg-rose-100 rounded-full ring-0 ring-white dark:bg-rose-900 sm:ring-8 dark:ring-gray-900 shrink-0"
              >
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 text-rose-800 dark:text-rose-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div
                class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
              ></div>
            </div>
            <div class="mt-3 sm:pr-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                bro
              </h3>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >Released on December 2, 2021</time
              >
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                yeah man
              </p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div
                class="z-10 flex items-center justify-center w-6 h-6 bg-rose-100 rounded-full ring-0 ring-white dark:bg-rose-900 sm:ring-8 dark:ring-gray-900 shrink-0"
              >
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 text-rose-800 dark:text-rose-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div
                class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
              ></div>
            </div>
            <div class="mt-3 sm:pr-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                naw
              </h3>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >Released on December 23, 2021</time
              >
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aut
              </p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div
                class="z-10 flex items-center justify-center w-6 h-6 bg-rose-100 rounded-full ring-0 ring-white dark:bg-rose-900 sm:ring-8 dark:ring-gray-900 shrink-0"
              >
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 text-rose-800 dark:text-rose-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div
                class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
              ></div>
            </div>
            <div class="mt-3 sm:pr-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                kallekula
              </h3>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >Released on January 5, 2022</time
              >
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                ratatatatatata
              </p>
            </div>
          </li>
        </ol>

        <div class="flex justify-center"></div>
      </div>
      <div
        class="contactUs flex flex-col lg:flex-row justify-around m-5 md:m-10"
      >
        <div>
          <h1 class="font-serif">Contact Us</h1>
          <p>
            Let's make something new, different and more meaningfull or make
            something more visual or conceptual?
          </p>
          <div>
            <div class="contact flex">
              <button class="btn bg-rose-700 rounded-full mx-6">
                <img
                  class="h-5"
                  src="../assets/icons/1608790_phone_icon.png"
                  alt=""
                />
              </button>
              <div>
                <div>Call me</div>
                <div>0725326031</div>
              </div>
            </div>
            <div class="contact flex">
              <button class="btn bg-rose-700 rounded-full mx-6">
                <img
                  class="h-5"
                  src="../assets/icons/1608790_phone_icon.png"
                  alt=""
                />
              </button>
              <div>
                <div>Email</div>
                <div>Sebastian.alin@abbgymnasiet.se</div>
              </div>
            </div>

            <div class="contact flex">
              <button class="btn bg-rose-700 rounded-full mx-6">
                <img
                  class="h-5"
                  src="../assets/icons/1608790_phone_icon.png"
                  alt=""
                />
              </button>
              <div>
                <div>Adress</div>
                <div>Rönbärsstigen 8, Mora 72222, Sweden</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 class="font-serif text-center">Dropp a Line</h1>
          <contact />
        </div>
      </div>
      <socials />
    </div>
  </ClientOnly>
</template>

<script setup>
const { data: posts } = await useAsyncData("post", () =>
  queryContent("/blog/").find()
);

definePageMeta({
  layout: "default",
});
</script>

<style scoped>
#socials {
  writing-mode: vertical-lr;
}
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}

.page {
  background-color: rgb(17, 11, 41);
}
.accoplishments {
  background-color: rgb(34, 25, 70);
}
.myExperience {
  background-color: rgb(34, 25, 70);
}
.Hi {
  background-color: rgb(34, 25, 70);
}

.contact {
  margin: 30px;
}
</style>
