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
        title: 'BRONZE',
        compoint: '500',
        weeklycashback:'5',
        wager:'45',
        back_color:
            'background: linear-gradient(to right, #6A2407 0%, #984F37 50%, #52160C 100%)',
    },
    {
        img: 'silver.png',
        title: 'SILVER',
        compoint: '1000',
        weeklycashback:'6',
        wager:'40',
        back_color: 'background: linear-gradient(to right, #878787, #CBCBCB);',
    },
    {
        img: 'gold.png',
        title: 'GOLD',
        compoint: '2000',
        weeklycashback:'7',
        wager:'35',
        back_color:
            'background: linear-gradient(to right, #906924 0%, #F5D54Edd 65%, #906924 100%);',
    },
    {
        img: 'silver.png',
        title: 'PLATINUM',
        compoint: '4000',
        weeklycashback:'8',
        wager:'30',
        back_color:
            'background: linear-gradient(to right, #2c6262 0%,  #142b2b 100%);',
    },
    {
        img: 'silver.png',
        title: 'DIAMOND',
        compoint: '5000',
        weeklycashback:'10',
        wager:'25',
        back_color:
            'background: linear-gradient(to right, #29173c 0%, #4c266e 100%);',
    },
];
</script>
<template>
    <q-page>
        <div
            style="max-width: 1450px"
            class=" px-4 md:px-6 lg:px-14 py-8 m-auto"
        >
            <section class="h-full px-3 sm:px-4">
                <div class="text-center pb-8">
                    <p class="font-semibold text-3xl lg:text-4xl 2xl:text-5xl py-5 mb-5">EUROPA 777 VIP</p>
                    <p class="font-medium text-md md:text-lg lg:text-xl 2xl:text-2xl w-full md:w-5/6 mx-auto">
                        Join our Europa777 VIP Team and become a member of the VIP Program! Play at our casino and have an opportunity to get our weekly cashback VIP package!
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-5">
                    <div
                        v-for="torunament in torunamentList"
                        class="text-center mx-auto flex flex-col justify-center"
                    >
                        <div
                            :style="torunament.back_color"
                            class="rounded-xl mx-auto w-full md:w-4/5 2xl:w-3/4 text-shadow-lg grid grid-cols-3"
                        >
                            <img
                                class="col-span-1 my-auto"
                                :src="`/imgs/${torunament?.img}`"
                                alt="turnaments"
                            />
                            <div
                                class="col-span-2 w-5/6 md:w-4/5 mx-auto flex flex-col justify-between"
                            >
                                    <p 
                                        class="text-2xl md:text-3xl xl:text-4xl font-bold py-2 md:py-4 xl:py-6"
                                        style='background: linear-gradient(to right, #44444400 0%, #44444466 20%, #444444aa 50%, #44444466 80%, #44444400 100%)'
                                    >
                                        {{ torunament?.title }}
                                    </p>
                                    <div
                                        class="flex items-center justify-around"
                                        style="border-bottom: 1px solid white"
                                    >
                                        <div
                                            class="flex flex-col justify-center py-2 md:py-4"
                                        >
                                            <p class="text-2xl md:text-3xl xl:text-4xl font-bold py-0 md:py-1 lg:py-2 xl:py-3">
                                                {{torunament?.compoint }}
                                            </p>
                                            <p class="text-xs md:text-sm xl:text-lg font-semibold md:font-bold">Comp</p>
                                            <p class="text-xs md:text-sm xl:text-lg font-semibold md:font-bold">Points</p>
                                        </div>
                                        <div
                                            class="flex flex-col justify-center py-2 md:py-4"
                                        >
                                            <p class="text-2xl md:text-3xl xl:text-4xl font-bold py-0 md:py-1 lg:py-2 xl:py-3">
                                                {{torunament?.weeklycashback }}%
                                            </p>
                                            <p class="text-xs md:text-sm xl:text-lg font-semibold md:font-bold">WEEKLY</p>
                                            <p class="text-xs md:text-sm xl:text-lg font-semibold md:font-bold">CASHBACK</p>
                                        </div>
                                        <div
                                            class="flex flex-col justify-center py-2 md:py-4"
                                        >
                                            <p class="text-2xl md:text-3xl xl:text-4xl font-bold py-0 md:py-1 lg:py-2 xl:py-3">
                                                X{{torunament?.wager }}
                                            </p>
                                            <p class="text-xs md:text-sm xl:text-lg font-semibold md:font-bold">WAGER</p>
                                            <p class="text-xs md:text-sm xl:text-lg font-semibold md:font-bold opacity-0">k</p>
                                        </div>
                                    </div>
                                    <div
                                        class="flex items-center justify-center my-2 md:my-5 lg:my-7 xl:my-9"
                                    >
                                        <p class="text-xxs md:text-sm xl:text-lg font-semibold md:font-bold mr-3 md:mr-5 lg:mr-7 xl:mr-10">Special Event</p>
                                        <div
                                            class="h-3 md:h-5 xl:h-7"
                                            style="
                                                width: 2px;
                                                background: #ffffff;
                                            "
                                        ></div>
                                        <p class="text-xxs md:text-sm xl:text-lg font-semibold md:font-bold ml-3 md:ml-5 lg:ml-7 xl:ml-10">VIP Tournament</p>
                                    </div>
                                    <div></div>
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
