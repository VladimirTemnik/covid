<script setup lang="ts">
import { ref } from "vue"
import { useStore } from "@/store/store";
import { ICovid } from "~~/api/types";

export type TCovidHeaders = keyof ICovid

const store = useStore()
const headers: TCovidHeaders[] = [
  'confirmed_diff', 'date', 'deaths_diff', 'active_diff'
]

const item = ref<ICovid | null>(store.item?.data || null)


</script>

<template>
  <section class="flex flex-col items-center px-10 pt-5">
    <header  class="font-sans text-xl mb-2 text-indigo-400">
      <h5>
        Covid 19
      </h5>
    </header>
    <main class="w-full bg-gray-400 mb-5 rounded-md">
      <table class="border border-black w-full font-sans text-md ">
        <thead>
          <tr class="">
            <template v-for="header of headers">
                <th class="border-2 border-black font-sans text-md">
                  {{ header }}
                </th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <template v-if="item" v-for="header of headers">
              <td class="border-2 border-black font-sans text-md ">
                {{ item[header] }}
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </main>
    <footer class="w-1/3 bg-indigo-400 flex justify-center font-sans text-md rounded-md">
      <button class=""> refresh </button>
    </footer>
  </section>
</template>