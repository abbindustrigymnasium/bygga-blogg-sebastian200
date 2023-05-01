<template>
  <div>
    <div class="inline-flex rounded-md shadow-sm" role="group">
      <button @click="$emit(one)" type="button"
        class="px-4 shadow-md py-2 text-sm font-medium text-gray-900 bg-opacity-50 bg-white  rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 active:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        {{ one }}
      </button>

      <button @click="$emit(two)" type="button"
        class="px-4 shadow-md py-2 text-sm font-medium text-gray-900 bg-opacity-50 bg-white  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        {{ two }}
      </button>
      <button @click="$emit(three)" type="button"
        class="px-4 shadow-md py-2 text-sm font-medium text-gray-900 bg-opacity-50 bg-white  rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        {{ three }}
      </button>
    </div>

  </div>
</template>

<script >
export default {
  props: ['one', 'two', 'three',]
}

</script>

<script setup>

</script>



<style scoped>
.button:on-click {
  background-color: blue;
  width: 90px;
}
</style>