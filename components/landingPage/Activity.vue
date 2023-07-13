<script setup lang="ts">
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
</script>

<template>
    <div class="md:flex justify-center items-center px-3 pt-4 md:pt-0">
        <img class="w-44" src="/imgs/crypto_acceptable.png" />
        <div class="flex flex-row flex-nowrap items-center justify-start md:pl-2 pt-4 md:pt-0">
            <img class="w-8" src="/imgs/18.png" />
            <p class="pl-2" style="font-size: 10px; color: #7D8396; max-width: 420px;">
                {{tran('activity', store.state.lang)}}
            </p>
        </div>
    </div>
</template>
