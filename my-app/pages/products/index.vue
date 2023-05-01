<template class="container">
  <div>
    <h1>hello world</h1>
    <div>
      <div class="grid grid-cols-4 gap-5">
        <div v-for="p in products">
          <productCard :product="p" />
        </div>
      </div>
      <nuxt-link to="products/9">aaaaaaaaaaaaaahhh</nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("blog", () => queryContent("blog/").find());
console.log(data);

definePageMeta({
  layout: "default",
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");
useHead({
  title: "Nuxt Dojo | mearch ",
  meata: [{ name: "description", content: "nuxt 3 mearch" }],
});
</script>

<style lang="scss" scoped></style>
