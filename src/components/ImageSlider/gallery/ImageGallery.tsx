import { forwardRef } from 'react';
import { TypeImage } from '../types/types';
import ImageGalleryItem from './ImageGalleryItem';

type ChildProps = {
	images: TypeImage[];
	getMap: () => Map<number, HTMLDivElement>;
};

const ImageGallery = forwardRef<Map<number, HTMLDivElement>, ChildProps>(
	function ImageGallery({ images, getMap }, ref) {
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
	}
);

export default ImageGallery;
