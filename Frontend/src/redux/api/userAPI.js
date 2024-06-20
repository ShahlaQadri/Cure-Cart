import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from "axios"


// Define a service using a base URL and expected endpoints
export const userApi = createApi({
reducerPath: 'userApi',
baseQuery: fetchBaseQuery({ baseUrl:`http://localhost:3000/api/v1/users`,
    credentials: 'include', // Include cookies in requests
 }),
 tagTypes:['user'],
endpoints: (builder) => ({
    userRegister : builder.mutation({
        query:(user)=>({
            url: "/new",
            method : "POST",
            
            body : user,

        }),
        invalidatesTags:['user','stats']
    }),
    userLogin : builder.mutation({
        query:(user)=>({
            url: "/login",
            method : "POST",
            body : user,
            

        }),
        invalidatesTags:['user']
    }),
    userLogout:builder.mutation({
        query:()=>({url:"/logout",
            method : "GET",
        }),
        providesTags:['user'],
        invalidatesTags:['user']
    }),
    updateUser:builder.mutation({
        query:(user)=>({url:"/updateprofile",
            method : "PUT",
            body : user,
        }),
        providesTags:['user'],
        invalidatesTags:['user']
    }),
    
    getMyDetals:builder.query({
        query:()=>"/myprofile",
        providesTags:['user']
    }),
   
    getAllUsers:builder.query({
        query:()=>"/allusers",
        providesTags:['user']
    }),
}),
})


export const { useUserRegisterMutation,useUserLoginMutation,useUserLogoutMutation,useUpdateUserMutation, useGetMyDetalsQuery,useGetAllUsersQuery } = userApi