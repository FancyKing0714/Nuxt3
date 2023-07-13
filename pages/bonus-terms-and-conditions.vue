<script setup lang="ts">
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
import Activity from "~~/components/landingPage/Activity.vue"
useHead({
      title: 'Canada777',
      meta: [
        {
          hid: 'Bonus Terms',
          name: 'Bonus Terms',
          content: 'Learn about the terms and conditions specific to bonuses and promotions. Understand the wagering requirements, eligibility criteria, and other important details associated with bonus offers. Stay informed to make the most of your bonuses and maximize your chances of winning.'
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
              {{tran('BONUS TERMS', store.state.lang)}}
              </div>
          </div>
      </section>
      <section>
        <div class="contentSection pt-5 pb-5">
          <div class="container text-white">
            <h5 class="mt-4 text-3xl font-normal pb-3">{{tran('BONUS TERMS', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('bt1', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt2', store.state.lang)}}</p>
              <p>{{tran('bt3', store.state.lang)}}</p>
              <p>{{tran('bt4', store.state.lang)}}</p>
              <p>{{tran('bt5', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt6', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt7', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt8', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt9', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt10', store.state.lang)}}</p>
              <p>{{tran('bt11', store.state.lang)}}</p>
              <p>{{tran('bt12', store.state.lang)}}</p>
              <p>{{tran('bt13', store.state.lang)}}</p>
              <p>{{tran('bt14', store.state.lang)}}</p>
              <p>{{tran('bt15', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt16', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt17', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt18', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt19', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt20', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt21', store.state.lang)}}</p>
            </div>
            
            <h5 class="mt-4 text-3xl font-normal pb-3">{{tran('BONUS CONDITIONS', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('bt22', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt23', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt24', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt25', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt26', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt27', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt28', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt29', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt30', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt31', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt32', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt33', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt34', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt35', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt36', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt37', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt38', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt39', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt40', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt41', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt42', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt43', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt44', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt45', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt46', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt47', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt48', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt49', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt50', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt51', store.state.lang)}}</p>
              <p class="pb-3">{{tran('bt52', store.state.lang)}}</p>
              <p>{{tran('bt53', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt54', store.state.lang)}}</span>{{tran('bt55', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt56', store.state.lang)}}</span>{{tran('bt57', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt58', store.state.lang)}}</span>{{tran('bt59', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt60', store.state.lang)}}</span>{{tran('bt61', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt62', store.state.lang)}}</span>{{tran('bt63', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt64', store.state.lang)}}</span>{{tran('bt65', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt66', store.state.lang)}}</span>{{tran('bt67', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt68', store.state.lang)}}</span>{{tran('bt69', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt70', store.state.lang)}}</span>{{tran('bt71', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt72', store.state.lang)}}</span>{{tran('bt73', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt74', store.state.lang)}}</span>{{tran('bt75', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt76', store.state.lang)}}</span>{{tran('bt77', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt78', store.state.lang)}}</span>{{tran('bt79', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt80', store.state.lang)}}</span>{{tran('bt81', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt82', store.state.lang)}}</span>{{tran('bt83', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt84', store.state.lang)}}</span>{{tran('bt85', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt86', store.state.lang)}}</span>{{tran('bt87', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt88', store.state.lang)}}</span>{{tran('bt89', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt90', store.state.lang)}}</span>{{tran('bt91', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt92', store.state.lang)}}</span>{{tran('bt93', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt94', store.state.lang)}}</span>{{tran('bt95', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt96', store.state.lang)}}</span>{{tran('bt97', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt98', store.state.lang)}}</span>{{tran('bt99', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt100', store.state.lang)}}</span>{{tran('bt101', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt102', store.state.lang)}}</span>{{tran('bt103', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt104', store.state.lang)}}</span>{{tran('bt105', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt106', store.state.lang)}}</span>{{tran('bt107', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt108', store.state.lang)}}</span>{{tran('bt109', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt110', store.state.lang)}}</span>{{tran('bt111', store.state.lang)}}</p>
              <p><span class="text-red-500">{{tran('bt112', store.state.lang)}}</span>{{tran('bt113', store.state.lang)}}</p>
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
