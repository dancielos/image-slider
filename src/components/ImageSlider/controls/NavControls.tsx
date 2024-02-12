import Image from 'next/image';

import leftIcon from '../icons/chevron-left.svg';
import rightIcon from '../icons/chevron-right.svg';

import Navigation from './Navigation';

export default function NavControls({
	handleScroll,
}: {
	handleScroll: (action: 'prev' | 'next' | 'jump', index: number) => void;
}) {
	return (
		<div className='flex justify-between h-full'>
			<Navigation direction='prev' handleScroll={handleScroll}>
				<Image
					src={leftIcon}
					alt={`image slider left nav`}
					className='w-8'
					width={50}
					height={50}
				/>
			</Navigation>
			<Navigation direction='next' handleScroll={handleScroll}>
				<Image
					src={rightIcon}
					alt={`image slider right nav`}
					className='w-8'
					width={50}
					height={50}
				/>
			</Navigation>
		</div>
	);
}
