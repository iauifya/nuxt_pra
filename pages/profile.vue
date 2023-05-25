<template>
    <div class="my-24 flex flex-col items-center">
      <span class="mt-4 text-2xl text-gray-600">回傳資料:</span>
      <p class="mt-4 text-3xl font-semibold text-blue-500"></p>
    </div>
</template>
  
<script setup>
const runtimeConfig = useRuntimeConfig()
//const { apiBase } = runtimeConfig.public
console.log(runtimeConfig.public.apiBase); //api
console.log(runtimeConfig.apiSecret); //undefined,因為client端會偵測不到
//   console.log(toRaw(runtimeConfig))

//   const { data } = await useFetch(`${apiBase}/hello`)
</script>