<script setup lang="ts">
import { useStore } from 'vuex';
import {useRouter} from 'vue-router';
import { linkTo } from '~~/utils/link';
import { addFavoriteGame , removeFavoriteGame , getFavoriteGames } from '~~/action/game';

const router = useRouter();
const store = useStore();
const play = (demo, slug) =>{
    store.commit('handleGamePlayMode',demo);
    router.push(linkTo(`/play/${slug}`));
};
const onFavorite = (id) => {
    if(store.state.favoriteGameList.includes(id))
        removeFavoriteGame(store, id);
    else
        addFavoriteGame(store, id);
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
    <div class="pt-5">
        <div>
            <div class="flex flex-wrap justify-center">
                <div class="hidden sm:!block card p-1" v-for="gameItem in store.state.gameListByType">
                    <div class="container" >
                        <img :src="gameItem?.image?gameItem?.image:imgurl" class="img bg-cover h-[128px]"/>
                        <div class="btnDiv" >
                            <div class="play-demo flex flex-col justify-center items-center">
                                <q-btn
                                    text-color=white
                                    style="border-radius: 50%; background-color:red; padding: 5px; margin-bottom: 5px;"
                                    @click="play(0, gameItem.slug)"
                                >
                                    <q-icon name="play_arrow" size="lg" />
                                </q-btn>
                                <q-btn
                                    v-if="gameItem?.demo == 1"
                                    text-color=white
                                    padding="1px 10px"
                                    label="Demo"
                                    style="font-size: x-small; border-radius: 10%; background-color:transparent;border: white 2px solid;"
                                    @click="play(1, gameItem.slug)"
                                />
                            </div>
                            <q-btn
                                text-color=yellow
                                padding="0px"
                                class="star-icon"
                                style="background-color: transparent;"
                                @click="onFavorite(gameItem?.id)"
                            >
                                <q-icon v-if="store.state.favoriteGameList.includes(gameItem?.id)" name="star" size="xs" />
                                <q-icon v-if="!store.state.favoriteGameList.includes(gameItem?.id)" name="star_border" size="xs" />
                            </q-btn>
                        </div>
                    </div>
                    <p class="text-center gametext p-2">
                        {{ gameItem?.name }}
                    </p>
                </div>
                <div class="sm:hidden card-mobile p-1" v-for="gameItem in store.state.gameListByType" @click="handleFocusGame(gameItem.id)">
                    <div class="container-mobile" >
                        <img :src="gameItem?.image?gameItem?.image:imgurl" class="img bg-cover h-[128px]"/>
                        <div class="btnDiv-mobile opacity-0 duration-300 " :class="(focusgame==gameItem.id)&&'opacity-100'">
                            <div class="play-demo flex flex-col justify-center items-center">
                                <q-btn
                                    text-color=white
                                    style="border-radius: 50%; background-color:red; padding: 5px; margin-bottom: 5px;"
                                    @click="play(0, gameItem.slug)"
                                >
                                    <q-icon name="play_arrow" size="lg" />
                                </q-btn>
                                <q-btn
                                    v-if="gameItem?.demo == 1"
                                    text-color=white
                                    padding="1px 10px"
                                    label="Demo"
                                    style="font-size: x-small; border-radius: 10%; background-color:transparent;border: white 2px solid;"
                                    @click="play(1, gameItem.slug)"
                                />
                            </div>
                            <q-btn
                                text-color=yellow
                                padding="0px"
                                class="star-icon"
                                style="background-color: transparent;"
                                @click="onFavorite(gameItem?.id)"
                            >
                                <q-icon v-if="store.state.favoriteGameList.includes(gameItem?.id)" name="star" size="xs" />
                                <q-icon v-if="!store.state.favoriteGameList.includes(gameItem?.id)" name="star_border" size="xs" />
                            </q-btn>
                        </div>
                        <div class="btnDiv-mobile-cover" v-if="focusgame!=gameItem.id"></div>
                    </div>
                    <p class="text-center gametext p-2">
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
                    @click="store.commit('handleReadMore',store.state.pageNumber+1)"
                >
                    Load More
                </q-btn>
            </div>
        </div>
    </div>
</template>
<style>
.card{
    width: 200px;
    height:100%;
}
.container{
    position: relative;
    border-radius: 10px;
}
.card-mobile{
    width: 200px;
    height:100%;
}
.container-mobile{
    position: relative;
    border-radius: 10px;
}
.img {
    width: 100%;
    position: relative;
    border-radius: 10px;
    z-index: 1;
}
.play-demo{
  position: absolute;
  width: 100%;
  height: 100%;
}
.star-icon{
    position: absolute;
    top:7px;
    right:7px;
}
.btnDiv{
    opacity: 0;
    position:absolute;
    z-index: 2;
    width: 100%;
    height:100%;
    top: 0;
    left: 0;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.8);
    transition: .3s;
}
.btnDiv-mobile{
    position:absolute;
    z-index: 2;
    width: 100%;
    height:100%;
    top: 0;
    left: 0;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.8);
}
.btnDiv-mobile-cover{
    position:absolute;
    z-index: 3;
    width: 100%;
    height:100%;
    top: 0;
    left: 0;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0);
}
.gametext{
    font-size: 11px;
    color: white;
}
.card:hover .btnDiv{
    opacity: 1;
}
.card:hover .gametext{
    font-size:12px;
    color:white;
}
</style>

