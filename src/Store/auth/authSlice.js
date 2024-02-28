import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking",
    uid: null,
    email: null,
    name: null,
    phone: null,
    address: null,
    rol: null,
    errorMessage: null,
    users: []
  },
  reducers: {

    login: (state, { payload }) => {
      (state.status = "authenticated"),
        (state.uid = payload.uid);
      state.email = payload.email;
      state.errorMessage = null;
    },

    setActiveUser: (state, { payload }) => {
      state.name = payload.name;
      state.phone = payload.phone;
      state.address = payload.address;
      state.email = payload.email;
      state.rol = payload.rol;
      state.uid = payload.uid;
      state.status = "authenticated";
    },

    logout: (state, { payload }) => {
      (state.status = "not-authenticated"),
        (state.uid = null);
      state.name = null;
      state.phone = null;
      state.address = null;
      state.email = null;
      state.rol = null;
      state.errorMessage = payload?.errorMessage;
    },

    checkingCredentials: (state) => {
      state.status = "checking";
    },

    setUsersList: (state, payload) => {
      state.users = payload.payload
    }
  },
});

export const { login, logout, checkingCredentials, setActiveUser, setUsersList } = authSlice.actions;
