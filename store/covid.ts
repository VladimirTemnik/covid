import { defineStore } from 'pinia'
import { ref } from "vue"
import { ICovid } from "~/types"

export type TCovidView = Pick<ICovid, 'confirmed_diff' | 'date' | 'deaths_diff' | 'active_diff'>

export const useCovidStore = defineStore('store', () => {
  const item = ref<TCovidView | null>(null)
  const loading = ref<boolean>(false)

  const getCovidReports = async () => {
    loading.value = true

    const { data, error, pending } = await useFetch<ICovid>('/reports',
      {
        pick: ['confirmed_diff', 'date', 'deaths_diff', 'active_diff']
      },
    )

    if (error.value) {
      throw error.value
    }

    item.value = data.value

    loading.value = pending.value
  }

  return { item, getCovidReports }
})