//import Vue from 'vue'
import VueNotifications from 'vue-notifications'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueNotifications)
})