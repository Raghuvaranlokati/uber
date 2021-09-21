import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
         setdestination: (state, action) => {
                state.destination = action.payload;
        },
        settravelTimeInformatio: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    },
});

export const { setOrigin, setDestination, 
    setTravelTimeInformation } = navSlice.actions;

    //Selectors
    export const selectOrigin = (state) => state.nav.origin;
    export const selectDestination = (state) => state.nav.selectDestination;
    export const selecttravelTimeInformation = (state) => state.nav.travelTimeInformation;

    export default navSlice.reducer;
