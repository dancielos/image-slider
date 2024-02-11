import { TypeImage } from '../types/TypeImage';
import ImageGalleryItem from './ImageGalleryItem';

export default function ImageGallery({ images }: { images: TypeImage[] }) {
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
