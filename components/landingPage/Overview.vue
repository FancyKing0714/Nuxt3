<script setup lang="ts">
    import { useStore } from 'vuex';
    const store = useStore();
    const isDrawer = computed(() => {
        return ref(store.state.isDrawer);
    });
    const isLogin = computed(() => {
        return ref(store.state.isLogin);
    });
</script>

<template>
    <div class="relative pb-0 sm:pb-16 w-full">
        <div>
            <p
                v-if="isLogin.value === true"
                class="font-bold text-3xl pl-3 hidden md:!block"
            >
                Welcome {{ store.state.User.first_name }} {{ store.state.User.last_name }}
            </p>
            <img
                class="md:max-w-sm sm:max-w-xs w-48 sm:w-auto"
                src="/imgs/logo_full.png"
                alt="logo"
            />
            <p class="font-bold md:text-3xl text-2xl pl-3"># 1 Online casino</p>
            <div class="sm:hidden">
                <p class="font-bold text-2xl pl-3">welcome bonus</p>
                <p
                    style="color: #fff004"
                    class="font-black text-6xl pl-3"
                >
                    200%
                </p>
                <p class="font-bold text-2xl pl-3 pb-8">UP TO $600</p>
                <div class="flex items-center justify-between pt-10">
                    <q-btn
                        v-if="isLogin.value === false"
                       
                        class="font-bold text-2xl sm:px-6 !py-0"
                        unelevated
                        color="primary"
                        label="SIGN UP"
                    />
                    <q-btn
                        v-if="isLogin.value === true"
                        :class="[
                            'font-bold text-lg md:text-xl lg:text-2xl lg:px-6 md:ml-4',
                            isDrawer.value ? 'lg:hidden' : '',
                        ]"
                        unelevated
                        color="primary"
                        label="Deposit"
                    />
                    <div class="flex items-center flex-col justify-between">
                        <p class="font-bold text-lg pl-3">2ND/3RD DEPOSIT</p>
                        <p class="gradiant text-2xl font-black pl-3">
                            100% bonus
                        </p>
                    </div>
                </div>
            </div>

            <div class="hidden sm:!block">
                <p
                    style="font-family: Montserrat-Italic"
                    :class="[
                        'font-medium text-lg xl:block pl-3 pt-1',
                        isDrawer.value ? 'lg:hidden' : '',
                    ]"
                >
                    Enjoy 3500+ games, fast payouts and 24/7 live support.
                </p>
                <p v-if="isLogin.value === false">
                    <span style="color: #fff004" class="text-4xl font-bold"
                        >200%</span
                    >
                    <span class="text-base">BONUS</span>
                    <br class="md: hidden" />
                    <span style="color: #fff004" class="text-4xl font-bold"
                        >+100</span
                    >
                    <span class="text-base">FREE SPINS</span>
                </p>

                <div class="pt-3 pl-3 flex items-center justify-start">
                    <q-btn
                        v-if="isLogin.value === true"
                        class="font-bold text-lg md:text-xl lg:text-2xl !leading-loose lg:px-6"
                        outline
                        color="white"
                        label="play slots"
                    />
                    <q-btn
                        v-if="isDrawer.value === false"
                        :class="[
                            'font-bold text-2xl lg:px-6 md:ml-4',
                            isDrawer.value ? 'lg:hidden' : '',
                        ]"
                        unelevated
                        color="primary"
                        label="Deposit"
                    />
                    <q-btn
                        v-if="isLogin.value === false"
                        :class="[
                            'font-bold text-2xl lg:px-6',
                        ]"
                        unelevated
                        color="primary"
                        label="SIGN UP"
                    />
                </div>
            </div>

            <div class="items-center justify-start pt-3 pl-3 hidden md:!block">
                <q-img
                    class="w-9 md:w-10 lg:w-12"
                    src="/imgs/visa.png"
                    alt="visa"
                />
                <q-img
                    class="w-9 md:w-10 lg:w-12 ml-1"
                    src="/imgs/master_card.png"
                    alt="master_card"
                />
                <q-img
                    class="w-9 md:w-10 lg:w-12 ml-1"
                    src="/imgs/interac.png"
                    alt="interac"
                />
                <q-img
                    class="w-9 md:w-10 lg:w-12 ml-1"
                    src="/imgs/bitcoin.png"
                    alt="bitcoin"
                />
                <q-img
                    class="w-9 md:w-10 lg:w-12 ml-1"
                    src="/imgs/etirum.png"
                    alt="etirum"
                />
            </div>
        </div>

        <img
            :class="[
                isDrawer.value ? 'lg:w-72 lg:top-0 lg:-right-3' : 'lg:w-full',
                'absolute -right-3 -bottom-24 z-0 w-56 top-14 sm:top-0 md:w-96 md:!block sm:max-w-sm md:max-w-md xl:max-w-lg xl:w-auto sm_hidden',
            ]"
            src="/imgs/new.png"
            alt="new"
        />
    </div>
</template>
