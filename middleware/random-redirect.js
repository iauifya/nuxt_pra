// export default defineNuxtRouteMiddleware((to, from) => {
//     if (to.params.id === '1') {
//         return abortNavigation()
//     }
//     return navigateTo('/')
// })
export default defineNuxtRouteMiddleware(() => {
    if (Math.random() > 0.5) {
        console.log(`[來自 random-redirect 中間件] 重新導向至 /history`)
        return navigateTo('/history')
    }

    console.log(`[來自 random-redirect 中間件] 沒發生什麼特別的事情～`)
})