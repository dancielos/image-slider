import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TypeImage } from '../types/types';

type InitialState = {
	currentIndex: number;
	len: number;
	images: TypeImage[];
	direction: 'ltr' | 'rtl';
};

const initialState: InitialState = {
	currentIndex: 0,
	images: [],
	len: 1,
	direction: 'rtl',
};

export const imageSliderSlice = createSlice({
	name: 'imageSliderSlice',
	initialState,
	reducers: {
		setImages: (state, action: PayloadAction<TypeImage[]>) => {
			state.images = action.payload;
			state.len = action.payload.length;
		},
		setLen: (state, action: PayloadAction<number>) => {
			state.len = action.payload;
		},
		scrollTo: (
			state,
			action: PayloadAction<{ to: number; direction: 'ltr' | 'rtl' }>
		) => {
			const isActionValid =
				action.payload.to >= 0 && action.payload.to < state.len;
			if (isActionValid) state.currentIndex = action.payload.to;
			else console.error('Something went wrong');

			state.direction = action.payload.direction;
		},
		// goToNext: (state) => {
		// 	const isLastIndex = state.currentIndex === state.len - 1;
		// 	if (isLastIndex) state.currentIndex = 0;
		// 	else state.currentIndex++;

		// },
		// goToPrev: (state) => {
		// 	const isFirstIndex = state.currentIndex === 0;
		// 	if (isFirstIndex) state.currentIndex = state.len - 1;
		// 	else state.currentIndex--;
		// },
		// jumpTo: (state, action: PayloadAction<number>) => {
		// 	const isActionValid = action.payload >= 0 && action.payload < state.len;
		// 	if (isActionValid) state.currentIndex = action.payload;
		// 	else console.error('Something went wrong');
		// },
	},
});

export const { scrollTo, setLen, setImages } = imageSliderSlice.actions;
// export const { goToNext, goToPrev, jumpTo, setLen } = imageSliderSlice.actions;
export default imageSliderSlice.reducer;
