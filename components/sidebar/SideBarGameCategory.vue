<template>
    <div class="max-h-0 overflow-hidden duration-300" :class="!!down && 'max-h-40'">
        <a class="flex items-center px-4" href="#">
            <div class="flex justify-start items-center" @click="$router.push('/casino')">
                <q-img
                    class="w-4"
                    src="/imgs/sidebar/games.png"
                    alt="games"
                />
                <p
                    style="color: white; font-size: 11px"
                    class="font-medium p-3"
                >
                    All Games
                </p>
            </div>
        </a>
        <a class="flex items-center px-4" href="#">
            <div class="flex justify-start items-center" @click="$router.push('/casino?tab=slots')">
                <q-img
                    class="w-4"
                    src="/imgs/sidebar/slot.png"
                    alt="slot"
                />
                <p
                    style="color: white; font-size: 11px"
                    class="font-medium p-3"
                >
                    Slots
                </p>
            </div>
        </a>
        <a class="flex items-center px-4" href="#">
            <div class="flex justify-start items-center" @click="$router.push('/casino?tab=live')">
                <q-img
                    class="w-4"
                    src="/imgs/sidebar/liveGames.png"
                    alt="slot"
                />
                <p
                    style="color: white; font-size: 11px"
                    class="font-medium p-3"
                >
                    Live Casino
                </p>
            </div>
        </a>
        <a class="flex items-center px-4" href="#">
            <div class="flex justify-start items-center" @click="$router.push('/casino?tab=table')">
                <q-img
                    class="w-4"
                    src="/imgs/sidebar/tableGames.png"
                    alt="table"
                />
                <p
                    style="color: white; font-size: 11px"
                    class="font-medium p-3"
                >
                    Table
                </p>
            </div>
        </a>
        <a class="flex items-center px-4" href="#">
            <div class="flex justify-start items-center" @click="$router.push('/casino?tab=roulette')">
                <q-img
                    class="w-4"
                    src="/imgs/sidebar/roulette.png"
                    alt="roulette"
                />
                <p
                    style="color: white; font-size: 11px"
                    class="font-medium p-3"
                >
                    Roulette
                </p>
            </div>
        </a>
    </div>
</template>

<script setup lang="ts">
defineProps(["down"]);
</script>
