import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export enum APICanvasToolsType {
  API = 'API',
  SYSTEM = 'SYSTEM',
  DATABASE = 'DATABASE'
}

interface APICanvasToolsState {
  type: 'API' | 'SYSTEM' | 'DATABASE'
}

const initialState: APICanvasToolsState = {
  type: 'SYSTEM'
}

export const APIToolsSlice = createSlice({
  name: 'API Canvas Tools',
  initialState,
  reducers: {
    setTabToAPI: state => {
      state.type = "API"
    }
  }
})

export const { setTabToAPI } = APIToolsSlice.actions
export const ToolsBarForAPICanvas = (state: RootState) => state.toolsForAPI
export default APIToolsSlice.reducer