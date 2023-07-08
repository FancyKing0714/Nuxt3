<script setup lang="ts">
import { onBeforeMount } from 'vue';
import {getBalances} from '~~/action/wallet';
import {useStore} from 'vuex';
import {useRoute} from 'vue-router';

const route = useRoute()
const store = useStore();

</script>

<template>
    <q-btn-group style="background: #3e4455" class="rounded-md lg:rounded-full">
        <q-btn-dropdown
            class="btn-none rounded-md lg:!rounded-3xl lg:px-4 pl-2 pr-0"
            label-class="d-flex align-items-center"
            v-if="!route.path.toString().includes('play')"
        >
            <template v-slot:label class=""> 
                <p class="text-xs pl-1">{{ store.state.balance.total_balance }}</p> 
                <p class="text-xs pl-1 hidden lg:!block">{{ store.state.balance.currency }}</p> 
            </template>
            <q-item
                clickable
                v-close-popup
                @click="$router.push(linkTo('/wallet/balances'))"
            >
                <q-item-section>
                    <q-item-label>
                        <div class="flex justify-between">
                            <p class="text-xs pl-1">Cash Balance: </p>
                            <p class="text-xs pl-1">{{ store.state.balance.balance }} {{ store.state.balance.currency }}</p>
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
                            <p class="text-xs pl-1">Bonus Balance: </p>
                            <p class="text-xs pl-1">{{ store.state.balance.bonus_balance }} {{ store.state.balance.currency }}</p>
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
                            <p class="text-xs pl-1">Total Balance: </p>
                            <p class="text-xs pl-1">{{ store.state.balance.total_balance }} {{ store.state.balance.currency }}</p>
                        </div>
                    </q-item-label>
                </q-item-section>
            </q-item>
        </q-btn-dropdown>
        <div class="flex items-center justify-center w-28" v-if="route.path.toString().includes('play')">
            <p class="text-md font-bold pl-1">Playing</p>
        </div>
        <div
            class="bg-green-500 lg:bg-transparent rounded-r-md lg:border lg:border-solid lg:border-gray-500 lg:!rounded-3xl flex flex-nowrap items-center justify-start"
            @click="$router.push(linkTo('/wallet/deposit'))"
        >
            <img
                class="q-mr-sm q-ml-md q-mt-sm q-mb-sm cursor-pointer hidden lg:!block"
                style="max-width: 22px"
                src="/imgs/header/wallet-icon.png"
                alt="wallet"
            />
            <p class="q-mr-md text-xs pl-1 q-mr-sm cursor-pointer hidden lg:!block">Deposit</p>
            <q-icon name="add" size="sm" color="white" class="lg:hidden mx-1" ></q-icon>
        </div>
    </q-btn-group>
</template>
