export default defineNuxtRouteMiddleware((to, from) => {
    if (!window.localStorage.getItem('token')) {
      return navigateTo('/')
    }
})