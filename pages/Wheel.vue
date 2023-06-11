<script setup lang="ts">
import Activity from '~~/components/landingPage/Activity.vue';
import auth from '~~/middleware/routerMiddleware.js';

definePageMeta({
  middleware: [auth]
});

</script>
<template>
    <q-page>
        <div
            style="max-width: 1450px"
            class="w-full px-0 md:px-6 lg:px-14 py-8 m-auto"
        >
            <section class="h-full py-12 px-4 flex justify-center flex-col">
                <div class="relative">
                    <img
                        class="w-12 absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
                        src="/imgs/wheel/wheel_spin.png"
                        alt="spin"
                    />
                    <LuckyWheel />
                </div>
            </section>
            <section class="pt-8">
                <Activity />
            </section>
        </div>
    </q-page>
</template>
