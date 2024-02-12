'use client';

import Thumbnails from './thumbnails/Thumbnails';
import NavControls from './controls/NavControls';
import { NavigationAction, TypeImage } from './types/types';
import ImageGallery from './gallery/ImageGallery';
import { useEffect, useRef } from 'react';
import { scrollTo, setLen } from './redux/imageSliderSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from './redux/store';

export default function Layout({ images }: { images: TypeImage[] }) {
	const dispatch = useDispatch<AppDispatch>();
	const imagesRef = useRef() as React.MutableRefObject<
		Map<number, HTMLDivElement>
	>;
	// imagesRef.current = [];

	const len = useAppSelector((state) => state.imageSliderReducer.len);

	useEffect(() => {
		// console.log('1ST use effect being called');
		// initialize the slice length for computation later
		dispatch(setLen(images.length));
	}, [images]);

	function handleScroll(action: NavigationAction, index: number) {
		let goTo = -1;
		if (action === 'prev') {
			if (index === 0) goTo = len - 1;
			else goTo = index - 1;
		} else if (action === 'next') {
			if (index === len - 1) goTo = 0;
			else goTo = index + 1;
		} else goTo = index;

		dispatch(scrollTo(goTo));

		const map = getMap();

		const node = map.get(goTo);
		// console.log(node);
		node?.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'center',
		});
	}

	function getMap() {
		if (!imagesRef.current) {
			imagesRef.current = new Map();
		}
		return imagesRef.current;
	}

	return (
		<>
			<div className='container relative h-[360px] w-full overflow-hidden'>
				<ImageGallery images={images} getMap={getMap} ref={imagesRef} />
				{/* <div className='flex justify-between p-3 items-start'>
					<ImageIndex />
					<FullscreenButton />
				</div> */}
				<div className='absolute top-1/2 transform -translate-y-1/2 w-full z-20 h-full'>
					<NavControls handleScroll={handleScroll} />
				</div>
			</div>
			<div className='container relative h-1/4 overflow-scroll'>
				<Thumbnails images={images} handleScroll={handleScroll} />
			</div>
		</>
	);
}
