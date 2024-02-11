'use client';

import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { jumpTo } from '../redux/imageSliderSlice';

export default function ThumbnailLink({
	// image,
	children,
	// href,
	i,
}: {
	// image: TypeImage;
	i: number;
	children: ReactNode;
	// href: Url;
}) {
	const dispatch = useDispatch<AppDispatch>();
	function handleThumbnailClick(index: number) {
		dispatch(jumpTo(index));
	}

	return (
		<button
			// href={href}
			className='block relative h-full w-full'
			onClick={() => handleThumbnailClick(i)}
		>
			{children}
		</button>
	);
}
