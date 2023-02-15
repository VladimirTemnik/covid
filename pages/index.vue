<script setup lang="ts">
  import { useStore } from "@/store/store";
  import CovidList from "@/components/CovidList.vue"

  const store = useStore()

  await store.getCovid()
</script>

<template>
  <nuxt-layout name="default">
    <div>
      <div>
        <covid-list></covid-list>
      </div>
    </div>
  </nuxt-layout>
</template>