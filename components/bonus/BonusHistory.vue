<template>
    <div class="inset-0 rounded-md w-full px-2 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative">
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
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import { useQuasar } from 'quasar'
const not = useQuasar();
const config = useRuntimeConfig();

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
