import { configureStore } from '@reduxjs/toolkit'
import { userApi } from './api/userAPI'
import userReducer from './reducers/userReducer.js'
import { productsApi } from './api/productsAPI.js'

export const serverUrl ="http://localhost:3000"
export const store  = configureStore({
    reducer:{
        // Add your reducers here
        [userApi.reducerPath]:userApi.reducer,
        [productsApi.reducerPath]:productsApi.reducer,
        userReducer:userReducer,

    },
    middleware:(defmid) => [...defmid(),userApi.middleware,productsApi.middleware]
})