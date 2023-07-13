<template>
    <div class="inset-0 rounded-md w-full px-7 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative">
            <div class="flex items-center justify-between pb-4">
                <p class="text-base font-bold">{{tran('Responsible Gambling', store.state.lang)}}</p>
                <q-toggle
                    size="xs"
                    v-model="shape"
                    val="xs"
                    leftLabel
                    :label="tran('Advanced Mode', store.state.lang)"
                />
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div
                    v-for="limit in limits"
                    :limit="limit"
                    style="background: #494e5d"
                    class="py-4 px-2 text-center rounded-md"
                >
                    <p class="text-base pb-3 font-bold">{{ tran(limit?.title, store.state.lang) }}</p>
                    <p
                        style="min-height: 86px"
                        class="text-xs font-medium pb-3"
                    >
                        {{ tran(limit?.content, store.state.lang) }}
                    </p>
                    <q-btn class="!text-base" color="primary" :label="tran('Add New', store.state.lang)" />
                </div>
            </div>
            <div class="grid grid-cols-1 gap-4 pt-4">
                <div style="background: #494e5d" class="py-4 px-2 rounded-md">
                    <p class="text-base pb-3 font-bold">{{ tran('Session Limit', store.state.lang) }}</p>
                    <p class="text-xs font-medium pb-3">
                        {{tran('sessionlimit', store.state.lang)}}
                    </p>
                    <div class="flex items-center justify-start">
                        <q-input
                            class="w-1/2 pr-2"
                            filled
                            v-model="number"
                            type="number"
                            :suffix="tran('Min', store.state.lang)"
                            :dense="true"
                        >
                        </q-input>
                        <q-btn color="primary" :label="tran('SET', store.state.lang)" />
                    </div>
                </div>
                <div style="background: #494e5d" class="py-4 px-2 rounded-md">
                    <p class="text-base pb-3 font-bold">{{tran('Cooling Off', store.state.lang)}}</p>
                    <p class="text-xs font-medium pb-3">
                        {{tran('coolingoff', store.state.lang)}}
                    </p>
                    <div class="flex items-center justify-start">
                        <q-select
                            class="w-1/2 pr-2"
                            standout="text-white"
                            :placeholder="tran('Document Type', store.state.lang)"
                            v-model="shape"
                            :options="[]"
                            :dense="true"
                        />
                        <q-btn color="primary" :label="tran('SET', store.state.lang)" />
                    </div>
                </div>
                <div style="background: #494e5d" class="py-4 px-2 rounded-md">
                    <p class="text-base pb-3 font-bold">{{tran('Self Exclusion', store.state.lang)}}</p>
                    <p class="text-xs font-medium pb-3">
                        {{tran('selfexclusion', store.state.lang)}}
                    </p>
                    <div class="flex items-center justify-start">
                        <q-select
                            class="w-1/2 pr-2"
                            standout="text-white"
                            :placeholder="tran('Document Type', store.state.lang)"
                            v-model="shape"
                            :options="[]"
                            :dense="true"
                        />
                        <q-btn color="primary" :label="tran('SET', store.state.lang)" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
const shape = ref(['']);
const number = ref(0);
const limits = [
    {
        title: 'Deposit Limits',
        content:
            'Your account can be set with deposit limits. This setting limits the amount you can deposit per day, week or month.',
    },
    {
        title: 'Loss Limits',
        content:
            'Your account can be set with loss limits. This setting limits the amount you can lose per  day, week or month.',
    },
    {
        title: 'Wager Limits',
        content:
            'Your account can be set with wager limits. This setting controls the amount of  money you can wager per day, week or month.',
    },
];
</script>
