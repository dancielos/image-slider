import Image from 'next/image';
import { TypeImage } from '../types/types';
import { ForwardedRef, Ref, forwardRef } from 'react';

export default function ImageGalleryItem({
	image,
	// currentIndex,
	id,
	className,
}: {
	image: TypeImage;
	// currentIndex: number;
	id: string;
	className: string;
}) {
	return (
		<>
			<div
				className={`relative w-full flex-shrink-0 overflow-hidden snap-start origin-center ${className}`}
				id={id}
				// ref={ref}
			>
				<Image
					src={image.src}
					alt={`${image.alt} blur`}
					// width={720}
					// // height={360}
					fill
					sizes='(min-width: 0px) 10vw'
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
					sizes='(min-width: 0px) 100vw'
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
