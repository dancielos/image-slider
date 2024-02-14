import {
	imageSliderSlice,
	setImages,
	setLen,
	scrollTo,
} from '../imageSliderSlice';
import { MiddlewareAPI } from '@reduxjs/toolkit';

describe('imageSliderSlice', () => {
	let store: MiddlewareAPI;

	beforeEach(() => {
		const middleware = createTestMiddleware();
		store = getStore(middleware);
	});

	it('should set images and update length correctly', () => {
		const images = [{ src: 'example.jpg' }];
		store.dispatch(setImages(images));

		expect(store.getState().images).toEqual(images);
		expect(store.getState().len).toEqual(images.length);
	});

	it('should set length correctly', () => {
		const len = 5;
		store.dispatch(setLen(len));

		expect(store.getState().len).toEqual(len);
	});

	it('should scroll to the specified index and direction', () => {
		const currentIndex = 2;
		const direction = 'rtl';
		store.dispatch(scrollTo({ to: currentIndex, direction }));

		expect(store.getState().currentIndex).toEqual(currentIndex);
		expect(store.getState().direction).toEqual(direction);
	});

	it('should not scroll if index is out of bounds', () => {
		const invalidIndex = -1;
		const invalidDirection = 'ltr';
		const currentState = store.getState();
		store.dispatch(scrollTo({ to: invalidIndex, direction: invalidDirection }));

		expect(store.getState()).toEqual(currentState);
	});
});
