<script setup lang="ts">
    import { ref } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import {linkTo} from "~~/utils/link";
    import 'swiper/swiper-bundle.css';

    let fullScreenState = ref(false);
    const switchFullScreen = (value) => {
        fullScreenState.value = value;
    }

    let playtoggle = ref(true);
    const toggleChange = (value) => {
        playtoggle.value = value;
    }

    let swiperRef: any;
    const onSwiper = (swiper: any) => { 
        swiperRef = swiper;
    };
    const gamelist =[
        {
            name:"slotsGame",
            image: "https://statics.betfury.io/promotionsImages/image16861322190145281799845@1x.avif",
            demo: 1,
        },
        {
            name:"slotsGame",
            image: "https://statics.betfury.io/promotionsImages/image16861322190145281799845@1x.avif",
            demo: 1,
        },
        {
            name:"slotsGame",
            image: "https://statics.betfury.io/promotionsImages/image16861322190145281799845@1x.avif",
            demo: 1,
        },
        {
            name:"slotsGame",
            image: "https://statics.betfury.io/promotionsImages/image16861322190145281799845@1x.avif",
            demo: 1,
        },
        {
            name:"slotsGame",
            image: "https://statics.betfury.io/promotionsImages/image16861322190145281799845@1x.avif",
            demo: 1,
        },
        {
            name:"slotsGame",
            image: "https://statics.betfury.io/promotionsImages/image16861322190145281799845@1x.avif",
            demo: 1,
        },
        {
            name:"slotsGame",
            image: "https://statics.betfury.io/promotionsImages/image16861322190145281799845@1x.avif",
            demo: 1,
        },
    ];
</script>
<template>
    <div class="absolute top-0 left-0 w-screen h-screen z-[2000]" :class="!fullScreenState&&'xl:relative xl:max-w-5xl 2xl:relative 2xl:max-w-7xl xl:p-5 m-auto xl:h-fit'">
        <!-- title and path -->
        <div class ="hidden" :class="!fullScreenState&&'xl:!block'">
            <div class="py-5 flex flex-row">
                <p class="text-xs text-gray-500 hover:text-white cursor-pointer font-medium">Europe777</p>
                <p class="text-sm text-gray-500 px-2 font-medium"> > </p>
                <p class="text-xs text-gray-500 hover:text-white cursor-pointer font-medium">All Games</p>
                <p class="text-sm text-gray-500 px-2 font-medium"> > </p>
                <p class="text-xs text-gray-500 hover:text-white cursor-pointer font-medium">Slots</p>
                <p class="text-sm text-gray-500 px-2 font-medium"> > </p>
                <p class="text-xs text-gray-500 hover:text-white cursor-pointer font-medium">3 Oaks</p>
                <p class="text-sm text-gray-500 px-2 font-medium"> > </p>
                <p class="text-sm font-medium">Sticky Piggy</p>
            </div>
        </div>
        <!-- desktop close button -->
        <div :class="fullScreenState?'hidden xl:!block absolute top-4 right-4 z-[2001]':'hidden'">
            <div class="bg-gray-700 p-3 ml-1 rounded-full hover:cursor-pointer hover:bg-gray-800" @click="switchFullScreen(false)">
                <q-icon name="close" color="red" size="sm"/>
            </div>
        </div>
        <!-- mobile close button -->
        <div class="block absolute top-4 right-4 z-[2001] xl:!hidden ">
            <div class="bg-gray-700 p-3 ml-1 rounded-full hover:cursor-pointer hover:bg-gray-800" @click="$router.push(linkTo('/casino'))">
                <q-icon name="close" color="red" size="sm"/>
            </div>
        </div>
        <!-- game frame -->
        <div class="relative w-full h-full" :class="!fullScreenState&&'xl:my-2 xl:h-[750px]'">
            <iframe class="w-full h-full" :class="!fullScreenState&&'xl:rounded-2xl'" src="https://w3school.com/" frameborder="0" allowfullscreen></iframe>
            <div class="absolute w-full h-full left-0 top-0 bg-gray-700 opacity-90 flex items-center justify-center" :class="!fullScreenState&&'xl:rounded-2xl'">
                <q-btn class="font-bold text-2xl sm:px-6 !py-0" color="primary" unelevated label="SIGN UP" />
            </div>
        </div>
        <!-- game name, property, recommended game -->
        <div class="hidden" :class="!fullScreenState&&'xl:!block'">
            <div class="flex flex-row justify-between py-2">
                <div class="flex flex-row">
                    <div class="bg-gray-700 p-3 mr-1 rounded-xl hover:cursor-pointer hover:bg-gray-800" @click="$router.push(linkTo('/casino'))">
                        <q-icon name="close" size="sm"/>
                    </div>
                    <div class="bg-gray-700 p-3 ml-1 rounded-xl hover:cursor-pointer hover:bg-gray-800" @click="switchFullScreen(true)">
                        <q-icon name="fullscreen" size="sm" />
                    </div>
                </div>
                <div class="flex flex-row items-center">
                    <p class="text-sm font-semibold text-gray-500" :class="!playtoggle && 'text-white'">Real Play</p>
                    <q-toggle v-model="playtoggle" @input="toggleChange"/>
                    <p class="text-sm font-semibold text-gray-500" :class="!!playtoggle && 'text-white'">Fun Play</p>
                </div>
            </div>
            <p class="text-2xl font-bold mt-5">Sticky Piggy</p>
            <div class="flex flex-row py-4">
                <q-img class="w-6 h-6 bg-cover" src="/imgs/sidebar/games.png" alt="deposit" />
                <p class="text-gray-500 text-lg font-medium pl-2">Basic slot information</p>
            </div>
            <div class="flex tracking-tighter">
                <div class=" w-1/4 pr-1">
                    <div class="w-full rounded-2xl bg-gray-800 p-4 ">
                        <div class="flex flex-row">
                            <p class="w-3/5 text-sm text-gray-300 font-semibold py-1">Software:</p>
                            <p class="w-2/5 text-sm text-gray-300 font-semibold py-1">provider</p>
                        </div>
                        <div class="flex flex-row">
                            <p class="w-3/5 text-sm text-gray-300 font-semibold py-1">RTP:</p>
                            <p class="w-2/5 text-sm text-gray-300 font-semibold py-1">87%</p>
                        </div>
                        <div class="flex flex-row">
                            <p class="w-3/5 text-sm text-gray-300 font-semibold py-1">Volatility:</p>
                            <p class="w-2/5 text-sm text-gray-300 font-semibold py-1">-</p>
                        </div>
                        <div class="flex flex-row">
                            <p class="w-3/5 text-sm text-gray-300 font-semibold py-1">Theme:</p>
                            <p class="w-2/5 text-sm text-gray-300 font-semibold py-1">-</p>
                        </div>
                    </div>
                </div>
                <div class=" w-1/4 px-1">
                    <div class="w-full rounded-2xl bg-gray-800 p-4 ">
                        <div class="flex flex-row">
                            <p class="w-3/5 text-sm text-gray-300 font-semibold py-1">Reels:</p>
                            <p class="w-2/5 text-sm text-gray-300 font-semibold py-1">-</p>
                        </div>
                        <div class="flex flex-row">
                            <p class="w-3/5 text-sm text-gray-300 font-semibold py-1">Rows:</p>
                            <p class="w-2/5 text-sm text-gray-300 font-semibold py-1">-</p>
                        </div>
                        <div class="flex flex-row">
                            <p class="w-3/5 text-sm text-gray-300 font-semibold py-1">Paylines:</p>
                            <p class="w-2/5 text-sm text-gray-300 font-semibold py-1">-</p>
                        </div>
                        <div class="flex flex-row">
                            <p class="w-3/5 text-sm text-gray-300 font-semibold py-1">Adjust Paylines:</p>
                            <p class="w-2/5 text-sm text-gray-300 font-semibold py-1">-</p>
                        </div>
                    </div>
                </div>
                <div class=" w-1/4 px-1">
                    <div class="w-full rounded-2xl bg-gray-800 p-4 ">
                        <div class="flex flex-row">
                            <p class="w-3/5 text-sm text-gray-300 font-semibold py-1">Min. Bet:</p>
                            <p class="w-2/5 text-sm text-gray-300 font-semibold py-1">-</p>
                        </div>
                        <div class="flex flex-row">
                            <p class="w-3/5 text-sm text-gray-300 font-semibold py-1">Max. Bet:</p>
                            <p class="w-2/5 text-sm text-gray-300 font-semibold py-1">-</p>
                        </div>
                        <div class="flex flex-row">
                            <p class="w-3/5 text-sm text-gray-300 font-semibold py-1">Autoplay:</p>
                            <p class="w-2/5 text-sm text-gray-300 font-semibold py-1">-</p>
                        </div>
                        <div class="flex flex-row">
                            <p class="w-3/5 text-sm text-gray-300 font-semibold py-1">Mobile:</p>
                            <p class="w-2/5 text-sm text-gray-300 font-semibold py-1">-</p>
                        </div>
                    </div>
                </div>
                <div class=" w-1/4 pl-1">
                    <div class="w-full rounded-2xl bg-gray-800 p-4 ">
                        <div class="flex flex-row">
                            <p class="w-3/5 text-sm text-gray-300 font-semibold py-1">Wild Symbol:</p>
                            <p class="w-2/5 text-sm text-gray-300 font-semibold py-1">-</p>
                        </div>
                        <div class="flex flex-row">
                            <p class="w-3/5 text-sm text-gray-300 font-semibold py-1">Scatter Symbol:</p>
                            <p class="w-2/5 text-sm text-gray-300 font-semibold py-1">-</p>
                        </div>
                        <div class="flex flex-row">
                            <p class="w-3/5 text-sm text-gray-300 font-semibold py-1">Bonus Game:</p>
                            <p class="w-2/5 text-sm text-gray-300 font-semibold py-1">-</p>
                        </div>
                        <div class="flex flex-row">
                            <p class="w-3/5 text-sm text-gray-300 font-semibold py-1">Free Spins:</p>
                            <p class="w-2/5 text-sm text-gray-300 font-semibold py-1">-</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between my-4">
                <div class="flex items-center">
                    <img class="w-6" src="/imgs/sidebar/games.png" alt="hot" />
                    <p class="text-gray-500 text-lg font-medium pl-2">Recommended 3 Oaks (Booongo) Slots</p>
                </div>
                <div>
                    <q-btn @click="swiperRef.slidePrev()" ref="prevBtn" size="sm" style="background: #3f4655" >
                        <img class="w-2" src="/imgs/left.png" alt="left" />
                    </q-btn>
                    <q-btn @click="swiperRef.slideNext()" ref="nextBtn" class="mx-2" size="sm" style="background: #3f4655" >
                        <img class="w-2" src="/imgs/right.png" alt="right" />
                    </q-btn>
                    <q-btn ref="seeAll" size="sm" style="background: #3f4655" label="See all" />
                </div>
            </div>
            <Swiper :slides-per-view="4" :space-between="10" @swiper="onSwiper" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: true, }" >
                <swiper-slide v-for="gameItem in gamelist">
                    <div class="container">
                        <div class="container">
                            <img :src="gameItem?.image" class="img"/>
                            <div class="btnDiv" >
                                <div class="play-demo" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                    <q-btn text-color=white style="border-radius: 50%; background-color:red; padding: 5px; margin-bottom: 5px;" >
                                        <q-icon name="play_arrow" size="lg" />
                                    </q-btn>
                                    <q-btn v-if="gameItem?.demo == 1" text-color=white padding="1px 10px" label="Demo" style="font-size: x-small; border-radius: 10%; background-color:transparent;border: white 2px solid;" />
                                </div>
                                <q-btn text-color=yellow padding="0px" class="star-icon" style="background-color: transparent;" >
                                    <q-icon name="star_border" size="xs" />
                                </q-btn>
                            </div>
                        </div>
                        <p class="text-center gametext p-2" >
                            {{ gameItem?.name }}
                        </p>
                    </div>
                </swiper-slide>
            </Swiper>
        </div>
    </div>
</template>
<style>
.card{
    position: relative;
}
.container{
    position: relative;
    border-radius: 10px;
}
.img {
    position: relative;
    border-radius: 10px;
    z-index: 1;
}
.play-demo{
  position: absolute;
  width: 100%;
  height: 100%;
}
.star-icon{
    position: absolute;
    top:7px;
    right:7px;
}
.btnDiv{
    opacity: 0;
    position:absolute;
    z-index: 2;
    width: 100%;
    height:100%;
    top: 0;
    left: 0;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.8);
    transition: .3s;
}
.container:hover .btnDiv{
    opacity: 1;
}
.gametext{
    font-size: 11px;
    color: white;
}
.container:hover .gametext{
    color:white;
    font-size:12px;
}
</style>

