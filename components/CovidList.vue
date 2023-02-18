<script setup lang="ts">
import { ref } from "vue"
import { useCovidStore } from "~~/store/covid";
import { TCovidView } from "~~/store/covid"
import CompBaseBtn from "@/components/BaseBtn.vue"

const store = useCovidStore()
const item = ref<TCovidView | null>(store.item)

const onRefresh = async () => {
  console.log("refreshed")
  await store.getCovidReports()
}

</script>

<template>
  <section class="min-h-screen flex flex-col items-center px-10 py-5 justify-center">
    <header  class="w-full font-medium font-sans text-2xl mb-2 text-white">
      <h5>
        Covid 19
      </h5>
    </header>
    <main class="w-full bg-slate-700 mb-5">
      <table class=" w-full font-sans text-md text-slate-700 ">
        <thead>
        <tr class="">
          <template v-for="header of Object.keys(item)">
            <th class="font-sans text-md p-1 text-slate-300 border-2 border-slate-500 rounded-md">
              {{ header }}
            </th>
          </template>
        </tr>
        </thead>
        <tbody>
        <tr class="text-center">
          <template v-if="item" v-for="header of Object.keys(item)">
            <td class="border-2 border-slate-500 font-sans text-md text-slate-300 rounded-md">
              {{ item[header] }}
            </td>
          </template>
        </tr>
        </tbody>
      </table>
    </main>
    <footer class="w-full flex justify-end ">
      <comp-base-btn
          v-on:click="onRefresh"
          type="submit">
        <template v-slot:text>Refresh</template>
      </comp-base-btn>
    </footer>
  </section>
</template>