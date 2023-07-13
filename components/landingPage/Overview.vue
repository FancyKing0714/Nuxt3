<script setup lang="ts">
import { fillFieldNames } from 'ant-design-vue/lib/vc-cascader/utils/commonUtil';
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
</script>

<template>
    <div class="relative pb-0 sm:pb-16 w-full ">
        <div class="z-[2000]">
            <div class="sm:hidden">
                <div class="relative flex flex-col items-end">
                    <div class="absolute left-0 top-2">
                        <p
                            v-if="store.state.isLogin === true"
                            class="font-bold text-3xl pl-3 hidden md:!block"
                        >
                        {{tran('Welcome', store.state.lang)}} {{ store.state.User.first_name }} {{ store.state.User.last_name }}
                        </p>
                        <img
                            class="md:max-w-sm sm:max-w-xs w-48 sm:w-auto"
                            src="/imgs/logo_full.png"
                            alt="logo"
                        />
                        <p class="font-bold md:text-3xl text-2xl pl-3">{{tran('# 1 Online casino', store.state.lang)}}</p>
                        <p class="font-bold text-2xl pl-3 pt-3">{{tran('welcome bonus', store.state.lang)}}</p>
                        <div 
                            class="flex felx-row pl-3 "
                        >
                            <q-icon name="euro" class="text-[48px] md:text-[72px] text-bold" style="color: #fff004"/>
                            <span
                                class="font-black font-bold text-5xl md:text-7xl"
                                style="color: #fff004"
                                >1800</span
                            >
                        </div>
                        <p
                            style="color: #fff004;"
                            class="font-bold text-3xl pl-3"
                            v-if="store.state.isLogin === false"
                        >
                            200%  
                            <span class="font-bold text-lg text-white">{{tran('Bouns', store.state.lang)}}</span>
                        </p>
                        <span v-if="store.state.isLogin === false" class="font-bold text-xl text-white pl-3">+100 {{tran('Free Spins', store.state.lang)}}</span>
                    </div>
                    <img
                        class="sm:hidden w-64 -mr-3 "
                        src="/imgs/new.png"
                        alt="new"
                    />
                </div>
                <div class="flex items-center justify-between pt-5">
                    <q-btn
                        v-if="store.state.isLogin === false"
                        class="sm:mt-1 font-bold text-lg md:text-xl lg:text-2xl sm:px-6 !py-0 z-[10]"
                        unelevated
                        color="primary"
                        :label="tran('SIGN UP', store.state.lang)"
                        @click="store.commit('handleOnRegister', true)"
                    />
                    <q-btn
                        v-if="store.state.isLogin === true"
                        :class="[
                            'sm:mt-1 font-bold text-lg md:text-xl lg:text-2xl lg:px-6 md:ml-4',
                            store.state.isDrawer ? 'lg:hidden' : '',
                        ]"
                        unelevated
                        color="primary"
                        :label="tran('Deposit', store.state.lang)"
                        @click="$router.push(linkTo('/wallet/deposit'))"
                    />
                    <div class="flex items-center flex-col justify-between">
                        <p class="font-bold text-xl pl-3">2ND/3RD {{tran('DEPOSIT', store.state.lang)}}</p>
                        <p class="gradiant text-3xl font-black pl-3">
                            100% {{tran('bonus', store.state.lang)}}
                        </p>
                    </div>
                </div>
            </div>

            <div class="hidden sm:!block md:ml-3 lg:ml-8 xl:ml-16 2xl:ml-24 pt-3">
                <p
                    v-if="store.state.isLogin === true"
                    class="font-bold text-3xl pl-5 hidden md:!block"
                >
                {{tran('Welcome', store.state.lang)}} {{ store.state.User.first_name }} {{ store.state.User.last_name }}
                </p>
                <img
                    class="md:max-w-sm sm:max-w-xs w-48 sm:w-auto"
                    src="/imgs/logo_full.png"
                    alt="logo"
                />
                <p class="font-bold md:text-3xl text-2xl pl-5">{{tran('# 1 Online casino', store.state.lang)}}</p>
                <p 
                    style="font-family: 'Roboto Condensed',sans-serif"
                    :class="[
                        'font-medium text-lg xl:block pl-5 pt-1',
                        store.state.isDrawer ? 'lg:hidden' : '',
                    ]"
                >
                {{tran('enjoy', store.state.lang)}}
                </p>
                <p class="text-2xl font-bold mb-[-7px] pl-5 mt-5">{{tran('welcome bonus', store.state.lang)}}</p>
                <div class="flex felx-row pl-2">
                    <q-icon name="euro" class="text-[60px] md:text-[72px] text-bold" style="color: #fff004"/>
                    <span
                        class="font-black font-bold text-6xl md:text-7xl"
                        style="color: #fff004"
                        >1800</span
                    >
                </div>
                <p v-if="store.state.isLogin === false">
                    <span style="color: #fff004" class="text-3xl xl:text-4xl font-bold pl-3 pr-2"
                        >200%</span
                    >
                    <span class="text-bold">{{tran('BONUS', store.state.lang)}}</span>
                    <span style="color: #fff004" class="text-3xl xl:text-4xl font-bold p-2"
                        >+100</span
                    >
                    <span class="text-bold">{{tran('FREE SPINS', store.state.lang)}}</span>
                </p>

                <div class="pt-3 pl-5 flex items-center justify-start">
                    <q-btn
                        v-if="store.state.isDrawer === false"
                        class="font-bold text-lg md:text-xl lg:text-2xl !leading-loose lg:px-6 mr-4"
                        outline
                        color="white"
                        :label="tran('play slots', store.state.lang)"
                        @click="$router.push(linkTo('/casino?tab=slots'))"
                    />
                    <q-btn
                        v-if="store.state.isLogin === true"
                        class="font-bold text-lg md:text-xl lg:text-2xl !leading-loose lg:px-6 mr-2"
                        unelevated
                        color="primary"
                        :label="tran('Deposit', store.state.lang)"
                        @click="$router.push(linkTo('/wallet/deposit'))"
                    />
                    <q-btn
                        v-if="store.state.isLogin === false"
                        :class="[
                            'font-bold text-lg md:text-xl lg:text-2xl !leading-loose lg:px-6 z-[10]',
                        ]"
                        unelevated
                        color="primary"
                        :label="tran('SIGN UP', store.state.lang)"
                        @click="store.commit('handleOnRegister', true)"
                    />
                </div>
            </div>

            <div class="items-center justify-start pt-3 pl-5 hidden md:!block md:ml-3 lg:ml-8 xl:ml-16 2xl:ml-24">
                <q-img
                    class="w-9 md:w-10 lg:w-12"
                    src="/imgs/visa.png"
                    alt="visa"
                />
                <q-img
                    class="w-9 md:w-10 lg:w-12 ml-1"
                    src="/imgs/master_card.png"
                    alt="master_card"
                />
                <q-img
                    class="w-9 md:w-10 lg:w-12 ml-1"
                    src="/imgs/interac.png"
                    alt="interac"
                />
                <q-img
                    class="w-9 md:w-10 lg:w-12 ml-1"
                    src="/imgs/bitcoin.png"
                    alt="bitcoin"
                />
                <q-img
                    class="w-9 md:w-10 lg:w-12 ml-1"
                    src="/imgs/etirum.png"
                    alt="etirum"
                />
            </div>
            <!-- <div>
                <svg id="svga-svgcanvas-elements-nose-0" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="svga-svg" viewBox="0 0 200 200" preserveAspectRatio="xMinYMin meet"><defs id="SvgjsDefs2659"></defs><g id="SvgjsG2660" transform="matrix(4,0,0,4,-300.27589416503906,-311.86390686035156)"><path id="SvgjsPath2661" d="M91.115 115.499c-0.878 2.064 5.934 4.292 8.519 4.429 2.8 0.147 10.646-2.9 9.316-4.992 -1.399-2.195-6.643-0.286-8.906-0.286C97.792 114.649 92.291 112.745 91.115 115.499z" data-colored="true" data-fillType="sd1" data-strokeType="none" data-fromskin="true" fill="#e1ac8f" stroke-width="none" opacity="1"></path><path id="SvgjsPath2662" d="M101.857 117.058c-0.23-0.759 1.876-1.584 2.657-1.694 1.101-0.16 3.36 0.802 3.158 1.592 -0.184 0.698-2.148-0.533-2.86-0.429C104.078 116.634 102.075 117.769 101.857 117.058zM94.974 116.811c0.968 0 2.404 0.623 2.668 0.074 0.315-0.655-2.139-1.461-2.86-1.372 -0.596 0.07-2.733 1.315-2.439 1.839C92.617 117.833 93.698 116.811 94.974 116.811z" data-colored="true" data-fillType="sd3" data-strokeType="none" data-fromskin="true" fill="#c27b55" stroke-width="none" opacity="1"></path><path id="SvgjsPath2663" d="M100.089 111.999c0.607 0 1.742-0.74 1.792-2.23 0.201-6.008-0.956-23.833-1.792-23.77 -0.78 0.059-2.267 17.637-1.948 23.77C98.22 111.271 99.404 111.999 100.089 111.999z" data-colored="true" data-fillType="hl2" data-strokeType="none" data-fromskin="true" fill="#fff5ef" stroke-width="none" opacity="0.2"></path></g></svg>
            </div> -->
        </div>

        <img
            class="md:mr-3 lg:mr-8 xl:mr-16 2xl:mr-24 z-[1000] hidden sm:!block absolute -right-3 -bottom-24 z-0 w-64 top-3 sm:top-8 sm:w-72 md:w-96 md:!block sm:max-w-sm md:max-w-lg xl:max-w-md xl:w-auto sm_hidden"
            src="/imgs/new.png"
            alt="new"
        />
    </div>
</template>
