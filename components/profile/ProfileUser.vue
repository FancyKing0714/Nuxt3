<script setup lang="ts">
import { computed, ref } from 'vue';
import {useStore} from "vuex";
const store = useStore();
</script>

<template>
    <div class="relative square">
        <div style="background: #383d47" class="inset-0 rounded-md w-full">
            <div
                style="background: #3f4655"
                class="!w-1/3 square transform rotate-45 left-1/2 -translate-x-1/2 top-12 sm:top-28 md:top-10 lg:top-8 rounded-md overflow-hidden text-center"
            >
                <q-img
                    class="w-full transform -rotate-45"
                    alt="avatar"
                    src="/tmp/avatar.png"
                />
            </div>

            <div class="w-full text-center mt-16 sm:mt-52 md:mt-16 lg:mt-16">
                <p class="font-bold text-xl pb-3">{{store.state.User.username}}</p>
                <p style="color: #7b8193" class="text-sm pb-3">
                    {{store.state.User.email}}
                </p>
                <q-img class="w-5" src="/imgs/logout.png" />
            </div>
        </div>
    </div>
</template>
