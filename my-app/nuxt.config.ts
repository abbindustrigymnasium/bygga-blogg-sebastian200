export default {
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss'
    ],
    genarate: {
        target: 'static',
        routes: [
            '/content/new',
            'content/blog/crazy',
            'content/blog/pleasing',
            'content/blog/wap.md',
            'content/blog/why.md'
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

}