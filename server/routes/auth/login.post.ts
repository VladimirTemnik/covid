import { ICredentials } from "~~/types"

export default defineEventHandler(async (event) => {
  const { username, password }: ICredentials = await readBody(event)
  
  if (!username || !password) {
    throw createError({
      statusCode: 400,
      message: 'Invalid credentials'
    })
  }

  return true
})