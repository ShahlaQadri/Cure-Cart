import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}api/v1/order`,
    credentials:"include",
    
  }),
  tagTypes: ["orders",'stats',"products"],

  endpoints: (builder) => ({
    newOrder: builder.mutation({
      query: (order) => ({
        url: "/new",
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["orders",'stats',"products"],
    }),
    updateOrder: builder.mutation({
      query: ( id ) => ({
        url: `/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["orders","stats"],
    }),
    deleteOrder: builder.mutation({
      query: ( id ) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["orders",'stats',"products"],
    }),
    myOrders: builder.query({
      query: () => `/myorders`,
      providesTags: ["orders",'stats'],
    }),
    allOrders: builder.query({
      query: () => `/allorders`,
      providesTags: ["orders",'stats'],
    }),
    orderDetails: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["orders",'stats'],
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