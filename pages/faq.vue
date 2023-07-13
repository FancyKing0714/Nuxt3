<script setup lang="ts">
import Activity from '~~/components/landingPage/Activity.vue';
import auth from '~~/middleware/routerMiddleware.js';
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();

definePageMeta({
  middleware: [auth]
});

const faqList = [
    {
        question: "What is Europa777?",
        answer: ["We are a licensed online casino where gambling activities are hosted by numbers renowned gaming providers in the industry with over 3100 games to play."]
    },
    {
        question: "What currencies does Europa777 accept?",
        answer: ["We accept CAD, USD, GBP, and EUR. However, you can deposit in certain cryptocurrencies that will be converted to your choice of the aformentioned currencies to play in."]
    },
    {
        question: "Who can play at Europa777?",
        answer: ["Canada777 is available to most players from around the world, unfortunately however, players from the following the following countries are restricted from registering: Afghanistan, Aruba, Bonaire, Burma, Congo, Curacao, Eritrea, Ethiopia, France, Iran, Iraq, Libya, Malaysia, Myanmar, The Netherlands, North Korea, Palestine, Saba, Singapore, Somalia, Statia, St. Maarten, Sudan, Syria, Singapore, United Kingdom, United State of America, Yemen, and Zimbabwe."]
    },
    {
        question: "Are there any bonus restrictions?",
        answer: ["Our amazing bonuses will have different terms and conditions, so read them carefully before accepting. If you have any further questions, please contact our brilliant Support Team."]
    },
    {
        question: "How do I claim a bonus?",
        answer: ["All bonuses will have a coupon code for you to redeem, once you have chosen the bonus you will like to use.","Go to the Dashboard section in the from left side menu.","Select the Deposit Tab.","Choose Bonus Package.","Make your deposit and the bonus will be added automatically."]
    },
    {
        question: "What are wagering requirements?",
        answer: ["All our bonuses have their own terms and conditions and the wagering requirement specifies how many times the bonus funds have to be wagered before making a withdrawal. You will however see the bonus requirements below each bonus on the Promotions as well as the Bonus Terms pages."]
    },
    {
        question: "What is a welcome bonus?",
        answer: ["Welcome bonuses provide new players with bonus monies equal to a percentage of their initial deposit to welcome them to the casino and give them a taste of whats on offer."]
    },
    {
        question: "What if I have a problem or complaint?",
        answer: ["That is why our excellent Support Team are there for you 24/7 to assist you with anything you may need via our live chat function or email at support@canada777.com"]
    },
    {
        question: "Is there a minimum or maximum deposit or withdrawal limit?",
        answer: ["There is a minimum accepted deposit of US$ 20 or currency equivalent to make your way to winning.","The minimum withdrawal is US$ 50 or currency equivalent with a maximum daily (24 hour period) withdrawal limit of $10,000."]
    },
    {
        question: "Can I win real money?",
        answer: ["Absolutely, all games allow you to play for real cash prizes and luck jackpots along the way. If you feel the need to practice a bit first, you can play the games in Demo."]
    },
    {
        question: "How can I deposit or withdraw?",
        answer: ["The following deposit and withdrawal methods are available at Canada777: Interac, Visa, MasterCard, Crypto Wallet: BTC, LTC, ETH, TRX (Tron), BNB (Binance coin), BUSB (Binance USD)."]
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
                <p class="font-bold text-base pb-4 p-2">{{tran('FAQs', store.state.lang)}}</p>
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
                                        {{ tran(faq?.question, store.state.lang) }}
                                    </p>
                                </div>
                                <q-img
                                    class="w-2 relative"
                                    src="/imgs/sidebar/accordion_icon.svg"
                                />
                        </div>
                        <div
                            class="relative max-h-0 overflow-hidden duration-300 group-focus:max-h-52"
                        >
                            <p class="py-2 px-6 text-s text-left" style="background: #383d4741" v-for="answer in faq.answer">
                                {{ tran(answer, store.state.lang) }}
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
