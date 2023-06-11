<script setup lang="ts">
import Activity from '~~/components/landingPage/Activity.vue';
import auth from '~~/middleware/routerMiddleware.js';

definePageMeta({
  middleware: [auth]
});

const faqList = [
    {
        question: "What is Europa777?",
        answer: "All our bonuses have their own terms and conditions and the wagering requirement specifies how many times the bonus funds have to be wagered before making a withdrawal. You will however see the bonus requirements below each bonus on the Promotions as well as the Bonus Terms pages."
    },
    {
        question: "What currencies does Europa777 accept?",
        answer: "All our bonuses have their own terms and conditions and the wagering requirement specifies how many times the bonus funds have to be wagered before making a withdrawal. You will however see the bonus requirements below each bonus on the Promotions as well as the Bonus Terms pages."
    },
    {
        question: "Who can play at Europa777?",
        answer: "All our bonuses have their own terms and conditions and the wagering requirement specifies how many times the bonus funds have to be wagered before making a withdrawal. You will however see the bonus requirements below each bonus on the Promotions as well as the Bonus Terms pages."
    },
    {
        question: "What are wagering requirements?",
        answer: "All our bonuses have their own terms and conditions and the wagering requirement specifies how many times the bonus funds have to be wagered before making a withdrawal. You will however see the bonus requirements below each bonus on the Promotions as well as the Bonus Terms pages."
    },
    {
        question: "Are there any bonus restrictions?",
        answer: "All our bonuses have their own terms and conditions and the wagering requirement specifies how many times the bonus funds have to be wagered before making a withdrawal. You will however see the bonus requirements below each bonus on the Promotions as well as the Bonus Terms pages."
    },
    {
        question: "What is a welcome bonus?",
        answer: "All our bonuses have their own terms and conditions and the wagering requirement specifies how many times the bonus funds have to be wagered before making a withdrawal. You will however see the bonus requirements below each bonus on the Promotions as well as the Bonus Terms pages."
    },
    {
        question: "What if I have a problem or complaint?",
        answer: "All our bonuses have their own terms and conditions and the wagering requirement specifies how many times the bonus funds have to be wagered before making a withdrawal. You will however see the bonus requirements below each bonus on the Promotions as well as the Bonus Terms pages."
    },
    {
        question: "Is there a minimum or maximum deposit or withdrawal limit?",
        answer: "All our bonuses have their own terms and conditions and the wagering requirement specifies how many times the bonus funds have to be wagered before making a withdrawal. You will however see the bonus requirements below each bonus on the Promotions as well as the Bonus Terms pages."
    },
    {
        question: "Can I win real money?",
        answer: "All our bonuses have their own terms and conditions and the wagering requirement specifies how many times the bonus funds have to be wagered before making a withdrawal. You will however see the bonus requirements below each bonus on the Promotions as well as the Bonus Terms pages."
    },
    {
        question: "How can I deposit or withdraw?",
        answer: "All our bonuses have their own terms and conditions and the wagering requirement specifies how many times the bonus funds have to be wagered before making a withdrawal. You will however see the bonus requirements below each bonus on the Promotions as well as the Bonus Terms pages."
    },
]
</script>
<template>
    <q-page>
        <div
            style="max-width: 1450px"
            class="w-full px-0 md:px-6 lg:px-14 py-8 m-auto"
        >
            <section class="main h-full px-4">
                <p class="font-bold text-base pb-4">FAQ's</p>
                <!-- Component Start -->
                <div class="flex flex-col">
                    <button
                        v-for="faq in faqList"
                        :faq = "faq"
                        class="group focus:outline-none p-1 rounded-sm relative"
                    >
                        <div
                            class="flex items-center justify-between h-12 font-semibold relative px-2"
                        >
                            <div
                                style="background: #383d47"
                                class="w-full h-full absolute left-0 top-0 opacity-80 rounded-sm"
                            ></div>
                                <div class="relative flex justify-start items-center">
                                    <p class="font-medium text-base p-3">
                                        {{ faq?.question }}
                                    </p>
                                </div>
                                <q-img
                                    class="w-2 relative"
                                    src="/imgs/sidebar/accordion_icon.svg"
                                />
                        </div>
                        <div
                            class="relative max-h-0 overflow-hidden duration-300 group-focus:max-h-32"
                        >
                            <div
                                style="background: #383d47"
                                class="w-full h-full absolute left-0 top-0 opacity-40 rounded-sm"
                            ></div>
                            <p class="py-2 px-6 text-xs text-left">
                                {{ faq?.answer }}
                            </p>
                        </div>
                    </button>
                </div>
            </section>
            <section class="pt-8">
                <Activity />
            </section>
        </div>
    </q-page>
</template>
