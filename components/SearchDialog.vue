<script setup lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { linkTo } from "~~/utils/link";
import { addFavoriteGameById, removeFavoriteGameById } from "~~/action/game";

const router = useRouter();
const store = useStore();
const searchText = ref("");
const provider = ref("");
const providerList: string[] = [
  "aaa",
  "abb",
  "acc",
  "abc",
  "ccc",
  "efd",
  "see",
  "wee",
];
const providers = ref(providerList);
const filterProvider = (val, update, abort) => {
  // if (val.length < 2) {
  //   abort();
  //   return;
  // }
  update(() => {
    const needle = val.toLowerCase();
    providers.value = providerList.filter(
      (v) => v.toLowerCase().indexOf(needle) > -1
    );
  });
};
const play = (demo, slug) => {
  store.commit("handleOnSearchDialog", false);
  store.commit("handleGamePlayMode", demo);
  router.push(linkTo(`/play/${slug}`));
};
const onFavorite = (id, slug) => {
  if (store.state.favoriteGameSlugList.includes(slug))
    removeFavoriteGameById(store, id, slug);
  else addFavoriteGameById(store, id, slug);
};

let focusgame = ref("");
const handleFocusGame = (id) => {
  focusgame.value = id;
};
const imgurl = "/imgs/noGameImg.png";
</script>
<template>
  <q-dialog
    v-model="store.state.isSearchDiaolg"
    @hide="store.commit('handleOnSearchDialog', false)"
  >
    <q-card style="width: 600px; max-width: 80vw" class="relative bg-gray-900">
      <q-card-section>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <q-input
            filled
            placeholder="At least 3 characters..."
            v-model="searchText"
            dense
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
          <div>
            <q-select
              filled
              v-model="provider"
              use-input
              placeholder="Select provider"
              hide-selected
              fill-input
              :options="providerList"
              @filter="filterProvider"
              dense
              clearable
            >
              <template v-slot:prepend>
                <img
                  class="w-5 mr-1"
                  src="/imgs/sidebar/provider.png"
                  alt="hot"
                />
              </template>
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section style="height: 50vh" class="scroll">
        <div class="">
          <div class="flex flex-wrap justify-between">
            <div
              class="hidden md:!block card p-1 w-[180px]"
              v-for="gameItem in store.state.gameListByType"
            >
              <div class="container h-[120px]">
                <img
                  :src="gameItem?.image ? gameItem?.image : imgurl"
                  class="img bg-cover"
                />
                <div class="btnDiv">
                  <div
                    class="play-demo flex flex-col justify-center items-center"
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
                      label="Demo"
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
                    class="star-icon"
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
              <p class="text-center gametext p-2">
                {{ gameItem?.name }}
              </p>
            </div>
            <div
              class="md:hidden card-mobile w-[135px] p-1"
              v-for="gameItem in store.state.gameListByType"
              @click="handleFocusGame(gameItem.id)"
            >
              <div class="container-mobile h-[90px]">
                <img
                  :src="gameItem.image ? gameItem.image : imgurl"
                  class="img bg-cover"
                />
                <div
                  class="btnDiv-mobile opacity-0 duration-300"
                  :class="focusgame == gameItem.id && 'opacity-100'"
                >
                  <div
                    class="play-demo flex flex-col justify-center items-center"
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
                      label="Demo"
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
                    class="star-icon"
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
                  class="btnDiv-mobile-cover"
                  v-if="focusgame != gameItem.id"
                ></div>
              </div>
              <p class="text-center gametext p-2">
                {{ gameItem?.name }}
              </p>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<style>
.card {
  height: 100%;
}
.container {
  position: relative;
  width: 100%;
  border-radius: 10px;
}
.card-mobile {
  height: 100%;
}
.container-mobile {
  width: 100%;
  position: relative;
  border-radius: 10px;
}
.img {
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 10px;
  z-index: 1;
}
.play-demo {
  position: absolute;
  width: 100%;
  height: 100%;
}
.star-icon {
  position: absolute;
  top: 7px;
  right: 7px;
}
.btnDiv {
  opacity: 0;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  transition: 0.3s;
}
.btnDiv-mobile {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
}
.btnDiv-mobile-cover {
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0);
}
.gametext {
  font-size: 11px;
  color: white;
}
.card:hover .btnDiv {
  opacity: 1;
}
.card:hover .gametext {
  font-size: 12px;
  color: white;
}
</style>
