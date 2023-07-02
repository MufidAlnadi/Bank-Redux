import { configureStore } from '@reduxjs/toolkit'
import bankReducer from './slice';

export default configureStore({
    reducer: {
      bank: bankReducer,
    },
  })