<template>
    <div class="inset-0 rounded-md w-full px-2 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative">
            <q-page>
                <q-table :rows="rows" :columns="cols">
                    <template v-slot:body="props">
                        <q-tr :props="props">
                            <q-td key="index" :props="props">
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
import { tran } from "~~/utils/translation";
import {useStore} from "vuex";
const store = useStore();
const rows= [];

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
                    label: tran('No', store.state.lang),
                    align: 'left',
                    field: 'id',
                },
                {
                    name: 'title',
                    required: true,
                    label: tran('Title', store.state.lang),
                    align: 'left',
                    field: 'title',
                },
                {
                    name: 'freeSpin',
                    align: 'left',
                    label: tran('Free Spin', store.state.lang),
                    field: 'freeSpin',
                },
                {
                    name: 'game',
                    align: 'left',
                    label: tran('Game (Click on Game)', store.state.lang),
                    field: 'game',
                },
                {
                    name: 'bonus',
                    align: 'left',
                    label: tran('Bonus', store.state.lang),
                    field: 'bonus',
                },
                {
                    name: 'wager',
                    align: 'left',
                    label: tran('Wager Required', store.state.lang),
                    field: 'wager',
                },
                {
                    name: 'isComplete',
                    align: 'center',
                    label: tran('Completed', store.state.lang),
                    field: 'isComplete',
                },
                {
                    name: 'expireOn',
                    align: 'left',
                    label: tran('Expire on', store.state.lang),
                    field: 'expireOn',
                },
            ];
</script>
