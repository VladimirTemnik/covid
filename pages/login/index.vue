<script setup lang="ts">
  import { useAuthStore } from "~~/store/auth";
  import LoginCard from "@/components/LoginCard.vue"

  const store = useAuthStore()

  await store.login()
</script>

<template>
  <nuxt-layout name="login">
    <login-card></login-card>
  </nuxt-layout>
</template>

<style scoped>

</style>