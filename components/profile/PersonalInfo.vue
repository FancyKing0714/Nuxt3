<template>
  <div style="background: #383d47" class="inset-0 rounded-md w-full px-7 py-6">
    <p class="text-base font-bold pb-2">Personal</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <QInput
        class="w-full"
        type="text"
        placeholder="First name"
        standout
        v-model="person.first_name"
        :dense="true"
      >
        <template v-slot:prepend>
          <QIcon name="person" />
        </template>
      </QInput>
      <QInput
        class="w-full"
        type="text"
        placeholder="Last name"
        standout
        v-model="person.last_name"
        :dense="true"
      >
        <template v-slot:prepend>
          <QIcon name="person" />
        </template>
      </QInput>
      <QInput
        class="w-full"
        type="email"
        placeholder="Email"
        standout
        v-model="person.email"
        :dense="true"
      >
        <template v-slot:prepend> @ </template>
      </QInput>
      <QInput
        class="w-full"
        type="tel"
        mask="phone"
        placeholder="Phone number"
        standout
        v-model="person.phone"
        :dense="true"
      >
        <template v-slot:prepend>
          <QIcon name="phone" />
        </template>
      </QInput>
      <QInput
        class="w-full"
        type="text"
        placeholder="Gender"
        standout
        v-model="person.gender"
        :dense="true"
      >
        <template v-slot:prepend>
          <QIcon name="person" />
        </template>
      </QInput>
      <QInput
        class="w-full"
        type="date"
        placeholder="Date of birth"
        standout
        v-model="person.dob"
        :dense="true"
      >
        <template v-slot:prepend>
          <QIcon name="event" />
        </template>
      </QInput>
      <QInput
        class="w-full"
        type="text"
        placeholder="Street address"
        standout
        v-model="person.street_1_address"
        :dense="true"
      >
        <template v-slot:prepend>
          <QIcon name="home" />
        </template>
      </QInput>
      <QInput
        class="w-full"
        type="text"
        placeholder="State"
        standout
        v-model="person.state"
        :dense="true"
      >
        <template v-slot:prepend>
          <QIcon name="state" />
        </template>
      </QInput>
      <QInput
        class="w-full"
        type="text"
        placeholder="City"
        standout
        v-model="person.city"
        :dense="true"
      >
        <template v-slot:prepend>
          <QIcon name="position" />
        </template>
      </QInput>
      <QInput
        class="w-full"
        type="text"
        placeholder="Country"
        standout
        v-model="person.country"
        :dense="true"
      >
        <template v-slot:prepend>
          <QIcon name="global" />
        </template>
      </QInput>
      <div>
        <p class="text-base font-bold pb-2">Credential</p>
        <QInput
          class="w-full pt-4"
          type="password"
          placeholder="Old password"
          standout
          v-model="credential.old_password"
          :dense="true"
        >
          <template v-slot:prepend>
            <QIcon name="lock" />
          </template>
        </QInput>
        <QInput
          class="w-full pt-4"
          type="password"
          placeholder="New password"
          standout
          v-model="credential.new_password"
          :dense="true"
        >
          <template v-slot:prepend>
            <QIcon name="lock" />
          </template>
        </QInput>
        <p class="pt-4 text-sm">Forgot your password? Reset the password</p>
      </div>
    </div>
    <QBtn 
      class="mt-4 px-8" 
      color="primary" 
      label="Save" 
      @click="
        ()=>{
          Object.keys(credential).map(item => {
              data = {...data, [item] : credential[item].value};
          });
          ResetPassword( $data , store);          
        }
      "
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { QInput } from "quasar";
import { useStore } from "vuex";
import {ResetPassword} from '~~/action/auth';

const store = useStore();
const person = ref(store.state.User);
let data = {};
const credential = ref({
  old_password: "",
  new_password: "",
})
</script>
