'use client';

import { useEffect, useRef } from 'react';
import { TypeImage } from '../types/TypeImage';
import ImageGalleryItem from './ImageGalleryItem';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../redux/store';

import { setLen } from '../redux/imageSliderSlice';

export default function ImageGallery({ images }: { images: TypeImage[] }) {
	const imagesRef = useRef<HTMLDivElement[]>([]);
	imagesRef.current = [];

	const dispatch = useDispatch<AppDispatch>();
	const currentIndex = useAppSelector(
		(state) => state.imageSliderReducer.currentIndex
	);

	useEffect(() => {
		// initialize the slice length for computation later
		dispatch(setLen(images.length));
	}, [images]);

	useEffect(() => {
		imagesRef.current[currentIndex].scrollIntoView({ behavior: 'smooth' });
	}, [currentIndex]);

	function addToRefs(e: HTMLDivElement) {
		if (e && !imagesRef.current.includes(e)) {
			imagesRef.current.push(e);
		}
		// console.log(imagesRef.current);
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
					ref={addToRefs}
				/>
			))}
		</div>
	);
}
