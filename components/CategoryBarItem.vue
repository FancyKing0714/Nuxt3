<script setup lang="ts">
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
defineProps({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  active: {
    type: Boolean,
    required: true, // Fix typo: replace "require" with "required"
  },
});
</script>

<template>
  <div
    class="flex flex-nowrap items-center justify-center w-26 p-2 cursor-pointer rounded-sm"
    :class="{ 'bg-slate-400': active }"
    :style="{ color: 'white' , backgroundColor: active ? '#0072FF' : '' }"
  >
    <q-img class="w-5 h-5 mr-1" :src="`/imgs/${icon}.png`" alt="icon" />
    <p class="pl-1 text-base font-medium">{{ tran(name, store.state.lang) }}</p> <!-- Use a utility class for font size -->
  </div>
</template>
