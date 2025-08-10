import { configureStore } from "@reduxjs/toolkit";
import { CanvasSlice } from "./slices/canvasSlice";
import { SystemCanvasToolsSlice } from "./slices/ToolsForSystemCanvasSlice";

export const store = configureStore({
  reducer: {
    canvasTab: CanvasSlice.reducer,
    toolsForSystemCanvas: SystemCanvasToolsSlice.reducer
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']