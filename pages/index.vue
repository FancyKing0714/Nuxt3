<script setup lang="ts">
import { useStore } from 'vuex';
import { ref , onBeforeMount } from 'vue';
import Conclusion from '~~/components/landingPage/Conclusion.vue';
import GameList from '~~/components/landingPage/GameList.vue';
import ProviderList from '~~/components/landingPage/ProviderList.vue';
import Activity from '~~/components/landingPage/Activity.vue';
import {useRoute} from 'vue-router';
import Cookies from 'js-cookie'

const store = useStore();
const route = useRoute();
onBeforeMount(()=>{
    console.log(route.query.click_id);
    const click_id = route.query.click_id;
    const promo = route.query.promo;
    if(click_id)
        Cookies.set('click_id', click_id.toString());
    if(promo)
        Cookies.set('promo', promo.toString());  
});
</script>
<template>
    <q-page>
        <div
            style="max-width: 1450px"
            class="w-full px-1 sm:px-0 md:px-6 lg:px-14 py-8 m-auto"
        >
            <section class="main h-full px-4">
                <landing-page-overview />
                <landing-page-intro-cards />
            </section>
            <section class="pt-4">
                <landing-page-category-bar />
                <game-list v-for="game in store.state.gameList" :game="game" />
                <provider-list :providers="store.state.providers" />
            </section>
            <section>
                <Conclusion />
                <Activity />
            </section>
        </div>
    </q-page>
</template>
