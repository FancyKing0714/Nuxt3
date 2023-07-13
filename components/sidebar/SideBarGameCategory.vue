<template>
    <div class="max-h-0 overflow-hidden duration-500" :class="!!down && 'max-h-52'">
        <a class="flex items-center mx-4 hover:border-b-2 border-blue-500" @click="$router.push(linkTo('/casino'))">
            <div class="flex justify-start items-center">
                <q-img
                    class="w-4"
                    src="/imgs/sidebar/games.png"
                    alt="games"
                />
                <p
                    style="color: white; font-size: 11px"
                    class="font-medium p-3"
                >
                {{tran('All Games', store.state.lang)}}
                </p>
            </div>
        </a>
        <a class="flex items-center mx-4 hover:border-b-2 border-blue-500" @click="$router.push(linkTo('/casino?tab=slots'))">
            <div class="flex justify-start items-center">
                <q-img
                    class="w-4"
                    src="/imgs/sidebar/slot.png"
                    alt="slot"
                />
                <p
                    style="color: white; font-size: 11px"
                    class="font-medium p-3"
                >
                {{tran('Slots', store.state.lang)}}
                </p>
            </div>
        </a>
        <a class="flex items-center mx-4 hover:border-b-2 border-blue-500" @click="$router.push(linkTo('/casino?tab=live'))">
            <div class="flex justify-start items-center">
                <q-img
                    class="w-4"
                    src="/imgs/sidebar/liveGames.png"
                    alt="slot"
                />
                <p
                    style="color: white; font-size: 11px"
                    class="font-medium p-3"
                >
                {{tran('Live Casino', store.state.lang)}}
                </p>
            </div>
        </a>
        <a class="flex items-center mx-4 hover:border-b-2 border-blue-500" @click="$router.push(linkTo('/casino?tab=table'))">
            <div class="flex justify-start items-center">
                <q-img
                    class="w-4"
                    src="/imgs/sidebar/tableGames.png"
                    alt="table"
                />
                <p
                    style="color: white; font-size: 11px"
                    class="font-medium p-3"
                >
                {{tran('Table', store.state.lang)}}
                </p>
            </div>
        </a>
        <a class="flex items-center mx-4 hover:border-b-2 border-blue-500" @click="$router.push(linkTo('/casino?tab=roulette'))">
            <div class="flex justify-start items-center">
                <q-img
                    class="w-4"
                    src="/imgs/sidebar/roulette.png"
                    alt="roulette"
                />
                <p
                    style="color: white; font-size: 11px"
                    class="font-medium p-3"
                >
                {{tran('Roulette', store.state.lang)}}
                </p>
            </div>
        </a>
    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
defineProps(["down"]);
</script>