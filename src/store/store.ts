import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../modules'
import listenerMiddleware from './middlewares/listener'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([listenerMiddleware.middleware]),
})
