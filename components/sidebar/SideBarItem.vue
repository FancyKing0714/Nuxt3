<script setup lang="ts">
import {linkTo} from '~~/utils/link';
interface SideBarItemInterFace {
    title: string;
    backUrl: string;
    iconUrl: string;
    link: string;
}

const props = withDefaults(defineProps<SideBarItemInterFace>(), {
    title: '',
    backUrl: '',
    iconUrl: '',
    link: '',
});

function getUrl(img: string) {
    return `/imgs/sidebar/${img}`;
}
</script>
<template>
    <nuxt-link :to="linkTo(link)">
        <div @click="" class="relative mt-7">
            <div
                style="max-width: 109px"
                class="absolute top-1/2 -translate-y-1/2 z-10 left-2"
            >
                <p
                    style="line-height: 15px"
                    class="text-base font-bold text-shadow-md"
                >
                    {{ title }}
                </p>
            </div>
            <img
                :src="getUrl(backUrl)"
                spinner-color="primary"
                spinner-size="24px"
                :alt="title"
            />
            <img
                style="width: 108px"
                :class="[
                    'absolute',
                    'right-0',
                    'bottom-0',
                    title === 'BONUS WHEEl' ? 'rotate' : '',
                ]"
                :src="getUrl(iconUrl)"
                spinner-color="primary"
                spinner-size="24px"
                :alt="title"
            />
        </div>
    </nuxt-link>
</template>
