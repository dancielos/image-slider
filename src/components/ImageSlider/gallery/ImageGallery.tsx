import { TypeImage } from '../types/types';
import ImageGalleryItem from './ImageGalleryItem';
import { useAppSelector } from '../redux/store';

type ChildProps = {
	images: TypeImage[];
};

import styles from './ImageGallery.module.css';

export default function ImageGallery({ images }: ChildProps) {
	const currentIndex = useAppSelector(
		(state) => state.imageSliderReducer.currentIndex
	);
	const direction = useAppSelector(
		(state) => state.imageSliderReducer.direction
	);

	return (
		<div className=' relative h-full w-full' id='gallery'>
			{images.map((image, i) => (
				<ImageGalleryItem
					key={image.alt + i}
					image={image}
					id={`#image-${i}`}
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
