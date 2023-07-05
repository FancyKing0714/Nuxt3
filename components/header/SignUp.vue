<script setup lang="ts">
    import { onMounted , ref , watch} from 'vue';
    import {SignUp} from '~~/action/auth';
    import {useStore} from 'vuex';
    import { FpjsClient } from '@fingerprintjs/fingerprintjs-pro-spa';
    import { Cookies } from 'quasar';
    import countryCodes from './countryCode.json';

    const config = useRuntimeConfig();
    const store = useStore();
    const tab = ref("Next");
    const model=ref('');
    const tabChange = () => {
        if(tab.value == "Next") tab.value = "Prev";
        else tab.value = "Next";
    }
    //fingerprintClient Init
    const fpjsClient = new FpjsClient({
        loadOptions: {
            apiKey: config.public.API_KEY
        }
    });
    let fpData;
    //fetch fingerprint data and store in fpData
    // onMounted(
    //     ()=>{
    //         fpjsClient.init()
    //         .then(() => {
    //             fpjsClient.getVisitorData({ extendedResult: true })
    //             .then(visitorData=>{
    //                 fpData = visitorData;
    //             })
    //             .catch(err=>{
    //                 store.commit('handleNotification',{type:'Error',message:`Can't fetch FingerPrint Data! Contact To Support Team!`});
    //             });
    //         })
    //         .catch(err=>{
    //             store.commit('handleNotification',{type:'Error',message:"FingerPrint initialize Error!"});
    //         });
    //     }
    // );
    const signUp = () => {                                          //call register action with inputed data and fingerprint, click_id and promo
                            Object.keys(signupInfo).map(item => {
                                userdata = {...userdata, [item] : signupInfo[item].value};
                            });
                            userdata = {...userdata, 'fingerprint': fpData.visitorId, 'click_id': Cookies.get('click_id'), 'promo': Cookies.get('promo')};
                            SignUp(userdata, store);
    }

    //when register successed and store.state.isregister became true, hide register dialog and show login dialog
    watch(
        ()=>store.state.isRegister,
        ()=>{
            store.commit('handleOnLogin', true);
            store.commit('handleOnRegister', false);
    });
    watch(()=>model.value, ()=>{
        if(countryList.includes(model.value))
            signupInfo.countryCode.value = countryCodes.filter(cc=>cc.name==model.value)[0].code;
    });

    let userdata = {};
    let signupInfo = {
        first_name: ref(''),
        last_name: ref(''),
        username: ref(''),
        gender: ref(''),
        dob: ref(''),
        email: ref(''),
        password: ref(''),
        password_confirmation: ref(''),
        country: ref(''),
        street_1_address: ref(''),
        state: ref(''),
        city: ref(''),
        zip: ref(''),
        currency: ref(''),
        phone: ref(''),
        countryCode: ref(''),
    }; 
    signupInfo.gender.value = 'Male';

    const genders = ['Male', 'Female'];
    const currencys = ['CAD', 'USD'];
    const countryList = countryCodes.map(item=>item.name);
    const countries = ref(countryList);
    const onGenderItemClick = (item: any) => {
        signupInfo.gender.value = item
    }
    const onCurrencyItemClick = (item: any) => {
        signupInfo.currency.value = item
    }
    const filterFn = (val, update, abort) => {
        if (val.length < 3) {
          abort();
          return;
        }
        update(() => {
          const needle = val.toLowerCase();
          countries.value = countryList.filter(v => v.toLowerCase().indexOf(needle) > -1);
        })
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
            password_confirmation: ref(''),
            country: ref(''),
            street_1_address: ref(''),
            state: ref(''),
            city: ref(''),
            zip: ref(''),
            currency: ref(''),
            phone: ref(''),
            countryCode: ref(''),
        }; 
        signupInfo.currency.value = '';
        signupInfo.gender.value = 'Male';
        signupInfo.country.value = '';
        signupInfo.countryCode.value = '';
        tab.value = "Next";
        model.value = '';
    }
</script>
<template>
    <q-dialog v-model="store.state.onRegister" @hide="{store.commit('handleOnRegister', false);initData();}">
        <q-card  class="w-full sm:w-4/5 md:w-3/5" style="width: 700px">
            <div style="background: rgb(0 90 201)">
                <div class="sm:grid sm:grid-cols-2 p-2">
                    <div 
                        class="p-1 mt-8 hidden sm:!block flex flex-nowrap justify-content-center text-center"
                    >
                        <q-img
                            class="-mb-16 mt-0"
                            style="max-width: 221px"
                            src="/imgs/new.png"
                            alt="man"
                        />
                        <q-img
                            class="-mb-4"
                            style="max-width: 221px"
                            src="/imgs/casino_offers.png"
                            alt="man"
                        />
                        <div
                            class="flex flex-nowrap justify-between items-center w-full mb-2"
                        >
                            <span style="font-size: 10px;text-align: center;"
                                >I confirm that I am at least 18 years old
                                and I have read and accept the General Terms
                                of Conditions</span>
                        </div>
                        <p class="cursor-pointer text-xs pt-2 underline" @click="store.commit('handleOnLogin', true);store.commit('handleOnRegister', false);">
                            Already have an account?
                        </p>
                    </div>
                    <div class="p-1 mt-7 text-center">
                        <div>
                            <p class="font-bold text-2xl text-shadow-lg text-center py-2 mb-2">
                                Sign Up
                            </p>

                            <q-tab-panels v-model="tab" animated class="bg-transparent text-white mb-3">
                                <q-tab-panel name="Next">
                                    <div class="flex flex-nowrap items-center justify-start">
                                        <q-icon
                                            class="opacity-50 pr-1"
                                            size="sm"
                                            name="person"
                                        />
                                        <q-input
                                            class="text-shadow-lg w-full"
                                            type="text"
                                            placeholder="First Name"
                                            standout
                                            v-model="signupInfo.first_name.value"
                                            :dense="true"
                                        />
                                    </div>
                                    <div class="flex flex-nowrap items-center justify-start pt-3">
                                        <q-icon
                                            class="opacity-50 pr-1"
                                            size="sm"
                                            name="person"
                                        />
                                        <q-input
                                            class="text-shadow-lg w-full "
                                            type="text"
                                            placeholder="Last Name"
                                            standout
                                            v-model="signupInfo.last_name.value"
                                            :dense="true"
                                        />
                                    </div>
                                    <div class="flex flex-nowrap items-center justify-start pt-3">
                                        <q-icon
                                            class="opacity-50 pr-1"
                                            size="sm"
                                            name="account_circle"
                                        />
                                        <q-input
                                            class="text-shadow-lg w-full"
                                            type="text"
                                            placeholder="UserName"
                                            standout
                                            v-model="signupInfo.username.value"
                                            :dense="true"
                                        />
                                    </div>
                                    <div class="flex flex-nowrap items-center justify-start pt-3">
                                        <q-icon
                                            class="opacity-50 pr-1"
                                            size="sm"
                                            name="mail"
                                        />
                                        <q-input
                                            class=" text-shadow-lg w-full"
                                            type="email"
                                            placeholder="Email address"
                                            standout
                                            v-model="signupInfo.email.value"
                                            :dense="true"
                                        />
                                    </div>
                                    <div class="flex flex-nowrap items-center justify-start pt-3">
                                        <q-icon
                                            class="opacity-50 pr-1"
                                            size="sm"
                                            name="lock"
                                        />
                                        <q-input
                                            class=" text-shadow-lg w-full"
                                            type="password"
                                            placeholder="Password"
                                            standout
                                            v-model="signupInfo.password.value"
                                            :dense="true"
                                        />
                                    </div>
                                    <div class="flex flex-nowrap items-center justify-start pt-3">
                                        <q-icon
                                            class="opacity-50 pr-1"
                                            size="sm"
                                            name="enhanced_encryption"
                                        />
                                        <q-input
                                            class=" text-shadow-lg w-full"
                                            type="password"
                                            placeholder="Password Confirmation"
                                            standout
                                            v-model="signupInfo.password_confirmation.value"
                                            :dense="true"
                                        />
                                    </div>
                                    <div class="flex flex-nowrap items-center justify-start pt-3">
                                        <q-icon
                                            class="opacity-50 pr-1"
                                            size="sm"
                                            name="euro"
                                        />
                                        <q-btn-dropdown
                                            class="btn-none float-right w-full"
                                            label-class="d-flex flex-nowrap align-items-center"
                                            style="background-color: #1266CD;"
                                            >
                                            <template v-slot:label>
                                                <div
                                                    class="flex flex-nowrap items-center justify-start text-xs font-normal sm:text-sm sm:pr-3"
                                                    >
                                                    {{ signupInfo.currency.value=='' ? 'Currency' : signupInfo.currency.value }}
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
                                                            <div class="flex flex-nowrap items-center justify-start">
                                                                <p class="text-xs pl-1">{{ currency }}</p>
                                                            </div>
                                                        </q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                            </q-list>
                                        </q-btn-dropdown>
                                    </div>
                                </q-tab-panel>
                                <q-tab-panel name="Prev">
                                    <div class="flex flex-nowrap items-center justify-start">
                                        <q-icon 
                                            name="event" 
                                            class="cursor-pointer opacity-50"
                                            size="sm"
                                        >
                                        </q-icon>
                                        <q-input
                                            class="text-shadow-lg w-full pl-1"
                                            type="text"
                                            mask="date"
                                            placeholder="Birthday"
                                            standout
                                            v-model="signupInfo.dob.value"
                                            :dense="true"
                                        >
                                            <q-icon 
                                                name="event" 
                                                class="cursor-pointer mt-2"
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
                                        </q-input>
                                    </div>
                                    <div class="flex flex-nowrap items-center justify-start pt-1">
                                        <q-icon
                                            class="opacity-50 pr-1"
                                            size="sm"
                                            name="wc"
                                        />
                                        <q-btn-dropdown 
                                            class="btn-none w-full"
                                            label-class="d-flex flex-nowrap align-items-center"
                                            style="background-color: #1266CD;"
                                        >
                                            <template v-slot:label>
                                                <div
                                                    class="flex flex-nowrap items-center justify-start text-xs font-normal sm:text-sm sm:pr-3"
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
                                                            <div class="flex flex-nowrap items-center justify-start">
                                                                <p class="text-xs pl-1">{{ gender }}</p>
                                                            </div>
                                                        </q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                            </q-list>
                                        </q-btn-dropdown>
                                    </div>
                                    <div class="flex flex-nowrap items-center justify-start pt-1">
                                        <q-icon
                                            class="opacity-50 pr-1"
                                            size="sm"
                                            name="language"
                                        />
                                        <q-select
                                            filled
                                            v-model="model"
                                            use-input
                                            placeholder="Country"
                                            hide-selected
                                            fill-input
                                            input-debounce="0"
                                            :options="countries"
                                            @filter="filterFn"
                                            class="w-full"
                                            :dense="true"
                                        >
                                            <template v-slot:no-option>
                                            <q-item>
                                                <q-item-section class="text-grey">
                                                No results
                                                </q-item-section>
                                            </q-item>
                                            </template>
                                        </q-select>
                                    </div>
                                    <div class="flex flex-nowrap items-center justify-start">
                                        <q-icon
                                            class="opacity-50 pr-1"
                                            size="sm"
                                            name="flag"
                                        />
                                        <q-input
                                            class="pt-1 text-shadow-lg w-full"
                                            type="text"
                                            placeholder="State"
                                            standout
                                            v-model="signupInfo.state.value"
                                            :dense="true"
                                        />
                                    </div>
                                    <div class="flex flex-nowrap items-center justify-start">
                                        <q-icon
                                            class="opacity-50 pr-1"
                                            size="sm"
                                            name="room"
                                        />
                                        <q-input
                                            class="pt-1 text-shadow-lg w-full"
                                            placeholder="City"
                                            standout
                                            v-model="signupInfo.city.value"
                                            :dense="true"
                                        />
                                    </div>
                                    <div class="flex flex-nowrap items-center justify-start">
                                        <q-icon
                                            class="opacity-50 pr-1"
                                            size="sm"
                                            name="add_road"
                                        />
                                        <q-input
                                            class="pt-1 text-shadow-lg w-full"
                                            type="text"
                                            placeholder="Street"
                                            standout
                                            v-model="signupInfo.street_1_address.value"
                                            :dense="true"
                                        />
                                    </div>
                                    <div class="flex flex-nowrap items-center justify-start pt-1">
                                        <q-icon
                                            class="opacity-50 pr-1"
                                            size="sm"
                                            name="mark_as_unread"
                                        />
                                        <q-input
                                            class="text-shadow-lg w-full"
                                            placeholder="Postal Code "
                                            standout
                                            v-model="signupInfo.zip.value"
                                            :dense="true"
                                        />
                                    </div>
                                    <div class="flex flex-nowrap items-center justify-start">
                                        <q-icon
                                            class="opacity-50 pr-1"
                                            size="sm"
                                            name="phone"
                                        />
                                        <q-input
                                            class="py-1 text-shadow-lg w-full"
                                            :prefix="signupInfo.countryCode.value"
                                            type="tel"
                                            mask="phone"
                                            max-length="10"
                                            placeholder="Mobile Number"
                                            standout
                                            v-model="signupInfo.phone.value"
                                            :dense="true"
                                        />
                                    </div>
                                </q-tab-panel>
                            </q-tab-panels>
                            
                            <div 
                                class="grid flex justify-center"
                                :class="tab=='Prev'&&'grid-cols-2 gap-1'"
                            >
                                <q-btn 
                                    class="w-full font-bold px-11"
                                    style="background-color: #fff004; color: black;" 
                                    :label="tab" 
                                    @click="tabChange"/>
                                
                                <q-btn
                                    v-if="tab == 'Prev'"
                                    @click="signUp"
                                    class="font-bold w-full"
                                    style=" 
                                        background-color: #fff004;
                                        color: black;
                                    "
                                    label="Register"
                                />
                            </div>
                            <p class="pt-4 sm:hidden text-xs cursor-pointer underline" @click="store.commit('handleOnLogin', true);store.commit('handleOnRegister', false);">
                                Already have an account?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </q-card>
    </q-dialog>
</template>
