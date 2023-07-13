<script setup lang="ts">
import Activity from "~~/components/landingPage/Activity.vue";
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
useHead({
      title: 'Canada777',
      meta: [
        {
          hid: 'Privacy Policy',
          name: 'Privacy Policy',
          content: 'Your privacy and security are of utmost importance to us. Our privacy policy outlines how we collect, use, and protect your personal information. Rest assured that your data is handled responsibly, in compliance with industry standards and regulations. Read our privacy policy to understand how we prioritize your privacy.'
        }
      ]
})
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
              {{tran('PRIVACY AND SECURITY POLICY', store.state.lang)}}
              </div>
          </div>
      </section>
      <section>
        <div class="contentSection pt-5 pb-5">
          <div class="container text-white">
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('pp1', store.state.lang)}}</p>
              <p class="pb-3">{{tran('pp2', store.state.lang)}}</p>
            </div>
            
            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('pp3', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('pp4', store.state.lang)}}</p>
              <p class="pb-3">{{tran('pp5', store.state.lang)}}</p>
            </div>
            
            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('pp6', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('pp7', store.state.lang)}}</p>
              <p class="pb-3">{{tran('pp8', store.state.lang)}}</p>
              <p class="pb-3">{{tran('pp9', store.state.lang)}}</p>
              <p class="pb-3">{{tran('pp10', store.state.lang)}}</p>
              <p class="pb-3">{{tran('pp11', store.state.lang)}}</p>
            </div>
            
            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('pp12', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('pp13', store.state.lang)}}</p>
              <p class="pb-3">{{tran('pp14', store.state.lang)}}</p>
            </div>
            
            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('pp15', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('pp16', store.state.lang)}}</p>
            </div>
            
            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('pp17', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('pp18', store.state.lang)}}</p>
              <p class="pb-3">{{tran('pp19', store.state.lang)}}</p>
              <p class="pb-3">{{tran('pp20', store.state.lang)}}</p>
              <p class="pb-3">{{tran('pp21', store.state.lang)}}</p>
              <p class="pb-3">{{tran('pp22', store.state.lang)}}</p>
              <p class="pb-3">{{tran('pp23', store.state.lang)}}</p>
              <p class="pb-3">{{tran('pp24', store.state.lang)}}</p>
              <p class="pb-3">{{tran('pp25', store.state.lang)}}</p>
            </div>
            
            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('pp26', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('pp27', store.state.lang)}}</p>
              <p class="pb-3">{{tran('pp28', store.state.lang)}}</p>
              <p class="pb-3">{{tran('pp29', store.state.lang)}}</p>
              <p class="pb-3">{{tran('pp30', store.state.lang)}}</p>
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
