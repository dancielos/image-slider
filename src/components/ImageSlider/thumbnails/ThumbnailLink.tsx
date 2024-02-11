import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../redux/store';
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
	// const currentIndex = useAppSelector(
	// 	(state) => state.imageSliderReducer.currentIndex
	// );

	function handleThumbnailClick(index: number) {
		dispatch(jumpTo(index));
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
