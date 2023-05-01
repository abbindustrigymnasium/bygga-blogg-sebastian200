<template>
  <main class="post py-20">
    <div
      class="img flex justify-center py-5 w-full h-96"
      v-if="data.img != undefined"
      v-bind:style="{ backgroundImage: 'url(' + data.img + ')' }"
    ></div>

    <div class="flex justify-center">
      <ContentRenderer
        class="new py-5 mx-10 lg:p.30 flex-col justify-center"
        :value="data"
      />
    </div>
    <socials id="socials" />
  </main>
</template>

<script setup>
const route = useRoute();
let src = route.path;
const { data } = await useAsyncData("src", () => queryContent(src).findOne());
</script>

<style scoped>
.new ::v-deep h1 {
  @apply text-4xl md:text-5xl lg:text-6xl text-center m-0 mb-12 py-4;
  @apply shadow-md shadow-black;
}

#socials::v-deep h1 {
  @apply text-4xl lg:text-5xl;
}

.new ::v-deep p {
  @apply text-justify mb-5 lg:text-lg;
  line-height: 2.2;
  @apply shadow-md shadow-black;
}

.new ::v-deep a {
  @apply text-blue-500;
}

::v-deep h2 {
  @apply text-4xl;
}

::v-deep h3 {
  @apply text-3xl;
}

.new ::v-deep div {
  @apply p-0;
}

::v-deep code {
  @apply text-white w-screen;
  font-family: Monaco, monospace;

  line-height: 100%;
  background-color: #91919123;
  padding: 0.2em;
  letter-spacing: -0.05em;
  word-break: normal;

  border-radius: 5px;
}

.new ::v-deep ul {
  list-style-type: circle;
  @apply text-justify mb-5;
  @apply shadow-md shadow-black;
  line-height: 2.2;
}

.post {
  background-color: rgb(17, 11, 41);
}
.img {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
