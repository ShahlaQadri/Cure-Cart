import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
reducerPath: 'productsApi',
baseQuery: fetchBaseQuery({ baseUrl:`http://localhost:3000/api/v1/product`,
    credentials: 'include', // Include cookies in requests
}),
tagTypes:['products','stats'],
endpoints: (builder) => ({
    createProduct : builder.mutation({
        query:(formData)=>({
            url: "/new",
            method : "POST",
            body : formData,
            

        }),
        invalidatesTags:['products','stats']
    }),
    updateProduct : builder.mutation({
        query:({formData,id})=>({
            url: `/${id}`,
            method : "PUT",
            body : formData,

        }),
        invalidatesTags:['products','stats']
    }),
    deleteProduct : builder.mutation({
        query:(id)=>({
            url: `/${id}`,
            method : "DELETE",
            

        }),
        invalidatesTags:['products','stats']
    }),
    
    getBestDeals:builder.query({
        query:()=>"/bestdeals",
        providesTags:['products']
    }),
    getBabyBestDeals:builder.query({
        query:()=>"/babybestdeals",
        providesTags:['products']
    }),
    getAllProducts:builder.query({
        query:()=>"/allproducts",
        providesTags:['products']
    }),
    getAllCategories:builder.query({
        query:()=>"/getcategories",
        providesTags:['products']
    }),
    getProductsByCategories:builder.query({
        query:(categoryname)=>`/categories?category=${categoryname}`,
        providesTags:['products']
    }),
    getProductDetails:builder.query({
        query:(id)=>`/${id}`,
        providesTags:['products']
    }),
    getSearchedProducts:builder.query({
        query:(name)=>`/search?name=${name}`,
        providesTags:['products']
    }),
    
    
    
}),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreateProductMutation,useUpdateProductMutation,useDeleteProductMutation,useGetBestDealsQuery, useGetBabyBestDealsQuery,useGetAllCategoriesQuery,useGetAllProductsQuery,useGetProductsByCategoriesQuery,useGetProductDetailsQuery,useGetSearchedProductsQuery} = productsApi