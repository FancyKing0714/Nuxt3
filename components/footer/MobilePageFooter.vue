<script setup lang="ts">
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
const store = useStore();
const router = useRouter();

const list = [
    {
        title: 'iGaming',
        content: [
            {
                name: 'All Games',
                link: 'casino',
            },
            {
                name: 'Slots',
                link: 'casino?tab=slots',
            },
            {
                name: 'Live Casino',
                link: 'casino?tab=live',
            },
            {
                name: 'Table',
                link: 'casino?tab=table',
            },
            {
                name: 'Roulette',
                link: 'casino?tab=roulette',
            },
        ],
    },
    {
        title: 'Quick Links',
        content: [
            {
                name: 'Registration',
                link: 'register'
            },
            {
                name: 'Deposit',
                link: "/wallet/deposit",
            },
            {
                name: 'Bonus',
                link: "/bonus/available-bonus",
            },
            {
                name: 'Withdraw',
                link: "/wallet/withdraw",
            },
            {
                name: 'Banking',
                link: "/wallet/deposit",
            },
        ],
    },
    {
        title: 'About Us',
        content: [
            // {
            //     name: 'About Europa777',
            //     link: '',
            // },
            // {
            //     name: 'Provably Fair',
            //     link: '',
            // },
            {
                name: 'Contact Us',
                link: '/contact-us',
            },
            {
                name: 'FAQ’s',
                link: '/faq',
            },
            {
                name: 'Affiliates',
                link: 'Affiliates',
            },
        ],
    },
    {
        title: 'Help',
        content: [
            {
                name: 'Terms & Conditions',
                link: "/terms-and-conditions",
            },
            {
                name: 'Bonus Terms',
                link: "/bonus-terms-and-conditions",
            },
            {
                name: 'Privacy and Security Policy',
                link: "/privacy-and-security-policy",
            },
            {
                name: 'Responsible Gambling',
                link: "/responsible-gambling",
            },
        ],
    },
];

const itemClick = (link) => {
    if(link == "register")
        store.commit('handleOnRegister',true);
    else
        router.push(linkTo(link));
}
</script>

<template>
    <div
        class="sm:hidden"
        style="
            background: radial-gradient(
                94.97% 94.97% at 50% 5.03%,
                #202531 0%,
                #202531 50.48%,
                #1f252e 100%,
            );
        "
    >
        <div
            style="border-bottom: 1px solid rgba(123, 129, 147, 0.3)"
            class="p-5 grid grid-cols-1"
        >
            <button
                style="border-bottom: 1px solid rgba(123, 129, 147, 0.3)"
                v-for="item in list"
                class="group focus:outline-none p-1 rounded-sm relative"
            >
                <div
                    class="flex items-center justify-between h-12 font-semibold relative px-2"
                >
                    <div
                        class="w-full h-full absolute left-0 top-0 opacity-80 rounded-sm"
                    ></div>
                    <div class="relative flex justify-start items-center">
                        <p style="font-size: 13px" class="font-medium p-3">
                            {{ item?.title }}
                        </p>
                    </div>
                    <q-img
                        class="w-2 relative"
                        src="/imgs/sidebar/accordion_icon.svg"
                    />
                </div>
                <div
                    class="relative max-h-0 overflow-hidden duration-300 group-focus:max-h-40"
                >
                <div
                    v-for="topic in item?.content"
                >
                    <a 
                        href="https://affiliateslots.com/" 
                        target="_blank"
                    >    
                        <p
                            v-if=" topic?.link == 'Affiliates' "
                            class="pb-1 py-2 px-6 text-xs text-left"
                        >
                            {{ topic?.name }}
                        </p>
                    </a>
                    <p
                        v-if=" topic?.link != 'Affiliates' "
                        class="pb-1 py-2 px-6 text-xs text-left"
                        @click="itemClick(topic?.link)"
                    >
                        {{ topic?.name }}
                    </p>
                </div>
                </div>
            </button>

            <div class="m-auto pt-4 text-center">
                <q-img
                    style="max-width: 163px"
                    src="/imgs/logo_full.png"
                    alt="logo"
                    class="cursor-pointer"
                    @click="$router.push(linkTo('/'))"
                />
                <p class="pt-4" style="font-size: 9px; font-weight: 500">
                    You’re in luck! You have landed on the best online casino in
                    Canada. But that is not all, Europa777 welcomes not only
                    Canadian players, but players from around the world too. Try
                    your luck on our extraordinary selection of games and become
                    one of the luckiest players out there.
                </p>
            </div>

            <div class="m-auto pt-4" style="max-width: 280px">
                <p class="text-base font-semibold pb-2">Payment Methods</p>
                <q-img
                    class="w-full"
                    src="/imgs/footer/payment.png"
                    alt="logo"
                />
                <p class="text-base font-semibold pt-4 pb-2">Follow Us</p>
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
                        style="max-height: 17px"
                        src="/imgs/footer/facebook.png"
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
