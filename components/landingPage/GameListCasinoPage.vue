<script setup lang="ts">
import { useStore} from 'vuex';
import {useRouter , useRoute} from 'vue-router';
import { linkTo } from '~~/utils/link';
import { addFavoriteGameById , removeFavoriteGameById } from '~~/action/game';
import { tran } from "~~/utils/translation";

const router = useRouter();
const route = useRoute();
const store = useStore();

const play = (demo, slug) =>{
    store.commit('handleGamePlayMode',demo);
    router.push(linkTo(`/play/${slug}`));
};
const onFavorite = (id, slug) => {
    if(store.state.favoriteGameSlugList.includes(slug))
        removeFavoriteGameById(store, id, slug, route.query?.tab);
    else
        addFavoriteGameById(store, id, slug);
}

let focusgame = ref("");
const handleFocusGame = (id) => {
    focusgame.value = id;
};
useHead({
      title: 'Games',
      meta: [
        {
          hid: 'Games',
          name: 'Games',
          content: 'Discover a diverse collection of captivating games at our platform. From thrilling slot games that offer immersive experiences to live games that bring the casino atmosphere to your screen, we have something for everyone. Get ready to embark on an unforgettable gaming journey filled with excitement and big wins.'
        }
      ]
});
const imgurl = "/imgs/noGameImg.png";
</script>

<template>
    <div class="pt-5 px-2">
      <div class="flex flex-wrap justify-between">
        <div
          class="group hidden md:!block h-full p-1 w-[240px]"
          v-for="gameItem in store.state.gameListByType"
        >
          <div class="relative w-full h-[160px] rounded-lg">
            <img
              :src="gameItem?.image ? gameItem?.image : imgurl"
              class="relative h-full w-full rounded-lg z-[1] bg-cover"
            />
            <div class="opacity-0 group-hover:opacity-100 absolute w-full h-full top-0 left-0 z-[2] rounded-lg bg-gray-900 bg-opacity-80 transition ease-in-out duration-300">
              <div
                class="absolute w-full h-full flex flex-col justify-center items-center"
              >
                <q-btn
                  text-color="white"
                  style="
                    border-radius: 50%;
                    background-color: red;
                    padding: 5px;
                    margin-bottom: 5px;
                  "
                  @click="play(0, gameItem.slug)"
                >
                  <q-icon name="play_arrow" size="lg" />
                </q-btn>
                <q-btn
                  v-if="gameItem?.demo == 1"
                  text-color="white"
                  padding="1px 10px"
                  :label="tran('Demo', store.state.lang)"
                  style="
                    font-size: x-small;
                    border-radius: 10%;
                    background-color: transparent;
                    border: white 2px solid;
                  "
                  @click="play(1, gameItem.slug)"
                />
              </div>
              <q-btn
                text-color="yellow"
                padding="0px"
                class="absolute top-2 right-2"
                style="background-color: transparent"
                @click="onFavorite(gameItem.id, gameItem.slug)"
              >
                <q-icon
                  v-if="
                    store.state.favoriteGameSlugList.includes(
                      gameItem?.slug
                    )
                  "
                  name="star"
                  size="xs"
                />
                <q-icon
                  v-if="
                    !store.state.favoriteGameSlugList.includes(
                      gameItem?.slug
                    )
                  "
                  name="star_border"
                  size="xs"
                />
              </q-btn>
            </div>
          </div>
          <p class="text-center text-white text-[11px] group-hover:text-[12px] p-2">
            {{ gameItem?.name }}
          </p>
        </div>
        <div
          class="md:hidden h-full w-[120px] sm:w-[180px] p-1"
          v-for="gameItem in store.state.gameListByType"
          @click="handleFocusGame(gameItem.id)"
        >
          <div class="relative w-full h-[80px] sm:h-[120px] rounded-lg">
            <img
              :src="gameItem.image ? gameItem.image : imgurl"
              class="relative h-full w-full rounded-lg z-[1] bg-cover"
            />
            <div
              class="absolute w-full h-full top-0 left-0 z-[2] rounded-lg bg-gray-900 bg-opacity-80 opacity-0 duration-300"
              :class="focusgame == gameItem.id && 'opacity-100'"
            >
              <div
                class="absolute w-full h-full flex flex-col justify-center items-center"
              >
                <q-btn
                  text-color="white"
                  style="
                    border-radius: 50%;
                    background-color: red;
                    padding: 2px;
                    margin-bottom: 7px;
                  "
                  @click="play(0, gameItem.slug)"
                >
                  <q-icon name="play_arrow" size="lg" />
                </q-btn>
                <q-btn
                  v-if="gameItem?.demo == 1"
                  text-color="white"
                  padding="1px 5px"
                  :label="tran('Demo', store.state.lang)"
                  style="
                    font-size: x-small;
                    border-radius: 10%;
                    background-color: transparent;
                    border: white 2px solid;
                  "
                  @click="play(1, gameItem.slug)"
                />
              </div>
              <q-btn
                text-color="yellow"
                padding="0px"
                class="absolute top-2 right-2"
                style="background-color: transparent"
                @click="onFavorite(gameItem.id, gameItem.slug)"
              >
                <q-icon
                  v-if="
                    store.state.favoriteGameSlugList.includes(
                      gameItem?.slug
                    )
                  "
                  name="star"
                  size="xs"
                />
                <q-icon
                  v-if="
                    !store.state.favoriteGameSlugList.includes(
                      gameItem?.slug
                    )
                  "
                  name="star_border"
                  size="xs"
                />
              </q-btn>
            </div>
            <div
              class="absolute z-[3] w-full h-full top-0 left-0 rounded-lg"
              v-if="focusgame != gameItem.id"
            ></div>
          </div>
          <p class="text-center text-white text-[11px] group-hover:text-[12px] p-2">
            {{ gameItem?.name }}
          </p>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center py-2">
        <q-linear-progress class="w-52" rounded  stripe size="7px" :value="store.state.gameAmountByType > 0 ? (store.state.currentLoaded > store.state.gameAmountByType ? 100 : Number(store.state.currentLoaded / store.state.gameAmountByType)) : 0" />
        <p class="text-center text-md py-2">Displaying {{ store.state.currentLoaded > store.state.gameAmountByType ? store.state.gameAmountByType : store.state.currentLoaded }} of {{ store.state.gameAmountByType }}</p>
        <q-btn 
            v-if="store.state.currentLoaded < store.state.gameAmountByType"
            class="w-52" 
            text-color="white" 
            color="primary" 
            @click="store.commit('handlePageNumber',store.state.pageNumber+1)"
        >
            Load More
        </q-btn>
      </div>
    </div>
</template>
