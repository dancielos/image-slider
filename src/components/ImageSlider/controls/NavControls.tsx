import Image from 'next/image';

import leftIcon from '../icons/chevron-left.svg';
import rightIcon from '../icons/chevron-right.svg';

import Navigation from './Navigation';
import { NavigationAction } from '../types/types';

type ChildProps = {
	handleScroll: (action: NavigationAction, index: number) => void;
};

export default function NavControls({ handleScroll }: ChildProps) {
	return (
		<div className='absolute top-1/2 transform -translate-y-1/2 w-full z-20 h-full'>
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
		</div>
	);
}
