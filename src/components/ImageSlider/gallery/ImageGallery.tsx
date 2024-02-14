import { TypeImage } from '../types/types';
import ImageGalleryItem from './ImageGalleryItem';
import { useAppSelector } from '../redux/store';

import styles from './ImageGallery.module.css';

export default function ImageGallery({ fullscreen }: { fullscreen?: boolean }) {
	const currentIndex = useAppSelector(
		(state) => state.imageSliderReducer.currentIndex
	);
	const direction = useAppSelector(
		(state) => state.imageSliderReducer.direction
	);
	const images = useAppSelector((state) => state.imageSliderReducer.images);

	return (
		<div className=' relative h-full w-full' id='gallery'>
			{images.map((image, i) => (
				<ImageGalleryItem
					key={image.alt + i}
					image={image}
					id={`#image-${i}`}
					fullscreen={fullscreen}
					className={`${
						currentIndex === i
							? direction === 'ltr'
								? styles['left-to-right']
								: styles['right-to-left']
							: 'invisible'
					} `}
				/>
			))}
		</div>
	);
}
