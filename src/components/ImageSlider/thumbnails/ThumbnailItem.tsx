import Image from 'next/image';
import { TypeImage } from '../types/TypeImage';

export default function ThumbnailItem({ image }: { image: TypeImage }) {
	return (
		<li key={image.src} className='relative h-24 min-w-24'>
			<Image
				src={image.src}
				alt={image.alt}
				style={{
					objectFit: 'cover',
				}}
				quality={30}
				className='rounded-[1px]'
				fill
				sizes='25vw'
			/>
		</li>
	);
}
