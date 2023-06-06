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
                            <q-td key="index" :props="props">
                                {{ props.rowIndex + 1 }}
                            </q-td>
                            <q-td key="amount" :props="props">
                                {{ props.row.amount }}
                            </q-td>
                            <q-td key="currency" :props="props">
                                {{ props.row.currency }}
                            </q-td>
                            <q-td
                                class="text-center"
                                key="provider"
                                :props="props"
                            >
                                <img
                                    class="w-5 h-5"
                                    :src="`/tmp/${props.row.provider}.png`"
                                    spinner-color="primary"
                                />
                            </q-td>
                            <q-td key="transactionId" :props="props">
                                {{ props.row.transactionId }}
                            </q-td>
                            <q-td key="createdAt" :props="props">
                                {{ props.row.createdAt }}
                            </q-td>
                            <q-td key="status" :props="props">
                                <q-btn
                                    class="w-20"
                                    v-if="props.row.status == 0"
                                    color="primary"
                                    size="xs"
                                    label="pending"
                                />
                                <q-btn
                                    class="w-20"
                                    v-if="props.row.status == 1"
                                    color="positive"
                                    size="xs"
                                    label="Completed"
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

onBeforeMount(() => {
    console.log("deposit log");
    
    axios({
            method:'get',
            url: `${config.public.baseURL}/api/player/getDepositHistory`,
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem("token")
            },
        })
    .then(res => {
        rows.value = res.data.deposits.data
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
        name: 'amount',
        required: true,
        label: 'Amount',
        align: 'left',
        field: 'amount',
    },
    {
        name: 'currency',
        align: 'left',
        label: 'Currency',
        field: 'currency',
    },
    {
        name: 'provider',
        align: 'center',
        label: 'Provider',
        field: 'provider',
    },
    {
        name: 'transactionId',
        align: 'left',
        label: 'Transaction ID',
        field: 'transactionId',
    },
    {
        name: 'createdAt',
        align: 'left',
        label: 'Created At',
        field: 'createdAt',
    },
    {
        name: 'status',
        align: 'center',
        label: 'Status',
        field: 'status',
    },
];
</script>

