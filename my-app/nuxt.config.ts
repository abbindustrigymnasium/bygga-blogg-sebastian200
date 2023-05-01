export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss'
    ],
    genarate: {
        routes: [

        ]

    },
    app: {
        head: {
            title: 'kallekula',
            meta: [
                { name: 'description', content: 'everything' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://content.nuxtjs.org/guide/writing/mdc/' }
            ]
        }
    },
    css: ['~/assets/css/tailwind.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

})