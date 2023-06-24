<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const props = defineProps({
    open: {
        type: Boolean,
        required: true,
    },
});
let open = ref(props.open);
watch(()=>props, (newValue) => {
    open.value = newValue.open;
});
</script>
<template>
    <q-dialog
        class="welcome"
        v-model="open"
        @hide="store.commit('handleWelcome', false)"
    >
        <q-card class="w-full sm:w-3/5 md:w-1/2" style="width: 700px">
            <div class="relative" style="background: rgb(0 90 201)">
                <div class="sm:grid sm:grid-cols-10 p-6">
                    <div class="p-1 col-span-4 hidden sm:!block">
                        <q-img
                            class="absolute bottom-0 left-0"
                            style="max-width: 221px"
                            src="/imgs/man_thumb.png"
                            alt="man"
                        />
                    </div>
                    <div class="p-1 col-span-6 grid grid-cols-10 sm:block">
                        <div class="col-span-10">
                            <p class="font-medium text-xl text-shadow-lg">
                                Welcome to
                            </p>
                            <p
                                class="font-black text-4xl sm:text-3xl text-shadow-lg"
                            >
                                EUROPE #1
                            </p>
                            <p class="font-medium text-xl text-shadow-lg">
                                Online Casino
                            </p>
                            <span
                                class="p-1 text-shadow-lg hidden sm:!block"
                                style="
                                    font-size: 10px;
                                    font-family: Montserrat-Italic;
                                    border-bottom: 1px solid
                                        rgba(95, 83, 106, 0.5);
                                "
                            >
                                Enjoy 3500+ games, fast payouts and 24/7 live
                                support.
                            </span>
                        </div>
                        <div class="col-span-4 relative1">
                            <img
                                class="w-44 sm:hidden absolute bottom-0 left-0"
                                src="/imgs/man_thumb_t.png"
                                alt="man_thumb_t"
                            />
                        </div>
                        <div class="col-span-6">
                            <p class="text-xl font-bold">welcome bonus</p>
                            <div
                                class="sm:flex items-center justify-center pt-2"
                            >
                                <div>
                                    <span
                                        class="font-black sm:font-bold text-5xl sm:text-2xl md:text-3xl"
                                        style="color: #fff004"
                                        >200%</span
                                    >
                                    <span class="text-xs hidden sm:block"
                                        >bonus</span
                                    >
                                </div>
                                <div
                                    style="
                                        background-color: rgba(
                                            95,
                                            83,
                                            106,
                                            0.5
                                        );
                                        width: 1px;
                                        height: 20px;
                                    "
                                    class="bg-gray-700 mx-1 hidden sm:block"
                                ></div>
                                <div>
                                    <span
                                        class="font-bold text-3xl sm:text-2xl md:text-3xl"
                                        style="color: #fff004"
                                        >+100</span
                                    >
                                    <span class="text-xs pl-1">free spins</span>
                                </div>
                            </div>
                            <div class="w-full text-left sm:!text-center">
                                <q-btn
                                    class="mt-4 font-bold text-lg sm:text-xl"
                                    style="
                                        background-color: #fff004;
                                        color: black;
                                    "
                                    label="DEPOSIT NOW"
                                />
                            </div>
                            <div class="w-full text-right">
                                <img
                                    class="w-48 sm:hidden"
                                    src="/imgs/casino_offers.png"
                                    alt="casino_offers"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </q-card>
    </q-dialog>
</template>
