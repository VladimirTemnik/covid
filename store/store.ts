import { defineStore } from 'pinia'
import { ref } from "vue";
import { ICovid } from "@/store/types";
import { service } from "@/api/service";

export const useStore = defineStore('store', () => {
  const item = ref<ICovid | null>(null)
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

    item.value = data.value as ICovid

    loading.value = pending.value
  }

  return { item, login, getCovid }
})