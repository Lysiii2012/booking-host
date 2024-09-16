import { createSlice } from "@reduxjs/toolkit";

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    hotelsList: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchHotelsRequest: (state) => {
      state.loading = true;
    },
    fetchHotelsSuccess: (state, action) => {
      state.loading = false;
      state.hotelsList = action.payload;
    },
    fetchHotelsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchHotelsRequest, fetchHotelsSuccess, fetchHotelsFailure } =
  hotelsSlice.actions;

export const hotelsReducer = hotelsSlice.reducer;
