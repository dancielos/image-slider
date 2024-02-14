'use client';

import './ImageSlider.css';

import { ImageSliderProvider } from './redux/ImageSliderProvider';

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

function Layout({ images }: { images: TypeImage[] }) {
	const dispatch = useDispatch<AppDispatch>();
	// const imagesRef = useRef() as React.MutableRefObject<
	// 	Map<number, HTMLDivElement>
	// >;

	const thumbnailsRef = useRef() as React.MutableRefObject<
		Map<number, HTMLLIElement>
	>;
	// imagesRef.current = [];
	const currentIndex = useAppSelector(
		(state) => state.imageSliderReducer.currentIndex
	);
	const len = useAppSelector((state) => state.imageSliderReducer.len);

	useEffect(() => {
		// console.log('1ST use effect being called');
		// initialize the slice length for computation later
		dispatch(setLen(images.length));
	}, [images]);

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

		// const thumbnailMap = getThumbnailsMap();
		// const thumbnailNode = thumbnailMap.get(goTo);

		// thumbnailNode?.scrollIntoView();

		const map = getThumbnailsMap();

		const node = map.get(to);
		// console.log(node);
		node?.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'center',
		});
	}

	// function getImageMap() {
	// 	if (!imagesRef.current) {
	// 		imagesRef.current = new Map();
	// 	}
	// 	return imagesRef.current;
	// }

	function getThumbnailsMap() {
		if (!thumbnailsRef.current) {
			thumbnailsRef.current = new Map();
		}
		return thumbnailsRef.current;
	}

	return (
		<>
			<div className='container relative h-[360px] w-full overflow-hidden'>
				<ImageGallery
					images={images}
					//  getMap={getImageMap} ref={imagesRef}
				/>
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

export default function ImageSlider({ images }: { images: TypeImage[] }) {
	return (
		<ImageSliderProvider>
			<div className='m-4 flex flex-col gap-2'>
				<Layout images={images} />
			</div>
		</ImageSliderProvider>
	);
}
