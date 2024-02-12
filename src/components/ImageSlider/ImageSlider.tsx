'use client';

import './ImageSlider.css';

import { TypeImage } from './types/types';
import { ImageSliderProvider } from './redux/ImageSliderProvider';

import Layout from './Layout';

export default function ImageSlider({ images }: { images: TypeImage[] }) {
	return (
		<ImageSliderProvider>
			<div className='m-4 flex flex-col gap-2'>
				<Layout images={images} />
			</div>
		</ImageSliderProvider>
	);
}
