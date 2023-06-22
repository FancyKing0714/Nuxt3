<script setup lang="ts"></script>

<template>
    <div
        style="max-width: 181px"
        class="hidden md:!block relative text-gray-600 focus-within:text-gray-400"
    >
        <span class="absolute inset-y-0 right-1 flex items-center">
            <q-img
                class="q-mr-sm"
                style="max-width: 22px"
                src="/imgs/header/search.png"
                alt="sports"
            />
        </span>
        <input
            type="search"
            name="q"
            style="background-color: #3e4455; height: 40px"
            class="py-2 text-sm text-white rounded-3xl px-5 focus:outline-none focus:bg-white focus:text-gray-900 w-full"
            placeholder="Search for Games"
        />
    </div>
</template>
