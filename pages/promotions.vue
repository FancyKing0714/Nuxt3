<script setup lang="ts">
import ActiveBonus from '~~/components/bonus/ActiveBonus.vue';
import AvailableBonus from '~~/components/bonus/AvailableBonus.vue';
import FreeSpins from '~~/components/bonus/FreeSpins.vue';
import Activity from '~~/components/landingPage/Activity.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
import auth from '~~/middleware/routerMiddleware.js';

definePageMeta({
  middleware: [auth]
});

const store = useStore();
const isDrawer = computed(() => {
    return ref(store.state.isDrawer);
});

</script>
<template>
    <q-page>
        <div
            style="max-width: 1450px"
            class="w-full px-0 md:px-6 lg:px-14 py-8 m-auto"
        >
            <section class="main h-full px-4">
                <div
                    class="bonus_baner w-full h-40 font-bold text-xl flex justify-center flex-col text-right"
                >
                    <div :class="['pr-12 md:pr-24 xl:pr-36', isDrawer.value?'lg:pr-6':'lg:pr-36']">
                        <p>
                            <span>DAILY CASHBACK OF UP TO</span>&nbsp;<span
                                style="color: #ffff03"
                                class="font-black text-5xl"
                                >20%</span
                            >
                        </p>
                        <p>
                            ONLY ON
                            <span style="color: #ffff03">EURPOE #1</span> ONLINE
                            CASINO
                        </p>
                    </div>
                </div>
                <AvailableBonus />
            </section>
            <section class="pt-8">
                <Activity />
            </section>
        </div>
    </q-page>
</template>
