<template>
    <div
        style="background: #383d47"
        class="inset-0 rounded-md w-full px-7 py-6"
    >
        <div
            style="color: rgba(152, 154, 159, 0.5)"
            class="flex items-center justify-start pb-3"
        >
            <span
                class="font-medium text-xs cursor-pointer"
                @click="
                    () => {
                        step = 1;
                    }
                "
                >STEP 1 <q-img class="w-2 mx-3" src="/imgs/right.png"
            /></span>
            <span
                class="font-medium text-xs cursor-pointer"
                @click="
                    () => {
                        step = 2;
                    }
                "
                >STEP 2 <q-img class="w-2 mx-3" src="/imgs/right.png"
            /></span>
            <span
                class="font-medium text-xs cursor-pointer"
                @click="
                    () => {
                        step = 3;
                    }
                "
                >STEP 3</span
            >
        </div>
        <q-stepper v-model="step" ref="stepper" color="primary" animated>
            <q-step :name="1" title="STEP 1" :done="step > 1">
                <div>
                    <p class="text-base font-bold pb-2">{{tran('Identity', store.state.lang)}}</p>
                    <p class="text-sm font-medium">
                        {{tran('identity', store.state.lang)}}
                    </p>
                    <br />
                    <p class="text-sm font-medium" style="color: #11a449">
                        {{tran('iden1', store.state.lang)}}<br />
                        {{tran('iden2', store.state.lang)}}<br />
                        {{tran('iden3', store.state.lang)}}<br />
                        {{tran('iden4', store.state.lang)}}<br />
                        {{tran('iden5', store.state.lang)}}<br />
                    </p>
                </div>
            </q-step>

            <q-step :name="2" title="STEP 2" icon="left" :done="step > 2">
                <div>
                    <p class="text-base font-bold pb-2">{{tran('Address', store.state.lang)}}</p>
                    <p class="text-sm font-medium">
                        {{tran('address', store.state.lang)}}
                    </p>
                    <br />
                    <p class="text-sm font-medium" style="color: #11a449">
                        {{tran('add1', store.state.lang)}}<br />
                        {{tran('add2', store.state.lang)}}<br />
                        {{tran('add3', store.state.lang)}}<br />
                        {{tran('add4', store.state.lang)}}<br />
                        {{tran('add5', store.state.lang)}}<br />
                        {{tran('add6', store.state.lang)}}<br />
                    </p>
                </div>
            </q-step>

            <q-step :name="3" title="STEP 3" :done="step > 3">
                <div>
                    <p class="text-base font-bold pb-2">{{tran('Payment', store.state.lang)}}</p>
                    <p class="text-sm font-medium">
                        {{tran('payment', store.state.lang)}}
                    </p>
                    <br />
                    <p class="text-sm font-medium" style="color: #11a449">
                        {{tran('pay1', store.state.lang)}}<br />
                        {{tran('pay2', store.state.lang)}}<br />
                        {{tran('pay3', store.state.lang)}}<br />
                        {{tran('pay4', store.state.lang)}}<br />
                        {{tran('pay5', store.state.lang)}}<br />
                    </p>
                </div>
            </q-step>
        </q-stepper>
        <div>
            <q-select
                class="w-1/2 mt-4"
                standout="text-white"
                v-model="model"
                :options="options"
                :dense="true"
            />
            <q-btn-group rounded class="mt-4" style="background-color: #2b303c">
                <div
                    class="q-pl-md q-pt-sm q-pb-sm q-pr-md rounded-3xl flex justify-start items-center cursor-pointer"
                    style="background-color: #383d47"
                >
                    <q-icon name="upload" class="pr-1" />
                    {{tran('Choose File', store.state.lang)}}
                </div>
                <div
                    class="q-pl-md q-pt-sm q-pb-sm q-pr-md flex justify-start items-center cursor-pointer"
                >
                {{tran('No file chosen', store.state.lang)}}
                </div>
            </q-btn-group>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
import { ref } from 'vue';

const options = ['Doc1', 'Doc2', 'Doc3', 'Doc4', 'Doc5'];
const model = ref(null);
const step = ref(1);

// Define any other variables or functions needed for this component
</script>
