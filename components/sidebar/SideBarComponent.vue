<script setup lang="ts">
import { ref } from 'vue';
import CasinoSportToogleButton from '~~/components/header/CasinoSportToogleButton.vue';
// import LoginRegisterButton from '~~/components/header/LoginRegisterButton.vue';
import SearchInput from '~~/components/header/SearchInput.vue';
import SideBarItem from '~~/components/sidebar/SideBarItem.vue';
import SideBarMenu from '~~/components/sidebar/SideBarMenu.vue';
import LoginRegisterButton from '../header/LoginRegisterButton.vue';
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps({
    leftDrawerOpen: {
        type: Boolean,
        required: true,
    },
    isLogin: {
        type: Boolean,
        required: true,
    },
    toggleState: {
        type: Function,
        required: true,
    },
});

const isOpen = ref(props.leftDrawerOpen);

watch(props, (newValue) => {
    isOpen.value = newValue.leftDrawerOpen;
});

interface SideBarItemInterFace {
    title: string;
    backUrl: string;
    iconUrl: string;
    link: string;
}

const sideBarLinks: SideBarItemInterFace[] = [
    {
        title: 'Daily Cash Back',
        backUrl: 'side_1.png',
        iconUrl: 'cash_back.png',
        link: '/wallet/Balances',
    },
    {
        title: 'BONUS WHEEl',
        backUrl: 'side_2.png',
        iconUrl: 'wheel.png',
        link: '/wheel',
    },
    {
        title: 'BONUS PROMOTIONS',
        backUrl: 'side_3.png',
        iconUrl: 'promotion.png',
        link: '/bonus/Available Bonus',
    },
    {
        title: 'TOURNAMENTS',
        backUrl: 'side_4.png',
        iconUrl: 'tournament.png',
        link: '/tournament',
    },
];

const prifileList = [
    {
        name: '12350.58 CAD',
    },
    {
        name: '331.64 USD',
    },
    {
        name: '107.99 EUR',
    },
    {
        name: '35.13 GBP',
    },
];
</script>
<template>
    <!-- SideBar -->
    <q-drawer
        v-model="isOpen"
        show-if-above
        class="px-6 py-3"
        style="background-color: #181a25"
        @before-hide="props.toggleState('leftDrawerOpen', false)"
    >
        <div
            style="border-bottom: 1px solid #7d8396"
            class="w-full text-center py-3 md:hidden"
        >
            <q-btn-dropdown
                class="btn-none !rounded-3xl"
                label-class="d-flex align-items-center"
            >
                <template v-slot:label>
                    <p class="text-xl font-bold">12350.58 CAD</p>
                </template>

                <q-list>
                    <q-item
                        v-for="profile in prifileList"
                        clickable
                        v-close-popup
                    >
                        <q-item-section>
                            <q-item-label>
                                <div class="flex items-center justify-start">
                                    <p class="text-xxs sm:text-xs pl-1">
                                        {{ profile.name }}
                                    </p>
                                </div>
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>
            <p style="color: #7b8193" class="text-xs">Jeff O.</p>
            <p class="text-xs">
                <span style="color: #fff004">LEVEL:</span><span>VIP</span>
            </p>
        </div>
        <div
            class="py-3 w-full text-center md:hidden"
            style="border-bottom: 1px solid #7d8396"
        >
            <q-btn @click="$router.push('/wallet')" color="primary">
                <div class="flex items-center justify-start py-1">
                    <img class="w-7" src="/imgs/deposit_white.png" alt="test" />
                    <p class="font-semibold text-xl pl-2">DEPOSIT</p>
                </div>
            </q-btn>
        </div>
        <div>
            <div class="md:!hidden mt-5">
                <SearchInput />
            </div>
            <div class="mt-5 text-center">
                <LoginRegisterButton
                    v-if="store.state.isLogin === false"
                    :toggleState="toggleState"
                />
            </div>
        </div>
        <q-list>
            <SideBarItem
                v-for="item in sideBarLinks"
                :key="item.title"
                v-bind="item"
            />
            <SideBarMenu />
        </q-list>
    </q-drawer>
</template>
