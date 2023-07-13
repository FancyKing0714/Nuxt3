<template>
    <!-- Component Start -->
    <div class="flex flex-col pt-3">
        <button 
            class="group focus:outline-none rounded-md px-2 hover:bg-blue-600" 
            style="border-bottom: 1px solid rgba(125, 131, 150, 0.5)"
            v-if="store.state.isLogin === true"
        >
            <div class="flex items-center justify-between font-semibold rounded-md">
                <div 
                    class="flex justify-start items-center"
                    @click="$router.push(linkTo('/wallet/deposit'))"
                    >
                    <q-img class="w-5" src="/imgs/sidebar/deposit.png" alt="deposit" />
                    <p class="font-semibold text-sm p-3">{{tran('Deposit', store.state.lang)}}</p>
                </div>
            </div>
        </button>
        <button>
            <div 
                class="flex items-center justify-between font-semibold cursor-pointer px-2 hover:bg-blue-600 rounded-md"
                @click="dropdown"
            >
                <div class="flex justify-start items-center">
                    <q-img
                        class="w-5"
                        src="/imgs/sidebar/games.png"
                        alt="deposit"
                    />
                    <p class="font-semibold text-sm p-3">{{tran('Games', store.state.lang)}}</p>
                </div>
                <q-img class="w-2" src="/imgs/sidebar/accordion_down.png" v-if="!down"/>
                <q-img class="w-2" src="/imgs/sidebar/accordion_up.png" v-if="down"/>
            </div>
            <SideBarGameCategory :down="down" />
        </button>
        <!-- <button>
            <div class="flex items-center justify-between font-semibold cursor-pointer px-2 hover:bg-blue-600 rounded-md">
                <div class="flex justify-start items-center">
                    <q-img
                        class="w-5"
                        src="/imgs/sidebar/sports.png"
                        alt="deposit"
                    />
                    <p class="font-semibold text-sm p-3">{{tran('Sportbook', store.state.lang)}}</p>
                </div>
                <q-img class="w-2" src="/imgs/sidebar/accordion_icon.svg" />
            </div>
        </button> -->
        <button>
            <div class="flex items-center justify-between font-semibold px-2 hover:bg-blue-600 rounded-md">
                <div 
                    class="flex justify-start items-center"
                    @click="$router.push(linkTo('/promotions'))"
                    >
                    <q-img
                        class="w-5"
                        src="/imgs/sidebar/promotions.png"
                        alt="deposit"
                    />
                    <p class="font-semibold text-sm p-3">{{tran('Promotions', store.state.lang)}}</p>
                </div>
                <!-- <q-img class="w-2" src="/imgs/sidebar/accordion_icon.svg" /> -->
            </div>
        </button>
        <!-- <button>
            <div class="flex items-center justify-between font-semibold cursor-pointer px-2 hover:bg-blue-600 rounded-md">
                <div class="flex justify-start items-center">
                    <q-img
                        class="w-5"
                        src="/imgs/sidebar/referral.png"
                        alt="deposit"
                    />
                    <p class="font-semibold text-sm p-3">{{tran('Referral', store.state.lang)}}</p>
                </div>
                <q-img class="w-2" src="/imgs/sidebar/accordion_icon.svg" />
            </div>
        </button> -->
    </div>
    <!-- Component End  -->

    <div
        style="border-bottom: 1px solid rgba(125, 131, 150, 0.5)"
        class="flex justify-start items-center cursor-pointer hover:bg-blue-600 rounded-md px-2"
        @click="$router.push(linkTo('/vip'))"
    >
        <q-img class="w-5" src="/imgs/sidebar/vip.png" alt="deposit" />
        <p class="font-semibold text-sm p-3">{{tran('VIP', store.state.lang)}}</p>
    </div>

    <div 
        v-if="store.state.isLogin === true" 
        class="flex justify-start items-center hover:bg-blue-600 rounded-md px-2 cursor-pointer"
        @click="$router.push(linkTo('/casino?tab=favorites'))"
    >
        <q-img class="w-5" src="/imgs/sidebar/fav.png" alt="deposit" />
        <p style="font-size: 12px" class="font-medium p-3">{{tran('Favorites', store.state.lang)}}</p>
    </div>

    <div
        v-if="store.state.isLogin === true"
        style=" border-bottom: 1px solid rgba(125, 131, 150, 0.5);"
        class="flex justify-start items-center hover:bg-blue-600 rounded-md px-2 cursor-pointer"
        @click="$router.push(linkTo('/casino?tab=recent'))"
    >
        <q-img class="w-5" src="/imgs/sidebar/recent.png" alt="deposit" />
        <p style="font-size: 12px" class="font-medium p-3">{{tran('Recently Played', store.state.lang)}}</p>
    </div>
    <!-- <p style="font-size: 11px; color: #7b8193" class="font-medium pt-2">
        Europa777 Docs
    </p> -->
    <p
        @click="$router.push(linkTo('/contact-us'))"
        style="font-size: 13px; color:"
        class="font-medium p-4  cursor-pointer"
    >
    {{tran('Contact Us', store.state.lang)}}
    </p>
</template>

<script setup lang="ts">
import SideBarGameCategory from './SideBarGameCategory.vue';
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
let down = ref(false)
const dropdown = () => {
    down.value = !down.value;
}
</script>
