import { createSlice } from "@reduxjs/toolkit";
import { MENUITEMS,COLORS } from "@/contsnts";
//set values of pencil and eraser

const initialState = {
  [MENUITEMS.PENCIL]: {
    color: COLORS.BLACK,
    size: 3,
  },
  [MENUITEMS.ERASER]: {
    color: COLORS.WHITE,
    size: 3,
  },
  [MENUITEMS.UNDO]: {},
    [MENUITEMS.REDO]: {},
  [MENUITEMS.DOWNLOAD]:{}
};

export const toolBoxSlice = createSlice({
  name: "toolBox",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state[action.payload.item].color=action.payload.color;
    },
    changeBrushSize: (state, action) => {
        state[action.payload.item].size = action.payload.size;
    },
  },
});

export const { changeColor, changeBrushSize } = toolBoxSlice.actions;
export default toolBoxSlice.reducer;