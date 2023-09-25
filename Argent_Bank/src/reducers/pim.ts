import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : false, // Donc de base utilisateur non connecté
    token: '',
    firstName: '',
    lastName: '',
    isEditingName: false // Bouton Edit Name
}

const logSlice = createSlice({
    name: 'logged',
    initialState,
    reducers : {
        login: (state, action: PayloadAction<{ token: string; firstName: string; lastName: string}>) => {
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.token = '';
            state.firstName = '';
            state.lastName = '';
        },
        toggleEditName: (state) => {
            state.isEditingName = !state.isEditingName;
        }
    }
})

export const { login, logout, toggleEditName } = logSlice.actions;
export default logSlice.reducer