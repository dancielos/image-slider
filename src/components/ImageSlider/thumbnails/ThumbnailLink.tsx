import { ReactNode } from 'react';
import { NavigationAction } from '../types/types';
// import { jumpTo } from '../redux/imageSliderSlice';

export default function ThumbnailLink({
	// image,
	children,
	// href,
	handleScroll,
	i,
}: {
	i: number;
	children: ReactNode;
	handleScroll: (action: NavigationAction, index: number) => void;
}) {
	function handleThumbnailClick(index: number) {
		handleScroll('jump', index);
	}

	return (
		// <li
		// 	className={`relative h-24 min-w-24 duration-300 ${
		// 		currentIndex === i && 'scale-115'
		// 	}`}
		// >
		<li className={`relative h-24 min-w-24 duration-300`}>
			<button
				// href={href}
				className='block relative h-full w-full'
				onClick={() => handleThumbnailClick(i)}
			>
				{children}
			</button>
		</li>
	);
}
