<template>
  <div class="mx-6 mb-4 bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">2023 Home</h1>
      <p class="mt-4 text-9xl font-bold text-gray-600">GO</p>
      <div class="my-4 flex space-x-4">
        <NuxtLink to="/about">前往 About</NuxtLink>
        <NuxtLink to="/contact">前往 Contact</NuxtLink>
        <Nuxt-link to="/counter/increment">前往 counter/increment</nuxt-link>
        <Nuxt-link to="/counter/surprise">前往 counter/surprise</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
    middleware: 'dynamic-redirect'
})
</script>