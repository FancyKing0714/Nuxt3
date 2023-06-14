<template>
    <q-table :rows="rows" :columns ="cols">
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
                <q-td key="status" :props="props">
                    {{ props.row.status }}
                </q-td>
                <q-td key="created_at" :props="props">
                    {{ props.row.created_at }}
                </q-td>
            </q-tr>
        </template>
    </q-table>
</template>

<script setup lang="ts">
import {useStore} from 'vuex';
import { ref } from 'vue';
const store = useStore();

//get player game history from store.state.gameHistory
let rows = ref(store.state.gameHistory);

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
                    name: 'status',
                    align: 'left',
                    label: 'State',
                    field: 'status',
                },
                {
                    name: 'created_at',
                    align: 'left',
                    label: 'Time',
                    field: 'created_at',
                },
];
</script>
