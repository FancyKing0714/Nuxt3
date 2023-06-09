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
import { getProviders , getFavoriteGameSlugs } from '~~/action/game';
import { getBalances } from '~~/action/wallet';
import {useRoute , useRouter} from 'vue-router';
import Cookies from 'js-cookie';
import { tran } from "~~/utils/translation";

const not = useQuasar();
const store = useStore();
const route = useRoute();
const router = useRouter();

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
watch(()=>route.path, ()=>{
    if(Cookies.get("token")){      
        getBalances(store);
        getFavoriteGameSlugs(store, store.state.pageNumber);
    }                                  
});
//init website(domain.com)
onBeforeMount(() => {          
    getProviders(store);   
    if(Cookies.get("token")){                               //if Cookie contains token
        store.commit('handleLogin', true);                  //store.state.isLogin value set true
        getProfile(store, router);                                  // get player profile
        getBalances(store);
        getFavoriteGameSlugs(store, store.state.pageNumber);
    }
});
</script>

<template>
    <q-layout class>
        <div class="h-screen overflow-y-auto">
            <!-- Header -->
            <HeaderComponent />
            <!-- SideBar -->
            <SideBarComponent />
            
            <!-- Container -->
            <q-page-container class="bg-gray-900 h-fit overflow-y-auto">
                <NuxtPage />
                <PageFooter v-if="!route.path.toString().includes('play')"/> 
                <MobilePageFooter />
                <MobileFooter />
                <!-- Footer -->
                <div
                    class="text-sm font-normal text-center p-3 z-[3000]"
                    :class="store.state.isLogin&&'sm:pb-3 pb-[120px]'"
                    style="background-color: #151515; color: #7d8396;"
                    >Copyright 2023 {{tran('Europa777 All Right Reserved.', store.state.lang)}}
                </div>
            </q-page-container> 
        </div>
        
        <Login />
        <SignUp />
        <SearchDialog />
        <AvatarDialog />
        <VerifyEmail
            :open.sync="store.state.isVerifyEmail"
        />
        <Welcome
            :open.sync="store.state.isWelcome"
        />
    </q-layout>
</template>
