<script setup lang="ts">
import WalletButton from './WalletButton.vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import {logOut} from '~~/action/auth';
import {linkTo} from '~~/utils/link';
import { tran } from "~~/utils/translation";

const store = useStore();
const router = useRouter();
const profileList = [
    {
        name: 'Profile',
        icon: 'user',
        link: '/profile/general-information',
    },
    {
        name: 'Deposit',
        icon: 'deposit',
        link: '/wallet/deposit',
    },
    {
        name: 'Withdraw',
        icon: 'wallet-icon',
        link: '/wallet/withdraw',
    },
    {
        name: 'Bonus',
        icon: 'bonus',
        link: '/bonus/available-bonus',
    },
    {
        name: 'Free Spins',
        icon: 'promotion',
        link: '/bonus/free-spins',
    },
    {
        name: 'Game History',
        icon: 'game',
        link: '/profile/game-history',
    },
    {
        name: 'Log Out',
        icon: 'logout',
        link: '/logout',
    },
];

//when user click logout button, call logout action
const handleClick = (link) => {
    if(link == '/logout'){
        logOut(store,router);
    }
    else
        router.push(linkTo(link));
}
</script>

<template>
    <q-dialog
        class="w-full sm:hidden"
        v-model="store.state.onMoblieProfile"
        @before-hide="store.commit('handleMobileProfile', false)"
    >
        <div class="relative overflow-hidden">
            <div
                style="background: #3c3c3c"
                class="!w-24 square transform rotate-45 left-1/2 -translate-x-1/2 rounded-md overflow-hidden text-center top-[51px] z-50"
            >
                <q-img
                    class="w-full transform -rotate-45 z-50"
                    alt="avatar"
                    src="/tmp/avatar.png"
                />
            </div>
            <div
                class="rounded-md pb-2"
                style="background: #3c3c3c; min-width: 290px"
            >
                <div class="text-center pt-20">
                    <WalletButton />
                    <q-list class="px-2 pt-3">
                        <q-item
                            v-for="profile in profileList"
                            clickable
                            v-close-popup
                            @click = "handleClick(profile.link)"
                            style="border-bottom: 1px solid #4c4d52"
                        >
                            <q-item-section>
                                <q-item-label>
                                    <div
                                        class="flex items-center justify-start "
                                    >
                                        <img
                                            style="width: 15px"
                                            :src="`/imgs/header/${profile.icon}.png`"
                                            alt="profile"
                                        />
                                        <p class="text-xs pl-2 ml-2">
                                            {{ tran(profile.name, store.state.lang) }}
                                        </p>
                                    </div>
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </div>
            </div>
        </div>
    </q-dialog>
</template>
