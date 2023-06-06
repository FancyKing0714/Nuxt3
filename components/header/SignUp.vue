<script setup lang="ts">
    import { ref } from 'vue';
    import axios from 'axios';
    import { useQuasar } from 'quasar'
    const not = useQuasar();
    const config = useRuntimeConfig();

    let data = {};
    let signupInfo = {
        first_name: ref(''),
        last_name: ref(''),
        username: ref(''),
        gender: ref(''),
        dob: ref(''),
        email: ref(''),
        password: ref(''),
        country: ref(''),
        street_1_address: ref(''),
        street_2_address: ref(''),
        state: ref(''),
        city: ref(''),
        zip: ref(''),
        currency: ref(''),
        phone: ref(''),
    }; 
    signupInfo.currency.value = 'CAD';
    signupInfo.gender.value = 'Male';
    const genders = ['Male', 'Female'];
    const currencys = ['CAD', 'USD'];
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
    const SignUp = async () => { 
        Object.keys(signupInfo).map(item => {
            data = {...data, [item] : signupInfo[item].value};
        });
        await axios({
                method: 'post',
                url: `${config.public.baseURL}/api/register`,
                data: data
            })
        .then(res=>{
            props.toggleState('onLogin' , true);
            props.toggleState('onSignUp' , false);
        })
        .catch(err=>{
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
    watch(props, (newValue) => {
        console.log(newValue.open);

        open.value = newValue.open;
    });
    const onGenderItemClick = (item: any) => {
        signupInfo.gender.value = item
    }
    const onCurrencyItemClick = (item: any) => {
        signupInfo.currency.value = item
    }
    const initData = () => {
        signupInfo = {
            first_name: ref(''),
            last_name: ref(''),
            username: ref(''),
            gender: ref(''),
            dob: ref(''),
            email: ref(''),
            password: ref(''),
            country: ref(''),
            street_1_address: ref(''),
            street_2_address: ref(''),
            state: ref(''),
            city: ref(''),
            zip: ref(''),
            currency: ref(''),
            phone: ref(''),
        }; 
        signupInfo.currency.value = 'CAD';
        signupInfo.gender.value = 'Male';
    }
</script>
<template>
    <q-dialog v-model="open" @hide="{props.toggleState('onSignUp', false);initData();}">
        <q-card  class="w-full sm:w-4/5 md:w-3/5" style="width: 700px">
            <div style="background: rgb(0 90 201)">
                <div class="sm:grid sm:grid-cols-2 p-2">
                    <div class="p-1 hidden sm:!block flex justify-content-center">
                        <q-img
                            class="-mb-16 mt-6"
                            style="max-width: 221px"
                            src="/imgs/new.png"
                            alt="man"
                        />
                        <q-img
                            style="max-width: 221px"
                            src="/imgs/casino_offers.png"
                            alt="man"
                        />
                        <div
                            class="flex justify-between items-center pt-3 w-full"
                        >
                            <span style="font-size: 10px;text-align: center;"
                                >I confirm that I am at least 18 years old
                                and I have read and accept the General Terms
                                of Conditions</span>
                        </div>
                        <q-btn
                            @click="
                                SignUp()
                            "
                            class="mt-5 font-bold w-full py-3"
                            style=" 
                                background-color: #fff004;
                                color: black;
                                font-size: 20px;
                            "
                            label="Register"
                        />
                    </div>
                    <div class="p-1 text-center">
                        <div>
                            <P
                                class="font-bold text-xl text-shadow-lg text-center py-2 mb-2"
                            >
                                Sign up
                            </P>
                            <div class="flex items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="person"
                                />
                                <q-input
                                    class="text-shadow-lg w-full pr-2"
                                    type="text"
                                    placeholder="first name"
                                    standout
                                    v-model="signupInfo.first_name.value"
                                    :dense="true"
                                />
                                <q-input
                                    class="text-shadow-lg w-full "
                                    type="text"
                                    placeholder="last name"
                                    standout
                                    v-model="signupInfo.last_name.value"
                                    :dense="true"
                                />
                            </div>
                            <div class="flex items-center justify-start pt-2">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name=""
                                />
                                <q-input
                                    class="text-shadow-lg w-full mr-2"
                                    type="text"
                                    placeholder="UserName"
                                    standout
                                    v-model="signupInfo.username.value"
                                    :dense="true"
                                />
                                <q-btn-dropdown
                                    class="btn-none px-1 py-1 sm:py-2 float-right w-full"
                                    label-class="d-flex align-items-center"
                                    style="background-color: #1976D2;"
                                >
                                    <template v-slot:label>
                                        <div
                                            class="flex items-center justify-start text-xs font-normal sm:text-sm sm:pr-3"
                                        >
                                            {{ signupInfo.gender.value }}
                                        </div>
                                    </template>
                                    <q-list>
                                        <q-item
                                            v-for="gender in genders"
                                            clickable
                                            v-close-popup
                                            @click="onGenderItemClick(gender)"
                                        >
                                            <q-item-section>
                                                <q-item-label>
                                                    <div class="flex items-center justify-start">
                                                        <p class="text-xs pl-1">{{ gender }}</p>
                                                    </div>
                                                </q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-btn-dropdown>
                            </div>
                            <div class="flex items-center justify-start pt-2">
                                <q-icon 
                                    name="event" 
                                    class="cursor-pointer opacity-50"
                                    size="sm"
                                >
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="signupInfo.dob.value">
                                            <div class="row items-center justify-end">
                                                <q-btn v-close-popup label="Close" color="primary" flat />
                                            </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-icon>
                                <q-input
                                    class="text-shadow-lg w-full"
                                    type="text"
                                    mask="date"
                                    placeholder="Birthday"
                                    standout
                                    v-model="signupInfo.dob.value"
                                    :dense="true"
                                />
                            </div>
                            <div class="flex items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="mail"
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full"
                                    type="email"
                                    placeholder="Email address"
                                    standout
                                    v-model="signupInfo.email.value"
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
                                    v-model="signupInfo.password.value"
                                    :dense="true"
                                />
                            </div>
                            <div class="flex items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="flag"
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full pr-2"
                                    type="text"
                                    placeholder="Country"
                                    standout
                                    v-model="signupInfo.country.value"
                                    :dense="true"
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full"
                                    placeholder="City"
                                    standout
                                    v-model="signupInfo.city.value"
                                    :dense="true"
                                />
                            </div>
                            <div class="flex items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="room"
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full pr-2"
                                    type="text"
                                    placeholder="Street 1"
                                    standout
                                    v-model="signupInfo.street_1_address.value"
                                    :dense="true"
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full"
                                    placeholder="Street 2"
                                    standout
                                    v-model="signupInfo.street_2_address.value"
                                    :dense="true"
                                />
                            </div>
                            <div class="flex items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name=""
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full pr-2"
                                    type="text"
                                    placeholder="State"
                                    standout
                                    v-model="signupInfo.state.value"
                                    :dense="true"
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full"
                                    placeholder="Zip Cord"
                                    standout
                                    v-model="signupInfo.zip.value"
                                    :dense="true"
                                />
                            </div>
                            <div class="flex items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="paid"
                                />
                                <q-btn-dropdown
                                    class="btn-none px-1 py-1 mt-2 sm:py-2 float-right w-full"
                                    label-class="d-flex align-items-center"
                                    style="background-color: #1976D2;"
                                >
                                    <template v-slot:label>
                                        <div
                                            class="flex items-center justify-start text-xs font-normal sm:text-sm sm:pr-3"
                                        >
                                            {{ signupInfo.currency.value }}
                                        </div>
                                    </template>
                                    <q-list>
                                        <q-item
                                            v-for="currency in currencys"
                                            clickable
                                            v-close-popup
                                            @click="onCurrencyItemClick(currency)"
                                        >
                                            <q-item-section>
                                                <q-item-label>
                                                    <div class="flex items-center justify-start">
                                                        <p class="text-xs pl-1">{{ currency }}</p>
                                                    </div>
                                                </q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-btn-dropdown>
                            </div>
                            <div class="flex items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="phone"
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full"
                                    type="tel"
                                    mask="phone"
                                    max-length="10"
                                    placeholder="Mobile Number"
                                    standout
                                    v-model="signupInfo.phone.value"
                                    :dense="true"
                                />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </q-card>
    </q-dialog>
</template>
