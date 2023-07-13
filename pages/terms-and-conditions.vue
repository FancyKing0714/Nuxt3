<script setup lang="ts">
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
import Activity from "~~/components/landingPage/Activity.vue"
useHead({
      title: 'Canada777',
      meta: [
        {
          hid: 'Terms and Conditions',
          name: 'Terms and Conditions',
          content: 'Familiarize yourself with our terms and conditions to ensure a fair and secure gaming environment. Our comprehensive guidelines outline the rules, responsibilities, and obligations for both players and the platform. Stay informed and play with confidence while adhering to our policies.'
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
              {{tran('Terms and Conditions', store.state.lang)}}
              </div>
          </div>
      </section>
      <section>
        <div class="contentSection pt-5 pb-5">
          <div class="container text-white">
            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc1', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc2', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc3', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc4', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc5', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc6', store.state.lang)}}</p>
            </div>

            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc7', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc8', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc9', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc10', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc11', store.state.lang)}}</p>
            </div>

            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc12', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc13', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc14', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc15', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc16', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc17', store.state.lang)}}</p>
            </div>

            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc18', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc19', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc20', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc21', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc22', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc23', store.state.lang)}}</p>
            </div>

            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc24', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc25', store.state.lang)}}</p>
            </div>
            
            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc26', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc27', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc28', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc29', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc30', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc31', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc32', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc33', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc34', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc35', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc36', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc37', store.state.lang)}}</p>
            </div>

            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc38', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc39', store.state.lang)}}</p>
            </div>

            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc40', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc41', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc42', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc43', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc44', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc45', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc46', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc47', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc48', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc49', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc50', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc51', store.state.lang)}}</p>
            </div>

            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc52', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc53', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc54', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc55', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc56', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc57', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc58', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc59', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc60', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc61', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc62', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc63', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc64', store.state.lang)}}</p>
            </div>

            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc65', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc66', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc67', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc68', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc69', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc70', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc71', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc72', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc73', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc74', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc75', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc76', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc77', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc78', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc79', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc80', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc81', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc82', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc83', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc84', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc85', store.state.lang)}}</p>
            </div>

            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc86', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc87', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc88', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc89', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc90', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc91', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc92', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc93', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc94', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc95', store.state.lang)}}</p>
            </div>

            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc96', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc97', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc98', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc99', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc100', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc101', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc102', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc103', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc104', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc105', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc106', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc107', store.state.lang)}}</p>
            </div>

            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc108', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc109', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc110', store.state.lang)}}</p>
            </div>

            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc111', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc112', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc113', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc114', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc115', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc116', store.state.lang)}}</p>
            </div>

            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc117', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc118', store.state.lang)}}</p>
            </div>
            
            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc119', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc120', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc121', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc122', store.state.lang)}}</p>
            </div>

            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc123', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc124', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc125', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc126', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc127', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc128', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc129', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc130', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc131', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc132', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc133', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc134', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc135', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc136', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc137', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc138', store.state.lang)}}</p>
            </div>

            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc139', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc140', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc141', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc142', store.state.lang)}}</p>
            </div>

            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc143', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc144', store.state.lang)}}</p>
            </div>
            
            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc145', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc146', store.state.lang)}}</p>
            </div>

            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('tc147', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('tc148', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc149', store.state.lang)}}</p>
              <p class="pb-3">{{tran('tc150', store.state.lang)}}</p>
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
