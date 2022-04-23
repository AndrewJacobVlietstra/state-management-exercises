import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: { userName: '', isLoggedIn: false},
  reducers: {
    logUserIn(state, action) {
      return {...state, userName: action.payload, isLoggedIn: true};
    },
    logUserOut(state, action) {
      return {...state, userName: '', isLoggedIn: false};
    },
  }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;