<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
const props = defineProps({
    open: {
        type: Boolean,
        required: true,
    },
});
let open = ref(props.open);
watch(()=>props, (newValue) => {
    open.value = newValue.open;
});
</script>
<template>
    <q-dialog v-model="open" @hide="store.commit('handleVerifyEmail', false)">
        <q-card style="width: 420px; max-width: 60vw">
            <div class="py-12 px-8 text-center" style="background: rgb(0 90 201)">
                <p class="font-bold text-xl text-shadow-lg">{{tran('verify your email address', store.state.lang)}}</p>
                <p class="font-normal text-xs pt-5">
                    {{tran('In the next few minutes, You will receive an email from us with a Verification Link.', store.state.lang)}}
                </p>
                <p class="font-normal text-xs pt-5">{{tran('Please check your email Inbox / Spam Box / Junk Box', store.state.lang)}}</p>
                <p class="font-normal text-xs pt-5">{{tran('If you did not receive the email', store.state.lang)}}</p>
                <p class="font-bold text-xs pt-5 cursor-pointer">{{tran('CLICK HERE TO REQUEST ANOTHER', store.state.lang)}}</p>
            </div>
        </q-card>
    </q-dialog>
</template>
