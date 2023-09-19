import { configureStore } from '@reduxjs/toolkit'
import logSlice from './reducers/pim'

const store =  configureStore({
    reducer: {
        logged: logSlice,
    }
})

export default store;