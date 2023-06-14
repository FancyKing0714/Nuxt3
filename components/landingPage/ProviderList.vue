<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
interface ProviderInterface {
    logo: string;
    name: string;
}

defineProps({
    providers: {
        type: Array as () => ProviderInterface[],
        required: true,
    },
});
let swiperRef: any;

const onSwiper = (swiper: any) => {
    swiperRef = swiper;
};
const onSlideChange = () => {
};
</script>

<template>
    <div class="pt-4">
        <div style="background: #282b34" class="mx-4 p-4 rounded-lg">
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                    <img
                        class="w-4"
                        src="/imgs/sidebar/provider.png"
                        alt="hot"
                    />
                    <p class="font-bold text-lg pl-2">Providers</p>
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
                </div>
            </div>
            <Swiper
                ref="mySwiper"
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
                        slidesPerView: 4,
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
                <swiper-slide v-for="provider in providers">
                    <div
                        style="background: #4d5160"
                        class="h-14 w-full text-center rounded-2xl p-2"
                    >
                        <img
                            class="w-full h-full object-fill object-center"
                            alt="provider"
                            :src="provider?.logo ?? ''"
                        />
                    </div>
                </swiper-slide>
            </Swiper>
        </div>
    </div>
</template>
