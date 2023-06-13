<template>
    <div
        style="border-bottom: 1px solid rgba(125, 131, 150, 0.5)"
        class="flex justify-start items-center"
        v-if="store.state.isLogin === true"
    >
        <q-img class="w-5" src="/imgs/sidebar/deposit.png" alt="deposit" />
        <p class="font-semibold text-sm p-3">Deposit</p>
    </div>

    <!-- Component Start -->
    <div class="flex flex-col">
        <button class="group focus:outline-none">
            <div class="flex items-center justify-between h-12 font-semibold">
                <div class="flex justify-start items-center">
                    <q-img
                        class="w-5"
                        src="/imgs/sidebar/games.png"
                        alt="deposit"
                    />
                    <p class="font-semibold text-sm p-3">Games</p>
                </div>
                <q-img class="w-2" src="/imgs/sidebar/accordion_icon.svg" />
            </div>
            <SideBarGameCategory />
        </button>
        <button class="group focus:outline-none">
            <div class="flex items-center justify-between h-12 font-semibold">
                <div class="flex justify-start items-center">
                    <q-img
                        class="w-5"
                        src="/imgs/sidebar/sports.png"
                        alt="deposit"
                    />
                    <p class="font-semibold text-sm p-3">Sportbook</p>
                </div>
                <!-- <q-img class="w-2" src="/imgs/sidebar/accordion_icon.svg" /> -->
            </div>
        </button>
        <button class="group focus:outline-none">
            <div class="flex items-center justify-between h-12 font-semibold">
                <div 
                    class="flex justify-start items-center"
                    @click="$router.push('/promotions')"
                    >
                    <q-img
                        class="w-5"
                        src="/imgs/sidebar/promotions.png"
                        alt="deposit"
                    />
                    <p class="font-semibold text-sm p-3">Promotions</p>
                </div>
                <!-- <q-img class="w-2" src="/imgs/sidebar/accordion_icon.svg" /> -->
            </div>
        </button>
        <button class="group focus:outline-none">
            <div class="flex items-center justify-between h-12 font-semibold">
                <div class="flex justify-start items-center">
                    <q-img
                        class="w-5"
                        src="/imgs/sidebar/referral.png"
                        alt="deposit"
                    />
                    <p class="font-semibold text-sm p-3">Referral</p>
                </div>
                <!-- <q-img class="w-2" src="/imgs/sidebar/accordion_icon.svg" /> -->
            </div>
        </button>
    </div>
    <!-- Component End  -->

    <div
        style="border-bottom: 1px solid rgba(125, 131, 150, 0.5)"
        class="flex justify-start items-center cursor-pointer"
        @click="$router.push('/vip')"
    >
        <q-img class="w-5" src="/imgs/sidebar/vip.png" alt="deposit" />
        <p class="font-semibold text-sm p-3">VIP</p>
    </div>

    <div style="color: #7b8193" class="flex justify-start items-center">
        <q-img class="w-5" src="/imgs/sidebar/fav.png" alt="deposit" />
        <p style="font-size: 11px" class="font-medium p-3">Favorites</p>
    </div>

    <div
        style="color: #7b8193; border-bottom: 1px solid rgba(125, 131, 150, 0.5);"
        class="flex justify-start items-center"
    >
        <q-img class="w-5" src="/imgs/sidebar/recent.png" alt="deposit" />
        <p style="font-size: 11px" class="font-medium p-3">Recently Played</p>
    </div>
    <p style="font-size: 11px; color: #7b8193" class="font-medium pt-2">
        Europa777 Docs
    </p>
    <p
        @click="$router.push('/faq')"
        style="font-size: 11px; color: #7b8193"
        class="font-medium pt-2 cursor-pointer"
    >
        Contact Us
    </p>
</template>

<script setup lang="ts">
import SideBarGameCategory from './SideBarGameCategory.vue';
import { useStore } from 'vuex';
const store = useStore();
</script>
