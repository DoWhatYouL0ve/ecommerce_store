import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: InitialStateType = {
  isLoggedIn: false,
  email: null,
  userName: null,
  userID: null,
  isLoading: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setActiveUser: (
      state,
      action: PayloadAction<{
        email: null | string
        userName: null | string
        userID: null | string
      }>
    ) => {
      const { email, userName, userID } = action.payload

      state.isLoggedIn = true
      state.email = email
      state.userName = userName
      state.userID = userID
    },
    deleteActiveUser: state => {
      state.isLoggedIn = false
      state.email = null
      state.userName = null
      state.userID = null
    },
  },
})

export const { setActiveUser, deleteActiveUser } = authSlice.actions
export default authSlice.reducer

// types
type InitialStateType = {
  isLoggedIn: boolean
  email: null | string
  userName: null | string
  userID: null | string
  isLoading: boolean
}
