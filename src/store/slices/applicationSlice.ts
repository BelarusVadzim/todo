import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ApplicationState = {
  appInitialized: boolean;
  filter?: string;
};

function getInitialState(): ApplicationState {
  return {
    appInitialized: false,
  };
}

const initialState = getInitialState();

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string | undefined>) {
      state.filter = action.payload;
    },
    setAppInitialized(state) {
      state.appInitialized = true;
    },
  },
});

export const { setFilter, setAppInitialized } = applicationSlice.actions;
export default applicationSlice.reducer;
