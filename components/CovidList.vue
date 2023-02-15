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
  <section>
    <header>
      <h5> 
        Covid 19 
      </h5>
    </header>
    <main>
      <table>
        <thead>
          <tr>
            <template v-for="header of headers">
                <th> 
                  {{ header }} 
                </th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr>
            <template v-if="item" v-for="header of headers">
              <th> 
                {{ item[header] }} 
              </th>
            </template>
          </tr>
        </tbody>
      </table>
    </main>
    <footer>
      <button> refresh </button>
    </footer>
  </section>
</template>