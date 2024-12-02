import { createSlice } from "@reduxjs/toolkit";
import { SidebarStateEnum, ExpendSidebarStateMode } from "@stores/sidebar/sidebar.enum";

export interface SidebarState {
  sidebarActive: SidebarStateEnum | null;
  expendSidebarMode: ExpendSidebarStateMode;
}

const initialState: SidebarState = {
  sidebarActive: null,
  expendSidebarMode: ExpendSidebarStateMode.CLOSE
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    open: (
      state,
    ) => {
      state.expendSidebarMode = ExpendSidebarStateMode.OPEN;
    },
    close: (state) => {
      state.expendSidebarMode = ExpendSidebarStateMode.CLOSE;
    },
    setSidebarActive: (
      state, 
      action: {
        payload: SidebarStateEnum | null;
      }
    ) => {
      state.sidebarActive = action.payload;
    },
  }
})

export const { open, close, setSidebarActive } = sidebarSlice.actions;
export const sidebarReducer = sidebarSlice.reducer;