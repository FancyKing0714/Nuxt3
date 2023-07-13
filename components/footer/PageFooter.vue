<script setup lang="ts">
import {useStore} from 'vuex';
const store = useStore();
import { tran } from "~~/utils/translation";
</script>

<template>
    <div
    class="hidden sm:!block "
        style="
            background: radial-gradient(
                94.97% 94.97% at 50% 5.03%,
                #202531 0%,
                #202531 50.48%,
                #1f252e 100%
            );
        "
    >
        <div
            style="border-bottom: 1px solid rgba(123, 129, 147, 0.3)"
            class="p-5 grid grid-cols-4 justify-items-center"
        >
            <div class="hidden lg:!block lg:col-span-1" style="max-width: 196px">
                <q-img
                    style="max-width: 163px"
                    src="/imgs/logo_full.png"
                    alt="logo"
                    class="cursor-pointer"
                    @click="$router.push(linkTo('/'))"
                />
                <p class="pt-4" style="font-size: 9px; font-weight: 500">
                    {{ tran(`footerDescription`, store.state.lang) }}
                </p>
            </div>
            <div
                class="px-10 grid grid-cols-2 sm:grid-cols-4 md:gap-4 w-full lg:w-auto md:col-span-2 col-span-4"
            >
                <div class="col-span-1">
                    <p class="text-base font-semibold pb-2">{{ tran(`iGaming`, store.state.lang) }}</p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push(linkTo('/casino'))">
                        {{ tran(`All Games`, store.state.lang) }}
                    </p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push(linkTo('/casino?tab=slots'))">
                        {{ tran(`Slots`, store.state.lang) }}
                    </p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push(linkTo('/casino?tab=live'))">
                        {{ tran(`Live Casino`, store.state.lang) }}
                    </p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push(linkTo('/casino?tab=table'))">
                        {{ tran(`Table`, store.state.lang) }}
                    </p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push(linkTo('/casino?tab=roulette'))">
                        {{ tran(`Roulette`, store.state.lang) }}
                    </p>
                </div>
                <div class="col-span-1">
                    <p class="text-base font-semibold pb-2">{{ tran(`Quick Links`, store.state.lang) }}</p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="store.commit('handleOnRegister', true)">
                        {{ tran(`Registration`, store.state.lang) }}
                    </p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push(linkTo('/wallet/deposit'))">
                        {{ tran(`Deposit`, store.state.lang) }}
                    </p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push(linkTo('/bonus/available-bonus'))">
                        {{ tran(`Bonus`, store.state.lang) }}
                    </p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push(linkTo('/wallet/withdraw'))">
                        {{ tran(`Withdraw`, store.state.lang) }}
                    </p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push(linkTo('/wallet/deposit'))">
                        {{ tran(`Banking`, store.state.lang) }}
                    </p>
                </div>
                <div class="col-span-1">
                    <p class="text-base font-semibold pb-2">{{ tran(`About Us`, store.state.lang) }}</p>
                    <!-- <p class="pb-1" style="font-size: 11px; font-weight: 400">
                        About Europa777
                    </p> -->
                    <!-- <p class="pb-1" style="font-size: 11px; font-weight: 400">
                        Provably Fair
                    </p> -->
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push(linkTo('/contact-us'))">
                        {{ tran(`Contact Us`, store.state.lang) }}
                    </p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push(linkTo('/faq'))">
                        {{ tran(`FAQs`, store.state.lang) }}
                    </p>
                    <a href="https://affiliateslots.com/" target="_blank"><p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400">
                        {{ tran(`Affiliates`, store.state.lang) }}
                    </p></a>
                </div>
                <div class="col-span-1">
                    <p class="text-base font-semibold pb-2">{{ tran(`Help`, store.state.lang) }}</p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push(linkTo('/terms-and-conditions'))">
                        {{ tran(`Terms & Conditions`, store.state.lang) }}
                    </p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push(linkTo('/bonus-terms-and-conditions'))">
                        {{ tran(`Bonus Terms`, store.state.lang) }}
                    </p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push(linkTo('/privacy-and-security-policy'))">
                        {{ tran(`Privacy and Security Policy`, store.state.lang) }}
                    </p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push(linkTo('/responsible-gambling'))">
                        {{ tran(`Responsible Gambling`, store.state.lang) }}
                    </p>
                </div>
            </div>
            <div
                class="flex justify-around w-full lg:w-auto lg:block pt-4 lg:pt-0 lg:col-span-1 md:col-span-2 col-span-4"
            >
                <div class="lg:hidden" style="max-width: 196px">
                    <q-img
                        style="max-width: 163px"
                        src="/imgs/logo_full.png"
                        alt="logo"
                        class="cursor-pointer"
                        @click="$router.push(linkTo('/'))"
                    />
                    <p class="pt-4" style="font-size: 9px; font-weight: 500">
                        {{ tran(`footerDescription`, store.state.lang) }}
                    </p>
                </div>
                <div style="max-width: 196px">
                    <p class="text-base font-semibold pb-2">{{ tran(`Payment Methods`, store.state.lang) }}</p>
                    <q-img
                        class="w-full"
                        src="/imgs/footer/payment.png"
                        alt="logo"
                    />
                    <p class="text-base font-semibold pt-4 pb-2">{{ tran(`Follow Us`, store.state.lang) }}</p>
                    <div class="flex justify-between items-center">
                        <q-img
                            style="max-width: 17px"
                            src="/imgs/footer/telegram.png"
                            alt="logo"
                        />
                        <q-img
                            style="max-width: 17px"
                            src="/imgs/footer/youtube.png"
                            alt="logo"
                        />
                        <q-img
                            style="max-width: 17px"
                            src="/imgs/footer/twitter.png"
                            alt="logo"
                        />
                        <q-img
                            style="max-width: 17px"
                            src="/imgs/footer/instagram.png"
                            alt="logo"
                        />
                        <q-img
                            style="max-width: 17px"
                            src="/imgs/footer/linkdin.png"
                            alt="logo"
                        />
                        <img
                            style="max-height: 17px;"
                            src="/imgs/footer/facebook.png"
                            alt="logo"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="py-5 flex items-center justify-center">
            <div style="color: #7d8396">(604) 227-4664</div>
            <div
                style="width: 2px; height: 16px; background: #54647d"
                class="mx-5"
            ></div>
            <div style="color: #7d8396">support@europa777.com</div>
        </div>
    </div>
</template>
