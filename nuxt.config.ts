// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt'],
  typescript: {
    typeCheck: true
  }, // 讓開發時期能執行類型檢查
  runtimeConfig: {
    apiSecret: 'secret', //server端
    public: {
      apiBase: '/api'
    }
  }
})
// module.exports = {
//   plugins: 
// }