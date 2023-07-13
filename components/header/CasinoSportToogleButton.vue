<script setup lang="ts">
import { ref } from 'vue';
import { tran } from "~~/utils/translation";
import { useStore } from 'vuex';
const store = useStore();

const casinoOrSport = ref('casino');
function toggleCasinoSport(val: string) {
    casinoOrSport.value = val;
}
</script>

<template>
    <q-btn-group rounded>
        <div
            class="q-pl-md q-pt-sm q-pb-sm q-pr-md hover:!rounded-3xl flex justify-start items-center cursor-pointer"
            :class="{
                'bg-primary text-white !rounded-3xl':
                    casinoOrSport === 'casino',
            }"
            style="{background-color: casinoOrSport !== 'casino' ? '#3E4455' : '' }"
            @click="toggleCasinoSport('casino')"
        >
            <img
                class="q-mr-sm"
                style="max-width: 22px"
                src="/imgs/header/casino-icon.png"
                alt="casino"
            />
            {{tran('Casino', store.state.lang)}}
        </div>
        <div
            class="q-pl-md q-pt-sm q-pb-sm q-pr-md hover:!rounded-3xl flex justify-start items-center cursor-pointer"
            :class="{
                'bg-primary text-white !rounded-3xl': casinoOrSport === 'sport',
            }"
            @click="toggleCasinoSport('sport')"
        >
            <img
                class="q-mr-sm"
                style="max-width: 22px"
                src="/imgs/header/sports-icon.png"
                alt="sports"
            />
            {{tran('Sport', store.state.lang)}}
        </div>
    </q-btn-group>
</template>
