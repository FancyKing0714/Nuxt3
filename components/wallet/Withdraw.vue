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
                                {{tran('Min', store.state.lang)}} $30
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-span-6">
                    <p class="font-bold text-base py-2">{{tran('Interac R eTransfer', store.state.lang)}}</p>
                    <div class="pb-4">
                        <div class="py-2">
                            <span class="font-bold text-base"
                                >{{tran('Withdrawal Sum', store.state.lang)}}</span
                            >
                            <span class="px-12"></span>
                            <span style="color: #949497" class="text-xs py-4">
                                {{tran('Instant', store.state.lang)}} {{tran('Min', store.state.lang)}}: 30 {{tran('Max', store.state.lang)}}: 3,000
                            </span>
                        </div>
                        <q-input
                            class="w-full pr-2"
                            filled
                            v-model="number"
                            type="number"
                            suffix="CAD"
                            :dense="true"
                        />
                    </div>
                    <div class="pb-4">
                        <div class="py-2">
                            <span class="font-bold text-base"
                                >{{tran('R Trade-Mark of Interac Corp.', store.state.lang)}}</span
                            >
                            <span class="px-12"></span>
                            <span style="color: #949497" class="text-xs py-4">
                                {{tran('User Under License', store.state.lang)}}
                            </span>
                        </div>
                        <q-input
                            class="w-full pr-2"
                            filled
                            v-model="number"
                            type="number"
                            suffix="CAD"
                            :dense="true"
                        />
                    </div>

                    <q-btn
                        class="px-10 h-10 mt-1"
                        color="primary"
                        :label="tran('Withdraw', store.state.lang)+' 30 CAD'"
                    />
                </div>
            </div>

            <div class="sm:hidden">
                <div
                    style="color: rgba(152, 154, 159, 0.5)"
                    class="flex items-center justify-between pb-3"
                >
                    <span
                        :class="[
                            'font-medium text-base cursor-pointer',
                            step > 1 ? 'text-green-700' : '',
                        ]"
                        @click="
                            () => {
                                step = 1;
                            }
                        "
                        ><q-img
                            class="w-6"
                            src="/imgs/method.svg"
                        />{{tran('Method', store.state.lang)}}</span
                    >
                    <span
                        :class="[
                            'font-medium text-base cursor-pointer',
                            step > 2 ? 'text-green-700' : '',
                        ]"
                        @click="
                            () => {
                                step = 2;
                            }
                        "
                        ><q-img
                            class="w-6"
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
                        </div>
                        <q-btn
                            style="background: #11a449"
                            class="w-full mt-2"
                            :label="tran('Next', store.state.lang)"
                            @click="
                                () => {
                                    step = 2;
                                }
                            "
                        />
                    </q-step>

                    <q-step
                        :name="2"
                        title="STEP 2"
                        icon="left"
                        :done="step > 2"
                    >
                        <p class="font-bold text-base py-2">
                            {{tran('Interac R eTransfer', store.state.lang)}}
                        </p>
                        <div class="pb-4">
                            <div class="py-2">
                                <span class="font-bold text-base"
                                    >{{tran('Withdrawal Sum', store.state.lang)}}</span
                                >
                                <span class="px-12"></span>
                                <span
                                    style="color: #949497"
                                    class="text-xs py-4"
                                >
                                {{tran('Instant', store.state.lang)}} {{tran('Min', store.state.lang)}}: 30 {{tran('Max', store.state.lang)}}: 3,000
                                </span>
                            </div>
                            <q-input
                                class="w-full pr-2"
                                filled
                                v-model="number"
                                type="number"
                                suffix="CAD"
                                :dense="true"
                            />
                        </div>
                        <div class="pb-4">
                            <div class="py-2">
                                <span class="font-bold text-base"
                                    >{{tran('R Trade-Mark of Interac Corp.', store.state.lang)}}</span
                                >
                                <span class="px-12"></span>
                                <span
                                    style="color: #949497"
                                    class="text-xs py-4"
                                >
                                {{tran('User Under License', store.state.lang)}}
                                </span>
                            </div>
                            <q-input
                                class="w-full pr-2"
                                filled
                                v-model="number"
                                type="number"
                                suffix="CAD"
                                :dense="true"
                            />
                        </div>

                        <q-btn
                            class="px-10 h-10 mt-1"
                            color="primary"
                            :label="tran('Withdraw', store.state.lang)+' 30 CAD'"
                        />
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
import {ref} from 'vue';
const step = ref(1);
const shape = ref(['']);
const number = 0;
const currency = 'CAD';
const options = ['CAD', 'USD'];
const paymentList = [
    {
        icon: 'tron',
        balance: '',
    },
    {
        icon: 'ethereum',
        balance: '',
    },
    {
        icon: 'bitcoin',
        balance: '',
    },
    {
        icon: 'ripple',
        balance: '',
    },
    {
        icon: 'usdt',
        balance: '',
    },
    {
        icon: 'bank',
        balance: '',
    },
    {
        icon: 'mifinity',
        balance: '',
    },
    {
        icon: 'astropay',
        balance: '',
    },
    {
        icon: 'ecopayz',
        balance: '',
    },
    {
        icon: 'interac',
        balance: '',
    },
    {
        icon: 'binance',
        balance: '',
    },
    {
        icon: 'litecoin',
        balance: '',
    },
    {
        icon: 'cardano',
        balance: '',
    },
    {
        icon: 'bitcoin_cash',
        balance: '',
    },
];
</script>
