import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
reducerPath: 'userApi',
baseQuery: fetchBaseQuery({ baseUrl:`${import.meta.env.VITE_SERVER}api/v1/users`,
    credentials: 'include', // Include cookies in requests
 }),
 tagTypes:['user','stats'],
endpoints: (builder) => ({
    userRegister : builder.mutation({
        query:(user)=>({
            url: "/new",
            method : "POST",
            body : user,

        }),
        providesTags:['user',],
        invalidatesTags:['user','stats']
    }),
    userLogin : builder.mutation({
        query:(user)=>({
            url: "/login",
            method : "POST",
            body : user,
            

        }),
        providesTags:['user',],
        invalidatesTags:['user']
    }),
    userLogout:builder.mutation({
        query:()=>({url:"/logout",
            method : "GET",
        }),
        // providesTags:['user'],
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
    deleteUser:builder.mutation({
        query:(id)=>({
            url: `/${id}`,
            method : "DELETE",
            

        }),
        providesTags:['user',],
        invalidatesTags:['user','stats']
    }),

    ChangePassword:builder.mutation({
        query:(formData)=>({
            url: `/changepassword`,
            method : "PUT",
            body: formData
            

        }),
        providesTags:['user',],
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


export const { useUserRegisterMutation,useUserLoginMutation,useUserLogoutMutation,useDeleteUserMutation,useUpdateUserMutation, useChangePasswordMutation, useGetMyDetalsQuery,useGetAllUsersQuery } = userApi