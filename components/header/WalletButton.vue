<script setup lang="ts">
const prifileList = [
    {
        name: '12350.58 CAD',
    },
    {
        name: '331.64 USD',
    },
    {
        name: '107.99 EUR',
    },
    {
        name: '35.13 GBP',
    },
];

function onItemClick() {
    console.log('Clicked on an Item');
}
</script>

<template>
    <q-btn-group style="background: #3e4455" rounded>
        <q-btn-dropdown
            class="btn-none !rounded-3xl"
            label-class="d-flex align-items-center"
        >
            <template v-slot:label> <p class="text-xxs sm:text-xs pl-1">12350.58 CAD</p> </template>
            
            <q-list>
                <q-item
                    v-for="profile in prifileList"
                    clickable
                    v-close-popup
                    @click="onItemClick"
                >
                    <q-item-section>
                        <q-item-label>
                            <div class="flex items-center justify-start">
                                <p class="text-xxs sm:text-xs pl-1">{{ profile.name }}</p>
                            </div>
                        </q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>
        <div
            style="border: 1px solid #4D5160"
            class="q-pl-md q-pt-sm q-pb-sm q-pr-md !rounded-3xl flex items-center justify-start"
        >
            <img
                class="q-mr-sm"
                style="max-width: 22px"
                src="/imgs/header/wallet-icon.png"
                alt="wallet"
            />
            <p @click="$router.push('/wallet/Deposit')" class="text-xxs sm:text-xs pl-1 cursor-pointer">Deposit</p>
        </div>
    </q-btn-group>
</template>
