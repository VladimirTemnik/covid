export default defineNuxtRouteMiddleware((to, from) => {
  // if (to.name !== '/login')
  return navigateTo('/')
})