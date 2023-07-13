.
<template>
    <div class="inset-0 rounded-md w-full px-6 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative">
            <div class="hidden sm:!grid grid-cols-10 gap-4">
                <div class="col-span-4">
                    <div class="flex items-center justify-between w-full">
                        <p class="font-bold text-base">{{tran('Balance', store.state.lang)}}</p>
                        <div class="flex items-center justify-around">
                            <span class="font-bold text-base pr-2">0.00</span>
                            <q-select
                                style="color: rgba(255, 255, 255, 0.35)"
                                class="text-xs"
                                v-model="currency"
                                :options="options"
                                borderless
                                :dense="true"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div
                            v-for="payment in paymentList"
                            class="rounded-md bg-white w-full h-10 text-center flex items-center justify-center flex-col"
                        >
                            <img
                                style="max-height: 50%"
                                :src="`/imgs/payment/${payment?.icon}.png`"
                                spinner-color="primary"
                            />
                            <p class="text-xs" style="color: #535559">
                                {{tran('Min', store.state.lang)}} C$30
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-span-6">
                    <p class="font-bold text-base py-2">{{tran('Interac', store.state.lang)}}</p>
                    <p class="font-bold text-base">{{tran('Deposit Sum', store.state.lang)}}</p>

                    <div class="flex justify-start items-center py-4">
                        <q-btn class="w-36 h-10" color="primary" label="50" />
                        <div class="p-1"></div>
                        <q-btn
                            style="background: #120f0f 95%"
                            class="w-36 h-10"
                            label="100"
                        />
                    </div>

                    <q-input
                        filled
                        v-model="number"
                        type="number"
                        :dense="true"
                    >
                        <q-btn
                            label="CAD"
                            color="primary"
                        />
                    </q-input>

                    <div class="flex items-center justify-between pt-4">
                        <p class="text-base font-bold">{{tran('Do you have a bonus code?', store.state.lang)}}</p>
                    </div>

                    <div class="flex items-center justify-start">
                        <q-input
                            class="w-36 mr-2"
                            filled
                            v-model="number"
                            type="number"
                            :dense="true"
                        />
                        <q-btn class="w-36 h-10" color="primary" :label="tran('Add', store.state.lang)" />
                    </div>

                    <p style="color: #d0d0d8" class="text-xs py-4">
                        {{tran('No Bonuses Available', store.state.lang)}}
                    </p>
                </div>
            </div>

            <div class="sm:hidden">
                <div
                    style="color: rgba(152, 154, 159, 0.5)"
                    class="flex items-center justify-between pb-3"
                >
                    <span
                        :class="['font-medium text-base cursor-pointer', step > 1 ? 'text-green-700': '']"
                        @click="
                            () => {
                                step = 1;
                            }
                        "
                        ><q-img
                            class="w-6 mr-1"
                            src="/imgs/method.svg"
                        />{{tran('Method', store.state.lang)}}</span
                    >
                    <span
                    :class="['font-medium text-base cursor-pointer', step > 2 ? 'text-green-700': '']"
                        @click="
                            () => {
                                step = 2;
                            }
                        "
                        ><q-img class="w-6 mr-1" src="/imgs/data.svg" />{{tran('Data', store.state.lang)}}</span
                    >
                    <span
                        class="font-medium text-base cursor-pointer"
                        @click="
                            () => {
                                step = 3;
                            }
                        "
                        ><q-img
                            class="w-6 mr-1"
                            src="/imgs/submit.svg"
                        />{{tran('Submit', store.state.lang)}}</span
                    >
                </div>
                <q-stepper
                    v-model="step"
                    ref="stepper"
                    color="primary"
                    animated
                >
                    <q-step :name="1" title="STEP 1" :done="step > 1">
                        <div class="flex items-center justify-between w-full">
                            <p class="font-bold text-base">{{tran('Balance', store.state.lang)}}</p>
                            <div class="flex items-center justify-around">
                                <span class="font-bold text-base pr-2"
                                    >0.00</span
                                >
                                <q-select
                                    style="color: rgba(255, 255, 255, 0.35)"
                                    class="text-xs"
                                    v-model="currency"
                                    :options="options"
                                    borderless
                                    :dense="true"
                                />
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <div
                                v-for="payment in paymentList"
                                class="rounded-md bg-white w-full h-10 text-center flex items-center justify-center flex-col"
                            >
                                <img
                                    style="max-height: 50%"
                                    :src="`/imgs/payment/${payment?.icon}.png`"
                                    spinner-color="primary"
                                />
                                <p class="text-xs" style="color: #535559">
                                    {{tran('Min', store.state.lang)}} $30
                                </p>
                            </div>
                            <q-btn
                                style="background: #11a449"
                                class="w-full mt-2"
                                :label="tran('Deposit', store.state.lang)"
                                @click="
                                    () => {
                                        step = 2;
                                    }
                                "
                            />
                        </div>
                    </q-step>

                    <q-step
                        :name="2"
                        title="STEP 2"
                        icon="left"
                        :done="step > 2"
                    >
                        <div class="flex items-center justify-between">
                            <p class="font-bold text-base py-2">{{tran('Credit Card', store.state.lang)}}</p>
                            <div class="bg-white rounded-md w-1/2 p-3">
                                <img alt="card" src="/imgs/payment/visa.png" />
                            </div>
                        </div>
                        <p class="font-bold text-base">{{tran('Deposit Sum', store.state.lang)}}</p>
                        <div class="grid grid-cols-2 py-4">
                            <q-btn
                                class="w-full h-10 mr-1"
                                color="primary"
                                label="50"
                            />
                            <q-btn
                                style="background: #120f0f 95%"
                                class="w-full h-10 ml-1"
                                label="100"
                            />
                        </div>
                        <q-input
                            class="w-full mt-2"
                            filled
                            v-model="number"
                            :dense="true"
                        >
                            <q-btn
                                color="primary"
                                label="CAD"
                            />
                        </q-input>
                        <div class="grid grid-cols-2">
                            <q-btn
                                class="w-full mt-2 mr-1"
                                color="primary"
                                :label="tran('Back', store.state.lang)"
                                @click="
                                    () => {
                                        step = 1;
                                    }
                                "
                            />
                            <q-btn
                                style="background: #11a449"
                                class="w-full mt-2 ml-1"
                                :label="tran('Next', store.state.lang)"
                                @click="
                                    () => {
                                        step = 3;
                                    }
                                "
                            />
                        </div>
                    </q-step>

                    <q-step :name="3" title="STEP 3" :done="step > 3">
                        <div class="flex items-center justify-between py-4">
                            <p class="text-base font-bold">{{tran('Do you have a bonus code?', store.state.lang)}}</p>
                        </div>

                        <div class="grid grid-cols-2 gap-2">
                            <q-input
                                class="w-full"
                                filled
                                v-model="number"
                                type="number"
                                :dense="true"
                            />
                            <q-btn class="w-full" color="primary" :label="tran('Add', store.state.lang)" />
                        </div>

                        <p style="color: #d0d0d8" class="text-xxs py-4">
                            {{tran('No Bonuses Available', store.state.lang)}}
                        </p>
                        <q-btn class="w-full" color="primary" :label="tran('Deposit', store.state.lang)" />
                    </q-step>
                </q-stepper>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
const shape = ref(['']);
const number = '';
const currency = 'CAD';
const options = ['CAD', 'USD'];
const paymentList = [
    {
        icon: 'visa',
        balance: '',
    },
    {
        icon: 'mastercard',
        balance: '',
    },
    {
        icon: 'bitcoin',
        balance: '',
    },
    {
        icon: 'skrill',
        balance: '',
    },
    {
        icon: 'tron',
        balance: '',
    },
    {
        icon: 'ethereum',
        balance: '',
    },
    {
        icon: 'usdt',
        balance: '',
    },
    {
        icon: 'ripple',
        balance: '',
    },
    {
        icon: 'interac',
        balance: '',
    },
    {
        icon: 'jeton',
        balance: '',
    },
    {
        icon: 'binance',
        balance: '',
    },
    {
        icon: 'astropay',
        balance: '',
    },
    {
        icon: 'neosurf',
        balance: '',
    },
    {
        icon: 'neteuer',
        balance: '',
    },
    {
        icon: 'much',
        balance: '',
    },
    {
        icon: 'ecopayz',
        balance: '',
    },
    {
        icon: 'cardano',
        balance: '',
    },
    {
        icon: 'litecoin',
        balance: '',
    },
    {
        icon: 'sticpay',
        balance: '',
    },
    {
        icon: 'cashtocode',
        balance: '',
    },
    {
        icon: 'mifinity',
        balance: '',
    },
    {
        icon: 'bitcoin_cash',
        balance: '',
    },
];

const step = ref(1);
</script>
