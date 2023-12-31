import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface CapsulesState {
  capsules: Capsule[] | null;
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleString().split(', ')[0];
};

const initialState = {
  capsules: null,
} as CapsulesState;

const capsulesSlice = createSlice({
  name: 'capsules',
  initialState,
  reducers: {
    setCapsules: (state, action) => {
      const newData = action.payload.map((capsule: Capsule) => {
        return {
          ...capsule,
          original_launch: formatDate(capsule.original_launch),
        };
      });
      state.capsules = newData;
    },
    searchCapsule: (state, action) => {
      state.capsules = action.payload;
    },
  },
});

export const selectCapsules = (state: RootState) => state.capsules;

export const { setCapsules, searchCapsule } = capsulesSlice.actions;

export default capsulesSlice.reducer;
