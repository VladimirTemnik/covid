import { defineStore } from 'pinia'
import { ref } from "vue";
import { service } from "@/api/service";
import { ICovid, ICovidResponse } from "@/api/types";

export const useStore = defineStore('store', () => {
  const item = ref<ICovidResponse | null>(null)
  const authorized = ref<boolean>(false)
  const loading = ref<boolean>(false)

  const login = () => {
    authorized.value = true
  }

  const getCovid = async () => {
    loading.value = true

    const { data, error, pending } = await service("/reports/total", {
      date: '2022-01-19',
      iso: 'UKR'
    })

    if (error.value) {
      throw error.value
    }

    item.value = data.value as ICovidResponse || null

    loading.value = pending.value
  }

  return { item, login, getCovid }
})