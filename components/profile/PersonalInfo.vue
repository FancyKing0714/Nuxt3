<template>
  <div style="background: #383d47" class="inset-0 rounded-md w-full px-7 py-6">
    <p class="text-base font-bold pb-2">Personal</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <QInput
        class="w-full"
        type="text"
        :placeholder="tran('First Name', store.state.lang)"
        standout
        readonly
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
        :placeholder="tran('Last Name', store.state.lang)"
        standout
        readonly
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
        :placeholder="tran('Email', store.state.lang)"
        standout
        readonly
        v-model="person.email"
        :dense="true"
      >
        <template v-slot:prepend> @ </template>
      </QInput>
      <QInput
        class="w-full"
        type="tel"
        mask="phone"
        :placeholder="tran('Phone Number', store.state.lang)"
        standout
        readonly
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
        :placeholder="tran('Gender', store.state.lang)"
        standout
        readonly
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
        :placeholder="tran('Date of birth', store.state.lang)"
        standout
        readonly
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
        :placeholder="tran('Street Address', store.state.lang)"
        standout
        readonly
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
        :placeholder="tran('State', store.state.lang)"
        standout
        readonly
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
        :placeholder="tran('City', store.state.lang)"
        standout
        readonly
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
        :placeholder="tran('Country', store.state.lang)"
        standout
        readonly
        v-model="person.country"
        :dense="true"
      >
        <template v-slot:prepend>
          <QIcon name="global" />
        </template>
      </QInput>
      <div>
        <p class="text-base font-bold pb-2">{{tran('Credential', store.state.lang)}}</p>
        <QInput
          class="w-full pt-4"
          type="password"
          :placeholder="tran('Old Password', store.state.lang)"
          standout
          v-model="old_password"
          :dense="true"
        >
          <template v-slot:prepend>
            <QIcon name="lock" />
          </template>
        </QInput>
        <QInput
          class="w-full pt-4"
          type="password"
          :placeholder="tran('New Password', store.state.lang)"
          standout
          v-model="new_password"
          :dense="true"
        >
          <template v-slot:prepend>
            <QIcon name="lock" />
          </template>
        </QInput>
        <p class="pt-4 text-sm">{{tran('Forgot your password? Reset the password', store.state.lang)}}</p>
      </div>
    </div>
    <QBtn 
      class="mt-4 px-8" 
      color="primary" 
      :label="tran('Save', store.state.lang)" 
      @click="
        ()=>{
          ResetPassword( {'old_password' : old_password, 'new_password' : new_password} , store);          
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
import { tran } from "~~/utils/translation";

const store = useStore();
const person = ref(store.state.User);
const old_password = ref("");
const new_password = ref("");
</script>
