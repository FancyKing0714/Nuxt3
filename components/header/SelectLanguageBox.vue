<script setup lang="ts">
import { useStore } from 'vuex';
const store = useStore();

let lang = 'en';
function onItemClick(item: any) {
    lang = item?.icon
    store.commit('handleSetLanguage', lang);
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
        class="hidden lg:!block btn-none float-right"
    >
        <template v-slot:label>
            <div
                class="flex items-center flex-nowrap items-center justify-start text-sm py-1"
            >
                <img
                    class="w-7 pr-1"
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
