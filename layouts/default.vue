<script setup lang="ts">
import { ref, computed , onBeforeMount ,onMounted} from 'vue';
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
import { getGames } from '~~/action/game';
import {useRouter} from 'vue-router';
const router = useRouter();

const not = useQuasar();

interface State {
    [name: string]: Ref<boolean>;
}

const state: State = {
    isLogin: ref(false),
    onLogin: ref(false),
    onSignUp: ref(false),
    leftDrawerOpen: ref(true),
    isVerifyEmail: ref(false),
    isWelcome: ref(true),
};

const store = useStore();

function toggleState(name: string, val: boolean) {
    if (name === 'leftDrawerOpen') {
        store.dispatch('handleDrawer', val);
    }
    if (name === 'isLogin') {
        console.log( name, val, "SS" )
        store.dispatch('handleLogin', val);
    }
    state[name].value = val;
}

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
onMounted(() => {
    if(localStorage.getItem("token")){
        store.dispatch('handleLogin', true);
        getProfile(store);
        getGames(store);
    }
    else{
        router.push(`/`);
    }
});
</script>

<template>
    <q-layout>
        <!-- Header -->
        <HeaderComponent
            :leftDrawerOpen="state?.leftDrawerOpen.value"
            :isLogin="state?.isLogin.value"
            :toggleState="(name: string, val: boolean)=>toggleState(name, val)"
        />

        <!-- SideBar -->
        <SideBarComponent
            :leftDrawerOpen.sync="state?.leftDrawerOpen.value"
            :isLogin="state?.isLogin?.value"
            :toggleState="toggleState"
        />

        <!-- Container -->
        <q-page-container style="background-color: #151515">
            <NuxtPage />
            <PageFooter /> 
            <MobilePageFooter />
            <MobileFooter />
        </q-page-container> 

        <!-- Footer -->
        <q-footer
            class="text-sm font-normal text-center z-0 pt-3 px-3 pb-40 sm:pb-3"
            style="background-color: #151515; color: #7d8396"
            >Copyright 2023 Europa777 All Right Reserved.</q-footer
        >
        <Login :open.sync="state?.onLogin.value" :toggleState="toggleState" />
        <SignUp :open.sync="state?.onSignUp.value" :toggleState="toggleState" />
        <VerifyEmail
            :open.sync="state?.isVerifyEmail.value"
            :toggleState="toggleState"
        />
        <Welcome
            :open.sync="state?.isWelcome.value"
            :toggleState="toggleState"
        />
    </q-layout>
</template>
