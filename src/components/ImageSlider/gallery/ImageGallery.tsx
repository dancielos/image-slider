import { TypeImage } from '../types/types';
import ImageGalleryItem from './ImageGalleryItem';
import { useAppSelector } from '../redux/store';

// type ChildProps = {
// 	images: TypeImage[];
// 	// getMap: () => Map<number, HTMLDivElement>;
// };

export default function ImageGallery({ images }: { images: TypeImage[] }) {
	const currentIndex = useAppSelector(
		(state) => state.imageSliderReducer.currentIndex
	);

	return (
		<div className='flex flex-row h-full overflow-x-auto ' id='gallery'>
			{images.map((image, i) => (
				<ImageGalleryItem
					key={image.alt + i}
					image={image}
					// currentIndex={i}
					id={`#image-${i}`}
					// className=''
					className={currentIndex === i ? 'test' : 'hidden'}
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
