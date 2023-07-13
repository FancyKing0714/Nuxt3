<script setup lang="ts">
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
import Activity from "~~/components/landingPage/Activity.vue"

</script>
<template>
  <q-page>
    <div
      style="max-width: 1450px"
      class="w-full px-0 md:px-6 lg:px-14 py-8 m-auto font-sans font-medium"
    >
      <section>
          <div class="flex items-center justify-center">
              <div
                class="bg-gray-300 bg-opacity-5 rounded-xl text-2xl font-extrabold uppercase mb-10 p-4 7"
              >
              {{tran('RESPONSIBLE GAMBLING', store.state.lang)}}
              </div>
          </div>
      </section>
      <section>
        <div class="contentSection pt-5 pb-5">
          <div class="container text-white">
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('rg1', store.state.lang)}}</p>
              <p class="pb-3">{{tran('rg2', store.state.lang)}}</p>
              <p class="pb-3">{{tran('rg3', store.state.lang)}}</p>
              <p class="pb-3">{{tran('rg4', store.state.lang)}}</p>
            </div>
            <h5 class="mt-4 text-3xl font-normal pb-3">{{tran('rg5', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('rg6', store.state.lang)}}</p>
              <p class="pb-3">{{tran('rg7', store.state.lang)}}</p>
              <p class="pb-3">{{tran('rg8', store.state.lang)}}</p>
              <p class="pb-3">{{tran('rg9', store.state.lang)}}</p>
              <p class="pb-3">{{tran('rg10', store.state.lang)}}</p>
              <p class="pb-3">{{tran('rg11', store.state.lang)}}</p>
              <p class="pb-3">{{tran('rg12', store.state.lang)}}</p>
              <p class="pb-3">{{tran('rg13', store.state.lang)}}</p>
              <p class="pb-3">{{tran('rg14', store.state.lang)}}</p>
              <p class="pb-3">{{tran('rg15', store.state.lang)}}</p>
              <p class="pb-3">{{tran('rg16', store.state.lang)}}</p>
              <p class="pb-3">{{tran('rg17', store.state.lang)}}</p>
              <p class="pb-3">{{tran('rg18', store.state.lang)}}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-8">
        <Activity />
      </section>
    </div>
  </q-page>
</template>
