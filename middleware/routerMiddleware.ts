import Cookies from 'js-cookie';
export default defineNuxtRouteMiddleware((to, from) => {
    if (Cookies.get('token') === undefined) {
      return navigateTo('/')
    }
})