<template>
    <div class="inset-0 rounded-md w-full px-2 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative">
            <q-page>
                <q-table :rows="rows" :columns ="cols">
                    <template v-slot:body="props">
                        <q-tr :props="props">
                            <q-td key="index" :props="props">
                                {{ props.rowIndex + 1 }}
                            </q-td>
                            <q-td key="title" :props="props">
                                {{ props.row.title }}
                            </q-td>
                            <q-td key="amount" :props="props">
                                {{ props.row.amount }}
                            </q-td>
                            <q-td key="currency" :props="props">
                                {{ props.row.currency }}
                            </q-td>
                            <q-td key="wager" :props="props">
                                {{ props.row.wager }}
                            </q-td>
                            <q-td key="wagered" :props="props">
                                {{ props.row.wagered }}
                            </q-td>
                            <q-td key="status" :props="props">
                                <q-btn
                                    class="w-14"
                                    v-if="props.row.status == 0"
                                    color="primary"
                                    size="xs"
                                    label="Cancel"
                                />
                                <q-btn
                                    class="w-14"
                                    v-if="props.row.status == 1"
                                    color="positive"
                                    size="xs"
                                    label="Yes"
                                />
                                <q-btn
                                    class="w-14"
                                    v-if="props.row.status == -1"
                                    color="grey"
                                    size="xs"
                                    label="No"
                                />
                            </q-td>
                            <q-td key="created_at" :props="props">
                                {{ props.row.created_at }}
                            </q-td>
                            <q-td key="expired_at" :props="props">
                                {{ props.row.expired_at }}
                            </q-td>
                        </q-tr>
                    </template>
                </q-table>
            </q-page>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useStore} from 'vuex';
const store = useStore();

//receive bonus history data from store and show table
let rows = ref(store.state.bonusHistory);
watch(()=>store.state.bonusHistory,()=>{
    rows.value = store.state.bonusHistory;
})
interface columnformat{
    name: string;
    label: string;
    field: string | ((row: any) => any);
    required?: boolean | undefined;
    align?: "left" | "center" | "right" | undefined;
};
const cols:columnformat[] = [
                {
                    name: 'index',
                    align: 'left',
                    label: 'No',
                    field: 'id',
                },
                {
                    name: 'title',
                    required: true,
                    label: 'Title',
                    align: 'left',
                    field: 'title',
                },
                {
                    name: 'amount',
                    align: 'left',
                    label: 'Amount',
                    field: 'amount',
                },
                {
                    name: 'currency',
                    align: 'left',
                    label: 'Currency',
                    field: 'currency',
                },
                {
                    name: 'wager',
                    align: 'left',
                    label: 'Wager',
                    field: 'wager',
                },
                {
                    name: 'wagered',
                    align: 'left',
                    label: 'Wagered',
                    field: 'wagered',
                },
                {
                    name: 'status',
                    align: 'center',
                    label: 'Status',
                    field: 'status',
                },
                {
                    name: 'created_at',
                    align: 'left',
                    label: 'Created At',
                    field: 'created_at',
                },
                {
                    name: 'expired_at',
                    align: 'left',
                    label: 'Expired At',
                    field: 'expired_at',
                },
];
</script>
