

export const service = (url: string, params: { [key: string]: unknown }) => {
  const config = useRuntimeConfig()

  return useFetch(url, {
    baseURL: config.public.baseURL,
    params
  })
}