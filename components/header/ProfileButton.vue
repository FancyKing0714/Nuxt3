<script setup lang="ts">
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
const store = useStore();
const router = useRouter();
const prifileList = [
    {
        name: 'Profile',
        icon: 'user',
        link: '/profile/General Information',
    },
    {
        name: 'Deposit',
        icon: 'deposit',
        link: '/wallet/Deposit',
    },
    {
        name: 'Bonus',
        icon: 'bonus',
        link: '/Bonus/Available Bonus',
    },
    {
        name: 'Promotions',
        icon: 'promotion',
        link: '/profile',
    },
    {
        name: 'Wallet',
        icon: 'wallet-icon',
        link: '/wallet/Balances',
    },
    {
        name: 'Game History',
        icon: 'game',
        link: '/Profile/Game History',
    },
    {
        name: 'Log Out',
        icon: 'logout',
    },
];
const handleClick = (name) => {
    if(name == "Log Out"){
        localStorage.removeItem("token");
        store.dispatch('handleLogin', false);
        router.push("/");
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
                    <nuxt-link :to="profile?.link" class="my-button" >
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
