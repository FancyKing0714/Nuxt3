<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { useStore } from 'vuex';
import {useRouter} from 'vue-router';

const router = useRouter();
const store = useStore();
const play = (demo, name, slug) =>{
    console.log(demo);
    
    store.commit('handleGamePlayMode',demo);
    store.commit('handleGameName',name);
    router.push(linkTo(`/play/${slug}`));
};
defineProps({
    game: {
        type: Object,
    },
});
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
                    <p class="font-bold text-lg pl-2">{{ game?.title }}</p>
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
                :slides-per-view="6"
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
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    '640': {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    '768': {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    '1024': {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                }"
            >
                <swiper-slide v-for="gameItem in game?.list">
                    <div class="container">
                        <div class="container">
                            <img :src="gameItem?.image?gameItem?.image:imgurl" class="img"/>
                            <div class="btnDiv" >
                                <div class="play-demo" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                    <q-btn
                                        text-color=white
                                        style="border-radius: 50%; background-color:red; padding: 5px; margin-bottom: 5px;"
                                        @click="play(0,gameItem.name, gameItem.slug)"
                                    >
                                        <q-icon name="play_arrow" size="lg" />
                                    </q-btn>
                                    <q-btn
                                        v-if="gameItem?.demo == 1"
                                        text-color=white
                                        padding="1px 10px"
                                        label="Demo"
                                        style="font-size: x-small; border-radius: 10%; background-color:transparent;border: white 2px solid;"
                                        @click="play(1,gameItem.name, gameItem.slug)"
                                    />
                                </div>
                                <q-btn
                                    text-color=yellow
                                    padding="0px"
                                    class="star-icon"
                                    style="background-color: transparent;"
                                >
                                    <q-icon name="star_border" size="xs" />
                                </q-btn>
                            </div>
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

