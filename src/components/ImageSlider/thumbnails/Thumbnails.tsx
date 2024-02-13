import Image from 'next/image';
import { NavigationAction, TypeImage } from '../types/types';
import ThumbnailLink from './ThumbnailLink';
import { useRef } from 'react';

export default function Thumbnails({
	images,
	handleScroll,
}: {
	images: TypeImage[];
	handleScroll: (action: NavigationAction, index: number) => void;
}) {
	const thumbnailRef = useRef<HTMLUListElement>(null);
	const thumbnailsRef = useRef() as React.MutableRefObject<
		Map<number, HTMLLIElement>
	>;

	async function handleThumbnailScroll(
		action: NavigationAction,
		index: number
	) {
		const map = getMap();
		const node = map.get(index);
		setTimeout(() => {
			node?.scrollIntoView();
		}, 10);

		setTimeout(() => {
			handleScroll(action, index);
		}, 10);
	}

	function getMap() {
		if (!thumbnailsRef.current) {
			thumbnailsRef.current = new Map();
		}
		return thumbnailsRef.current;
	}

	return (
		<ul
			className={`flex flex-row gap-2 overflow-scroll ${
				images.length < 7 ? 'justify-center' : 'justify-start'
			}`}
			ref={thumbnailRef}
		>
			{images.map((image, i) => (
				<ThumbnailLink
					handleScroll={handleThumbnailScroll}
					key={image.alt + i}
					i={i}
					ref={(node) => {
						const map = getMap();
						if (node) {
							map.set(i, node);
						} else {
							map.delete(i);
						}
					}}
				>
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
