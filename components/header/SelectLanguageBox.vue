<script setup lang="ts">
let lang = 'en';
function onItemClick(item: any) {
    lang = item?.icon
}

const langs = [
    {
        name: 'English',
        icon: 'en',
    },
    {
        name: 'Spanish',
        icon: 'es',
    },
    {
        name: 'Portuguese',
        icon: 'pt',
    },
    {
        name: 'French',
        icon: 'fr',
    },
    {
        name: 'Serbian',
        icon: 'sr',
    },
];
</script>

<template>
    <q-btn-dropdown
        class="btn-none p-1 sm:p-2 ml-3 float-right"
        label-class="d-flex align-items-center"
    >
        <template v-slot:label>
            <div
                class="flex items-center flex-nowrap justify-start text-xxs sm:text-sm sm:pr-3"
            >
                <img
                    class="w-8 pr-1"
                    :src="`/imgs/header/${lang}_large.png`"
                    alt="lang"
                />
                {{ lang }}
            </div>
        </template>

        <q-list>
            <q-item
                v-for="lang in langs"
                clickable
                v-close-popup
                @click="onItemClick(lang)"
            >
                <q-item-section>
                    <q-item-label>
                        <div class="flex items-center justify-start">
                            <img
                                class="w-3"
                                :src="`/imgs/header/${lang.icon}.png`"
                                alt="lang"
                            />
                            <p class="text-xs pl-1">{{ lang.name }}</p>
                        </div>
                    </q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </q-btn-dropdown>
</template>
