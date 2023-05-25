<template>
    <div class="mx-6 mb-4 bg-slate-50 py-24">
        <div class="flex flex-col items-center">
            <!-- <h1 class="text-6xl font-semibold text-yellow-400">聯絡我們</h1> -->
            <!-- <p class="my-8 text-3xl text-gray-600">這裡是 /contact</p> -->
            <p>{{ data.results }}</p>
        </div>
    </div>
</template>

<script setup>
// 方式1 useFetch
//const {data} = await useFetch('https://api.themoviedb.org/3/movie/upcoming?api_key=e10d0d0ccc7102e9244008e94dc983c7&language=zh-TW&region=TW')

// 方式2 useAsyncData + $fetch
const { data } = await useAsyncData(
    'upcoming',
    ()=> $fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=e10d0d0ccc7102e9244008e94dc983c7&language=zh-TW&region=TW')
)

// async function addCompany( data ){
//     await $fetch( '/api/v1/companies', {
//         method: 'POST',
//         body: data
//     } );
// }
</script>