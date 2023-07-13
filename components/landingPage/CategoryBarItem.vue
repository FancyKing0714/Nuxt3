<script setup lang="ts">
import {useRouter, useRoute} from 'vue-router';
import { tran } from "~~/utils/translation";
import { useStore } from 'vuex';
const store = useStore();
const router = useRouter();
const route = useRoute();
const props = defineProps({
  name: {
    type: String,
  },
  icon: {
    type: String,
  },
  link: {
    type: String,
  },
});

let tab=route.query?.tab?.toString()?route.query?.tab?.toString():'';
let active = ref(tab===props?.link)
watch(()=>route.query.tab,()=>{
    tab=route.query?.tab?.toString()?route.query?.tab?.toString():'';
    active.value = tab===props?.link;
});
const clickButton = () => {
  if(props.link==='')
    router.push(route.path);
  else
    router.push(`${route.path}?tab=${props.link}`);
}
</script>

<template>
  <div
    v-if=" store.state.isLogin || link != 'favorites' && link != 'recent' "
    class="flex flex-nowrap items-center justify-center w-26 p-3 cursor-pointer rounded-lg"
    :style="{backgroundColor: active? '#2283ee' : '' }"
    @click="clickButton"
  >
    <q-img class="w-4" :src="`/imgs/sidebar/${icon}.png`" alt="icon" />
    <p class="pl-1 text-xs flex flex-row flex-nowrap" v-for="str in name?.split(' ')">{{ tran(str, store.state.lang) }}</p> <!-- Use a utility class for font size -->
  </div>
</template>
