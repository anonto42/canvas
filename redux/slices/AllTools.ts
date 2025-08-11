import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum AllToolsType {
  SELECTION = 'SELECTION',
  RECTANGLE = 'RECTANGLE',
  ELLIPSE = 'ELLIPSE',
  ARROW = 'ARROW',
  LINE = 'LINE',
  DRAW = 'DRAW',
  TEXT = 'TEXT',
  TABLE = 'TABLE',
}

interface AllToolsState {
  selectedTool: AllToolsType;
  selectedToolForAPI: AllToolsType;
  selectedToolForDB: AllToolsType;
}

const initialState: AllToolsState = {
  selectedTool: AllToolsType.SELECTION,         // For system canvas
  selectedToolForAPI: AllToolsType.TABLE,      // For API canvas
  selectedToolForDB: AllToolsType.TABLE,       // For DB canvas
};

export const allToolsSlice = createSlice({
  name: 'AllTools',
  initialState,
  reducers: {
    setSelectedTool: (state) => {
      state.selectedTool = AllToolsType.SELECTION;
    },
    setSelectedToolToRectangle: (state) => {
      state.selectedTool = AllToolsType.RECTANGLE;
    },
    setSelectedToolToEllipse: (state) => {
      state.selectedTool = AllToolsType.ELLIPSE;
    },
    setSelectedToolToArrow: (state) => {
      state.selectedTool = AllToolsType.ARROW;
    },
    setSelectedToolToLine: (state) => {
      state.selectedTool = AllToolsType.LINE;
    },
    setSelectedToolToDraw: (state) => {
      state.selectedTool = AllToolsType.DRAW;
    },
    setSelectedToolToText: (state) => {
      state.selectedTool = AllToolsType.TEXT;
    },
    setSelectedToolToTable: (state) => {
      state.selectedToolForAPI = AllToolsType.TABLE;
    },
    setSelectedToolToRectangleOnAPI: (state) => {
      state.selectedToolForAPI = AllToolsType.RECTANGLE;
    },
    setSelectedToolToArrowOnAPI: (state) => {
      state.selectedToolForAPI = AllToolsType.ARROW;
    },
    setSelectedToolToTextOnAPI: (state) => {
      state.selectedToolForAPI = AllToolsType.TEXT;
    },
    setSelectedToolToTableDB: (state) => {
      state.selectedToolForDB = AllToolsType.TABLE;
    },
    setSelectedToolToTextDB: (state) => {
      state.selectedToolForDB = AllToolsType.TEXT;
    },
    setSelectedToolToArrowDB: (state) => {
      state.selectedToolForDB = AllToolsType.ARROW;
    },
  },
});

export const {
  setSelectedTool,
  setSelectedToolToRectangle,
  setSelectedToolToEllipse,
  setSelectedToolToArrow,
  setSelectedToolToLine,
  setSelectedToolToDraw,
  setSelectedToolToText,
  setSelectedToolToTable,
  setSelectedToolToRectangleOnAPI,
  setSelectedToolToArrowOnAPI,
  setSelectedToolToTextOnAPI,
  setSelectedToolToTableDB,
  setSelectedToolToTextDB,
  setSelectedToolToArrowDB,
} = allToolsSlice.actions;

export const selectAllTools = (state: RootState) => state.allTools;

export default allToolsSlice.reducer;
