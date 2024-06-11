import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const userApi = createApi({
reducerPath: 'userApi',
baseQuery: fetchBaseQuery({ baseUrl:`http://localhost:3000/api/v1/users` }),
endpoints: (builder) => ({
    userRegister : builder.mutation({
        query:(user)=>({
            url: "/new",
            method : "POST",
            body : user,

        })
    }),
    userLogin : builder.mutation({
        query:(user)=>({
            url: "/login",
            method : "POST",
            body : user,

        })
    }),
    
}),
})



// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUserRegisterMutation,useUserLoginMutation, useGetMyProfileQuery } = userApi