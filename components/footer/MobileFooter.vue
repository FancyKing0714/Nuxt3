<script setup lang="ts">
import {useStore} from 'vuex';
const store = useStore();
import { tran } from "~~/utils/translation";
</script>

<template>
    <div
        style="background: #202530"
        class="sm:!hidden fixed bottom-0 z-50 w-full px-2 pt-3 pb-3"
        v-if="store.state.isLogin"
    >
        <div class="relative">
            <div
                style="background: #202530"
                class="absolute w-16 h-24 text-center py-3 -top-7 rounded-full left-1/2 transform -translate-x-1/2"
            >
                <q-btn round color="primary" icon="search" @click="store.commit('handleOnSearchDialog', {a:true, b:''});"/>
                <p class="pt-4 text-bold" style="font-size: 13px">{{tran('Search', store.state.lang)}}</p>
            </div>
        </div>
        <div class="grid grid-cols-5">
            <div class="flex flex-col justify-center px-2 items-center">
                <q-btn 
                    class="btn-none" 
                    round
                    @click="$router.push(linkTo('/casino'))"
                >
                    <img class="w-7" src="/imgs/all_games.png" alt="test" />
                </q-btn>
                <p class="text-bold" style="font-size: 13px">{{tran('Games', store.state.lang)}}</p>
            </div>
            <div class="flex flex-col justify-center px-2 items-center">
                <q-btn 
                    class="btn-none" 
                    round
                    @click="$router.push(linkTo('/casino?tab=slots'))"
                >
                    <img class="w-7" src="/imgs/slot-grey.png" alt="test" />
                </q-btn>
                <p class="text-bold" style="font-size: 13px">{{tran('Slots', store.state.lang)}}</p>
            </div>
            <div></div>
            <div class="flex flex-col justify-center px-2 items-center">
                <q-btn 
                    class="btn-none" 
                    round
                    @click="$router.push(linkTo('/casino?tab=live'))"
                >
                    <img class="w-8" src="/imgs/liveGames.png" alt="test" />
                </q-btn>
                <p class="text-bold" style="font-size: 13px">{{tran('Live', store.state.lang)}}</p>
            </div>
            <div class="flex flex-col justify-center px-2 items-center">
                <q-btn 
                    class="btn-none" 
                    round
                    @click="$router.push(linkTo('/wallet/deposit'))"
                >
                    <img class="w-7" src="/imgs/deposit.png" alt="test"/>
                </q-btn>
                <p class="text-bold" style="font-size: 13px">{{tran('Deposit', store.state.lang)}}</p>
            </div>
        </div>
    </div>
</template>
