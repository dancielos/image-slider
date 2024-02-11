'use client';

import './ImageSlider.css';

import Thumbnails from './thumbnails/Thumbnails';
import NavControls from './controls/NavControls';
import { TypeImage } from './types/TypeImage';
import ImageGallery from './gallery/ImageGallery';
import { ImageSliderProvider } from './redux/ImageSliderProvider';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from './redux/store';
import { setLen } from './redux/imageSliderSlice';

export default function ImageSlider({ images }: { images: TypeImage[] }) {
	const imagesRef = useRef<Map<number, HTMLDivElement>>();
	// imagesRef.current = [];

	const dispatch = useDispatch<AppDispatch>();
	const currentIndex = useAppSelector(
		(state) => state.imageSliderReducer.currentIndex
	);

	useEffect(() => {
		// console.log('1ST use effect being called');
		// initialize the slice length for computation later
		dispatch(setLen(images.length));
	}, [images]);

	function scrollTo(index: number) {
		const map = getMap();
		const node = map.get(index);
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
		<ImageSliderProvider>
			<div className='m-4 flex flex-col gap-2'>
				<div className='container relative h-[360px] w-full overflow-hidden'>
					<ImageGallery images={images} getMap={getMap} ref={imagesRef} />
					{/* <div className='flex justify-between p-3 items-start'>
					<ImageIndex />
					<FullscreenButton />
				</div> */}
					<div className='absolute top-1/2 transform -translate-y-1/2 w-full z-20 h-full'>
						<NavControls />
					</div>
				</div>
				<div className='container relative h-1/4 overflow-scroll'>
					<Thumbnails images={images} />
				</div>
			</div>
		</ImageSliderProvider>
	);
}
