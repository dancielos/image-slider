'use client';

import { useEffect } from 'react';
import { TypeImage } from '../types/TypeImage';
import ImageGalleryItem from './ImageGalleryItem';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

import { setLen } from '../redux/imageSliderSlice';

export default function ImageGallery({ images }: { images: TypeImage[] }) {
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		// set the slice length for computation later
		dispatch(setLen(images.length));
	}, [images]);
	return (
		<div
			className='flex flex-row h-full overflow-x-auto snap-x snap-mandatory scroll-smooth'
			id='gallery'
		>
			{images.map((image, i) => (
				<ImageGalleryItem
					key={image.alt}
					image={image}
					currentIndex={i}
					id={`#image-${i}`}
				/>
			))}
		</div>
	);
}
