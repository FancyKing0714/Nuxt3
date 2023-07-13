<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const providerImage = ref();
const store = useStore();
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
const providerSelectd = (provider) => {
    store.commit('handleOnSearchDialog', {a:true, b:provider});
}
const handleImageError = (index: number) => {
    // console.log(https://beta.canada777.com/casino-provider/am-light.png);
    // console.log(providerImage.value[index]?.src);
    if (providerImage.value[index]?.src) {
        providerImage.value[index].src = 'https://beta.canada777.com/casino-provider/am-light.png'
    }
    
}
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
                    <p class="font-bold text-lg pl-2">{{tran('Providers', store.state.lang)}}</p>
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
                :slides-per-view="2"
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
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    '1024': {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    '1444': {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                }"
            >
                <swiper-slide v-for="(provider, index) in providers">
                    <div
                        style="background: #4d5160"
                        class="h-10 md:h-12 lg:h-14 xl:h-16 w-full flex justify-center text-center rounded-2xl p-2"
                        @click="providerSelectd(provider?.name)"
                    >
                        <img
                            class="h-full object-fill object-center"
                            alt="provider"
                            :src="provider?.logo ?? ''"
                            @error="handleImageError(index)"
                            ref="providerImage"
                            :id="index"
                        />
                    </div>
                </swiper-slide>
            </Swiper>
        </div>
    </div>
</template>
