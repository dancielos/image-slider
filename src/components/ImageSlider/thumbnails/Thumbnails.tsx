import Image from 'next/image';
import { NavigationAction, TypeImage } from '../types/types';
import ThumbnailLink from './ThumbnailLink';
import { forwardRef } from 'react';
import { useAppSelector } from '../redux/store';

type ChildProps = {
	handleScroll: (action: NavigationAction, index: number) => void;
	getMap: () => Map<number, HTMLLIElement>;
};

const Thumbnails = forwardRef<Map<number, HTMLLIElement>, ChildProps>(
	function Thumbnails({ handleScroll, getMap }, ref) {
		const images = useAppSelector((state) => state.imageSliderReducer.images);

		return (
			<div className='container relative h-1/4 overflow-scroll'>
				<ul
					className={`py-1 flex flex-row gap-2 overflow-scroll ${
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
									// TODO:
									// why should it be deleted?
									// this is the code from react.dev btw
									// https://react.dev/learn/manipulating-the-dom-with-refs#how-to-manage-a-list-of-refs-using-a-ref-callback
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
			</div>
		);
	}
);

export default Thumbnails;
