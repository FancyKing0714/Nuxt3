<script setup lang="ts">
    import { ref , watch} from 'vue';
    import {useStore} from 'vuex';
    import {useRouter} from 'vue-router';
    import { logIn } from '~~/action/auth';
    import { tran } from "~~/utils/translation";    

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
                            {{tran('Europe #1', store.state.lang)}}
                        </p>
                        <p class="font-medium text-base text-shadow-lg">
                            {{tran('Online Casino', store.state.lang)}}
                        </p>
                        <span
                            class="p-1 text-shadow-lg"
                            style="
                                font-size: 8px;
                                font-family: Montserrat-Italic;
                                border-bottom: 1px solid rgba(95, 83, 106, 0.5);
                            "
                        >
                            {{tran('enjoy', store.state.lang)}}
                        </span>
                        <div>
                            <p
                                class="font-bold text-xl text-shadow-lg text-center py-2"
                            >
                                {{tran('Log in user', store.state.lang)}}
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
                                    :placeholder="tran('Email address', store.state.lang)"
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
                                    :placeholder="tran('Password', store.state.lang)"
                                    standout
                                    v-model="loginInfo.password.value"
                                    :dense="true"
                                />
                            </div>
                            <div
                                class="flex flex-nowrap justify-between items-center pt-2 pl-6"
                            >
                                <span style="font-size: 8px">{{tran('', store.state.lang)}}Remember me</span>
                                <span style="font-size: 8px"
                                    >{{tran('Forgot your password?', store.state.lang)}}</span
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
                                :label="tran('LOG IN', store.state.lang)"
                            />
                            <p class="pt-4 text-xs">
                                {{tran('Don’t have an account yet?', store.state.lang)}}
                            </p>
                            <q-btn
                                class="mt-4 font-medium p-2 text-xs w-full"
                                @click="
                                    () => {
                                        store.commit('handleOnLogin', false);
                                        store.commit('handleOnRegister', true);
                                    }
                                "
                                :label="tran('Create account', store.state.lang)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </q-card>
    </q-dialog>
</template>
