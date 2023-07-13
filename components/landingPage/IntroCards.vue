<script setup lang="ts">
import { useStore } from 'vuex';
const store = useStore();
import { tran } from "~~/utils/translation";
const isDrawer = computed(() => {
    return ref(store.state.isDrawer);
});
</script>
<template>
    <div>
        <div class="relative mt-4">
            <div class="grid grid-cols-2 gap-1 sm:gap-3 md:gap-4 lg:gap-6">
                <div
                    class="flex items-center justify-between relative h-24 sm:h-auto"
                >
                    <div
                        class="w-1/2 absolute top-1/2 -translate-y-1/2 z-10 left-2 sm:left-8"
                    >
                        <p
                            :class="[
                                'font-bold text-sm leading-4 sm:text-sm md:text-xl xl:text-2xl text-shadow-lg',
                                isDrawer.value ? 'lg:text-xs' : 'lg:text-xl',
                            ]"
                        >
                        {{tran('BONUS WHEEL', store.state.lang)}}
                        </p>
                        <p
                            :class="[
                                'text-xxs sm:text-xxs md:text-xs xl:text-sm pb-0 sm:pb-2',
                                isDrawer.value ? 'lg:text-xxs' : 'lg:pb-4',
                            ]"
                        >
                        {{tran('Get free spin every 2 hours!', store.state.lang)}}
                        </p>
                        <q-btn size="xs" :label="tran('Free Spin', store.state.lang)"  @click="$router.push(linkTo('/wheel'))"/>
                    </div>
                    <q-img
                        class="h-full rounded-md"
                        src="/imgs/back_bonus.png"
                        spinner-color="primary"
                        alt="title"
                    />
                    <q-img
                        class="w-1/2 absolute right-0 sm:-bottom-3 rotate"
                        src="/imgs/sidebar/wheel.png"
                        spinner-color="primary"
                        spinner-size="24px"
                        alt="title"
                    />
                </div>

                <div
                    class="flex items-center justify-between relative h-24 sm:h-auto"
                >
                    <div
                        class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-2 sm:left-8"
                    >
                        <p
                            :class="[
                                'font-bold text-sm leading-4 md:text-xl  xl:text-2xl text-shadow-lg',
                                isDrawer.value ? 'lg:text-xs' : 'lg:text-xl',
                            ]"
                        >
                        {{tran('DAILY CASHBACK', store.state.lang)}}
                        </p>
                        <div class="flex items-center justify-start">
                            <p
                                :class="[
                                    'text-xxs md:text-xs  xl:text-sm pb-2',
                                    isDrawer.value
                                        ? 'lg:text-xxs'
                                        : 'pb-4 text-xs',
                                ]"
                            >
                            {{tran('UP TO', store.state.lang)}}
                            </p>
                            <p
                                style="color: #ffd62f"
                                :class="[
                                    'text-3xl md:text-5xl xl:text-6xl font-black pl-1',
                                    isDrawer.value
                                        ? 'lg:text-3xl'
                                        : 'lg:text-5xl',
                                ]"
                            >
                                20%
                            </p>
                        </div>
                    </div>
                    <q-img
                        class="h-full rounded-md"
                        src="/imgs/back_daily.png"
                        spinner-color="primary"
                        alt="title"
                    />
                    <q-img
                        class="w-1/2 absolute right-0 sm:-bottom-3"
                        src="/imgs/cash_back.png"
                        spinner-color="primary"
                        alt="title"
                    />
                </div>
            </div>

            <div class="hidden md:!grid grid-cols-3 gap-10 lg:gap-6 pt-6">
                <div class="flex items-center justify-between relative">
                    <div
                        class="w-1/2 absolute top-1/2 -translate-y-1/2 z-10 left-8"
                    >
                        <p
                            style="line-height: 19px"
                            :class="[
                                'font-bold text-base xl:text-base text-shadow-lg',
                                isDrawer.value ? 'lg:text-xs' : '',
                            ]"
                        >
                            2nd/3rd
                        </p>
                        <p
                            style="line-height: 19px"
                            :class="[
                                'font-bold text-base xl:text-base text-shadow-lg',
                                isDrawer.value ? 'lg:text-md' : '',
                            ]"
                        >
                        {{tran('deposit', store.state.lang)}}
                        </p>
                        <p
                            :class="[
                                'gradiant text-2xl xl:text-2xl font-black',
                                isDrawer.value ? 'lg:text-base' : '',
                            ]"
                        >
                            100%
                        </p>
                        <p
                            :class="[
                                'gradiant text-2xl xl:text-2xl font-black',
                                isDrawer.value ? 'lg:text-base' : '',
                            ]"
                        >
                        {{tran('bonus', store.state.lang)}}
                        </p>
                    </div>
                    <q-img
                        src="/imgs/back_dark.png"
                        spinner-color="primary"
                        alt="title"
                    />
                    <q-img
                        class="w-1/2 absolute right-0"
                        src="/imgs/promotion.png"
                        spinner-color="primary"
                        spinner-size="24px"
                        alt="title"
                    />
                </div>

                <div class="flex items-center justify-around relative">
                    <div
                        class="w-full absolute left-8 top-8 md:top-3 md:left-3 lg:left-3 lg:top-3 z-10"
                    >
                        <p
                            :class="[
                                'gradiant text-2xl md:text-lg xl:text-2xl font-black',
                                isDrawer.value ? 'lg:text-base' : 'lg:text-2xl',
                            ]"
                        >
                        {{tran('WELCOME BONUS', store.state.lang)}}
                        </p>
                    </div>
                    <div class="absolute z-10 right-8 lg:right-3">
                        <p
                            :class="[
                                'gradiant text-2xl md:text-lg  xl:text-2xl font-black',
                                isDrawer.value
                                    ? 'lg:text-base lg:pt-2'
                                    : 'lg:text-2xl',
                            ]"
                        >
                            200%
                        </p>
                        <div class="flex items-center">
                            <p
                                style="line-height: 19px"
                                :class="[
                                    'gradiant text-2xl md:text-lg xl:text-2xl font-black',
                                    isDrawer.value
                                        ? 'lg:text-base'
                                        : 'lg:text-2xl',
                                ]"
                            >
                                +100
                            </p>
                            <p :class="[isDrawer.value ? 'lg:text-xs' : '']">
                                {{tran('Free Spins', store.state.lang)}}
                            </p>
                        </div>
                    </div>
                    <q-img
                        src="/imgs/back_dark.png"
                        spinner-color="primary"
                        alt="title"
                    />
                    <q-img
                        class="w-1/2 absolute left-0 bottom-0"
                        src="/imgs/pack.png"
                        spinner-color="primary"
                        spinner-size="24px"
                        alt="title"
                    />
                </div>

                <div class="flex items-center justify-between relative">
                    <div
                        class="w-1/2 absolute top-1/2 -translate-y-1/2 z-10 left-8"
                    >
                        <p class="text-xs">{{tran('Take Advantage', store.state.lang)}}</p>
                        <p class="font-bold text-base text-shadow-lg">
                            {{tran('Exclusif bonus', store.state.lang)}}
                        </p>
                        <p class="gradiant text-lg font-black">{{tran('VIP Program', store.state.lang)}}</p>
                    </div>
                    <q-img
                        src="/imgs/back_dark.png"
                        spinner-color="primary"
                        alt="title"
                    />
                    <q-img
                        class="w-1/2 absolute right-0"
                        src="/imgs/sportbook.png"
                        spinner-color="primary"
                        spinner-size="24px"
                        alt="title"
                    />
                </div>
            </div>
        </div>
        <div></div>
    </div>
</template>
