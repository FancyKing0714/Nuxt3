<script setup lang="ts">
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
</script>

<template>
    <q-btn-group rounded class="bg-primary mr-3">
        <div
            class="sm:py-2 sm:px-3 px-3 py-2 text-xs md:text-sm text-white !rounded-3xl cursor-pointer whitespace-nowrap"
            @click="store.commit('handleOnLogin', true)"
        >
        {{tran('Log In', store.state.lang)}}
        </div>
        <div
            style="background-color: #3f4655"
            class="sm:py-2 sm:px-3 px-3 py-2 text-xs md:text-sm !rounded-3xl flex items-center justify-center cursor-pointer"
            @click="store.commit('handleOnRegister', true)"
        >
        {{tran('Registration', store.state.lang)}}
        </div>
    </q-btn-group>
</template>
