import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "user",
  initialState:{
    value:"Hey"
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload.user;
    },
    logout: (state) => {
      state.value = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
