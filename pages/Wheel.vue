<script setup lang="ts">
import {ref , watch, onBeforeMount } from 'vue'
import Activity from '~~/components/landingPage/Activity.vue';
import auth from '~~/middleware/routerMiddleware.js';
import {useStore} from 'vuex';

definePageMeta({
  middleware: [auth]
});
useHead({
      title: 'Canada777',
      meta: [
        {
          hid: 'Wheel Bonus',
          name: 'Wheel Bonus',
          content: 'Spin the wheel and unlock incredible rewards! Our Wheel Bonus feature offers a chance to win exciting prizes, such as free spins, cashback, bonus funds, and more. Test your luck and see what fortune has in store for you on the spinning wheel.'
        }
      ]
});
const store = useStore();
let h = ref(0);
let m = ref(0);
let s = ref(0);
let time =ref(0) ;
onBeforeMount(()=>{
    time.value = store.state.remainingTime;
    let timer = setInterval(() => {
        time.value = time.value - 1;
        h.value = Math.floor(time.value / 3600);
        let tmp = time.value % 3600;
        m.value = Math.floor(tmp / 60);
        s.value = tmp % 60;
        if(time.value == 0)
            clearInterval(timer);
    }, 1000);
})
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
                    <BonusLuckyWheel v-bind:time="time"/> 
                    <div 
                        class="flex flex-row justify-center mt-7"
                        v-if="time>0"
                    >
                        <p class="text-xl font-bold mr-2">Next Spin Available in : </p>
                        <p class="text-xl font-bold">{{ h }} h {{ m }} m {{ s }} s</p>
                    </div>
                    <div 
                        class="flex flex-row justify-center mt-7"
                        v-if="time==0"
                    >
                        <p class="text-xl font-bold">Free Spin Is Available Now</p>
                    </div>
                </div>
            </section>
            <section class="pt-8">
                <Activity />
            </section>
        </div>
    </q-page>
</template>
