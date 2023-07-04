<template>
    <q-table 
        :rows="rows" 
        :columns ="cols"
        v-model:pagination="pagination"
    >
        <template v-slot:body="props">
            <q-tr :props="props">
                <q-td key="index" :props="props">
                    {{ props.rowIndex + 1 }}
                </q-td>
                <q-td key="game" :props="props">
                    {{ props.row.game }}
                </q-td>
                <q-td key="type" :props="props">
                    {{ props.row.type }}
                </q-td>
                <q-td key="bet_amount" :props="props">
                    {{ props.row.bet_amount }}
                </q-td>
                <q-td key="win_amount" :props="props">
                    {{ props.row.win_amount }}
                </q-td>
                <q-td key="player_balance" :props="props">
                    {{ props.row.player_balance }}
                </q-td>
                <q-td key="currency" :props="props">
                    {{ props.row.currency }}
                </q-td>
                <q-td key="created_at" :props="props">
                    {{ props.row.created_at }}
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
</template>

<script setup lang="ts">
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import { ref , onUnmounted} from 'vue';
import { getGameHistory } from '~~/action/profile'; 

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
                getGameHistory(store.state.pageNumber+1, store, router);
                store.commit('handlePageNumber',store.state.pageNumber+1);
            }
        }
        pagination.value.page+=1;
    }
}

//get player game history from store.state.gameHistory
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
const cols:columnformat[] = [
                {
                    name: 'index',
                    align: 'left',
                    label: 'No',
                    field: 'id',
                },
                {
                    name: 'game',
                    label: 'game',
                    align: 'left',
                    field: 'game',
                },
                {
                    name: 'type',
                    align: 'left',
                    label: 'Type',
                    field: 'type',
                },
                {
                    name: 'bet_amount',
                    align: 'left',
                    label: 'BetSum',
                    field: 'bet_amount',
                },
                {
                    name: 'win_amount',
                    align: 'left',
                    label: 'WinSum',
                    field: 'win_amount',
                },
                {
                    name: 'player_balance',
                    align: 'left',
                    label: 'Balance',
                    field: 'player_balance',
                },
                {
                    name: 'currency',
                    align: 'left',
                    label: 'Currency',
                    field: 'currency',
                },
                {
                    name: 'created_at',
                    align: 'left',
                    label: 'Time',
                    field: 'created_at',
                },
];
</script>
