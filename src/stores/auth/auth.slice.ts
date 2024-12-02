import { UserInfosProps } from "@interfaces/users/user-infos.interface";
import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
  userInfos: UserInfosProps | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userInfos: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state, 
      action : {
        payload: { 
          userInfos: UserInfosProps, 
          accessToken: string, 
          refreshToken: string 
        }
      }
    ) => {
      state.isAuthenticated = true;
      state.userInfos = action.payload.userInfos;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userInfos = null;
      state.accessToken = null;
      state.refreshToken = null;
    }
  }
})

export const { login, logout } = authSlice.actions;
export const authReducer =  authSlice.reducer;