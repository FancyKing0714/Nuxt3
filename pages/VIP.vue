<script setup lang="ts">
import Activity from '~~/components/landingPage/Activity.vue';
import auth from '~~/middleware/routerMiddleware.js';

definePageMeta({
  middleware: [auth]
});
useHead({
      title: 'Canada777',
      meta: [
        {
          hid: 'VIP',
          name: 'VIP',
          content: `Elevate your gaming experience by joining our VIP program. As a valued member, you'll receive exclusive benefits, personalized rewards, and dedicated customer support. Enjoy special privileges and take your gameplay to the next level with our VIP club.`
        }
      ]
})
const torunamentList = [
    {
        img: 'gold.png',
        title: 'Drops & Wins',
        back_color:
            'background: linear-gradient(to right, #6A2407 0%, #984F37 50%, #52160C 100%)',
        content:
            'It’s a gift shower at Europa777! Drops & Wins Tournament Campaign is here from March 2 to April 6! Lose yourself in crazy winnings! Enjoy generous daily prize drops and weekly and daily tournaments with real cash prizes! In total, 40,000 prizes will be awarded every month! This is your time to get lucky! Join now!',
    },
    {
        img: 'silver.png',
        title: 'TOURNAMENT',
        back_color: 'background: linear-gradient(to right, #878787, #CBCBCB);',
        content:
            'Let the LOVE be your secret weapon and guide you through these sweet seven days of the tournament! An incredible lineup of games and an alluring prize pool will make you fall in love and win like an Ace!',
    },
    {
        img: 'gold.png',
        title: 'WEEKLY TOURNAMENT',
        back_color:
            'background-image: linear-gradient(to right, #906924 0%, #F5D54E 100%);',
        content:
            'Do you like surprises? You are on the right site! Meet our new slots tournament and make your week full of unbelievable moments, emotions ... and prizes!',
    },
    {
        img: 'silver.png',
        title: 'TOURNAMENT',
        back_color:
            'background: linear-gradient(to right, #E2E2E2 0%, #909090 100%, #909090 100%, #E2E2E2 100%);',
        content:
            'We can surprize anyone! Even our VIP players :) Take part in our weekly tournament and get such winnings you`ve never seen before!',
    },
];
</script>
<template>
    <q-page>
        <div
            style="max-width: 1450px"
            class="w-full px-0 md:px-6 lg:px-14 py-8 m-auto"
        >
            <section class="h-full px-4">
                <div class="text-center pb-8">
                    <p class="font-bold text-3xl">Europa777 TOURNAMENTS</p>
                    <p class="font-medium text-base">
                        Exciting Slot Competitions with Canada777. Get more
                        Points and Win!
                    </p>
                </div>
                <div class="grid md:grid-cols-2 gap-4">
                    <div
                        v-for="torunament in torunamentList"
                        class="text-center max-w-md mx-auto flex flex-col justify-between"
                    >
                        <div
                            style="
                                background: linear-gradient(
                                    to right,
                                    #026beb 0%,
                                    #0655de 50%,
                                    #0135ae 100%
                                );
                            "
                            class="rounded-xl"
                        >
                            <div class="text-shadow-lg">
                                <div
                                    class="rounded-t-xl"
                                    :style="torunament.back_color"
                                >
                                    <p class="text-3xl font-bold pt-4">
                                        {{ torunament?.title }}
                                    </p>
                                    <div
                                        class="flex items-center justify-center pb-2"
                                        style="border-bottom: 1px solid white"
                                    >
                                        <div
                                            style="
                                                border-right: 1px solid white;
                                            "
                                            class="flex flex-col justify-center px-3"
                                        >
                                            <p class="text-3xl font-bold">
                                                500
                                            </p>
                                            <p class="text-xs">Comp Points</p>
                                        </div>
                                        <div
                                            style="
                                                border-right: 1px solid white;
                                            "
                                            class="flex flex-col justify-center px-3"
                                        >
                                            <p class="text-3xl font-bold">5%</p>
                                            <p class="text-xs">
                                                Weekly Cashback
                                            </p>
                                        </div>
                                        <div
                                            class="flex flex-col justify-center px-3"
                                        >
                                            <p class="text-3xl font-bold">
                                                X45
                                            </p>
                                            <p class="text-xs">Wager</p>
                                        </div>
                                    </div>
                                    <div
                                        class="flex items-center justify-center py-2"
                                    >
                                        <p class="text-xs">Special Event</p>
                                        <div
                                            class="mx-2"
                                            style="
                                                width: 1px;
                                                background: white;
                                                height: 12px;
                                            "
                                        ></div>
                                        <p class="text-xs">VIP Tournament</p>
                                    </div>
                                </div>
                                    <img
                                        class="w-2/3 m-auto"
                                        :src="`/imgs/${torunament?.img}`"
                                        alt="turnaments"
                                    />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vip_banner h-72 lg:w-11/12 mt-12 mx-auto flex">
                    <div class="text-center w-full">
                        <div class="grid lg:grid-cols-2 h-full">
                            <div class="m-auto flex justify-center flex-col">
                                <p class="text-3xl font-bold pt-4">DIAMOND</p>
                                <div
                                    class="flex items-center justify-center pb-2"
                                    style="border-bottom: 1px solid white"
                                >
                                    <div
                                        style="border-right: 1px solid white"
                                        class="flex flex-col justify-center px-3"
                                    >
                                        <p class="text-3xl font-bold">500</p>
                                        <p class="text-xs">Comp Points</p>
                                    </div>
                                    <div
                                        style="border-right: 1px solid white"
                                        class="flex flex-col justify-center px-3"
                                    >
                                        <p class="text-3xl font-bold">5%</p>
                                        <p class="text-xs">Weekly Cashback</p>
                                    </div>
                                    <div
                                        class="flex flex-col justify-center px-3"
                                    >
                                        <p class="text-3xl font-bold">X45</p>
                                        <p class="text-xs">Wager</p>
                                    </div>
                                </div>
                                <div
                                    class="flex items-center justify-center py-2"
                                >
                                    <p class="text-xs">Special Event</p>
                                    <div
                                        class="mx-2"
                                        style="
                                            width: 1px;
                                            background: white;
                                            height: 12px;
                                        "
                                    ></div>
                                    <p class="text-xs">VIP Tournament</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="pt-8">
                <Activity />
            </section>
        </div>
    </q-page>
</template>
