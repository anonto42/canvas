import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export enum DBCanvasToolsType {
  TABLE = 'TABLE',
  TEXT = 'TEXT',
  ARROW = 'ARROW',
}

interface CanvasState {
  selectedTool: DBCanvasToolsType
}

const initialState: CanvasState = {
  selectedTool: DBCanvasToolsType.TABLE
}

export const ToolsForDBSlice = createSlice({
  name: 'CanvasTab',
  initialState,
  reducers: {
    setSelectedToolToTableDB: state => {
      state.selectedTool = DBCanvasToolsType.TABLE
    },
    setSelectedToolToTextDB: state => {
      state.selectedTool = DBCanvasToolsType.TEXT
    },
    setSelectedToolToArrowDB: state => {
      state.selectedTool = DBCanvasToolsType.ARROW
    }
  }
})

export const { setSelectedToolToTableDB, setSelectedToolToTextDB, setSelectedToolToArrowDB } = ToolsForDBSlice.actions
export const selectTab = (state: RootState) => state.toolsForDBCanvas
export default ToolsForDBSlice.reducer