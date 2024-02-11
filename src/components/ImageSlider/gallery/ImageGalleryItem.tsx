import Image from 'next/image';
import { TypeImage } from '../types/TypeImage';

export default function ImageGalleryItem({ image }: { image: TypeImage }) {
	return (
		<>
			<div className='relative w-full flex-shrink-0 overflow-hidden'>
				<Image
					src={image.src}
					alt={`${image.alt} blur`}
					// width={720}
					// // height={360}
					fill
					sizes='10vw'
					quality={1}
					style={{
						objectFit: 'cover',
						overflow: 'hidden',
					}}
					className='rounded-[1px] blur-sm brightness-75'
					priority
				/>
				<Image
					src={image.src}
					alt={image.alt}
					// width={720}
					// height={360}
					fill
					sizes='100vw'
					style={{
						objectFit: 'contain',
						// objectPosition: 'center',
					}}
					className='rounded-[1px]'
					priority
				/>
			</div>
		</>
	);
}
