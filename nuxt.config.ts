
import { NuxtConfig } from '@nuxt/types';
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
          API_KEY: '1TMplKctJPlF6U8PBnDK',
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
            fontIcons: [  
                'material-icons',
                'mdi-v7',
                'ionicons-v4', // last webfont was available in v4.6.3
                'eva-icons',
                'fontawesome-v6',
                'themify',
                'line-awesome',
                'bootstrap-icons'
            ],
        },
    },
    css: ['@/assets/app.css'],
    resolve: {
        '@assets': '~/assets',
    },
});
