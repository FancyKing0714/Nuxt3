<script setup lang="ts">
import { useQuasar } from 'quasar';
import CasinoSportToogleButton from '~~/components/header/CasinoSportToogleButton.vue';
import LoginRegisterButton from '~~/components/header/LoginRegisterButton.vue';
import SearchInput from '~~/components/header/SearchInput.vue';
import SelectLanguageBox from '~~/components/header/SelectLanguageBox.vue';
import ProfileButton from './ProfileButton.vue';
import WalletButton from './WalletButton.vue';
import ProfileButtonMobile from './ProfileButtonMobile.vue';
import { ref, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const props = defineProps({
    toggleState: {
        type: Function,
        required: true,
    },
    leftDrawerOpen: {
        type: Boolean,
        required: true,
    },
    isLogin: {
        type: Boolean,
        required: true,
    },
});
const { dark } = useQuasar();
dark.set(true);
let isProfile = ref(false);
function handleProfile(on: boolean) {
    isProfile.value = on;
}

onBeforeMount(() => {
    if(localStorage.getItem("token")){
        store.dispatch('handleLogin', true);
    }
});

</script>
<template>
    <QHeader class="px-1 py-1 sm:px-3" style="background-color: #292c35">
        <QToolbar class="py-1">
            <QImg
                class="cursor-pointer"
                style="max-width: 30px"
                :src="
                    leftDrawerOpen
                        ? `${'/imgs/header/menu_left.png'}`
                        : `${'/imgs/header/menu_right.png'}`
                "
                alt="menu"
                @click="
                    () => props.toggleState('leftDrawerOpen', !leftDrawerOpen)
                "
            />
            <QImg
                @click="$router.push('/')"
                class="q-pl-md cursor-pointer"
                style="max-width: 190px"
                src="/imgs/header/logo_full.png"
                alt="logo-full"
            />
            <div class="flex items-center justify-center w-full">
                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-start pt-1">
                        <div class="hidden lg:!block my-quto">
                            <CasinoSportToogleButton />
                        </div>
                        
                        <div class="hidden lg:!block pl-5">
                            <SearchInput />
                        </div>
                    </div>
                </div>
                <div class="sm:pl-5">
                    <LoginRegisterButton
                        v-if="store.state.isLogin === false"
                        :toggleState="
                            (name:string, val:boolean) =>
                                props.toggleState(name, val)
                        "
                    />
                </div>
            </div>
            <!-- <div class="w-full flex items-center justify-end"> -->
                <template v-if="store.state.isLogin">
                    <div class="pr-5 hidden md:!block">
                        <WalletButton />
                    </div>
                    <div class="pr-5">
                        <ProfileButton />
                    </div>
                    <div class="pr-5 text-center">
                        <div
                            @click="handleProfile(true)"
                            class="relative bg-gray-600 rounded-lg before:top-0 rotate-45 w-8 h-8 text-center overflow-hidden cursor-pointer"
                        >
                            <img
                                style="margin-left: 1px"
                                class="absolute -rotate-45 w-full h-auto"
                                src="/tmp/avatar.png"
                                alt="user"
                            />
                        </div>
                    </div>
                    <QBtn dense round flat icon="notifications">
                        <QBadge rounded color="red" floating transparent>
                            4
                        </QBadge>
                    </QBtn>
                </template>
                <SelectLanguageBox />
            <!-- </div> -->
        </QToolbar>
    </QHeader>
    <ProfileButtonMobile
        :open.sync="isProfile"
        :handleProfile="handleProfile"
    />
</template>
