import { TypeImage } from '../types/types';
import ImageGalleryItem from './ImageGalleryItem';
import { useAppSelector } from '../redux/store';

// type ChildProps = {
// 	images: TypeImage[];
// 	// getMap: () => Map<number, HTMLDivElement>;
// };

import styles from './ImageGallery.module.css';

export default function ImageGallery({ images }: { images: TypeImage[] }) {
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
					// currentIndex={i}
					id={`#image-${i}`}
					// className=''
					// className={`${
					// 	currentIndex === i
					// 		? 'translate-x-0 visible'
					// 		: from === 'right'
					// 		? 'translate-x-[-200%] invisible'
					// 		: 'translate-x-[200%] invisible'
					// } duration-300`}
					className={`${
						currentIndex === i
							? direction === 'ltr'
								? styles['left-to-right']
								: styles['right-to-left']
							: 'invisible'
					} `}
					// ref={(node) => {
					// 	const map = getMap();
					// 	if (node) {
					// 		map.set(i, node);
					// 	} else {
					// 		map.delete(i);
					// 	}
					// }}
				/>
			))}
		</div>
	);
}
