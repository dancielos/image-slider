import Image from 'next/image';
import { NavigationAction, TypeImage } from '../types/types';
import ThumbnailLink from './ThumbnailLink';

export default function Thumbnails({
	images,
	handleScroll,
}: {
	images: TypeImage[];
	handleScroll: (action: NavigationAction, index: number) => void;
}) {
	return (
		<ul
			className={`flex flex-row gap-2 ${
				images.length < 7 ? 'justify-center' : 'justify-start'
			}`}
		>
			{images.map((image, i) => (
				<ThumbnailLink handleScroll={handleScroll} key={image.alt + i} i={i}>
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
