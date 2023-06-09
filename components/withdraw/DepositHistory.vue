<template>
    <div class="inset-0 rounded-md w-full px-2 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative">
            <q-page>
                <q-table :rows = "rows" :columns = "cols" >
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
                            <q-td key="payment_method" :props="props">
                                {{ props.row.payment_method }}
                            </q-td>
                            <q-td key="transaction_id" :props="props">
                                {{ props.row.transaction_id }}
                            </q-td>
                            <q-td key="created_at" :props="props">
                                {{ props.row.created_at }}
                            </q-td>
                            <q-td key="status" :props="props">
                                <q-btn
                                    class="w-20"
                                    v-if="props.row.status == 'waiting'"
                                    color="primary"
                                    size="xs"
                                    label="pending"
                                />
                                <q-btn
                                    class="w-20"
                                    v-if="props.row.status == 'completed'"
                                    color="positive"
                                    size="xs"
                                    label="Completed"
                                />
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
import { ref } from 'vue';
const store = useStore();

let rows = ref(store.state.depositHistory);

interface columnformat{
    name: string;
    label: string;
    field: string | ((row: any) => any);
    required?: boolean | undefined;
    align?: "left" | "center" | "right" | undefined;
};

const cols :columnformat[] = [
    {
        name: 'index',
        align: 'left',
        label: 'No',
        field: 'id',
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
        name: 'payment_method',
        align: 'left',
        label: 'Payment Method',
        field: 'payment_method',
    },
    {
        name: 'transaction_id',
        align: 'left',
        label: 'Transaction Id',
        field: 'transaction_id',
    },
    {
        name: 'created_at',
        align: 'left',
        label: 'Created At',
        field: 'created_at',
    },
    {
        name: 'status',
        align: 'center',
        label: 'Status',
        field: 'status',
    },
];
</script>

