<template>
  <div class="about shadow-sm shadow-black">
    <header class="navbar">
      <nav class="container mx-auto p-2 flex justify-between">
        <nuxt-link @mouseover="hover()" to="/" class="icon">
          <img
            class="h-12 md:h-16 lg:h-20 p-1 pl-3 z-30"
            src="../assets/icons/brandIcon1.png"
            alt=""
          />
          <nav
            class="sideNavbar -left-96 z-10 fixed bg-slate-500 h-screen w-3/5 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-opacity-80 top-0 py-20"
          >
            <div class="flex justify-center shadow-sm shadow-slate-400">
              <h1 class="font-semibold text-6xl">Hello {{ name }}</h1>
            </div>
            <ul>
              <li
                class="p-6 shadow-sm shadow-slate-400 text-lg lg:text-xl xl:text-2xl"
              >
                <nuxt-link to="/settings">settings</nuxt-link>
              </li>
              <li
                class="p-6 shadow-sm shadow-slate-400 text-lg lg:text-xl xl:text-2xl"
              >
                <nuxt-link to="/settings">acount</nuxt-link>
              </li>
            </ul>
          </nav>
        </nuxt-link>

        <ul
          class="flex justify-center gap-3 md:gap-6 lg:gap-8 xl:gap-10 text-sm md:text-lg text-zinc-200 font-medium"
        >
          <li>
            <nuxt-link to="/about" class="hover:text-purple-600"
              >About Me</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/portfolio" class="hover:text-purple-600"
              >Portoflio</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/blog" class="hover:text-purple-600">Blog</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" class="hover:text-purple-600 md:p-1"
              >Contact us</nuxt-link
            >
          </li>
          <li>
            <button
              @click="cv()"
              class="btn bg-rose-600 xs:hidden flex items-center"
            >
              <p class="hidden md:block">Download</p>
              <p class="pl-1">Cv</p>
            </button>
          </li>
        </ul>
      </nav>
    </header>

    <div class="page">
      <slot />
    </div>
  </div>
</template>

<script setup>
function cv() {
  window.location.replace(
    "https://drive.google.com/uc?export=download&id=1Vp4znl7ZVGSKb8VOsoFJ1HMNSlJJVdX5"
  );
}

function hover() {
  console.log("hello");
  let side = document.getElementsByClassName("sideNavbar");
}
</script>

<style scoped>
.navbar {
  background-color: rgb(17, 11, 41);
  position: fixed;
  width: 100%;
  box-shadow: 2px 1px 3px #3d3d3d;
}
li {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon:hover .sideNavbar {
  left: 0px;
}

.sideNavbar {
  left: -400px;

  transition-property: left;
  transition-duration: 1s;
  transition-delay: 0.5s;
}
</style>
