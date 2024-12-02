import { createSlice } from "@reduxjs/toolkit";
import { SidebarStateEnum, ExpendSidebarStateEnum } from "@stores/sidebar/sidebar.enum";

export interface SidebarState {
  sidebarActive: SidebarStateEnum | null;
  expendSidebarActive: ExpendSidebarStateEnum;
}

const initialState: SidebarState = {
  sidebarActive: null,
  expendSidebarActive: ExpendSidebarStateEnum.CLOSE
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    open: (
      state,
    ) => {
      state.expendSidebarActive = ExpendSidebarStateEnum.OPEN;
    },
    close: (state) => {
      state.expendSidebarActive = ExpendSidebarStateEnum.CLOSE;
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