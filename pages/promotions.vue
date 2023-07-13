<script setup lang="ts">
import Promotions from '~~/components/bonus/Promotions.vue';
import Activity from '~~/components/landingPage/Activity.vue';
import { useStore } from 'vuex';
import { computed , onBeforeMount} from 'vue';
import auth from '~~/middleware/routerMiddleware.js';
import {getPromotion} from '~~/action/others';
import { tran } from "~~/utils/translation";

definePageMeta({
  middleware: [auth]
});
useHead({
      title: 'Canada777',
      meta: [
        {
          hid: 'Promotion',
          name: 'Promotion',
          content: 'Take advantage of our enticing promotions and boost your gaming experience. We offer a variety of bonuses, free spins, and special offers to enhance your chances of winning. Stay updated with our latest promotions and maximize your rewards as you enjoy your favorite games.'
        }
      ]
});
const store = useStore();
onBeforeMount(()=>{
    getPromotion(store);
});
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
                            <span
                                style="color: rgb(255, 255, 3)"
                                class="text-5xl lg:text-6xl"
                                >{{tran('Promotions', store.state.lang)}}</span
                            >
                        </p>
                        
                    </div>
                </div>
                <Promotions />
            </section>
            <section class="pt-8">
                <Activity />
            </section>
        </div>
    </q-page>
</template>
