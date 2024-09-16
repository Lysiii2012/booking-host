import { createSlice } from "@reduxjs/toolkit";

const destinationsSlice = createSlice({
  name: "destination",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  reducers: {
    fetchDestinationsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDestinationsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDestinationsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDestinationsRequest,
  fetchDestinationsSuccess,
  fetchDestinationsFailure,
} = destinationsSlice.actions;

export const destinationReducer = destinationsSlice.reducer;  
