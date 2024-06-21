import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}api/v1/dashboard`,
    credentials:"include",
    
  }),
  tagTypes: ["stats","order"],

  endpoints: (builder) => ({
    
    getDashboardStats: builder.query({
      query: () => "/stats",
      providesTags: ["stats","order"],
    }),
  }),
});

export const {
  useGetDashboardStatsQuery
} = dashboardApi;