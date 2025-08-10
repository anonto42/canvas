import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export enum APICanvasToolsType {
  TABLE = 'TABLE',
  RETANGLE = 'RETANGLE',
  ARROW = 'ARROW',
  ENDPOINT = 'ENDPOINT',
}

interface APICanvasToolsState {
  selectedTool: APICanvasToolsType
}

const initialState: APICanvasToolsState = {
  selectedTool: APICanvasToolsType.TABLE
}

export const APICanvasToolsSlice = createSlice({
  name: 'API Canvas Tools',
  initialState,
  reducers: {
    setSelectedToolOnAPI: state => {
      state.selectedTool = APICanvasToolsType.TABLE
    },
    setSelectedToolToRectangleOnAPI: state => {
      state.selectedTool = APICanvasToolsType.RETANGLE
    },
    setSelectedToolToArrowOnAPI: state => {
      state.selectedTool = APICanvasToolsType.ARROW
    },
    setSelectedToolToLineOnAPI: state => {
      state.selectedTool = APICanvasToolsType.ENDPOINT
    },
  }
})

export const { 
    setSelectedToolOnAPI, setSelectedToolToRectangleOnAPI, setSelectedToolToArrowOnAPI, setSelectedToolToLineOnAPI 
  } = APICanvasToolsSlice.actions
export const ToolsBarForAPICanvas = (state: RootState) => state.toolsForAPICanvas
export default APICanvasToolsSlice.reducer