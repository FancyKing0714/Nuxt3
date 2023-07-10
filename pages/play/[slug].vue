<script setup lang="ts">
    import { ref , watch , onBeforeMount, onUnmounted} from 'vue';
    import { linkTo } from '../../utils/link';
    import { gamePlay } from '../../action/game';
    import {useStore} from 'vuex';
    import {useRouter , useRoute} from 'vue-router';
    import { addFavoriteGameBySlug , removeFavoriteGameBySlug } from '~~/action/game';

    const router = useRouter();
    const route = useRoute();
    const slug = route.params.slug.toString();
    const store = useStore();
    let modal = ref(false);

    onBeforeMount(()=>{
        if(store.state.gamePlayMode > 1)
            modal.value = true;
        if(store.state.gamePlayMode != 2)
            gamePlay(store.state.gamePlayMode, slug, store, router);
    })
    onUnmounted(()=>{
        store.commit('handleGamePlayMode', 2);
    });
    let playtoggle = ref(Boolean(store.state.gamePlayMode));
    watch(()=>store.state.gamePlayMode,()=>{
        playtoggle.value = Boolean(store.state.gamePlayMode);
        gamePlay(store.state.gamePlayMode, slug, store, router);
    })
    const isValidUrl = (urlString) => {
        var urlPattern = new RegExp('^(https?:\\/\\/)?'+                    // validate protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+             // validate domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+                                  // validate OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+                              // validate port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+                                     // validate query string
            '(\\#[-a-z\\d_]*)?$','i');                                      // validate fragment locator
        return !!urlPattern.test(urlString);
    };
    let fullScreenState = ref(false);
    const switchFullScreen = (value) => {
        fullScreenState.value = value;
    }
    watch(()=>playtoggle.value,()=>{
        store.commit('handleGamePlayMode', Number(playtoggle.value));
    })
</script>
<template>
    <div class="absolute top-0 left-0 w-screen h-screen z-[2000] " :class="!fullScreenState&&'xl:relative xl:w-11/12 xl:pt-2 xl:pb-32 mx-auto xl:z-[1000]'">
        <!-- desktop close button -->
        <div :class="fullScreenState?'hidden xl:!block absolute top-4 right-4 z-[2001]':'hidden'">
            <div class="bg-gray-700 p-3 ml-1 rounded-full hover:cursor-pointer hover:bg-gray-800" @click="switchFullScreen(false)">
                <q-icon name="close" color="red" size="sm"/>
            </div>
        </div>
        <!-- mobile close button -->
        <div class="block absolute top-4 right-4 z-[2001] xl:!hidden ">
            <div class="bg-gray-700 p-3 ml-1 rounded-full hover:cursor-pointer hover:bg-gray-800" @click="router.push(linkTo('/casino'))">
                <q-icon name="close" color="red" size="sm"/>
            </div>
        </div>
        <!-- game close, fullscreen, play/fun -->
        <div class="hidden" :class="!fullScreenState&&'xl:!block'">
            <div class="flex flex-row justify-between pt-2">
                <div class="flex flex-row items-center">
                    <p class="text-sm font-semibold text-gray-500" :class="!playtoggle && 'text-white'">Real Play</p>
                    <q-toggle v-model="playtoggle"/>
                    <p class="text-sm font-semibold text-gray-500" :class="!!playtoggle && 'text-white'">Fun Play</p>
                </div>
                <div class="flex flex-row">
                    <div v-if="!!store.state.favoriteGameSlugList.includes(slug)" class="bg-gray-700 p-2 mr-1 rounded-xl hover:cursor-pointer hover:bg-gray-800" @click="removeFavoriteGameBySlug(store, slug, route.query?.tab)">
                        <q-icon name="favorite" size="sm" />
                    </div>
                    <div v-if="!store.state.favoriteGameSlugList.includes(slug)" class="bg-gray-700 p-2 mr-1 rounded-xl hover:cursor-pointer hover:bg-gray-800" @click="addFavoriteGameBySlug(store, slug)">
                        <q-icon name="favorite_border" size="sm" />
                    </div>
                    <div class="bg-gray-700 p-2 mx-2 rounded-xl hover:cursor-pointer hover:bg-gray-800" @click="switchFullScreen(true)">
                        <q-icon name="fullscreen" size="sm" />
                    </div>
                    <div class="bg-gray-700 p-2 rounded-xl hover:cursor-pointer hover:bg-gray-800" @click="router.push(linkTo('/casino'))">
                        <q-icon name="close" size="sm"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- game frame -->
        <div class="relative w-full h-full bg-gray-700" :class="!fullScreenState&&'xl:my-2 xl:border-gray-400 xl:border-2 xl:border-solid xl:rounded-2xl'">
            <iframe v-if="isValidUrl(store.state.gameData)" class="w-full h-full text-white" :class="!fullScreenState&&'xl:rounded-2xl'" :src="store.state.gameData"  frameborder="0" allowfullscreen></iframe>
            <iframe v-if="!isValidUrl(store.state.gameData)" class="w-full h-full text-white" :class="!fullScreenState&&'xl:rounded-2xl'" :srcdoc="store.state.gameData"  frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
    <q-dialog v-model="modal" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-gray-700 text-white" style="width: 500px">
        <q-card-section></q-card-section>
        <q-card-section>
          <div class="text-center text-3xl pb-5">Select Game Play Mode</div>
        </q-card-section>
        <q-card-actions class="flex flex-row justify-center content-center">
          <q-btn color="primary" class="w-1/3" label="Real" v-close-popup @click="store.commit('handleGamePlayMode', 0)"/>
          <q-btn color="secondary" class="w-1/3" label="Demo" v-close-popup @click="store.commit('handleGamePlayMode', 1)"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

