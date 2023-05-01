<template>
  <div>
    <form action="submit" class="flex flex-col content-center">
      <div class="flex gap-10 justify-around">
        <div>
          <input type="text" class="input" placeholder="Name" />
          <input type="text" class="input" placeholder="Phone" />
        </div>
        <div>
          <input type="text" class="input" placeholder="Email" />
          <input type="text" class="input" placeholder="adress" />
        </div>
      </div>

      <input type="text" class="input h-28" placeholder="Message" />
      <br />
      <div class="flex justify-center">
        <button class="btn bg-rose-700 rounded-md p-3 px-8">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style scoped>
.input {
  width: 100%;
}
</style>
