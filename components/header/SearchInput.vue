<script setup lang="ts">
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
</script>

<template>
    <div
        class="bg-gray-700 rounded-lg h-9 flex flex-nowrap items-center pl-1 pr-2"
        @click="store.commit('handleOnSearchDialog', {a:true, b:''});"
    >
        <span class="w-[22px]">
            <q-icon
                class="mr-2"
                style="max-width: 22px"
                name="search"
                size="sm"
            />
        </span>
        <p
            class="text-md rounded-lg"
        >
        {{tran('Search for Games', store.state.lang)}}
        </p>
    </div>
</template>
