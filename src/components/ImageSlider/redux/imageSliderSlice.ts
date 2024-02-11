import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
	currentIndex: number;
	len: number;
};

const initialState: InitialState = {
	currentIndex: 0,
	len: 1,
};

export const imageSliderSlice = createSlice({
	name: 'imageSliderSlice',
	initialState,
	reducers: {
		setLen: (state, action: PayloadAction<number>) => {
			state.len = action.payload;
		},
		goToNext: (state) => {
			const isLastIndex = state.currentIndex === state.len - 1;
			if (isLastIndex) state.currentIndex = 0;
			else state.currentIndex++;
		},
		goToPrev: (state) => {
			const isFirstIndex = state.currentIndex === 0;
			if (isFirstIndex) state.currentIndex = state.len - 1;
			else state.currentIndex--;
		},
		jumpTo: (state, action: PayloadAction<number>) => {
			const isActionValid = action.payload >= 0 && action.payload < state.len;
			if (isActionValid) state.currentIndex = action.payload;
			else console.error('Something went wrong');
		},
	},
});

export const { goToNext, goToPrev, jumpTo, setLen } = imageSliderSlice.actions;
export default imageSliderSlice.reducer;
