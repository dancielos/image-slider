'use client';

import './ImageSlider.css';

import Thumbnails from './thumbnails/Thumbnails';
import { NavigationAction, TypeImage } from './types/types';
import ImageGallery from './gallery/ImageGallery';
import { useEffect, useRef, useState } from 'react';
import { scrollTo, setImages, setLen } from './redux/imageSliderSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from './redux/store';
import DefaultContainer from './DefaultContainer';
import Controls from './controls/Controls';
import FullscreenContainer from './FullScreenContainer';
// import FullscreenContainer from './FullscreenContainer';

type ChildProps = {
	images: TypeImage[];
	fullscreen?: boolean;
};

export default function Layout({ images, fullscreen = false }: ChildProps) {
	const thumbnailsRef = useRef() as React.MutableRefObject<
		Map<number, HTMLLIElement>
	>;
	const thumbnailsFRef = useRef() as React.MutableRefObject<
		Map<number, HTMLLIElement>
	>;
	const dispatch = useDispatch<AppDispatch>();

	const currentIndex = useAppSelector(
		(state) => state.imageSliderReducer.currentIndex
	);
	const len = useAppSelector((state) => state.imageSliderReducer.len);

	useEffect(() => {
		dispatch(setImages(images));
	}, [images, dispatch]);

	function handleScroll(action: NavigationAction, index: number) {
		if (action === 'jump' && currentIndex === index) return;
		let to = -1;
		let direction: 'rtl' | 'ltr' = 'rtl';
		if (action === 'prev') {
			if (index === 0) to = len - 1;
			else to = index - 1;

			direction = 'rtl';
		} else if (action === 'next') {
			if (index === len - 1) to = 0;
			else to = index + 1;

			direction = 'ltr';
		} else {
			to = index;
			if (currentIndex < to) direction = 'ltr';
			else direction = 'rtl';
		}

		dispatch(scrollTo({ to, direction }));

		const map = getThumbnailsMap();

		const node = map.get(to);
		node?.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'center',
		});
	}

	// const getThumbnailsMap = useCallback(() => {
	// 	console.log('get thumbnails map');
	// 	if (!thumbnailsRef.current) {
	// 		thumbnailsRef.current = new Map();
	// 	}
	// 	return thumbnailsRef.current;
	// }, [thumbnailsRef]);

	function getThumbnailsMap() {
		// console.log('get thumbnails map');
		if (!thumbnailsRef.current) {
			thumbnailsRef.current = new Map();
		}
		return thumbnailsRef.current;
	}

	function getThumbnailsFMap() {
		// console.log('get thumbnails map');
		if (!thumbnailsFRef.current) {
			thumbnailsFRef.current = new Map();
		}
		return thumbnailsFRef.current;
	}

	// ----------------------------------------
	// TODO: refactor the modal
	const dialogRef = useRef<HTMLDialogElement>(null);

	function showFullscreen() {
		dialogRef.current?.showModal();
	}

	function hideFullScreen() {
		dialogRef.current?.close();
	}

	return (
		<>
			<DefaultContainer>
				<div className='container relative h-[360px] w-full overflow-hidden'>
					<ImageGallery />
					<Controls
						handleScroll={handleScroll}
						handleFullscreen={showFullscreen}
					/>
				</div>
				<Thumbnails
					handleScroll={handleScroll}
					getMap={getThumbnailsMap}
					ref={thumbnailsRef}
				/>
			</DefaultContainer>

			<dialog className='w-screen h-screen' ref={dialogRef}>
				<div className='container relative h-4/5 min-w-full overflow-hidden'>
					<ImageGallery fullscreen />
					<Controls
						fullscreen
						handleScroll={handleScroll}
						handleFullscreen={hideFullScreen}
					/>
				</div>
				<Thumbnails
					fullscreen
					handleScroll={handleScroll}
					getMap={getThumbnailsFMap}
					ref={thumbnailsFRef}
				/>
			</dialog>
		</>
	);
}
