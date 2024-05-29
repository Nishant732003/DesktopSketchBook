import { createSlice } from "@reduxjs/toolkit";
import { MENUITEMS } from "@/contsnts";
const initialState = {

    activeMenuItem: MENUITEMS.PENCIL,
    actionMenuItem:null
}
export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        menuItemClick: (state,action) => {
           state.activeMenuItem=action.payload 
        },
        actionItemClick: (state, action) => {
            state.actionMenuItem = action.paylaod
        }
    }
})
export const { menuItemClick, actionItemClick } = menuSlice.actions;

export default menuSlice.reducer;