<script setup lang="ts">
import { useStore } from 'vuex';
const store = useStore();
import { tran } from "~~/utils/translation";
const isDrawer = computed(() => {
    return ref(store.state.isDrawer);
});
</script>
<template>
    <div class="inset-0 rounded-md w-full px-6 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative p-7 text-center">
            <q-btn class="mt-1 h-24 px-16" color="primary">
                <div class="text-center">
                    <img
                        class="w-7 m-auto"
                        src="/imgs/add_currency.png"
                        alt="asdasd"
                    />
                    <p>{{tran('Add Currenc', store.state.lang)}}y</p>
                </div>
            </q-btn>
            <div
                :class="[
                    'grid grid-cols-1 md:grid-cols-2  gap-6 mt-8',
                    isDrawer.value ? 'lg:grid-cols-2' : 'lg:grid-cols-4',
                ]"
            >
                <div style="background: #1e1b1b" class="rounded p-4">
                    <p class="text-base font-bold">22.50 CAD</p>
                    <div
                        class="flex items-center justify-between text-xs font-medium"
                    >
                        <p>{{tran('Withdrawable', store.state.lang)}}</p>
                        <p>0.00</p>
                    </div>
                    <div
                        class="flex items-center justify-between text-xs font-medium"
                    >
                        <p>{{tran('Lock by Bonus', store.state.lang)}}</p>
                        <p>0.00</p>
                    </div>
                    <div
                        class="flex items-center justify-between text-xs font-medium"
                    >
                        <p>{{tran('Cash Back', store.state.lang)}}</p>
                        <p>0.00</p>
                    </div>
                    <div
                        class="flex items-center justify-between text-xs font-medium"
                    >
                        <p>{{tran('Total', store.state.lang)}}</p>
                        <p>0.00</p>
                    </div>
                    <q-btn
                        style="background: #11a449"
                        class="w-full mt-2"
                        :label="tran('Deposit', store.state.lang)"
                    />
                    <q-btn
                        class="w-full mt-2"
                        color="primary"
                        :label="tran('Withdrawl', store.state.lang)"
                        disable
                    />
                </div>
                <div style="background: #1e1b1b" class="rounded p-4">
                    <p class="text-base font-bold">22.50 CAD</p>
                    <div
                        class="flex items-center justify-between text-xs font-medium"
                    >
                        <p>{{tran('Withdrawable', store.state.lang)}}</p>
                        <p>0.00</p>
                    </div>
                    <div
                        class="flex items-center justify-between text-xs font-medium"
                    >
                        <p>{{tran('Lock by Bonus', store.state.lang)}}</p>
                        <p>0.00</p>
                    </div>
                    <div
                        class="flex items-center justify-between text-xs font-medium"
                    >
                        <p>{{tran('Cash Back', store.state.lang)}}</p>
                        <p>0.00</p>
                    </div>
                    <div
                        class="flex items-center justify-between text-xs font-medium"
                    >
                        <p>{{tran('Total', store.state.lang)}}</p>
                        <p>0.00</p>
                    </div>
                    <q-btn
                        style="background: #11a449"
                        class="w-full mt-2"
                        :label="tran('Deposit', store.state.lang)"
                    />
                    <q-btn
                        class="w-full mt-2"
                        color="primary"
                        :label="tran('Withdrawl', store.state.lang)"
                        disable
                    />
                </div>
                <div style="background: #1e1b1b" class="rounded p-4">
                    <p class="text-base font-bold">22.50 CAD</p>
                    <div
                        class="flex items-center justify-between text-xs font-medium"
                    >
                        <p>{{tran('Withdrawable', store.state.lang)}}</p>
                        <p>0.00</p>
                    </div>
                    <div
                        class="flex items-center justify-between text-xs font-medium"
                    >
                        <p>{{tran('Lock by Bonus', store.state.lang)}}</p>
                        <p>0.00</p>
                    </div>
                    <div
                        class="flex items-center justify-between text-xs font-medium"
                    >
                        <p>{{tran('Cash Back', store.state.lang)}}</p>
                        <p>0.00</p>
                    </div>
                    <div
                        class="flex items-center justify-between text-xs font-medium"
                    >
                        <p>{{tran('Total', store.state.lang)}}</p>
                        <p>0.00</p>
                    </div>
                    <q-btn
                        style="background: #11a449"
                        class="w-full mt-2"
                        :label="tran('Deposit', store.state.lang)"
                    />
                    <q-btn
                        class="w-full mt-2"
                        color="primary"
                        :label="tran('Withdrawl', store.state.lang)"
                        disable
                    />
                </div>
                <div style="background: #1e1b1b" class="rounded p-4">
                    <p class="text-base font-bold">22.50 CAD</p>
                    <div
                        class="flex items-center justify-between text-xs font-medium"
                    >
                        <p>{{tran('Withdrawable', store.state.lang)}}</p>
                        <p>0.00</p>
                    </div>
                    <div
                        class="flex items-center justify-between text-xs font-medium"
                    >
                        <p>{{tran('Lock by Bonus', store.state.lang)}}</p>
                        <p>0.00</p>
                    </div>
                    <div
                        class="flex items-center justify-between text-xs font-medium"
                    >
                        <p>{{tran('Cash Back', store.state.lang)}}</p>
                        <p>0.00</p>
                    </div>
                    <div
                        class="flex items-center justify-between text-xs font-medium"
                    >
                        <p>{{tran('Total', store.state.lang)}}</p>
                        <p>0.00</p>
                    </div>
                    <q-btn
                        style="background: #11a449"
                        class="w-full mt-2"
                        :label="tran('Deposit', store.state.lang)"
                    />
                    <q-btn
                        class="w-full mt-2"
                        color="primary"
                        :label="tran('Withdrawl', store.state.lang)"
                        disable
                    />
                </div>
            </div>
        </div>
    </div>
</template>
