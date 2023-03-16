import { configureStore, createSlice } from '@reduxjs/toolkit';

const isPlayingSlice = createSlice({
  name: 'dupa',
  initialState: { isPlaying: false, isActive: false, activeSong: null },
  reducers: {
    playAudio(state, action) {
      state.isPlaying = !state.isPlaying;
    },
    pauseAudio(state, action) {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const actions = isPlayingSlice.actions;

const store = configureStore({
  reducer: isPlayingSlice.reducer,
});

export default store;
