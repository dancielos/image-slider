'use client';

import Layout from './Layout';
import { ImageSliderProvider } from './redux/ImageSliderProvider';
import { TypeImage } from './types/types';

export default function ImageSlider({ images }: { images: TypeImage[] }) {
	return (
		<ImageSliderProvider>
			<div className='m-4 flex flex-col gap-2'>
				<Layout images={images} />
			</div>
		</ImageSliderProvider>
	);
}
