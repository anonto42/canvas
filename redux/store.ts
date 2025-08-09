import { configureStore } from "@reduxjs/toolkit";
import { CanvasSlice } from "./slices/canvasSlice";
import { APIToolsSlice } from "./slices/ToolsForAPISlice";

export const store = configureStore({
  reducer: {
    canvasTab: CanvasSlice.reducer,
    toolsForAPI: APIToolsSlice.reducer
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']