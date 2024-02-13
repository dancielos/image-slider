import Image from 'next/image';
import { NavigationAction, TypeImage } from '../types/types';
import ThumbnailLink from './ThumbnailLink';
import { RefObject, forwardRef, useRef } from 'react';

type ChildProps = {
	images: TypeImage[];
	handleScroll: (action: NavigationAction, index: number) => void;
	getMap: () => Map<number, HTMLLIElement>;
};

const Thumbnails = forwardRef<Map<number, HTMLLIElement>, ChildProps>(
	function Thumbnails({ images, handleScroll, getMap }, ref) {
		return (
			<ul
				className={`flex flex-row gap-2 overflow-scroll ${
					images.length < 7 ? 'justify-center' : 'justify-start'
				}`}
			>
				{images.map((image, i) => (
					<ThumbnailLink
						handleScroll={handleScroll}
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
);

export default Thumbnails;
