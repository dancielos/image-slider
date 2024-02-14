'use client';

import './ImageSlider.css';

import Thumbnails from './thumbnails/Thumbnails';
import NavControls from './controls/NavControls';
import { NavigationAction, TypeImage } from './types/types';
import ImageGallery from './gallery/ImageGallery';
import { useEffect, useRef } from 'react';
import { scrollTo, setLen } from './redux/imageSliderSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from './redux/store';
import ImageIndex from './ImageIndex';
import FullscreenButton from './controls/FullscreenButton';

export default function Layout({ images }: { images: TypeImage[] }) {
	const thumbnailsRef = useRef() as React.MutableRefObject<
		Map<number, HTMLLIElement>
	>;
	const dispatch = useDispatch<AppDispatch>();

	const currentIndex = useAppSelector(
		(state) => state.imageSliderReducer.currentIndex
	);
	const len = useAppSelector((state) => state.imageSliderReducer.len);

	useEffect(() => {
		dispatch(setLen(images.length));
	}, [images, dispatch]);

	function handleScroll(action: NavigationAction, index: number) {
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
		console.log('get thumbnails map');
		if (!thumbnailsRef.current) {
			thumbnailsRef.current = new Map();
		}
		return thumbnailsRef.current;
	}

	return (
		<>
			<div className='container relative h-[360px] w-full overflow-hidden'>
				<ImageGallery images={images} />
				<div className='absolute top-0 w-full'>
					<div className='flex justify-between p-3 items-start'>
						<ImageIndex currentIndex={currentIndex} len={len} />
						<FullscreenButton />
					</div>
				</div>
				<div className='absolute top-1/2 transform -translate-y-1/2 w-full z-20 h-full'>
					<NavControls handleScroll={handleScroll} />
				</div>
			</div>
			<div className='container relative h-1/4 overflow-scroll'>
				<Thumbnails
					images={images}
					handleScroll={handleScroll}
					getMap={getThumbnailsMap}
					ref={thumbnailsRef}
				/>
			</div>
		</>
	);
}
