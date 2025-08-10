import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export enum SystemCanvasToolsType {
  SELECTION = 'SELECTION',
  RECTANGLE = 'RECTANGLE',
  ELLIPSE = 'ELLIPSE',
  ARROW = 'ARROW',
  LINE = 'LINE',
  DRAW = 'DRAW',
  TEXT = 'TEXT'
}

interface SystemCanvasToolsState {
  selectedTool: SystemCanvasToolsType
}

const initialState: SystemCanvasToolsState = {
  selectedTool: SystemCanvasToolsType.SELECTION
}

export const SystemCanvasToolsSlice = createSlice({
  name: 'API Canvas Tools',
  initialState,
  reducers: {
    setSelectedTool: state => {
      state.selectedTool = SystemCanvasToolsType.SELECTION
    },
    setSelectedToolToRectangle: state => {
      state.selectedTool = SystemCanvasToolsType.RECTANGLE
    },
    setSelectedToolToEllipse: state => {
      state.selectedTool = SystemCanvasToolsType.ELLIPSE
    },
    setSelectedToolToArrow: state => {
      state.selectedTool = SystemCanvasToolsType.ARROW
    },
    setSelectedToolToLine: state => {
      state.selectedTool = SystemCanvasToolsType.LINE
    },
    setSelectedToolToDraw: state => {
      state.selectedTool = SystemCanvasToolsType.DRAW
    },
    setSelectedToolToText: state => {
      state.selectedTool = SystemCanvasToolsType.TEXT
    }
  }
})

export const { 
    setSelectedTool, setSelectedToolToRectangle, setSelectedToolToEllipse, setSelectedToolToArrow, setSelectedToolToLine, setSelectedToolToDraw, setSelectedToolToText 
  } = SystemCanvasToolsSlice.actions
export const ToolsBarForAPICanvas = (state: RootState) => state.toolsForSystemCanvas
export default SystemCanvasToolsSlice.reducer