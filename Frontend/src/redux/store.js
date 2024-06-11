import { configureStore } from '@reduxjs/toolkit'
import { userApi } from './api/userAPI'

export const serverUrl ="http://localhost:3000"
export const store  = configureStore({
    reducer:{
        // Add your reducers here
        [userApi.reducerPath]:userApi.reducer,

    },
    middleware:(defmid) => [...defmid(),userApi.middleware]
})