import * as path from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // ssr: false,
    // add tailwindcss to the modules
    modules: [
        '@nuxtjs/tailwindcss', 
        'nuxt-quasar-ui',
    ],
    runtimeConfig: {
        public: {
          baseURL: 'https://beta.canada777.com',
        },
    },
    quasar: {
        plugins: [
            'BottomSheet',
            'Dialog',
            'Loading',
            'LoadingBar',
            'Notify',
            'Dark',
        ],
        extras: {
            font: 'roboto-font',
            fontIcons: ['material-icons'],
        },
    },
    css: ['@/assets/app.css'],
    resolve: {
        '@assets': '~/assets',
    },
});
