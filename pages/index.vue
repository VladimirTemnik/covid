<script setup lang="ts">
  import { useCovidStore } from "~~/store/covid";
  import CovidList from "@/components/CovidList.vue"

  const store = useCovidStore()

  await store.getCovidReports()
</script>

<template>
  <nuxt-layout name="login">
      <covid-list></covid-list>
  </nuxt-layout>
</template>