import { TypeImage } from '../types/TypeImage';
import ImageGalleryItem from './ImageGalleryItem';

export default function ImageGallery({ images }: { images: TypeImage[] }) {
	return (
		<div className='flex flex-row absolute'>
			{images.map((image) => (
				<ImageGalleryItem key={image.alt} image={image} />
			))}
		</div>
	);
}
