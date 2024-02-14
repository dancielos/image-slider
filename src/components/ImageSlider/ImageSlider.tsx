'use client';

import Layout from './Layout';
import { ImageSliderProvider } from './redux/ImageSliderProvider';
import { TypeImage } from './types/types';

export default function ImageSlider({ images }: { images: TypeImage[] }) {
	return (
		<ImageSliderProvider>
			<Layout images={images} />
		</ImageSliderProvider>
	);
}
