import { configureStore } from '@reduxjs/toolkit'
import { userApi } from './api/userAPI'
import userReducer from './reducers/userReducer.js'
import { productsApi } from './api/productsAPI.js'
import cartReducer  from './reducers/cartReducer.js'
import { orderApi } from './api/ordersAPI.js'
import { dashboardApi } from './api/dashboardAPI.js'

export const serverUrl ="http://localhost:3000"
export const store  = configureStore({
    reducer:{
        // Add your reducers here
        [userApi.reducerPath]:userApi.reducer,
        [productsApi.reducerPath]:productsApi.reducer,
        [orderApi.reducerPath]:orderApi.reducer,
        [dashboardApi.reducerPath]:dashboardApi.reducer,
        userReducer:userReducer,
        cartReducer : cartReducer,

    },
    middleware:(defmid) => [...defmid(),userApi.middleware,productsApi.middleware,orderApi.middleware,dashboardApi.middleware]
})