import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from "axios"


// Define a service using a base URL and expected endpoints
export const userApi = createApi({
reducerPath: 'userApi',
baseQuery: fetchBaseQuery({ baseUrl:`http://localhost:3000/api/v1/users`,
    credentials: 'include', // Include cookies in requests
 }),
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
    getMyDetals:builder.query({
        query:()=>"/myprofile"
    })
}),
})


export const getUser = async()=>{
    try {
        const {data} = await axios.get("http://localhost:3000/api/v1/users/myprofile")
        return data
    } catch (error) {
        console.log("error");
    }
}
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUserRegisterMutation,useUserLoginMutation, useGetMyDetalsQuery } = userApi