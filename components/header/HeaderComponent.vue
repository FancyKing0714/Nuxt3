<script setup lang="ts">
import { useQuasar } from 'quasar';
import CasinoSportToogleButton from '~~/components/header/CasinoSportToogleButton.vue';
import LoginRegisterButton from '~~/components/header/LoginRegisterButton.vue';
import SearchInput from '~~/components/header/SearchInput.vue';
import SelectLanguageBox from '~~/components/header/SelectLanguageBox.vue';
import ProfileButton from './ProfileButton.vue';
import WalletButton from './WalletButton.vue';
import ProfileButtonMobile from './ProfileButtonMobile.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import {linkTo} from '~~/utils/link';

const store = useStore();
const { dark } = useQuasar();
dark.set(true);
</script>
<template>
    <QHeader class="bg-gray-800 py-1 px-2">
        <QToolbar class="p-2 flex justify-between">
            <div class="flex flex-row flex-nowrap items-center">
                <div class="w-[30px]">
                    <QImg
                        class="cursor-pointer"
                        style=""
                        :src="
                            store.state.isDrawer
                                ? `${'/imgs/header/menu_left.png'}`
                                : `${'/imgs/header/menu_right.png'}`
                        "
                        alt="menu"
                        @click="
                            () => store.commit('handleDrawer', !store.state.isDrawer)
                        "
                    />
                </div>
                <div 
                    class="w-[150px] lg:w-[190px]"
                    :class="store.state.isDrawer?'mr-12':'mr-3'"
                >
                    <QImg
                        @click="$router.push(linkTo('/'))"
                        class=" ml-1 cursor-pointer max-w-[150px] lg:max-w-[190px] mt-1 lg:mt-0"
                        src="/imgs/header/logo_full.png"
                        alt="logo-full"
                    />
                </div>
                <div class="flex items-center justify-start">
                    <!-- <div class="hidden lg:!block my-quto">
                        <CasinoSportToogleButton />
                    </div> -->
                    
                    <div class="hidden md:!block">
                        <SearchInput />
                    </div>
                </div>
            </div>
            <div class="flex flex-row flex-nowrap items-center">
                    <div class="sm:pl-5 pt-1">
                        <LoginRegisterButton
                            v-if="store.state.isLogin === false"
                        />
                    </div>
                <!-- <div class="w-full flex flex-nowrap items-center justify-end"> -->
                <template v-if="store.state.isLogin">
                    <div class="">
                        <WalletButton />
                    </div>
                    <div class="ml-2">
                        <ProfileButton />
                    </div>
                    <div class="sm:hidden text-center pl-2">
                        <div
                            @click="store.commit('handleMobileProfile', true)"
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
                    <!-- <QBtn dense round flat icon="notifications">
                        <QBadge rounded color="red" floating transparent>
                            4
                        </QBadge>
                    </QBtn> -->
                </template>
                <div>
                    <SelectLanguageBox />
                </div>
            </div>
        </QToolbar>
    </QHeader>
    <ProfileButtonMobile />
</template>
