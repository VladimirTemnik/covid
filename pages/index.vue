<script setup lang="ts">
  import { useStore } from "@/store/store";
  import CovidList from "@/components/CovidList.vue"

  const store = useStore()

  await store.getCovid()
</script>

<template>
  <nuxt-layout name="login">
      <covid-list v-bind="{
        item: store.item
      }"></covid-list>
  </nuxt-layout>
</template>