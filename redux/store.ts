import { configureStore } from "@reduxjs/toolkit";
import { CanvasSlice } from "./slices/canvasSlice";
import { allToolsSlice } from "./slices/AllTools";

export const store = configureStore({
  reducer: {
    canvasTab: CanvasSlice.reducer,
    allTools: allToolsSlice.reducer
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']