<script setup lang="ts">
import { tran } from "~~/utils/translation";
import {useStore} from "vuex";
const store = useStore();

const props = defineProps({
    background: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    slotName: {
        type: String,
        required: true,
    },
});

</script>
<template>
    <div class="flex flex-col justify-between">
        <div>
            <div class="flex items-center justify-between relative">
                <slot :name="props?.slotName"></slot>
                <q-img
                    :src="`/imgs/bonus/${background}.png`"
                    spinner-color="primary"
                    alt="title"
                />
                <q-img
                    class="w-1/2 absolute right-0 bottom-0"
                    :src="`/imgs/${img}.png`"
                    spinner-color="primary"
                    alt="title"
                />
            </div>
            <p class="text-xs p-4">{{ comment }}</p>
        </div>

        <div class="text-center pb-10">
            <q-btn color="primary" :label="tran('READ MORE', store.state.lang)" />
        </div>
    </div>
</template>

