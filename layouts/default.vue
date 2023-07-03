<script setup lang="ts">
import { onBeforeMount , inject } from 'vue';
import { useStore } from 'vuex';
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import SideBarComponent from '@/components/sidebar/SideBarComponent.vue';
import PageFooter from '@/components/footer/PageFooter.vue';
import Login from '~~/components/header/Login.vue';
import SignUp from '~~/components/header/SignUp.vue';
import VerifyEmail from '~~/components/header/VerifyEmail.vue';
import Welcome from '~~/components/header/Welcome.vue';
import MobileFooter from '~~/components/footer/MobileFooter.vue';
import MobilePageFooter from '~~/components/footer/MobilePageFooter.vue';
import { useQuasar } from 'quasar'
import { getProfile } from '~~/action/profile';
import { getProviders , getRecentPlayedGames , getFavoriteGames } from '~~/action/game';
import { getBalances } from '~~/action/wallet';
import {useRoute} from 'vue-router';
import Cookies from 'js-cookie';

const not = useQuasar();
const store = useStore();
const route = useRoute();

// watch store.state.notification, when value changed, show notification
watch(
        ()=>store.state.notification,
        ()=>{not.notify({
                message: store.state.notification.type,
                caption: store.state.notification.message,
                icon: store.state.notification.type == 'Success'?'done':'info',
                iconColor: store.state.notification.type == 'Success'?'green':'red',
                color: 'white',
                textColor: 'dark',
                position: 'top-right',
                progress:true,
                multiLine: true,
                timeout: 1500,}) 
});

//init website(domain.com)
onBeforeMount(() => {           
    getProviders(store);                                    //loadProviders
    if(Cookies.get("token")){                               //if Cookie contains token
        store.commit('handleLogin', true);                  //store.state.isLogin value set true
        getProfile(store);                                  // get player profile
        getBalances(store);
        getRecentPlayedGames(store);
        getFavoriteGames(store);
    }
});
</script>

<template>
    <q-layout>
        <!-- Header -->
        <HeaderComponent />
        <!-- SideBar -->
        <SideBarComponent />

        <!-- Container -->
        <q-page-container class="bg-gray-900">
            <NuxtPage />
            <PageFooter v-if="!route.path.toString().includes('play')"/> 
            <MobilePageFooter />
            <MobileFooter />
        </q-page-container> 

        <!-- Footer -->
        <q-footer
            class="text-sm font-normal text-center z-0 pt-3 px-3 pb-40 sm:pb-3"
            style="background-color: #151515; color: #7d8396"
            >Copyright 2023 Europa777 All Right Reserved.</q-footer
        >
        <Login />
        <SignUp />
        <VerifyEmail
            :open.sync="store.state.isVerifyEmail"
        />
        <Welcome
            :open.sync="store.state.isWelcome"
        />
    </q-layout>
</template>
