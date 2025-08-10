import { configureStore } from "@reduxjs/toolkit";
import { CanvasSlice } from "./slices/canvasSlice";
import { APICanvasToolsSlice } from "./slices/ToolsForAPISlice";
import { SystemCanvasToolsSlice } from "./slices/ToolsForSystemCanvasSlice";
import { ToolsForDBSlice } from "./slices/ToolsForDBSlice";

export const store = configureStore({
  reducer: {
    canvasTab: CanvasSlice.reducer,
    toolsForAPICanvas: APICanvasToolsSlice.reducer,
    toolsForSystemCanvas: SystemCanvasToolsSlice.reducer,
    toolsForDBCanvas: ToolsForDBSlice.reducer
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']