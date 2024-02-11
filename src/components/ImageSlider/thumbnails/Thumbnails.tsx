import { TypeImage } from '../types/TypeImage';
import ThumbnailItem from './ThumbnailItem';

export default function Thumbnails({ images }: { images: TypeImage[] }) {
	return (
		<ul
			className={`flex flex-row gap-2 ${
				images.length < 7 ? 'justify-center' : 'justify-start'
			}`}
		>
			{images.map((image, i) => (
				<ThumbnailItem key={image.src} image={image} href={`#image-${i}`} />
			))}
		</ul>
	);
}
