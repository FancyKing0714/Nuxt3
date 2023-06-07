<template>
    <div class="inset-0 rounded-md w-full px-2 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative">
            <q-page>
                <q-table class="my-sticky-header-table" :rows="rows" :columns="cols">
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
                            <q-td key="requested" :props="props">
                                {{ props.row.requested }}
                            </q-td>
                            <q-td key="updatedAt" :props="props">
                                {{ props.row.updatedAt }}
                            </q-td>

                            <q-td key="message" :props="props">
                                {{ props.row.message }}
                            </q-td>
                            <q-td
                                class="text-center"
                                key="method"
                                :props="props"
                            >
                                <img
                                    class="w-5 h-5"
                                    :src="`/tmp/${props.row.method}.png`"
                                    spinner-color="primary"
                                />
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
                            <q-td key="detail" :props="props">
                                {{ props.row.detail }}
                            </q-td>
                            <q-td key="action" :props="props">
                                INSTANT
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
const store = useStore();

let rows = ref(store.state.withdrawHistory);
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
        label: 'S.No',
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
        name: 'requested',
        align: 'left',
        label: 'Requested',
        field: 'requested',
    },
    {
        name: 'updatedAt',
        align: 'left',
        label: 'Updated At',
        field: 'updatedAt',
    },
    {
        name: 'message',
        align: 'left',
        label: 'Message (from Admin)',
        field: 'message',
    },
    {
        name: 'method',
        align: 'center',
        label: 'Method',
        field: 'method',
    },
    {
        name: 'status',
        align: 'center',
        label: 'Status',
        field: 'status',
    },
    {
        name: 'detail',
        align: 'center',
        label: 'Details',
        field: 'detail',
    },
    {
        name: 'action',
        align: 'center',
        label: 'Action',
        field: 'action',
    },
];
</script>
