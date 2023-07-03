<script setup lang="ts">
import { onBeforeMount } from 'vue';
import {getBalances} from '~~/action/wallet';
import {useStore} from 'vuex';
import {useRoute} from 'vue-router';

const route = useRoute()
const store = useStore();

</script>

<template>
    <q-btn-group style="background: #3e4455" rounded>
        <q-btn-dropdown
            class="btn-none !rounded-3xl "
            label-class="d-flex align-items-center"
            v-if="!route.path.toString().includes('play')"
        >
            <template v-slot:label> 
                <p class="text-xxs sm:text-xs pl-1">{{ store.state.balance.total_balance }} {{ store.state.balance.currency }}</p> 
            </template>
            <q-item
                clickable
                v-close-popup
                @click="$router.push(linkTo('/wallet/balances'))"
            >
                <q-item-section>
                    <q-item-label>
                        <div class="flex justify-between">
                            <p class="text-xxs sm:text-xs pl-1">Cash Balance: </p>
                            <p class="text-xxs sm:text-xs pl-1">{{ store.state.balance.balance }} {{ store.state.balance.currency }}</p>
                        </div>
                    </q-item-label>
                </q-item-section>
            </q-item>
            <q-item
                clickable
                v-close-popup
                @click="$router.push(linkTo('/wallet/balances'))"
                class="border-b-2"
            >
                <q-item-section>
                    <q-item-label>
                        <div class="flex justify-between">
                            <p class="text-xxs sm:text-xs pl-1">Bonus Balance: </p>
                            <p class="text-xxs sm:text-xs pl-1">{{ store.state.balance.bonus_balance }} {{ store.state.balance.currency }}</p>
                        </div>
                    </q-item-label>
                </q-item-section>
            </q-item>
            <q-item
                clickable
                v-close-popup
                @click="$router.push(linkTo('/wallet/balances'))"
            >
                <q-item-section>
                    <q-item-label>
                        <div class="flex justify-between ">
                            <p class="text-xxs sm:text-xs pl-1">Total Balance: </p>
                            <p class="text-xxs sm:text-xs pl-1">{{ store.state.balance.total_balance }} {{ store.state.balance.currency }}</p>
                        </div>
                    </q-item-label>
                </q-item-section>
            </q-item>
        </q-btn-dropdown>
        <div class="flex items-center justify-center w-28" v-if="route.path.toString().includes('play')">
            <p class="text-md font-bold pl-1">In Game</p>
        </div>
        <div
            style="border: 1px solid #4D5160"
            class="q-pl-md q-pt-sm q-pb-sm q-pr-md !rounded-3xl flex flex-nowrap items-center justify-start"
            @click="$router.push(linkTo('/wallet/deposit'))"
        >
            <img
                class="q-mr-sm cursor-pointer"
                style="max-width: 22px"
                src="/imgs/header/wallet-icon.png"
                alt="wallet"
            />
            <p class="text-xxs sm:text-xs pl-1 cursor-pointer">Deposit</p>
        </div>
    </q-btn-group>
</template>
