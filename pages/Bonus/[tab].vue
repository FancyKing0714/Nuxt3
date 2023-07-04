<script setup lang="ts">
import ActiveBonus from '~~/components/bonus/ActiveBonus.vue';
import AvailableBonus from '~~/components/bonus/AvailableBonus.vue';
import FreeSpins from '~~/components/bonus/FreeSpins.vue';
import Activity from '~~/components/landingPage/Activity.vue';
import { useStore } from 'vuex';
import { computed , onBeforeMount } from 'vue';
import { useRouter , useRoute } from 'vue-router';
import {getBonusHistory, getFreespinHistory, getCashbackHistory } from '~~/action/bonus';
import auth from '~~/middleware/routerMiddleware.js';
import {linkTo, tabToLink, linkToTab} from '~~/utils/link';

definePageMeta({
  middleware: [auth]
});

const route = useRoute();
const router = useRouter();
const store = useStore();
const isDrawer = computed(() => {
    return ref(store.state.isDrawer);
});

//get tab name from router
const selectedItem = ref(linkToTab(route.params.tab.toString()));

//before component mount, call action if neccessary
onBeforeMount(()=>{
    switch(route.params.tab.toString()){
        case 'bonus-history':
            getBonusHistory(store.state.pageNumber, store, router);
            break;
        case 'free-spins':
            getFreespinHistory(store.state.pageNumber, store, router);
            break;
        case 'cash-back':
            getCashbackHistory(store.state.pageNumber, store, router);
            break;
    }
});

const categories = computed(() => [
    {
        name: 'Available Bonus',
        icon: 'available_icon',
        active: selectedItem.value === 'Available Bonus',
    },
    {
        name: 'Active Bonus',
        icon: 'active_icon',
        active: selectedItem.value === 'Active Bonus',
    },
    {
        name: 'Free Spins',
        icon: 'free_spin_icon',
        active: selectedItem.value === 'Free Spins',
    },
    {
        name: 'Cash Back',
        icon: 'cashback_icon',
        active: selectedItem.value === 'Cash Back',
    },
    {
        name: 'Bonus History',
        icon: 'history_icon',
        active: selectedItem.value === 'Bonus History',
    },
]);

//when user click tab, change selected item and redirect
function selectCategory(val: string) {    
    selectedItem.value = val; 
    router.push(linkTo(`/bonus/${tabToLink(val)}`));
}
</script>
<template>
    <q-page>
        <div
            style="max-width: 1450px"
            class="w-full px-0 md:px-6 lg:px-14 py-8 m-auto"
        >
            <section class="main h-full px-4">
                <div
                    class="bonus_baner w-full h-40 font-bold text-xl flex justify-center flex-col text-right"
                >
                    <div :class="['pr-12 md:pr-24 xl:pr-36', isDrawer.value?'lg:pr-6':'lg:pr-36']">
                        <p>
                            <span>DAILY CASHBACK OF UP TO</span>&nbsp;<span
                                style="color: #ffff03"
                                class="font-black text-5xl"
                                >20%</span
                            >
                        </p>
                        <p>
                            ONLY ON
                            <span style="color: #ffff03">EURPOE #1</span> ONLINE
                            CASINO
                        </p>
                    </div>
                </div>

                <div class="w-full py-7 flex items-center justify-center">
                    <p class="font-bold text-base hidden lg:!block">Bonus</p>
                    <div
                        class="mx-2 hidden lg:!block"
                        style="width: 1px; height: 20px; background: #383d47"
                    ></div>
                    <div>
                        <CategoryBar
                            :selectCategory="selectCategory"
                            :categories.sync="categories"
                        />
                    </div>
                </div>

                <BonusCashBack v-if="selectedItem === 'Cash Back'" />
                <BonusHistory v-if="selectedItem === 'Bonus History'" />
                <ActiveBonus v-if="selectedItem === 'Active Bonus'" />
                <AvailableBonus v-if="selectedItem === 'Available Bonus'" />
                <FreeSpins v-if="selectedItem === 'Free Spins'" />
            </section>
            <section class="pt-8">
                <Activity />
            </section>
        </div>
    </q-page>
</template>
