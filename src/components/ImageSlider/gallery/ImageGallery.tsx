import { ForwardedRef, Ref, forwardRef, useEffect, useRef } from 'react';
import { TypeImage } from '../types/TypeImage';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = forwardRef(function ImageGallery(
	{ images }: { images: TypeImage[] },
	ref: ForwardedRef<HTMLDivElement>
) {
	// console.log(currentIndex);

	useEffect(() => {
		// console.log('2ND useEffect');
		// function scrollTo(id: number) {
		const map = getMap();
		const node = map.get(currentIndex);
		// console.log(node);
		node?.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'center',
		});
		// }
		// 	console.log('2ND` use effect invoked');

		// imagesRef.current[currentIndex].scrollIntoView({ behavior: 'smooth' });
	}, [currentIndex]);

	function getMap() {
		if (!imagesRef.current) {
			imagesRef.current = new Map();
		}
		return imagesRef.current;
	}

	return (
		<div
			className='flex flex-row h-full overflow-x-auto snap-x snap-mandatory scroll-smooth'
			id='gallery'
		>
			{images.map((image, i) => (
				<ImageGalleryItem
					key={image.alt + i}
					image={image}
					currentIndex={i}
					id={`#image-${i}`}
					ref={(node) => {
						const map = getMap();
						if (node) {
							map.set(i, node);
						} else {
							map.delete(i);
						}
					}}
				/>
			))}
		</div>
	);
});

export default ImageGallery;
