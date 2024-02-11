'use client';

import { useEffect, useRef } from 'react';
import { TypeImage } from '../types/TypeImage';
import ImageGalleryItem from './ImageGalleryItem';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../redux/store';

import { setLen } from '../redux/imageSliderSlice';

export default function ImageGallery({ images }: { images: TypeImage[] }) {
	const imagesRef = useRef<Map<number, HTMLDivElement>>();
	// imagesRef.current = [];

	const dispatch = useDispatch<AppDispatch>();
	const currentIndex = useAppSelector(
		(state) => state.imageSliderReducer.currentIndex
	);

	// console.log(currentIndex);

	useEffect(() => {
		console.log('1ST use effect being called');
		// initialize the slice length for computation later
		dispatch(setLen(images.length));
	}, [images]);

	useEffect(() => {
		console.log('2ND useEffect');
		// function scrollTo(id: number) {
		const map = getMap();
		const node = map.get(currentIndex);
		console.log(node);
		node?.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'center',
		});
		// }
		// 	console.log('2ND` use effect invoked');

		// imagesRef.current[currentIndex].scrollIntoView({ behavior: 'smooth' });
	}, [currentIndex]);

	function getMap() {
		if (!imagesRef.current) {
			imagesRef.current = new Map();
		}
		return imagesRef.current;
	}
	return (
		<div
			className='flex flex-row h-full overflow-x-auto snap-x snap-mandatory scroll-smooth'
			id='gallery'
		>
			{images.map((image, i) => (
				<ImageGalleryItem
					key={image.alt + i}
					image={image}
					currentIndex={i}
					id={`#image-${i}`}
					ref={(node) => {
						const map = getMap();
						if (node) {
							map.set(i, node);
						} else {
							map.delete(i);
						}
					}}
				/>
			))}
		</div>
	);
}
