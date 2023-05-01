<template>
    <div class="card h-screen">
    <head>
        <Title>Nuxt Dojo | {{product.title}}</Title>
        <meta name="description" :content="product.description">
    </head>
        <div>
        <img :src="product.image" class="thumb" >
        </div>
        <p class="products">{{product.title}}</p>
        <p class="products">{{product.price}}</p>
        <p>{{product.id}}</p>



    </div>


</template>

<script setup>

    const {id} = useRoute().params

    const uri = 'https://fakestoreapi.com/products/' + id;

    const {data: product} = await useFetch(uri);

    if (!product.value) {
        throw createError({statusCode: 404, message: 'product not found'})
    }



</script>

<style scoped>

    .thumb {
        max-height: 120px;
        max-width: 70%;
        margin: 0 auto;
    }
    
</style>