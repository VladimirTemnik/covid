import { defineStore } from 'pinia'
import { ref } from "vue"
import { ICredentials } from "~/types";

export const useAuthStore = defineStore('store', () => {
  const authorized = ref<boolean>(false)
  const loading = ref<boolean>(false)

  const login = async (credentials: ICredentials) => {
    loading.value = true

    const { data, error, pending } = await useFetch('/auth/login',
      {
        method: 'post',
        body: credentials
      })

    if (error.value) {
      throw error.value
    }

    authorized.value = !!data.value

    loading.value = pending.value
  }

  return { authorized, login }
})