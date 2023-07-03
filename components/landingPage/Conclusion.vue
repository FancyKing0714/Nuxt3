<script setup lang="ts">
import {useStore} from 'vuex';
const store= useStore();
</script>

<template>
    <div class="grid grid-cols-10 m-4 gap-2">
        <div class="col-span-10 md:col-span-4 relative">
            <q-img class="w-full h-full" src="/imgs/back_daily_b.png" />
            <div class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8">
                <p class="font-bold text-xl text-shadow-lg">
                    DAILY<br />CASHBACK
                </p>
                <div class="flex items-center justify-start">
                    <p class="text-xs">UP TO</p>
                    <p style="color: #ffd62f" class="text-5xl font-black pl-1">
                        20%
                    </p>
                </div>
                <q-btn
                    v-if="store.state.isLogin === true"
                    class="mt-2"
                    size="sm"
                    color="primary"
                    label="Join Now"
                    @click="$router.push(linkTo('/bonus/cash-back'))"
                />
                <q-btn 
                    v-if="store.state.isLogin === false"
                    class="mt-2" 
                    size="sm" 
                    color="primary" 
                    label="SIGN UP" 
                    @click="store.commit('handleOnRegister', true)"
                />
            </div>
        </div>
        <div class="col-span-10 md:col-span-6 relative">
            <q-img class="w-full h-full" src="/imgs/back_bonus_b.png" />
            <div class="absolute top-4 z-10 left-1/4 text-center">
                <p class="font-bold text-xl text-shadow-lg">WELCOME BONUS</p>
                <div class="flex justify-center items-center">
                    <div>
                        <p
                            style="color: #ffd62f"
                            class="text-xl font-extrabold"
                        >
                            200%
                        </p>
                        <p class="text-sm">BONUS</p>
                    </div>
                    <div class="ml-3">
                        <p
                            style="color: #ffd62f"
                            class="text-xl font-extrabold"
                        >
                            +100
                        </p>
                        <p class="text-sm">free spins</p>
                    </div>
                </div>

                <q-btn 
                    v-if="store.state.isLogin === true"
                    class="mt-2" 
                    size="sm" 
                    color="primary" 
                    label="Deposit" 
                    @click="$router.push(linkTo('/wallet/deposit'))"
                />
                <q-btn 
                    v-if="store.state.isLogin === false"
                    class="mt-2" 
                    size="sm" 
                    color="primary" 
                    label="SIGN UP" 
                    @click="store.commit('handleOnRegister', true)"
                />
            </div>
        </div>
    </div>
</template>
