import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api/v1/order`,
    credentials:"include",
    
  }),
  tagTypes: ["orders"],

  endpoints: (builder) => ({
    newOrder: builder.mutation({
      query: (order) => ({
        url: "/new",
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["orders"],
    }),
    updateOrder: builder.mutation({
      query: ( id ) => ({
        url: `/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["orders"],
    }),
    deleteOrder: builder.mutation({
      query: ( id ) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["orders"],
    }),
    myOrders: builder.query({
      query: () => `/myorders`,
      providesTags: ["orders"],
    }),
    allOrders: builder.query({
      query: () => `/allorders`,
      providesTags: ["orders"],
    }),
    orderDetails: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["orders"],
    }),
  }),
});

export const {
  useNewOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
  useMyOrdersQuery,
  useAllOrdersQuery,
  useOrderDetailsQuery,
} = orderApi;