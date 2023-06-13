<script setup lang="ts"></script>

<template>
    <div
    class="hidden sm:!block"
        style="
            background: radial-gradient(
                94.97% 94.97% at 50% 5.03%,
                #202531 0%,
                #202531 50.48%,
                #1f252e 100%
            );
        "
    >
        <div
            style="border-bottom: 1px solid rgba(123, 129, 147, 0.3)"
            class="p-5 grid grid-cols-4"
        >
            <div class="hidden lg:!block lg:col-span-1" style="max-width: 196px">
                <q-img
                    style="max-width: 163px"
                    src="/imgs/logo_full.png"
                    alt="logo"
                />
                <p class="pt-4" style="font-size: 9px; font-weight: 500">
                    You’re in luck! You have landed on the best online casino in
                    Canada. But that is not all, Europa777 welcomes not only
                    Canadian players, but players from around the world too. Try
                    your luck on our extraordinary selection of games and become
                    one of the luckiest players out there.
                </p>
            </div>
            <div
                class="px-10 grid grid-cols-2 sm:grid-cols-4 md:gap-4 w-full lg:w-auto md:col-span-2 col-span-4"
            >
                <div class="col-span-1">
                    <p class="text-base font-semibold pb-2">iGaming</p>
                    <p class="pb-1" style="font-size: 11px; font-weight: 400">
                        All Games
                    </p>
                    <p class="pb-1" style="font-size: 11px; font-weight: 400">
                        Slots
                    </p>
                    <p class="pb-1" style="font-size: 11px; font-weight: 400">
                        Live Casino
                    </p>
                    <p class="pb-1" style="font-size: 11px; font-weight: 400">
                        Table
                    </p>
                    <p class="pb-1" style="font-size: 11px; font-weight: 400">
                        Roulette
                    </p>
                </div>
                <div class="col-span-1">
                    <p class="text-base font-semibold pb-2">Quick Links</p>
                    <p class="pb-1" style="font-size: 11px; font-weight: 400">
                        Registration
                    </p>
                    <p class="pb-1" style="font-size: 11px; font-weight: 400">
                        Deposit
                    </p>
                    <p class="pb-1" style="font-size: 11px; font-weight: 400">
                        Bonus
                    </p>
                    <p class="pb-1" style="font-size: 11px; font-weight: 400">
                        Withdraw
                    </p>
                    <p class="pb-1" style="font-size: 11px; font-weight: 400">
                        Banking
                    </p>
                </div>
                <div class="col-span-1">
                    <p class="text-base font-semibold pb-2">About Us</p>
                    <p class="pb-1" style="font-size: 11px; font-weight: 400">
                        About Europa777
                    </p>
                    <p class="pb-1" style="font-size: 11px; font-weight: 400">
                        Provably Fair
                    </p>
                    <p class="pb-1" style="font-size: 11px; font-weight: 400">
                        Contact Us
                    </p>
                    <p class="pb-1" style="font-size: 11px; font-weight: 400">
                        FAQ’s
                    </p>
                    <p class="pb-1" style="font-size: 11px; font-weight: 400">
                        Affiliates
                    </p>
                </div>
                <div class="col-span-1">
                    <p class="text-base font-semibold pb-2">Help</p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push('/terms-and-conditions')">
                        Terms & Conditions
                    </p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push('/bonus-terms-and-conditions')">
                        Bonus Terms
                    </p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push('/privacy-and-security-policy')">
                        Privacy and Security Policy
                    </p>
                    <p class="pb-1 cursor-pointer" style="font-size: 11px; font-weight: 400" @click="$router.push('/responsible-gambling')">
                        Responsible Gambling
                    </p>
                </div>
            </div>
            <div
                class="flex justify-around w-full lg:w-auto lg:block pt-4 lg:pt-0 lg:col-span-1 md:col-span-2 col-span-4"
            >
                <div class="lg:hidden" style="max-width: 196px">
                    <q-img
                        style="max-width: 163px"
                        src="/imgs/logo_full.png"
                        alt="logo"
                    />
                    <p class="pt-4" style="font-size: 9px; font-weight: 500">
                        You’re in luck! You have landed on the best online
                        casino in Canada. But that is not all, Europa777
                        welcomes not only Canadian players, but players from
                        around the world too. Try your luck on our extraordinary
                        selection of games and become one of the luckiest
                        players out there.
                    </p>
                </div>
                <div style="max-width: 196px">
                    <p class="text-base font-semibold pb-2">Payment Methods</p>
                    <q-img
                        class="w-full"
                        src="/imgs/footer/payment.png"
                        alt="logo"
                    />
                    <p class="text-base font-semibold pt-4 pb-2">Follow Us</p>
                    <div class="flex justify-between items-center">
                        <q-img
                            style="max-width: 17px"
                            src="/imgs/footer/telegram.png"
                            alt="logo"
                        />
                        <q-img
                            style="max-width: 17px"
                            src="/imgs/footer/youtube.png"
                            alt="logo"
                        />
                        <q-img
                            style="max-width: 17px"
                            src="/imgs/footer/twitter.png"
                            alt="logo"
                        />
                        <q-img
                            style="max-width: 17px"
                            src="/imgs/footer/instagram.png"
                            alt="logo"
                        />
                        <q-img
                            style="max-width: 17px"
                            src="/imgs/footer/linkdin.png"
                            alt="logo"
                        />
                        <img
                            style="max-height: 17px;"
                            src="/imgs/footer/facebook.png"
                            alt="logo"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="py-5 flex items-center justify-center">
            <div style="color: #7d8396">(604) 227-4664</div>
            <div
                style="width: 2px; height: 16px; background: #54647d"
                class="mx-5"
            ></div>
            <div style="color: #7d8396">support@europa777.com</div>
        </div>
    </div>
</template>
