<script setup lang="ts">
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import {logOut} from '~~/action/auth';
import {linkTo} from '~~/utils/link';

const store = useStore();
const router = useRouter();
const prifileList = [
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
        link: '/',
        icon: 'logout',
    },
];
// when user click logout button, call logout action.
const handleClick = (name) => {
    if(name == "Log Out"){
        logOut(store,router);
    }
}
</script>

<template>
    <q-btn-dropdown class="btn-none hidden md:!block" no-caps :label=store.state.User.username >
        <q-list>
            <q-item
                v-for="profile in prifileList"
                clickable
                @click = "handleClick(profile.name)"
                v-close-popup
            >
                <q-item-section>
                    <nuxt-link :to="linkTo(profile?.link)" class="my-button" >
                        <q-item-label>
                            <div class="flex items-center justify-start">
                                <img
                                    style="width: 12px"
                                    :src="`/imgs/header/${profile.icon}.png`"
                                    alt="profile"
                                />
                                <p class="text-xs pl-1">{{ profile.name }}</p>
                            </div>
                        </q-item-label>
                    </nuxt-link>
                </q-item-section>
            </q-item>
        </q-list>
    </q-btn-dropdown>
</template>
