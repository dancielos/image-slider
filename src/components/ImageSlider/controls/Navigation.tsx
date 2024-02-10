import Image from 'next/image';

import leftIcon from '../icons/chevron-left.svg';
import rightIcon from '../icons/chevron-right.svg';

export default function Navigation({
	direction,
}: {
	direction: 'left' | 'right';
}) {
	return (
		<button className='px-2 hover:bg-slate-800/30 duration-300'>
			<Image
				src={direction === 'left' ? leftIcon : rightIcon}
				alt={`image slider ${direction} nav`}
				className='w-8'
				width={50}
				height={50}
			/>
		</button>
	);
}
