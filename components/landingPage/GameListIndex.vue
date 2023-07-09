<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { useStore } from 'vuex';
import {useRouter , useRoute} from 'vue-router';
import {changeTitle} from '~~/utils/string';
import { addFavoriteGameById , removeFavoriteGameById } from '~~/action/game';

const router = useRouter();
const route = useRoute();
const store = useStore();
const play = (demo, slug) =>{
    store.commit('handleGamePlayMode',demo);
    router.push(linkTo(`/play/${slug}`));
};

let focusgame = ref("");
const handleFocusGame = (id) => {
    focusgame.value = id;
};

defineProps({
    game: {
        type: Object,
    },
});

const onFavorite = (id, slug) => {
    if(store.state.favoriteGameSlugList.includes(slug))
        removeFavoriteGameById(store, id, slug, route.query?.tab);
    else
        addFavoriteGameById(store, id, slug);
}

let swiperRef: any;
const onSwiper = (swiper: any) => {
    swiperRef = swiper;
};
const onSlideChange = () => {
};
useHead({
      title: 'Games',
      meta: [
        {
          hid: 'Games',
          name: 'Games',
          content: 'Discover a diverse collection of captivating games at our platform. From thrilling slot games that offer immersive experiences to live games that bring the casino atmosphere to your screen, we have something for everyone. Get ready to embark on an unforgettable gaming journey filled with excitement and big wins.'
        }
      ]
});
const imgurl = "/imgs/noGameImg.png";
</script>

<template>
    <div class="pt-4">
        <div class="px-4">
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                    <img class="w-4" :src="`/imgs/sidebar/${game?.title}.png`" alt="hot" />
                    <p class="font-bold text-lg pl-2">{{ changeTitle(game?.title) }}</p>
                </div>
                <div>
                    <q-btn
                        @click="swiperRef.slidePrev()"
                        ref="prevBtn"
                        size="sm"
                        style="background: #3f4655"
                    >
                        <img
                            class="w-2"
                            src="/imgs/left.png"
                            alt="left"
                        />
                    </q-btn>

                    <q-btn
                        @click="swiperRef.slideNext()"
                        ref="nextBtn"
                        class="mx-2"
                        size="sm"
                        style="background: #3f4655"
                    >
                        <img
                            class="w-2"
                            src="/imgs/right.png"
                            alt="right"
                        />
                    </q-btn>

                    <q-btn
                        ref="seeAll"
                        size="sm"
                        style="background: #3f4655"
                        label="See all"
                    />
                </div>
            </div>
            <Swiper
                :slides-per-view="1"
                :space-between="10"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :loop="true"
                :autoplay="{
                    delay: 2500,
                    disableOnInteraction: true,
                }"
                :breakpoints="{
                    '320': {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    '640': {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    '820': {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    '1035': {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    '1240': {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    '1440': {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }"
            >
                <swiper-slide class="hidden md:!block" v-for="gameItem in game?.list">
                    <div class="group">
                        <div class="relative rounded-lg">
                            <img :src="gameItem?.image?gameItem?.image:imgurl" class="relative rounded-lg z-[1]"/>
                            <div class="absolute opacity-0 group-hover:opacity-100 w-full h-full z-[2] top-0 left-0 rounded-lg bg-gray-900 bg-opacity-80 transition ease-in-out duration-300" >
                                <div class="absolute w-full h-full" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                    <q-btn
                                        text-color=white
                                        style="border-radius: 50%; background-color:red; padding: 5px; margin-bottom: 5px;"
                                        @click="play(0, gameItem.slug)"
                                    >
                                        <q-icon name="play_arrow" size="lg" />
                                    </q-btn>
                                    <q-btn
                                        v-if="gameItem?.demo == 1"
                                        text-color=white
                                        padding="1px 10px"
                                        label="Demo"
                                        style="font-size: x-small; border-radius: 10%; background-color:transparent;border: white 2px solid;"
                                        @click="play(1, gameItem.slug)"
                                    />
                                </div>
                                <q-btn
                                    text-color=yellow
                                    padding="0px"
                                    class="absolute top-2 right-2"
                                    style="background-color: transparent;"
                                    @click="onFavorite(gameItem?.id, gameItem.slug)"
                                >
                                    <q-icon v-if="store.state.favoriteGameSlugList.includes(gameItem?.slug)" name="star" size="xs" />
                                    <q-icon v-if="!store.state.favoriteGameSlugList.includes(gameItem?.slug)" name="star_border" size="xs" />
                                </q-btn>
                            </div>
                        </div>
                        <p
                            class="text-center text-white text-[11px] group-hover:text-[12px] p-2"
                        >
                            {{ gameItem?.name }}
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide class="md:!hidden" v-for="gameItem in game?.list">
                    <div>
                        <div class="group relative rounded-lg" @click="handleFocusGame(gameItem.id)">
                            <img :src="gameItem?.image?gameItem?.image:imgurl" class="relative rounded-lg z-[1]"/>
                            <div class="absolute z-[2] w-full h-full top-0 left-0 rounded-lg bg-gray-900 bg-opacity-80 opacity-0 duration-300 " :class="(focusgame==gameItem.id)&&'opacity-100'" >
                                <div class="absolute w-full h-full flex flex-col justify-center items-center">
                                    <q-btn
                                        text-color=white
                                        style="border-radius: 50%; background-color:red; padding: 5px; margin-bottom: 5px;"
                                        @click="play(0, gameItem.slug)"
                                    >
                                        <q-icon name="play_arrow" size="lg" />
                                    </q-btn>
                                    <q-btn
                                        v-if="gameItem?.demo == 1"
                                        text-color=white
                                        padding="1px 10px"
                                        label="Demo"
                                        style="font-size: x-small; border-radius: 10%; background-color:transparent;border: white 2px solid;"
                                        @click="play(1, gameItem.slug)"
                                    />
                                </div>
                                <q-btn
                                    text-color=yellow
                                    padding="0px"
                                    class="absolute top-2 right-2"
                                    style="background-color: transparent;"
                                    @click="onFavorite(gameItem?.id, gameItem.slug)"
                                >
                                    <q-icon v-if="store.state.favoriteGameSlugList.includes(gameItem?.slug)" name="star" size="xs" />
                                    <q-icon v-if="!store.state.favoriteGameSlugList.includes(gameItem?.slug)" name="star_border" size="xs" />
                                </q-btn>
                            </div>
                            <div class="absolute z-[3] w-full h-full top-0 left-0 rounded-lg" v-if="focusgame!=gameItem.id"></div>
                        </div>
                        <p
                            class="text-center gametext p-2"
                        >
                            {{ gameItem?.name }}
                        </p>
                    </div>
                </swiper-slide>
            </Swiper>
        </div>
    </div>
</template>

