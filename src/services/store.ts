import { configureStore } from "@reduxjs/toolkit";
import programCardSlice from "./programCardSlice";

const store = configureStore({
  reducer: {
    list: programCardSlice
  }
})


export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch