<script setup lang="ts">
import { useStore } from 'vuex';
import {useRouter} from 'vue-router';
import {gamePlay} from '~~/action/game';
import { log } from 'console';

const router = useRouter();
const store = useStore();
const play = (demo, name, slug) =>{
    console.log(demo);
    
    store.commit('handleGamePlayMode',demo);
    store.commit('handleGameName',name);
    router.push(linkTo(`/play/${slug}`));
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
    <div class="pt-4">
        <div class="px-4">
            <div class="flex flex-wrap justify-around">
                <div class="card p-1" v-for="gameItem in store.state.gameListByType">
                    <div class="container" >
                        <img :src="gameItem?.image?gameItem?.image:imgurl" class="img bg-cover"/>
                        <div class="btnDiv" >
                            <div class="play-demo" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                <q-btn
                                    text-color=white
                                    style="border-radius: 50%; background-color:red; padding: 5px; margin-bottom: 5px;"
                                    @click="play(0,gameItem.name, gameItem.slug)"
                                >
                                    <q-icon name="play_arrow" size="lg" />
                                </q-btn>
                                <q-btn
                                    v-if="gameItem?.demo == 1"
                                    text-color=white
                                    padding="1px 10px"
                                    label="Demo"
                                    style="font-size: x-small; border-radius: 10%; background-color:transparent;border: white 2px solid;"
                                    @click="play(1,gameItem.name, gameItem.slug)"
                                />
                            </div>
                            <q-btn
                                text-color=yellow
                                padding="0px"
                                class="star-icon"
                                style="background-color: transparent;"
                            >
                                <q-icon name="star_border" size="xs" />
                            </q-btn>
                        </div>
                    </div>
                    <p class="text-center gametext p-2">
                        {{ gameItem?.name }}
                    </p>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center py-2">
                <q-linear-progress class="w-52" rounded  stripe size="7px" :value="0.677" />
                <p class="text-center text-md py-2">Displaying 30 of 45</p>
                <q-btn class="w-52" text-color="white" color="primary" @click="store.commit('handleReadMore',store.state.pageNumber+1)">
                    Load More
                </q-btn>
            </div>
        </div>
    </div>
</template>
<style>
.card-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.card{
    width: 200px;
    height:100%;
}
.container{
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
.card:hover .btnDiv{
    opacity: 1;
}
.gametext{
    font-size: 11px;
    color: white;
}
.card:hover .gametext{
    font-size:12px;
    color:white;
}
</style>

