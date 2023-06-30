<script setup lang="ts">
import {useStore} from 'vuex';
const store = useStore();
</script>

<template>
    <div
        style="background: #202530"
        class="sm:!hidden fixed bottom-0 z-50 w-full px-2 pt-3 pb-8"
        v-if="store.state.isLogin"
    >
        <div class="relative">
            <div
                style="background: #202530"
                class="absolute w-16 h-24 text-center py-3 -top-7 rounded-full left-1/2 transform -translate-x-1/2"
            >
                <q-btn round color="primary" icon="person" @click="store.commit('handleMobileProfile', true)"/>
                <p class="pt-4" style="font-size: 9px">My Account</p>
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
                <p style="font-size: 9px">All Games</p>
            </div>
            <div class="flex flex-col justify-center px-2 items-center">
                <q-btn 
                    class="btn-none" 
                    round
                >
                    <img class="w-7" src="/imgs/search.png" alt="test" />
                </q-btn>
                <p style="font-size: 9px">Search</p>
            </div>
            <div></div>
            <div class="flex flex-col justify-center px-2 items-center">
                <q-btn 
                    class="btn-none" 
                    round
                    @click="$router.push(linkTo('/casino?tab=slots'))"
                >
                    <img class="w-7" src="/imgs/slot-grey.png" alt="test" />
                </q-btn>
                <p style="font-size: 9px">Slots</p>
            </div>
            <div class="flex flex-col justify-center px-2 items-center">
                <q-btn 
                    class="btn-none" 
                    round
                    @click="$router.push(linkTo('/wallet/deposit'))"
                >
                    <img class="w-7" src="/imgs/deposit.png" alt="test"/>
                </q-btn>
                <p style="font-size: 9px">Deposit</p>
            </div>
        </div>
    </div>
</template>
