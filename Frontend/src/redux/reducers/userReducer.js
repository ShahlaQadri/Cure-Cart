import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user:null,
    isLoading:true
}

export const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    
    userExist: (state, action) => {
        state.isLoading=false
      state.user = action.payload
    },
    userNotExist: (state) => {
        state.user = null
        state.isLoading=true
      },
  },
})

// Action creators are generated for each case reducer function
export const {userExist,userNotExist  } = userReducer.actions

export default userReducer.reducer