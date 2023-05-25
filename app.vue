<template>
  <!-- <div>
    <ClientOnly>
      <HelloWelcome />
      <template #fallback>
        <p class="my-6 flex justify-center">
          載入中...
        </p>
      </template>
    </ClientOnly>
    <JustClient />
    <ClientAndServer />
  </div> -->

  <div class="m-4 bg-white">
    <p class="pb-4 text-2xl text-slate-600">這裡是最外層 app.vue</p>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <p>此處為分隔線</p>
  <hr>
  <div class="flex flex-col items-center">
    <div class="mt-8 flex items-center">
      <input
        id="show-button"
        v-model="useRound"
        name="show-button"
        type="checkbox"
        class="h-5 w-5"
      />
      <label for="show-button" class="ml-2 block text-base text-slate-800">使用圓角按鈕</label>
    </div>
    <component :is="useRound ? BaseButton : RoundButton"></component>
  </div>

  <div class="flex flex-col items-center">
    <div class="mt-8 flex items-center">
      <input id="show-button" v-model="show" name="show-button" type="checkbox" class="h-5 w-5" />
      <label for="show-button" class="ml-2 block text-base text-slate-800">顯示報名按鈕</label>
    </div>
    <LazyBaseApplyButton v-if="show" />
  </div>

  
  <!-- <div>
    pages路由的進入點
    <NuxtPage /> 

    layouts布局的進入點
    <NuxtLayout name="default">
      <template #header>
        <p class="px-6 pt-4 text-xl text-green-500">這段會放置在 header 插槽</p>
      </template>
      <template #default>
        <p class="px-6 pt-4 text-xl text-slate-800">
          被 NuxtLayout 包裹的元件將會放置到 Layout 的 slot 中
        </p>
      </template>
      <template #footer>
        <p class="px-6 pt-4 text-xl text-blue-500">這段會放置在 footer 插槽</p>
      </template>
    </NuxtLayout>
  </div> -->
</template>

<script setup>
const useRound = ref(false)
const BaseButton = resolveComponent('BaseApplyButton')
const RoundButton = resolveComponent('RoundApplyButton')
const show = ref(false)
</script>