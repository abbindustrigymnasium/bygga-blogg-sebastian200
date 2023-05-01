<template>
  <div class="about py-20">
    <div class="shadow-xl flex justify-center">
      <h1 class="font-serif">About me</h1>
    </div>

    <div class="flex justify-center">
      <img
        class="w-full md:w-1/2 lg:w-1/3 mx-10"
        src="../assets/icons/me.png"
        alt=""
      />
    </div>
    <div
      class="new flex flex-col md:flex-row justify-center shadow-md shadow-black p-10"
    >
      <div class="w-full">
        <div class="mx-10 bg-rose-700 w-32 h-3"></div>
        <h1 class="font-semibold">Who am I</h1>
        <div>How did we get here</div>
      </div>
      <div class="w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        totam architecto nesciunt quos distinctio recusandae quis laborum iste
        fugiat ad soluta quod quae quibusdam optio. Iure doloremque odit
        provident debitis?
      </div>
    </div>
    <img src="" alt="" />
    <div
      class="flex flex-col md:flex-row justify-center p-10 shadow-md shadow-black"
    >
      <div class="w-full">
        <div class="mx-10 bg-rose-700 w-32 h-3"></div>
        <h1 class="font-semibold">My experience</h1>
        <div>How did we get here</div>
      </div>
      <div class="w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        totam architecto nesciunt quos distinctio recusandae quis laborum iste
        fugiat ad soluta quod quae quibusdam optio. Iure doloremque odit
        provident debitis?
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row justify-center p-10 shadow-md shadow-black"
    >
      <div class="w-full">
        <div class="mx-10 bg-rose-700 w-32 h-3"></div>
        <h1 class="font-semibold">My work</h1>
        <div>How did we get here</div>
      </div>
      <div class="w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        totam architecto nesciunt quos distinctio recusandae quis laborum iste
        fugiat ad soluta quod quae quibusdam optio. Iure doloremque odit
        provident debitis?
      </div>
    </div>
    <socials />
  </div>
</template>

<script setup></script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
.about {
  background-color: rgb(17, 11, 41);
}
.new {
  background-color: rgb(34, 25, 70);
}
</style>
