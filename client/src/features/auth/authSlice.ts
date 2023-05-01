import { createSlice } from '@reduxjs/toolkit';
import { AuthSlice } from './authSlice.types';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, access_token: accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    signout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, signout } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: AuthSlice) => state.user;
export const selectToken = (state: AuthSlice) => state.token;
