<script setup lang="ts"></script>

<template>
    <div
        class="relative max-w-[200px] bg-gray-700 focus-within:bg-white rounded-lg group focus-within:text-gray-400 pl-[25px]"
    >
        <span class="absolute left-2 z-[1000] w-[22px]">
            <q-icon
                class="pt-2"
                style="max-width: 22px"
                name="search"
                size="sm"
            />
        </span>
        <input
            type="search"
            name="q"
            class="py-2 pl-2 text-md bg-gray-700 rounded-lg h-10 focus:outline-none focus:bg-white focus:text-black max-w-[200px]"
            placeholder="Search for Games"
        />
    </div>
</template>
