import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface CapsulesState {
  capsules: Capsule[] | null;
}

const initialState = {
  capsules: null,
} as CapsulesState;

const capsulesSlice = createSlice({
  name: 'capsules',
  initialState,
  reducers: {
    setCapsules: (state, action) => {
      state.capsules = action.payload;
    },
    searchCapsule: (state, action) => {
      state.capsules = action.payload;
    },
  },
});

export const selectCapsules = (state: RootState) => state.capsules;

export const { setCapsules, searchCapsule } = capsulesSlice.actions;

export default capsulesSlice.reducer;
