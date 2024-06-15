import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const presciptionApi = createApi({
  reducerPath: "presciptionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api/v1/presciption-Order`,
    credentials:"include",
    
  }),
  tagTypes: ["presciption-orders",'stats'],

  endpoints: (builder) => ({
    newPresciptionOrder: builder.mutation({
      query: (order) => ({
        url: "/new",
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["orders",'stats'],
    }),
    // updateOrder: builder.mutation({
    //   query: ( id ) => ({
    //     url: `/${id}`,
    //     method: "PUT",
    //   }),
    //   invalidatesTags: ["orders"],
    // }),
    // deleteOrder: builder.mutation({
    //   query: ( id ) => ({
    //     url: `/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["orders",'stats'],
    // }),
    // myOrders: builder.query({
    //   query: () => `/myorders`,
    //   providesTags: ["orders"],
    // }),
    allPresciptionOrders: builder.query({
      query: () => `/all`,
      providesTags: ["presciption-orders"],
    }),
    // orderDetails: builder.query({
    //   query: (id) => `/${id}`,
    //   providesTags: ["orders"],
    // }),
  }),
});

export const {
  useAllPresciptionOrdersQuery
} = presciptionApi;