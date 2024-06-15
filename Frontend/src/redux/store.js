import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';
import { userApi } from './api/userAPI';
import userReducer from './reducers/userReducer';
import { productsApi } from './api/productsAPI';
import cartReducer from './reducers/cartReducer';
import { orderApi } from './api/ordersAPI';
import { dashboardApi } from './api/dashboardAPI';
import { presciptionApi } from './api/presciptionAPI';

// Persist configuration for the cart reducer
const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['cartItems', 'shippingInfo'], // Only persist these keys from cartReducer
};

// Persist configuration for the user reducer
const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['user',], 
};

// Wrap the cart and user reducers with persistReducer
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

// Combine all your reducers
const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [dashboardApi.reducerPath]: dashboardApi.reducer,
  [presciptionApi.reducerPath]: presciptionApi.reducer,
  userReducer: persistedUserReducer, // Persisted user reducer
  cartReducer: persistedCartReducer, // Persisted cart reducer
});

// Configure the store with the root reducer and middleware
export const store = configureStore({
  reducer: rootReducer,
  middleware: (defMid) =>
    defMid().concat(
      userApi.middleware,
      productsApi.middleware,
      orderApi.middleware,
      dashboardApi.middleware,
      presciptionApi.middleware
    ),
});

// Create the persistor
export const persistor = persistStore(store);
