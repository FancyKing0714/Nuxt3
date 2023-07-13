<template>
    <div class="inset-0 rounded-md w-full px-2 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative mt-10">
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
                        {{tran('BONUS WHEEL', store.state.lang)}}
                        </p>
                        <p
                            :class="[
                                'text-xs lg:text-xs',
                                isDrawer ? 'lg:text-xxs' : 'lg:text-xs',
                            ]"
                        >
                        {{tran('Get free spin every 2 hours!', store.state.lang)}}
                        </p>
                        <q-btn
                            :class="[
                                'mt-2 xl:mt-4',
                                isDrawer ? 'lg:mt-2' : 'lg:mt-4',
                            ]"
                            size="xs"
                            :label="tran('Free Spin', store.state.lang)"
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
                        {{tran('DAILY CASHBACK', store.state.lang)}}
                        </p>
                        <div class="flex items-center justify-start">
                            <p
                                :class="[
                                    'text-xs lg:text-xs',
                                    isDrawer ? 'lg:text-xxs' : 'lg:text-xs',
                                ]"
                            >
                            {{tran('UP TO', store.state.lang)}}
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
                <q-table :rows="rows" :columns="cols">
                    <template v-slot:body="props">
                        <q-tr :props="props">
                            <q-td key="index" :props="props">
                                {{ props.rowIndex + 1 }}
                            </q-td>
                            <q-td key="title" :props="props">
                                {{ props.row.title }}
                            </q-td>
                            <q-td key="freespins_used" :props="props">
                                {{ props.row.freespins_used }}/{{ props.row.freespins_available }}
                            </q-td>
                            <q-td key="status" :props="props">
                                <q-btn
                                    class="w-14"
                                    v-if="props.row.status == 0"
                                    color="primary"
                                    size="xs"
                                    :label="tran('Cancel', store.state.lang)"
                                />
                                <q-btn
                                    class="w-14"
                                    v-if="props.row.status == 1"
                                    color="positive"
                                    size="xs"
                                    :label="tran('Yes', store.state.lang)"
                                />
                                <q-btn
                                    class="w-14"
                                    v-if="props.row.status == -1"
                                    color="grey"
                                    size="xs"
                                    :label="tran('Nope', store.state.lang)"
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
import { ref , onUnmounted } from 'vue';
import { getFreespinHistory } from '~~/action/bonus'; 
import { tran } from "~~/utils/translation";

const router = useRouter();
const store = useStore();
const isDrawer = computed(() => store.state.isDrawer);
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
                getFreespinHistory(store.state.pageNumber+1, store, router);
                store.commit('handlePageNumber',store.state.pageNumber+1);
            }
        }
        pagination.value.page+=1;
    }
}

//receive freespin history data from store and show table
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
const cols: columnformat[] = [
            {
                name: 'index',
                align: 'left',
                label: tran('No', store.state.lang),
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
                name: 'freespins_used',
                align: 'left',
                label: tran('Free Spins', store.state.lang),
                field: 'freespins_used',
            },
            {
                name: 'status',
                align: 'left',
                label: tran('Status', store.state.lang),
                field: 'status',
            },
            {
                name: 'created_at',
                align: 'left',
                label: tran('Created At', store.state.lang),
                field: 'created_at',
            },
            {
                name: 'expired_at',
                align: 'center',
                label: tran('Expired At', store.state.lang),
                field: 'expired_at',
            },
];
</script>
