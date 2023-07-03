<script setup lang="ts">
import { useStore } from 'vuex';
import { ref , onBeforeMount } from 'vue';
import Conclusion from '~~/components/landingPage/Conclusion.vue';
import GameListCasinoPage from '~~/components/landingPage/GameListCasinoPage.vue';
import ProviderList from '~~/components/landingPage/ProviderList.vue';
import Activity from '~~/components/landingPage/Activity.vue';
import {useRoute} from 'vue-router';
import Cookies from 'js-cookie'

const store = useStore();
const route = useRoute();

//catch click_id and promo when user call website( domain.com ) first
//because middleware not yet init
onBeforeMount(()=>{
    const click_id = route.query.click_id;
    const promo = route.query.promo;
    if(click_id)                                                        //if url contains click_id, save it in cookie
        Cookies.set('click_id', click_id.toString());
    else                                                                //else remove origin click_id from cookie
        Cookies.remove('click_id');
    if(promo)                                                           //if url contains promo, save it in cookie
        Cookies.set('promo', promo.toString());  
    else                                                                //else remove origin promo from cookie
        Cookies.remove('promo');  
});

useHead({
      title: 'Canada777',
      meta: [
        {
          hid: 'Home',
          name: 'Home',
          content: 'Welcome to our website! Explore a wide range of exciting games, thrilling promotions, and exclusive VIP rewards. Start your gaming adventure now and experience the best online entertainment. Play, win, and have a great time at our platform.'
        }
      ]
});

const getGames = () => {
    if(route.query?.tab?.toString() == 'recent') return store.state.recentGameList;
    else if(route.query?.tab?.toString() == 'favorites') return store.state.favoriteGameList;
    else return store.state.gameListByType;
};

</script>
<template>
    <q-page>
        <div
            style="max-width: 1450px"
            class="w-full p-0 sm:p-3 md:p-6 lg:p-9 m-auto"
        >
            <section>
                <landing-page-category-bar />
                <game-list-casino-page :games="getGames()" />
                <provider-list :providers="store.state.providers" />
            </section>
            <section>
                <Conclusion />
                <Activity />
            </section>
        </div>
    </q-page>
</template>
