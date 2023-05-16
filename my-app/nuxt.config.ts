export default {
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss'
    ],
    genarate: {
        target: 'static',
        routes: [
            '/new',
            '/blog/crazy',
            '/blog/pleasing',
            '/blog/wap.md',
            '/blog/why.md',
            'portfolio/mindReading'
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