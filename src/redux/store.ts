import { combineReducers, configureStore } from '@reduxjs/toolkit'

import authSlice from './slice/authSlice'

const rootReducer = combineReducers({
  auth: authSlice,
})

export const store = configureStore({ reducer: rootReducer })

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
