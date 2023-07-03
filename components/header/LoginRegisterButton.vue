<script setup lang="ts">
import { useStore } from 'vuex';
const store = useStore();
</script>

<template>
    <q-btn-group rounded class="bg-primary">
        <div
            class="sm:py-2 sm:px-3 px-3 py-2 text-xs sm:text-sm text-white !rounded-3xl cursor-pointer whitespace-nowrap"
            @click="store.commit('handleOnLogin', true)"
        >
            Log In
        </div>
        <div
            style="background-color: #3f4655"
            class="sm:py-2 sm:px-3 px-3 py-2 text-xs sm:text-sm !rounded-3xl flex items-center justify-center cursor-pointer"
            @click="store.commit('handleOnRegister', true)"
        >
            Registration
        </div>
    </q-btn-group>
</template>
