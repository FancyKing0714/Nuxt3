<script setup lang="ts">
import Activity from '~~/components/landingPage/Activity.vue';
import auth from '~~/middleware/routerMiddleware.js';

definePageMeta({
  middleware: [auth]
});

const torunamentList = [
    {
        img: 'tournaments1.png',
        title: 'Drops & Wins',
        content:
            'It’s a gift shower at Europa777! Drops & Wins Tournament Campaign is here from March 2 to April 6! Lose yourself in crazy winnings! Enjoy generous daily prize drops and weekly and daily tournaments with real cash prizes! In total, 40,000 prizes will be awarded every month! This is your time to get lucky! Join now!',
    },
    {
        img: 'tournaments2.png',
        title: 'TOURNAMENT',
        content:
            'Let the LOVE be your secret weapon and guide you through these sweet seven days of the tournament! An incredible lineup of games and an alluring prize pool will make you fall in love and win like an Ace!',
    },
    {
        img: 'tournaments3.png',
        title: 'WEEKLY TOURNAMENT',
        content:
            'Do you like surprises? You are on the right site! Meet our new slots tournament and make your week full of unbelievable moments, emotions ... and prizes!',
    },
    {
        img: 'tournaments4.png',
        title: 'TOURNAMENT',
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
                        class="text-center max-w-md mx-auto"
                    >
                        <div class="tournament_card rounded-xl">
                            <div class="text-shadow-lg">
                                <p class="text-3xl font-bold pt-4">
                                    {{ torunament?.title }}
                                </p>
                                <p
                                    class="text-3xl font-bold"
                                    style="color: #ffff03"
                                >
                                    1,000,000 €/$
                                </p>
                                <p class="text-xs font-medium pt-3">
                                    Completed in
                                </p>
                                <div
                                    class="flex items-center justify-center pb-4"
                                >
                                    <div
                                        style="
                                            color: #ffff03;
                                            border-right: 1px solid white;
                                        "
                                        class="flex flex-col justify-center px-3"
                                    >
                                        <p class="text-3xl font-bold">13</p>
                                        <p class="text-xs">Days</p>
                                    </div>
                                    <div
                                        style="border-right: 1px solid white"
                                        class="flex flex-col justify-center px-3"
                                    >
                                        <p class="text-3xl font-bold">15</p>
                                        <p class="text-xs">Hours</p>
                                    </div>
                                    <div
                                        style="border-right: 1px solid white"
                                        class="flex flex-col justify-center px-3"
                                    >
                                        <p class="text-3xl font-bold">24</p>
                                        <p class="text-xs">Minutes</p>
                                    </div>
                                    <div
                                        class="flex flex-col justify-center px-3"
                                    >
                                        <p class="text-3xl font-bold">16</p>
                                        <p class="text-xs">Seconds</p>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <img
                                        class="w-full"
                                        :src="`/imgs/${torunament?.img}`"
                                        alt="turnaments"
                                    />
                                </div>
                                <p style="min-height: 124px;" class="text-xs pt-6 pb-3 px-3">
                                    {{ torunament?.content }}
                                </p>
                            </div>
                        </div>
                        <q-btn
                            class="px-4 mt-4"
                            color="primary"
                            label="Read More"
                        />
                    </div>
                </div>
            </section>
            <section class="pt-8">
                <Activity />
            </section>
        </div>
    </q-page>
</template>
