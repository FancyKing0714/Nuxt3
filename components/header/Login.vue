<script setup lang="ts">
    import { ref , watch} from 'vue';
    import {useStore} from 'vuex';
    import {useRouter} from 'vue-router';
    import { logIn } from '~~/action/auth';

    const store = useStore();
    const router = useRouter();
    //watch login state
    watch(
        ()=>store.state.User,
        ()=>{
            if(Object.keys(store.state.User).length === 0){             //once user logout, store.state.User become {}, then show login dialog
                store.commit('handleOnLogin',true);
            }
            else{                                                       //once user login, store.state.User become {...}, then hide login dialog
                store.commit('handleOnLogin',false);                     //then set store.state.login value to true.
                store.commit('handleLogin',true);
            }
    });

    const loginInfo = {
        email: ref(''),
        password: ref(''),
    };
    let data = {};
</script>
<template>
    <q-dialog v-model="store.state.onLogin" @hide="store.commit('handleOnLogin', false)">
        <q-card class="w-full sm:w-4/5 md:w-3/5" style="width: 700px">
            <div style="background: rgb(0 90 201)">
                <div class="sm:grid sm:grid-cols-2 p-6">
                    <div class="p-1 hidden sm:!block">
                        <q-img
                            style="max-width: 221px"
                            src="/imgs/man_right.png"
                            alt="man"
                        />
                    </div>
                    <div class="p-1 text-center">
                        <p class="font-black text-3xl text-shadow-lg">
                            Europe #1
                        </p>
                        <p class="font-medium text-base text-shadow-lg">
                            Online Casino
                        </p>
                        <span
                            class="p-1 text-shadow-lg"
                            style="
                                font-size: 8px;
                                font-family: Montserrat-Italic;
                                border-bottom: 1px solid rgba(95, 83, 106, 0.5);
                            "
                        >
                            Enjoy 3500+ games, fast payouts and 24/7 live
                            support.
                        </span>
                        <div>
                            <p
                                class="font-bold text-xl text-shadow-lg text-center py-2"
                            >
                                Log in user
                            </p>
                            <div class="flex flex-nowrap items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="person"
                                />
                                <q-input
                                    class="text-shadow-lg w-full"
                                    type="email"
                                    placeholder="Email address"
                                    standout
                                    v-model="loginInfo.email.value"
                                    :dense="true"
                                />
                            </div>
                            <div class="flex flex-nowrap items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="lock"
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full"
                                    type="password"
                                    placeholder="Password"
                                    standout
                                    v-model="loginInfo.password.value"
                                    :dense="true"
                                />
                            </div>
                            <div
                                class="flex flex-nowrap justify-between items-center pt-2 pl-6"
                            >
                                <span style="font-size: 8px">Remember me</span>
                                <span style="font-size: 8px"
                                    >Forgot your password?</span
                                >
                            </div>
                            <q-btn
                                class="mt-4 font-bold w-full"
                                style="
                                    background-color: #fff004;
                                    color: black;
                                    font-size: 20px;
                                "
                                @click="
                                    () => {
                                        let data = {};
                                        Object.keys(loginInfo).map(item => {
                                            data = {...data, [item] : loginInfo[item].value};
                                        });
                                        logIn(data, store, router);
                                    }
                                "
                                label="LOG IN"
                            />
                            <p class="pt-4 text-xs">
                                Don’t have an account yet?
                            </p>
                            <q-btn
                                class="mt-4 font-medium p-2 text-xs w-full"
                                @click="
                                    () => {
                                        store.commit('handleOnLogin', false);
                                        store.commit('handleOnRegister', true);
                                    }
                                "
                                label="Create account"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </q-card>
    </q-dialog>
</template>
