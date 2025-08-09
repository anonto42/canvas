import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counterSlice";
import { CanvasSlice } from "./slices/canvasSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    canvasTab: CanvasSlice.reducer
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']