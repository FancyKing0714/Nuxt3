<template>
  <div style="background: #383d47" class="inset-0 rounded-md w-full px-7 py-6">
    <p class="text-base font-bold pb-2">Personal</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <q-input
        class="w-full"
        type="text"
        placeholder="First name"
        standout
        v-model="person.first_name"
        :dense="true"
      >
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>
      <q-input
        class="w-full"
        type="text"
        placeholder="Last name"
        standout
        v-model="person.last_name"
        :dense="true"
      >
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>
      <q-input
        class="w-full"
        type="email"
        placeholder="Email"
        standout
        v-model="person.email"
        :dense="true"
      >
        <template v-slot:prepend> @ </template>
      </q-input>
      <q-input
        class="w-full"
        type="tel"
        mask="phone"
        placeholder="Phone number"
        standout
        v-model="person.phone"
        :dense="true"
      >
        <template v-slot:prepend>
          <q-icon name="phone" />
        </template>
      </q-input>
      <q-input
        class="w-full"
        type="text"
        placeholder="Gender"
        standout
        v-model="person.gender"
        :dense="true"
      >
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>
      <q-input
        class="w-full"
        type="date"
        placeholder="Date of birth"
        standout
        v-model="person.dob"
        :dense="true"
      >
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>
      <q-input
        class="w-full"
        type="text"
        placeholder="Street address"
        standout
        v-model="person.street_1_address"
        :dense="true"
      >
        <template v-slot:prepend>
          <q-icon name="home" />
        </template>
      </q-input>
      <q-input
        class="w-full"
        type="text"
        placeholder="State"
        standout
        v-model="person.state"
        :dense="true"
      >
        <template v-slot:prepend>
          <q-icon name="state" />
        </template>
      </q-input>
      <q-input
        class="w-full"
        type="text"
        placeholder="City"
        standout
        v-model="person.city"
        :dense="true"
      >
        <template v-slot:prepend>
          <q-icon name="position" />
        </template>
      </q-input>
      <q-input
        class="w-full"
        type="text"
        placeholder="Country"
        standout
        v-model="person.country"
        :dense="true"
      >
        <template v-slot:prepend>
          <q-icon name="global" />
        </template>
      </q-input>
      <div>
        <p class="text-base font-bold pb-2">Credential</p>
        <q-input
          class="w-full pt-4"
          type="password"
          placeholder="Old password"
          standout
          v-model="credential.old_password"
          :dense="true"
        >
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
        <q-input
          class="w-full pt-4"
          type="password"
          placeholder="New password"
          standout
          v-model="credential.new_password"
          :dense="true"
        >
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
        <p class="pt-4 text-sm">Forgot your password? Reset the password</p>
      </div>
    </div>
    <q-btn class="mt-4 px-8" color="primary" label="Save" @click="resetPassword"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { QInput } from "quasar";
import { useStore } from "vuex";
import axios from "axios";
import { useQuasar } from 'quasar'
const not = useQuasar();
const config = useRuntimeConfig();

const store = useStore();
const person = ref(store.state.User);
const credential = ref({
  old_password: "",
  new_password: "",
})
const resetPassword = () => {  
  axios({
            method:'post',
            url: `${config.public.baseURL}/api/player/updatePassword`,
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem("token")
            },
            data: {
              'old_password': credential.value.old_password,
              'new_password': credential.value.new_password,
            }
        })
    .then(res => {
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
</script>
