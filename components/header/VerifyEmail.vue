<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const props = defineProps({
    open: {
        type: Boolean,
        required: true,
    },
});
let open = ref(props.open);
watch(props, (newValue) => {
    open.value = newValue.open;
});
</script>
<template>
    <q-dialog v-model="open" @hide="store.commit('handleVerifyEmail', false)">
        <q-card style="width: 420px; max-width: 60vw">
            <div class="py-12 px-8 text-center" style="background: rgb(0 90 201)">
                <p class="font-bold text-xl text-shadow-lg">verify your email address</p>
                <p class="font-normal text-xs pt-5">
                    In the next few minutes, You will receive an email from us
                    with a Verification Link.
                </p>
                <p class="font-normal text-xs pt-5">Please check your email Inbox / Spam Box / Junk Box</p>
                <p class="font-normal text-xs pt-5">If you did not receive the email</p>
                <p class="font-bold text-xs pt-5 cursor-pointer">CLICK HERE TO REQUEST ANOTHER</p>
            </div>
        </q-card>
    </q-dialog>
</template>
