export default {
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss'
    ],
    genarate: {
        target: 'static',
        routes: [
            '/blog',
            '/about',
            '/contact',
            '/portfolio',
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