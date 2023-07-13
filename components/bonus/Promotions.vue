<script setup lang="ts">
import {seperate} from '~~/utils/string';
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();


const isDrawer = computed(() => {
    return ref(store.state.isDrawer);
});
const categories = ref(store.state.promotions);
watch(()=>store.state.promotions,()=>{
    categories.value = store.state.promotions;
})
</script>

<template>
    <div class="inset-0 rounded-md w-full px-7 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative mt-10">
            <div class="grid md:grid-cols-2 gap-4">
                <div 
                    class="flex flex-col justify-between" 
                    v-for="category in categories"
                >
                    <div class="flex items-center justify-between relative">
                        <img
                            src="/imgs/bonus/1.png"
                            alt="title"
                        >
                        <q-img
                            class="w-1/2 absolute right-0 bottom-0"
                            :src="`/imgs/${category?.image}.png`"
                            spinner-color="primary"
                            alt="title"
                        />
                        <div
                            class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg"
                        >
                            <p class="flex flex-row pr-5 ">
                                <span v-for="strItem in seperate(category?.title)"
                                    :style="strItem?.string ? {} : {color: '#ffd62f'}"
                                    :class="!strItem?.string ? [
                                        'font-black text-sm sm:text-xl xl:text-2xl pr-3 ',
                                        isDrawer.value
                                            ? 'lg:text-sm'
                                            : 'lg:text-2xl',
                                    ] : [
                                        'font-black text-sm sm:text-lg xl:text-xl pr-3 ',
                                        isDrawer.value
                                            ? 'lg:text-sm'
                                            : 'lg:text-xl',
                                    ]"
                                >
                                    {{strItem?.content}}
                                </span>
                            </p>
                        </div>
                    </div>
                    <p class="text-md text-bold p-4">{{ category?.description }}</p>
                    <div class="text-center pb-10">
                        <q-btn color="primary" :label="tran('READ MORE', store.state.lang)" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
