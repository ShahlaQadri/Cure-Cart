import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const presciptionApi = createApi({
  reducerPath: "presciptionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}api/v1/presciption-Order`,
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
      invalidatesTags: ['stats',"presciption-orders"],
    }),
    updatePresciptionOrder: builder.mutation({
      query: ( id ) => ({
        url: `/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["stats","presciption-orders"],
    }),
    deletePresciptionOrder: builder.mutation({
      query: ( id ) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['stats',"presciption-orders"],
    }),
    // myOrders: builder.query({
    //   query: () => `/myorders`,
    //   providesTags: ["orders"],
    // }),
    allPresciptionOrders: builder.query({
      query: () => `/all`,
      providesTags: ["presciption-orders"],
    }),

    myPresciptionOrders: builder.query({
      query: () => `/my`,
      providesTags: ["presciption-orders"],
    }),
    presciptionOrderDetails: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["presciption-orders"],
    }),
  }),
});

export const {
  useNewPresciptionOrderMutation,
  useUpdatePresciptionOrderMutation,
  useDeletePresciptionOrderMutation,
  useAllPresciptionOrdersQuery,
  useMyPresciptionOrdersQuery,
  usePresciptionOrderDetailsQuery
} = presciptionApi;