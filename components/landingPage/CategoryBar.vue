<script setup lang="ts">
import CategoryBarItem from './CategoryBarItem.vue';
import { watch , onBeforeMount } from 'vue';
import {useStore} from 'vuex';
import {useRoute} from 'vue-router';
import { getAllGames, getAllGamesByType, getSlotsGames, getTableGames, getLiveGames, getRouletteGames , getFavoriteGames , getRecentPlayedGames } from '~~/action/game';

const route = useRoute();
const store = useStore();
let routePath = '';
watch(()=>route.query.tab,()=>{
    if(store.state.pageNumber == 1 && routePath==route.path)
        getGames(1);
    store.commit('handlePageNumber', 1);
    store.commit('handleCurrentLoaded',0);
    store.commit('handleGetGamesByType',[]);
    store.commit('handleGetGamesAmount',0);
    routePath = route.path;
})
watch(()=>store.state.pageNumber,()=>{
    getGames(store.state.pageNumber);
})
onBeforeMount(()=>{
    routePath = route.path;
    store.commit('handlePageNumber', 1);
    store.commit('handleCurrentLoaded',0);
    store.commit('handleGetGamesByType',[]);
    store.commit('handleGetGamesAmount',0);
    getGames(1);
});
const getGames=(pagenumber)=>{
    let tab = route.query?.tab?.toString()?route.query?.tab?.toString():''; 
    let isCasinoPage = route.path.toString().includes('casino'); 
    let isLandingpage = route.path.toString() == '/';
    switch(tab){
        case '':
            isCasinoPage&&getAllGamesByType(store, pagenumber);
            isLandingpage&&getAllGames(store);
            break;
        case 'slots':
            getSlotsGames(store, pagenumber);
            break;
        case 'live':
            getLiveGames(store, pagenumber);
            break;
        case 'table':
            getTableGames(store, pagenumber);
            break;
        case 'roulette':
            getRouletteGames(store, pagenumber);
            break;
        case 'favorites':
            getFavoriteGames(store, pagenumber);
            break;
        case 'recent':
            getRecentPlayedGames(store, pagenumber);
            break;
    }
}
const categories = [
    {
        name: 'All Games',
        icon: 'games',
        link: '',
    },
    {
        name: 'Slots',
        icon: 'slot',
        link: 'slots',
    },
    {
        name: 'Live',
        icon: 'liveGames',
        link: 'live',
    },
    {
        name: 'Table',
        icon: 'tableGames',
        link: 'table',
    },
    {
        name: 'Roulette',
        icon: 'roulette',
        link: 'roulette',
    },
    {
        name: 'Favorites',
        icon: 'fav',
        link: 'favorites',
    },
    {
        name: 'Recently Played',
        icon: 'recent',
        link: 'recent',
    },
];

const provider = {
    name: 'Providers',
    icon: 'provider',
    active: false,
};
</script>

<template>
    <div
        class="sm:rounded-lg w-full py-2 px-3  overflow-x-auto"
        style="background: #282b34"
    >
        <div class="flex flex-nowrap justify-between items-center">
            <div class="flex flex-nowrap">
                <CategoryBarItem
                    v-for="category in categories"
                    v-bind="category"
                />
            </div>
            <div class="hidden xl:!block">
                <HeaderSearchInput />
            </div>
            <!-- <CategoryBarItem v-bind="provider" /> -->
        </div>
    </div>
</template>
