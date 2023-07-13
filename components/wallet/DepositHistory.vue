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
                                    :label="tran('pending', store.state.lang)"
                                />
                                <q-btn
                                    class="w-20"
                                    v-if="props.row.status == 'completed'"
                                    color="positive"
                                    size="xs"
                                    :label="tran('Completed', store.state.lang)"
                                />
                            </q-td>
                        </q-tr>
                    </template>
                    <template v-slot:pagination="scope">
                        <q-btn
                            icon="chevron_left"
                            color="grey-8"
                            round
                            dense
                            flat
                            :disable="scope.isFirstPage"
                            @click="prevPage(scope.prevPage)"
                        />
                        <q-btn
                            icon="chevron_right"
                            color="grey-8"
                            round
                            dense
                            flat
                            @click="nextPage(scope.nextPage)"
                        />
                    </template>
                </q-table>
            </q-page>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import { ref , onUnmounted} from 'vue';
import { tran } from "~~/utils/translation";
import { getDepositHistory } from '~~/action/wallet';

const router = useRouter();
const store = useStore();
const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 5,
})
onUnmounted(()=>{
    store.commit('handleGetHistory', []);
    store.commit('handleGetHistoryAccount', 0);
    store.commit('handlePageNumber', 1);
});
const prevPage = (prev:Function) => {
    pagination.value.page-=1;
}
const nextPage = (next:Function) => {
    if(store.state.historyAmount>pagination.value.page*pagination.value.rowsPerPage){
        if(store.state.history.length < (pagination.value.page+1)*pagination.value.rowsPerPage){
            let cnt = Math.ceil(((pagination.value.page+1)*pagination.value.rowsPerPage - store.state.history.length)/10);
            for(var i=0; i<cnt; i++){
                getDepositHistory(store.state.pageNumber+1, store, router);
                store.commit('handlePageNumber',store.state.pageNumber+1);
            }
        }
        pagination.value.page+=1;
    }
}
//receive deposit history data from store and show table
let rows = ref(store.state.history);
watch(()=>store.state.history,()=>{
    rows.value = store.state.history;
});

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
        label: tran('No', store.state.lang),
        field: 'id',
    },
    {
        name: 'amount',
        required: true,
        label: tran('Amount', store.state.lang),
        align: 'left',
        field: 'amount',
    },
    {
        name: 'currency',
        align: 'left',
        label: tran('Currency', store.state.lang),
        field: 'currency',
    },
    {
        name: 'payment_method',
        align: 'left',
        label: tran('Payment Method', store.state.lang),
        field: 'payment_method',
    },
    {
        name: 'transaction_id',
        align: 'left',
        label: tran('Transaction Id', store.state.lang),
        field: 'transaction_id',
    },
    {
        name: 'created_at',
        align: 'left',
        label: tran('Created At', store.state.lang),
        field: 'created_at',
    },
    {
        name: 'status',
        align: 'center',
        label: tran('Status', store.state.lang),
        field: 'status',
    },
];
</script>

