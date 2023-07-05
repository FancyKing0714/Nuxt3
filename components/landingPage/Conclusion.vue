<script setup lang="ts">
import {useStore} from 'vuex';
const store= useStore();
</script>

<template>
    <div class="grid grid-cols-10 m-4 gap-2">
        <div class="col-span-10 md:col-span-4 relative">
            <q-img class="w-full h-full" src="/imgs/back_daily_b.png" />
            <div class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8">
                <p class="font-bold text-xl md:text-xl xl:text-2xl text-shadow-lg">
                    DAILY<br />CASHBACK
                </p>
                <div class="">
                    <p class="text-sm md:text-xs xl:text-sm pt-1 mb-[-7px]">UP TO</p>
                    <p style="color: #ffd62f" class="text-6xl md:text-5xl xl:text-7xl font-black">
                        20%
                    </p>
                </div>
                <q-btn
                    v-if="store.state.isLogin === true"
                    class="mt-2"
                    size="md"
                    color="primary"
                    label="Join Now"
                    @click="$router.push(linkTo('/bonus/cash-back'))"
                />
                <q-btn 
                    v-if="store.state.isLogin === false"
                    class="mt-2" 
                    size="md" 
                    color="primary" 
                    label="SIGN UP" 
                    @click="store.commit('handleOnRegister', true)"
                />
            </div>
        </div>
        <div class="col-span-10 md:col-span-6 relative">
            <q-img class="w-full h-full" src="/imgs/back_bonus_b.png" />
            <div class="absolute top-4 z-10 left-1/4 sm:ml-7 md:ml-3 xl:ml-0 text-center">
                <p class="font-bold text-md sm:text-xl text-shadow-lg">WELCOME BONUS</p>
                <div class="flex felx-row">
                    <q-icon name="euro" class="text-[38px] xl:text-[72px] text-bold" style="color: #fff004"/>
                    <span
                        class="font-black font-bold text-4xl xl:text-7xl"
                        style="color: #fff004"
                        >1800</span
                    >
                </div>
                <div class="flex justify-start xl:justify-center items-center">
                    <div>
                        <p
                            style="color: #fff004"
                            class="text-xl xl:text-3xl font-extrabold"
                        >
                            200%
                        </p>
                        <p class="text-xs xl:text-md xl:font-bold">BONUS</p>
                    </div>
                    <div class="ml-3">
                        <p
                            style="color: #fff004"
                            class="text-xl xl:text-3xl font-extrabold"
                        >
                            +100
                        </p>
                        <p class="text-xs xl:text-md xl:font-bold">FREE SPINS</p>
                    </div>
                </div>

                <q-btn 
                    v-if="store.state.isLogin === true"
                    class="mt-2" 
                    size="md" 
                    color="primary" 
                    label="Deposit" 
                    @click="$router.push(linkTo('/wallet/deposit'))"
                />
                <q-btn 
                    v-if="store.state.isLogin === false"
                    class="mt-2" 
                    size="md" 
                    color="primary" 
                    label="SIGN UP" 
                    @click="store.commit('handleOnRegister', true)"
                />
            </div>
        </div>
    </div>
</template>
