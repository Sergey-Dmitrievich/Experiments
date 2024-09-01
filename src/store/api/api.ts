import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IApi } from '../../../src/interfaces/IApi'

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200/recipes' }),
  endpoints: (builder) => ({
    getRecipes: builder.query<IApi[], any>({
      query: () => `/`,
    }),
  }),
})

export const { useGetRecipesQuery } = api