<script setup lang="ts">
import CategoryBarItem from './CategoryBarItem.vue';
import { watch , onBeforeMount } from 'vue';
import {useStore} from 'vuex';
import {useRoute} from 'vue-router';
import { getAllGames,getAllGamesByType, getSlotsGames, getTableGames, getLiveGames, getRouletteGames } from '~~/action/game';

const route = useRoute();
const store = useStore();
watch(()=>route.query.tab,()=>{
    if(store.state.pageNumber == 1)
        getGames(1);
    store.commit('handleReadMore', 1);
})
watch(()=>store.state.pageNumber,()=>{
    getGames(store.state.pageNumber);
})
onBeforeMount(()=>{
    store.commit('handleReadMore', 1);
    getGames(1);
});
const getGames=(pagenumber)=>{
    let tab = route.query?.tab?.toString()?route.query?.tab?.toString():''; 
    let isCasinoPage = route.path.toString().includes('casino'); 
    switch(tab){
        case '':
            isCasinoPage?getAllGamesByType(store, pagenumber):getAllGames(store);
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
        class="rounded-lg w-full py-2 px-3  overflow-x-auto"
        style="background: #282b34"
    >
        <div style="min-width: 768px;" class="w-full flex justify-between">
            <div class="flex">
                <CategoryBarItem
                    v-for="category in categories"
                    v-bind="category"
                />
            </div>
            <HeaderSearchInput />
            <!-- <CategoryBarItem v-bind="provider" /> -->
        </div>
    </div>
</template>
