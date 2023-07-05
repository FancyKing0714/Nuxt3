<script setup lang="ts">
    import { fillFieldNames } from 'ant-design-vue/lib/vc-cascader/utils/commonUtil';
import { useStore } from 'vuex';

    const store = useStore();
</script>

<template>
    <div class="relative pb-0 sm:pb-16 w-full">
        <div>
            <p
                v-if="store.state.isLogin === true"
                class="font-bold text-3xl pl-3 hidden md:!block"
            >
                Welcome {{ store.state.User.first_name }} {{ store.state.User.last_name }}
            </p>
            <img
                class="md:max-w-sm sm:max-w-xs w-48 sm:w-auto"
                src="/imgs/logo_full.png"
                alt="logo"
            />
            <p class="font-bold md:text-3xl text-2xl pl-3"># 1 Online casino</p>
            <div class="sm:!hidden ">
                <p class="font-bold text-2xl pl-3 pt-3">welcome bonus</p>
                <div class="flex felx-row pl-3 pb-2">
                    <q-icon name="euro" class="text-[48px] md:text-[72px] text-bold" style="color: #fff004"/>
                    <span
                        class="font-black font-bold text-5xl md:text-7xl"
                        style="color: #fff004"
                        >1800</span
                    >
                </div>
                <p
                    style="color: #fff004"
                    class="font-bold text-3xl pl-3"
                >
                    200%  
                    <span class="font-bold text-lg text-white">Bouns</span>
                </p>
                <span class="font-bold text-xl text-white pl-3">+100 Free spins</span>
                <div class="flex items-center justify-between pt-10">
                    <q-btn
                        v-if="store.state.isLogin === false"
                        class="font-bold text-2xl sm:px-6 !py-0 z-[10]"
                        unelevated
                        color="primary"
                        label="SIGN UP"
                        @click="store.commit('handleOnRegister', true)"
                    />
                    <q-btn
                        v-if="store.state.isLogin === true"
                        :class="[
                            'font-bold text-lg md:text-xl lg:text-2xl lg:px-6 md:ml-4',
                            store.state.isDrawer ? 'lg:hidden' : '',
                        ]"
                        unelevated
                        color="primary"
                        label="Deposit"
                        @click="$router.push(linkTo('/wallet/deposit'))"
                    />
                    <div class="flex items-center flex-col justify-between">
                        <p class="font-bold text-lg pl-3">2ND/3RD DEPOSIT</p>
                        <p class="gradiant text-2xl font-black pl-3">
                            100% bonus
                        </p>
                    </div>
                </div>
            </div>

            <div class="hidden sm:!block">
                <p 
                    style="font-family: 'Roboto Condensed',sans-serif"
                    :class="[
                        'font-medium text-lg xl:block pl-3 pt-1',
                        store.state.isDrawer ? 'lg:hidden' : '',
                    ]"
                >
                    Enjoy 3500+ games, fast payouts and 24/7 live support.
                </p>
                <p class="text-2xl font-bold mb-[-7px] pl-3 mt-5">welcome bonus</p>
                <div class="flex felx-row pl-3">
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
                    <span class="text-bold">BONUS</span>
                    <span style="color: #fff004" class="text-3xl xl:text-4xl font-bold p-2"
                        >+100</span
                    >
                    <span class="text-bold">FREE SPINS</span>
                </p>

                <div class="pt-3 pl-3 flex items-center justify-start">
                    <q-btn
                        v-if="store.state.isDrawer === false"
                        class="font-bold text-lg md:text-xl lg:text-2xl !leading-loose lg:px-6 mr-2"
                        outline
                        color="white"
                        label="play slots"
                        @click="$router.push(linkTo('/casino?tab=slots'))"
                    />
                    <q-btn
                        v-if="store.state.isLogin === true"
                        class="font-bold text-lg md:text-xl lg:text-2xl !leading-loose lg:px-6 mx-2"
                        unelevated
                        color="primary"
                        label="Deposit"
                        @click="$router.push(linkTo('/wallet/deposit'))"
                    />
                    <q-btn
                        v-if="store.state.isLogin === false"
                        :class="[
                            'font-bold text-lg md:text-xl lg:text-2xl !leading-loose lg:px-6 z-[10]',
                        ]"
                        unelevated
                        color="primary"
                        label="SIGN UP"
                        @click="store.commit('handleOnRegister', true)"
                    />
                </div>
            </div>

            <div class="items-center justify-start pt-3 pl-3 hidden md:!block">
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
        </div>

        <img
            class="absolute -right-3 -bottom-24 z-0 w-56 top-4 sm:top-8 sm:w-72 md:w-96 md:!block sm:max-w-sm md:max-w-lg xl:max-w-md xl:w-auto sm_hidden"
            src="/imgs/new.png"
            alt="new"
        />
    </div>
</template>
