import Image from 'next/image';
import { TypeImage } from '../types/TypeImage';

export default function ImageGalleryItem({ image }: { image: TypeImage }) {
	return (
		<div className='min-w-full'>
			<Image
				src={image.src}
				alt={image.alt}
				width={720}
				height={360}
				// fill
				// sizes='(max-width: 600px) 100%'
				style={{
					objectFit: 'cover',
					objectPosition: 'center',
				}}
				className='rounded-[1px]'
				priority
			/>
		</div>
	);
}
