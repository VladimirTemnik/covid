<script setup lang="ts">
  import { useCovidStore } from "~~/store/covid";
  import CovidList from "@/components/CovidList.vue"
  import LoginCard from "@/components/LoginCard.vue"
  const store = useCovidStore()

  await store.getCovidReports()
</script>

<template>
  <nuxt-layout name="login">
      <login-card></login-card>
      <covid-list></covid-list>
  </nuxt-layout>
</template>