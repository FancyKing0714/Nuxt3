<script setup lang="ts">
import BonusCard from './BonusCard.vue';
import { useStore } from 'vuex';
const store = useStore();
const isDrawer = computed(() => {
    return ref(store.state.isDrawer);
});
const categories = [
    {
        background: '1',
        img: 'pack',
        comment:
            'The Player is responsible for checking and understanding bonus terms before engaging in any bonus promotional offers...',
        slotName: '1',
    },
    {
        background: '2',
        img: 'cash_back',
        comment:
            'Our cashback bonus has a very simple rule: the more you deposit, the more you get back! Enjoy up to 20% cashback that is credited...',
        slotName: '2',
    },
    {
        background: '3',
        img: 'promotion',
        comment:
            'The Player is responsible for checking and understanding bonus terms before engaging in any bonus promotional offers...',
        slotName: '3',
    },
    {
        background: '4',
        img: 'sportbook',
        comment:
            'Our cashback bonus has a very simple rule: the more you deposit, the more you get back! Enjoy up to 20% cashback that is credited...',
        slotName: '4',
    },
    {
        background: '5',
        img: 'happy',
        comment:
            'The Player is responsible for checking and understanding bonus terms before engaging in any bonus promotional offers...The Player is responsible for checking and understanding bonus terms before engaging in any bonus promotional offers...',
        slotName: '5',
    },
    {
        background: '6',
        img: 'up',
        comment:
            'The Player is responsible for checking and understanding bonus terms before engaging in any bonus promotional offers...',
        slotName: '6',
    },
];
</script>

<template>
    <div class="inset-0 rounded-md w-full px-7 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative mt-10">
            <div class="grid md:grid-cols-2 gap-4">
                <BonusCard
                    v-for="category in categories"
                    :key="category.slotName"
                    v-bind="category"
                >
                    <template v-slot:1>
                        <div
                            class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg"
                        >
                            <p
                                :class="[
                                    'font-bold text-sm sm:text-xl xl:text-2xl',
                                    isDrawer.value
                                        ? 'lg:text-sm'
                                        : 'lg:text-2xl',
                                ]"
                            >
                                WELCOME
                            </p>
                            <p>
                                <span
                                    style="color: #ffd62f"
                                    :class="[
                                        'font-black text-sm sm:text-2xl xl:text-3xl',
                                        isDrawer.value
                                            ? 'lg:text-sm'
                                            : 'lg:text-3xl',
                                    ]"
                                    >200%</span
                                >&nbsp;
                                <span
                                    :class="[
                                        'font-black text-sm sm:text-lg xl:text-xl',
                                        isDrawer.value
                                            ? 'lg:text-sm'
                                            : 'lg:text-xl',
                                    ]"
                                    >BONUS</span
                                >
                            </p>
                            <p>
                                <span
                                    style="color: #ffd62f"
                                    :class="[
                                        'font-black text-sm sm:text-2xl xl:text-3xl',
                                        isDrawer.value
                                            ? 'lg:text-sm'
                                            : 'lg:text-3xl',
                                    ]"
                                    >+100</span
                                >&nbsp;
                                <span
                                    :class="[
                                        'font-black text-sm sm:text-lg xl:text-xl',
                                        isDrawer.value
                                            ? 'lg:text-sm'
                                            : 'lg:text-xl',
                                    ]"
                                    >FREE SPINS</span
                                >
                            </p>
                        </div>
                    </template>
                    <template v-slot:2>
                        <div
                            class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8"
                        >
                            <p
                                :class="[
                                    'font-medium text-sm md:text-xl xl:text-2xl',
                                    isDrawer.value
                                        ? 'lg:text-sm'
                                        : 'lg:text-2xl',
                                ]"
                            >
                                DAILY CASHBACK
                            </p>
                            <div class="flex items-center justify-start">
                                <p
                                    :class="[
                                        'font-medium text-sm md:text-xl xl:text-2xl',
                                        isDrawer.value
                                            ? 'lg:text-sm'
                                            : 'lg:text-2xl',
                                    ]"
                                >
                                    UP TO
                                </p>
                                <p
                                    style="color: #ffd62f"
                                    :class="[
                                        'text-3xl md:text-4xl xl:text-5xl font-black pl-1',
                                        isDrawer.value
                                            ? 'lg:text-xl'
                                            : 'lg:text-5xl',
                                    ]"
                                >
                                    20%
                                </p>
                            </div>
                        </div>
                    </template>
                    <template v-slot:3>
                        <div
                            class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg"
                        >
                            <p
                                :class="[
                                    'font-medium text-sm md:text-lg xl:text-2xl',
                                    isDrawer.value
                                        ? 'lg:text-sm'
                                        : 'lg:text-2xl',
                                ]"
                            >
                                2ND/3RD DEPOSIT
                            </p>
                            <p
                                :class="[
                                    'font-black text-sm md:text-lg xl:text-3xl',
                                    isDrawer.value
                                        ? 'lg:text-sm'
                                        : 'lg:text-3xl',
                                ]"
                                style="color: #ffd62f"
                            >
                                <span>100%</span>&nbsp;
                                <span>BONUS</span>
                            </p>
                            <p
                                :class="[
                                    'font-medium text-sm md:text-lg xl:text-2xl',
                                    isDrawer.value
                                        ? 'lg:text-sm'
                                        : 'lg:text-2xl',
                                ]"
                            >
                                UP TO $600
                            </p>
                        </div>
                    </template>
                    <template v-slot:4>
                        <div
                            class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg"
                        >
                            <p class="text-xs">Get a special</p>
                            <p
                                :class="[
                                    'font-bold text-sm md:text-lg xl:text-2xl',
                                    isDrawer.value
                                        ? 'lg:text-sm'
                                        : 'lg:text-2xl',
                                ]"
                            >
                                BONUS ON
                            </p>
                            <p
                                :class="[
                                    'font-black text-md md:text-lg xl:text-3xl',
                                    isDrawer.value
                                        ? 'lg:text-sm'
                                        : 'lg:text-3xl',
                                ]"
                                style="color: #ffd62f"
                            >
                                SPORTBOOK
                            </p>
                        </div>
                    </template>
                    <template v-slot:5>
                        <div
                            class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg"
                        >
                            <p
                                :class="[
                                    'font-bold text-sm md:text-lg xl:text-2xl',
                                    isDrawer.value
                                        ? 'lg:text-sm'
                                        : 'lg:text-2xl',
                                ]"
                            >
                                HAPPY MONDAY
                            </p>
                            <p
                                :class="[
                                    'font-black text-sm md:text-lg xl:text-2xl',
                                    isDrawer.value
                                        ? 'lg:text-sm'
                                        : 'lg:text-2xl',
                                ]"
                                style="color: #ffd62f"
                            >
                                100 FREE SPINS
                            </p>
                            <p class="text-xxs sm:text-xs">
                                WHEN YOU MAKE A DEPOSIT
                            </p>
                        </div>
                    </template>
                    <template v-slot:6>
                        <div
                            class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg"
                        >
                            <p class="sm:text-xxs text-xs">FRIDAY</p>
                            <p
                                :class="[
                                    'font-bold text-sm md:text-lg xl:text-2xl',
                                    isDrawer.value
                                        ? 'lg:text-sm'
                                        : 'lg:text-2xl',
                                ]"
                            >
                                50% UP TO 250.00
                            </p>
                            <p
                                :class="[
                                    'font-black text-sm md:text-lg xl:text-2xl',
                                    isDrawer.value
                                        ? 'lg:text-sm'
                                        : 'lg:text-2xl',
                                ]"
                                style="color: #ffd62f"
                            >
                                +50 FREE SPINS
                            </p>
                        </div>
                    </template>
                </BonusCard>
            </div>
        </div>
    </div>
</template>
