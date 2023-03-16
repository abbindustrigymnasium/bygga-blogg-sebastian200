<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-6 flex justify-between">
               <nuxt-link to="/" class="font-bold text-xl">test</nuxt-link>
             <ul class="flex gap-4 text-xl">
                <li><nuxt-link to="/products/hello" class="hover:text-purple-600">hello</nuxt-link></li>
                <li><nuxt-link to="/products/hello" class="btn">hello</nuxt-link></li>
                <li><nuxt-link to="/products" class="btn">products</nuxt-link></li>
             </ul> 
            </nav>


        </header>
        <div class="container mx-auto p-4" >
            <slot />
        </div>
    </div>
</template>

<style scoped>

</style>