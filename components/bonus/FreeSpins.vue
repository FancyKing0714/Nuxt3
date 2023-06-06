<template>
    <div class="inset-0 rounded-md w-full px-2 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
                <div class="flex items-center justify-between relative">
                    <div
                        class="w-1/2 absolute top-1/2 -translate-y-1/2 z-10 left-8"
                    >
                        <p
                            :class="[
                                'font-bold text-sm sm:text-sm md:text-xl xl:text-2xl text-shadow-lg',
                                isDrawer ? 'lg:text-sm' : 'lg:text-2xl',
                            ]"
                        >
                            BONUS WHEEL
                        </p>
                        <p
                            :class="[
                                'text-xs lg:text-xs',
                                isDrawer ? 'lg:text-xxs' : 'lg:text-xs',
                            ]"
                        >
                            Get free spin every 2 hours!
                        </p>
                        <q-btn
                            :class="[
                                'mt-2 xl:mt-4',
                                isDrawer ? 'lg:mt-2' : 'lg:mt-4',
                            ]"
                            size="xs"
                            label="Free Spin"
                        />
                    </div>
                    <q-img
                        src="/imgs/back_bonus.png"
                        spinner-color="primary"
                        alt="title"
                    />
                    <q-img
                        class="w-1/2 absolute right-0 -bottom-3"
                        src="/imgs/wheel.png"
                        spinner-color="primary"
                        spinner-size="24px"
                        alt="title"
                    />
                </div>

                <div class="flex items-center justify-between relative">
                    <div
                        class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8"
                    >
                        <p
                            :class="[
                                'font-bold text-sm sm:text-sm md:text-xl xl:text-2xl text-shadow-lg',
                                isDrawer ? 'lg:text-sm' : 'lg:text-2xl',
                            ]"
                        >
                            DAILY CASHBACK
                        </p>
                        <div class="flex items-center justify-start">
                            <p
                                :class="[
                                    'text-xs lg:text-xs',
                                    isDrawer ? 'lg:text-xxs' : 'lg:text-xs',
                                ]"
                            >
                                UP TO
                            </p>
                            <p
                                style="color: #ffd62f"
                                :class="[
                                    'text-xl xl:text-5xl font-black pl-1',
                                    isDrawer ? 'lg:text-xl' : 'lg:text-5xl',
                                ]"
                            >
                                20%
                            </p>
                        </div>
                    </div>
                    <q-img
                        src="/imgs/back_daily.png"
                        spinner-color="primary"
                        alt="title"
                    />
                    <q-img
                        class="w-1/2 absolute right-0 -bottom-3"
                        src="/imgs/cash_back.png"
                        spinner-color="primary"
                        alt="title"
                    />
                </div>
            </div>

            <q-page>
                <q-table :rows=rows :cols=cols>
                    <template v-slot:body="props">
                        <q-tr :props="props">
                            <q-td key="isComplete" :props="props">
                                {{ props.rowIndex + 1 }}
                            </q-td>
                            <q-td key="title" :props="props">
                                {{ props.row.title }}
                            </q-td>
                            <q-td key="freeSpin" :props="props">
                                {{ props.row.freeSpin }}
                            </q-td>
                            <q-td key="game" :props="props">
                                {{ props.row.game }}
                            </q-td>
                            <q-td key="bonus" :props="props">
                                {{ props.row.bonus }}
                            </q-td>
                            <q-td key="wager" :props="props">
                                {{ props.row.wager }}
                            </q-td>
                            <q-td key="isComplete" :props="props">
                                <q-btn
                                    class="w-14"
                                    v-if="props.row.isComplete == 0"
                                    color="primary"
                                    size="xs"
                                    label="Cancel"
                                />
                                <q-btn
                                    class="w-14"
                                    v-if="props.row.isComplete == 1"
                                    color="positive"
                                    size="xs"
                                    label="Yes"
                                />
                                <q-btn
                                    class="w-14"
                                    v-if="props.row.isComplete == -1"
                                    color="grey"
                                    size="xs"
                                    label="No"
                                />
                            </q-td>
                            <q-td key="expireOn" :props="props">
                                {{ props.row.expireOn }}
                            </q-td>
                        </q-tr>
                    </template>
                </q-table>
            </q-page>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useStore} from 'vuex';
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import { useQuasar } from 'quasar'
const not = useQuasar();
const config = useRuntimeConfig();

const store = useStore();
const isDrawer = computed(() => store.state.isDrawer);

onBeforeMount(() => {
    axios({
            method:'get',
            url: `${config.public.baseURL}/api/player/getBonusHistory`,
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem("token")
            },
        })
    .then(res => {
        rows.value = res.data.bonusHistory.data
    })
    .catch(err => {
        not.notify({
          color: 'white',
          textColor: 'dark',
          message: 'Error',
          caption: err.response.data.message,
          icon: 'info',
          iconColor: 'red',
          position: 'top-right',
          progress:true,
          multiLine: true,
          timeout: 1500,
        })
    });
});

let rows = ref([]);
const cols = [
            {
                name: 'index',
                align: 'left',
                label: 'S.No',
                // field: (row) => this.rows.indexOf(row) + 1,
            },
            {
                name: 'title',
                required: true,
                label: 'Title',
                align: 'left',
                field: 'title',
            },
            {
                name: 'freeSpin',
                align: 'left',
                label: 'Free Spin',
                field: 'freeSpin',
            },
            {
                name: 'game',
                align: 'left',
                label: 'Game (Click on Game)',
                field: 'game',
            },
            {
                name: 'bonus',
                align: 'left',
                label: 'Bonus',
                field: 'bonus',
            },
            {
                name: 'wager',
                align: 'left',
                label: 'Wager Required',
                field: 'wager',
            },
            {
                name: 'isComplete',
                align: 'center',
                label: 'Completed',
                field: 'isComplete',
            },
            {
                name: 'expireOn',
                align: 'left',
                label: 'Expire on',
                field: 'expireOn',
            },
];
</script>
