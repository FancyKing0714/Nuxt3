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
    <QHeader class="bg-gray-800 px-2 py-1 sm:px-4">
        <QToolbar class="py-1 flex justify-between">
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
                    class="w-[190px]"
                >
                    <QImg
                        @click="$router.push(linkTo('/'))"
                        class=" ml-1 cursor-pointer "
                        style="max-width: 190px"
                        src="/imgs/header/logo_full.png"
                        alt="logo-full"
                    />
                </div>
                <div class="flex items-center justify-start pt-1">
                    <!-- <div class="hidden lg:!block my-quto">
                        <CasinoSportToogleButton />
                    </div> -->
                    
                    <div class="hidden md:!block pl-5">
                        <SearchInput />
                    </div>
                </div>
            </div>
            <div class="flex flex-row flex-nowrap">
                <div class="flex items-center justify-end">
                    <div class="sm:pl-5">
                        <LoginRegisterButton
                            v-if="store.state.isLogin === false"
                        />
                    </div>
                </div>
                <!-- <div class="w-full flex flex-nowrap items-center justify-end"> -->
                <template v-if="store.state.isLogin">
                    <div class="hidden lg:!block">
                        <WalletButton />
                    </div>
                    <div class="ml-2">
                        <ProfileButton />
                    </div>
                    <div class="sm:hidden text-center">
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
                <SelectLanguageBox />
            </div>
        </QToolbar>
    </QHeader>
    <ProfileButtonMobile />
</template>
