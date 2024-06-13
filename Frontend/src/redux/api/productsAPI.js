import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
reducerPath: 'productsApi',
baseQuery: fetchBaseQuery({ baseUrl:`http://localhost:3000/api/v1/product`,
    credentials: 'include', // Include cookies in requests
}),
tagTypes:['products'],
endpoints: (builder) => ({
    // userRegister : builder.mutation({
    //     query:(user)=>({
    //         url: "/new",
    //         method : "POST",
            
    //         body : user,

    //     }),
    //     invalidatesTags:['user']
    // }),
    
    
    getBestDeals:builder.query({
        query:()=>"/bestdeals",
        // providesTags:['user']
    }),
    getBabyBestDeals:builder.query({
        query:()=>"/babybestdeals",
        // providesTags:['user']
    }),
    getAllProducts:builder.query({
        query:()=>"/allproducts",
        // providesTags:['user']
    }),
    getAllCategories:builder.query({
        query:()=>"/getcategories",
        // providesTags:['user']
    }),
    
    
    
}),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBestDealsQuery, useGetBabyBestDealsQuery,useGetAllCategoriesQuery,useGetAllProductsQuery} = productsApi