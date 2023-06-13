<script setup lang="ts">
import WalletButton from './WalletButton.vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import {logOut} from '~~/action/auth';
import {linkTo} from '~~/utils/link';

const store = useStore();
const router = useRouter();
const props = defineProps({
    open: {
        type: Boolean,
        required: true,
    },
    handleProfile: {
        type: Function,
        required: true,
    },
});
const isOpen = computed(() => ref(props.open));
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
const handleClick = (name) => {
    if(name == "Log Out"){
        logOut(store,router);
    }
}
</script>

<template>
    <q-dialog
        class="w-full sm:hidden"
        v-model="isOpen.value"
        @before-hide="props.handleProfile(false)"
    >
        <div class="relative overflow-hidden">
            <div
                style="background: #3c3c3c"
                class="!w-24 square transform rotate-45 left-1/2 -translate-x-1/2 rounded-md overflow-hidden text-center top-12 z-50"
            >
                <q-img
                    class="w-full transform -rotate-45 z-50"
                    alt="avatar"
                    src="/tmp/avatar.png"
                />
            </div>
            <div
                class="rounded-md"
                style="background: #3c3c3c; min-width: 290px"
            >
                <div class="text-center pt-20">
                    <WalletButton />
                    <q-list class="px-3 pt-3">
                        <q-item
                            v-for="profile in profileList"
                            clickable
                            v-close-popup
                            @click = "handleClick(profile.name)"
                            style="border-bottom: 1px solid #4c4d52"
                        >
                            <q-item-section>
                                <nuxt-link
                                    :to="linkTo(profile?.link)"
                                    class="my-button"
                                >
                                    <q-item-label>
                                        <div
                                            class="flex items-center justify-start"
                                        >
                                            <img
                                                style="width: 12px"
                                                :src="`/imgs/header/${profile.icon}.png`"
                                                alt="profile"
                                            />
                                            <p class="text-xxs pl-1">
                                                {{ profile.name }}
                                            </p>
                                        </div>
                                    </q-item-label>
                                </nuxt-link>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </div>
            </div>
        </div>
    </q-dialog>
</template>
