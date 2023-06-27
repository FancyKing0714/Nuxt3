<template>
    <!-- Component Start -->
    <div class="flex flex-col pt-3">
        <button 
            class="group focus:outline-none rounded-md" 
            style="border-bottom: 1px solid rgba(125, 131, 150, 0.5)"
        >
            <div class="flex items-center justify-between font-semibold hover:bg-blue-600 rounded-md">
                <div 
                    class="flex justify-start items-center"
                    @click="$router.push(linkTo('/wallet/deposit'))"
                    >
                    <q-img class="w-5" src="/imgs/sidebar/deposit.png" alt="deposit" />
                    <p class="font-semibold text-sm p-3">Deposit</p>
                </div>
            </div>
        </button>
        <button >
            <div 
                class="flex items-center justify-between font-semibold cursor-pointer hover:bg-blue-600 rounded-md"
                @click="dropdown"
            >
                <div class="flex justify-start items-center">
                    <q-img
                        class="w-5"
                        src="/imgs/sidebar/games.png"
                        alt="deposit"
                    />
                    <p class="font-semibold text-sm p-3">Games</p>
                </div>
                <q-img class="w-2" src="/imgs/sidebar/accordion_down.png" v-if="!down"/>
                <q-img class="w-2" src="/imgs/sidebar/accordion_up.png" v-if="down"/>
            </div>
            <SideBarGameCategory :down="down" />
        </button>
        <!-- <button class="group focus:outline-none">
            <div class="flex items-center justify-between h-12 font-semibold hover:bg-blue-600 rounded-md">
                <div class="flex justify-start items-center">
                    <q-img
                        class="w-5"
                        src="/imgs/sidebar/sports.png"
                        alt="deposit"
                    />
                    <p class="font-semibold text-sm p-3">Sportbook</p>
                </div>
                <q-img class="w-2" src="/imgs/sidebar/accordion_icon.svg" />
            </div>
        </button> -->
        <button class="group focus:outline-none">
            <div class="flex items-center justify-between font-semibold hover:bg-blue-600 rounded-md">
                <div 
                    class="flex justify-start items-center"
                    @click="$router.push(linkTo('/promotions'))"
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
            <div class="flex items-center justify-between font-semibold hover:bg-blue-600 rounded-md">
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

    <!-- <div
        style="border-bottom: 1px solid rgba(125, 131, 150, 0.5)"
        class="flex justify-start items-center cursor-pointer hover:bg-blue-600 rounded-md"
        @click="$router.push(linkTo('/vip'))"
    >
        <q-img class="w-5" src="/imgs/sidebar/vip.png" alt="deposit" />
        <p class="font-semibold text-sm p-3">VIP</p>
    </div> -->

    <div style="color: #7b8193" class="flex justify-start items-center hover:bg-blue-600 rounded-md">
        <q-img class="w-5" src="/imgs/sidebar/fav.png" alt="deposit" />
        <p style="font-size: 11px" class="font-medium p-3">Favorites</p>
    </div>

    <div
        style="color: #7b8193; border-bottom: 1px solid rgba(125, 131, 150, 0.5);"
        class="flex justify-start items-center hover:bg-blue-600 rounded-md"
    >
        <q-img class="w-5" src="/imgs/sidebar/recent.png" alt="deposit" />
        <p style="font-size: 11px" class="font-medium p-3">Recently Played</p>
    </div>
    <p style="font-size: 11px; color: #7b8193" class="font-medium pt-2">
        Europa777 Docs
    </p>
    <p
        @click="$router.push(linkTo('/faq'))"
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
let down = ref(false)
const dropdown = () => {
    down.value = !down.value;
}
</script>
