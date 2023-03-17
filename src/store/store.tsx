import { configureStore, createSlice } from '@reduxjs/toolkit';

const isPlayingSlice = createSlice({
  name: 'audioHandler',
  initialState: { isPlaying: false, activeSong: null, audio: null},
  reducers: {
    playPauseAudio(state, action) {
      if (action.payload) {
        return {...state, activeSong: action.payload, audio: action.payload.preview_url}
      }
      if (state.isPlaying && state.activeSong) {
        return {...state, isPlaying: false }
      }
      if (state.isPlaying && !state.activeSong) {
        return {...state,  isPlaying: false }
      }
      if (!state.isPlaying && state.activeSong) {
        return {...state,  isPlaying: true } 
      }
      if (!state.isPlaying && !state.activeSong) {
        return
      }
    },
  },
});

export const actions = isPlayingSlice.actions;

const store = configureStore({
  reducer: isPlayingSlice.reducer,
});

export default store;
