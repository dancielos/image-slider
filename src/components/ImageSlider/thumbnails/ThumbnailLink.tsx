import { ReactNode, forwardRef } from 'react';
import { NavigationAction } from '../types/types';
// import { jumpTo } from '../redux/imageSliderSlice';

type ChildProps = {
	i: number;
	children: ReactNode;
	handleScroll: (action: NavigationAction, index: number) => void;
};
const ThumbnailLink = forwardRef<HTMLLIElement, ChildProps>(
	function ThumbnailLink(
		{
			// image,
			children,
			// href,
			handleScroll,
			i,
		},
		ref
	) {
		function handleThumbnailClick(index: number, ref: HTMLLIElement) {
			handleScroll('jump', index);
		}

		return (
			// <li
			// 	className={`relative h-24 min-w-24 duration-300 ${
			// 		currentIndex === i && 'scale-115'
			// 	}`}
			// >
			<li className={`relative h-24 min-w-24 duration-300`} ref={ref}>
				<button
					// href={href}
					className='block relative h-full w-full'
					onClick={() => handleThumbnailClick(i, ref)}
				>
					{children}
				</button>
			</li>
		);
	}
);
export default ThumbnailLink;
