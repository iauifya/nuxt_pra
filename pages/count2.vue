<template>
    <div class="flex flex-col items-center">
        <span class="mt-8 text-4xl text-gray-700">{{ counterStore.doubleCount }}</span>
        <div class="mt-8 flex flex-row">
            <button
                class="my-6 rounded-sm bg-sky-600 py-2 px-4 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                @click="counterStore.increment">
                增加 1
            </button>
            <button
                class="my-6 rounded-sm bg-sky-600 py-2 px-4 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                @click="counterStore.decrement">
                減少 1
            </button>
        </div>

    </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/count'
const counterStore = useCounterStore()
//counterStore.count += 10
//counterStore.$patch({count: counterStore.count + 2})
//目前此兩種做法都會有"Hydration text content mismatch" 錯誤。
</script>