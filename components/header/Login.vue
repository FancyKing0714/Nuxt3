<script setup lang="ts">
    import { ref } from 'vue';
    import axios from 'axios';
    import { useQuasar } from 'quasar'
    import {useStore} from 'vuex';
    
    const store = useStore();
    const not = useQuasar();
    const config = useRuntimeConfig();

    const LogIn = () => {
        Object.keys(loginInfo).map(item => {
            data = {...data, [item] : loginInfo[item].value};
        });
        axios.post(`${config.public.baseURL}/api/login`,data)
        .then(res =>{
            const tokenStr=res.data["token"];
            localStorage.setItem("token",tokenStr.split("|")[1]);     
            not.notify({
                color: 'white',
                textColor: 'dark',
                message: 'Success',
                caption: "Password Updated Successfuly",
                icon: 'done',
                iconColor: 'green',
                position: 'top-right',
                progress:true,
                multiLine: true,
                timeout: 1500,
                })   
            axios({
                    method:'get',
                    url: `${config.public.baseURL}/api/player/getProfile`,
                    headers: {
                        "Authorization" : "Bearer " + tokenStr.split("|")[1]
                    },
                })
            .then(res => {
                store.dispatch('handleGetUser', res.data.Player);
            })
            .catch(err => {
                        not.notify({
                            color: 'white',
                            textColor: 'dark',
                            message: 'Error',
                            caption: err.response.data.message,
                            icon: 'info',
                            iconColor: 'red',
                            position: 'top-right',
                            progress:true,
                            multiLine: true,
                            timeout: 1500,
                            })
            });
            props.toggleState('onLogin', false);
            props.toggleState('isLogin', true);
        })
        .catch(err => {
            not.notify({
                color: 'white',
                textColor: 'dark',
                message: 'Error',
                caption: err.response.data.message,
                icon: 'info',
                iconColor: 'red',
                position: 'top-right',
                progress:true,
                multiLine: true,
                timeout: 1500,
                })
        });
    }
    const loginInfo = {
        email: ref(''),
        password: ref(''),
    };
    const props = defineProps({
        open: {
            type: Boolean,
            required: true,
        },
        toggleState: {
            type: Function,
            required: true,
        },
    });
    let open = ref(props.open);
    let data = {};
    watch(props, (newValue) => {
        console.log(newValue.open);

        open.value = newValue.open;
    });
</script>
<template>
    <q-dialog v-model="open" @hide="props.toggleState('onLogin', false)">
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
                            <P
                                class="font-bold text-xl text-shadow-lg text-center py-2"
                            >
                                Log in user
                            </P>
                            <div class="flex items-center justify-start">
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
                            <div class="flex items-center justify-start">
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
                                class="flex justify-between items-center pt-2 pl-6"
                            >
                                <span style="font-size: 8px">Remember me</span>
                                <span style="font-size: 8px"
                                    >Forgot your password?</span
                                >
                            </div>
                            <q-btn
                                class="mt-4 font-bold"
                                style="
                                    background-color: #fff004;
                                    color: black;
                                    font-size: 20px;
                                "
                                @click="
                                    () => {
                                        LogIn()
                                    }
                                "
                                label="LOG IN"
                            />
                            <p style="font-size: 8px" class="pt-4">
                                Don’t have an account yet?
                            </p>
                            <q-btn
                                style="font-size: 10px"
                                class="mt-4 font-medium p-4"
                                @click="
                                    () => {
                                        props.toggleState('onLogin', false);
                                        props.toggleState('onSignUp', true);
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
