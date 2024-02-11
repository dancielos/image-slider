import Image from 'next/image';
import { TypeImage } from '../types/TypeImage';
import ThumbnailLink from './ThumbnailLink';

export default function Thumbnails({ images }: { images: TypeImage[] }) {
	return (
		<ul
			className={`flex flex-row gap-2 ${
				images.length < 7 ? 'justify-center' : 'justify-start'
			}`}
		>
			{images.map((image, i) => (
				<ThumbnailLink key={image.alt + i} i={i}>
					<Image
						src={image.src}
						alt={image.alt}
						style={{
							objectFit: 'cover',
						}}
						quality={30}
						className='rounded-[1px]'
						fill
						sizes='(min-width: 0px) 25vw'
					/>
				</ThumbnailLink>
			))}
		</ul>
	);
}
