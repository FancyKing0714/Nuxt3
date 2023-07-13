<script setup>
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
definePageMeta({
  layout: 'empty',
});
</script>
<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">{{tran('Oops. Nothing here...', store.state.lang)}}Oops. Nothing here...</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>
