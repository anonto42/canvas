import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export enum CanvasType {
  API = 'API',
  SYSTEM = 'SYSTEM',
  DATABASE = 'DATABASE'
}

interface CanvasState {
  type: 'API' | 'SYSTEM' | 'DATABASE'
}

const initialState: CanvasState = {
  type: 'SYSTEM'
}

export const CanvasSlice = createSlice({
  name: 'CanvasTab',
  initialState,
  reducers: {
    setTabToAPI: state => {
      state.type = "API"
    },
    setTabToSystem: state => {
      state.type = "SYSTEM"
    },
    setTabToDatabase: state => {
      state.type = "DATABASE"
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // }
  }
})

export const { setTabToAPI, setTabToSystem, setTabToDatabase } = CanvasSlice.actions
export const selectTab = (state: RootState) => state.canvasTab
export default CanvasSlice.reducer