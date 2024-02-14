import { ReactNode } from 'react';
import { useAppSelector } from '../redux/store';
import { NavigationAction } from '../types/types';

type ChildProps = {
	direction: NavigationAction;
	children: ReactNode;
	handleScroll: (action: NavigationAction, index: number) => void;
};

export default function Navigation({
	direction,
	children,
	handleScroll,
}: ChildProps) {
	const currentIndex = useAppSelector(
		(state) => state.imageSliderReducer.currentIndex
	);
	function handleNavClick(directionParam: NavigationAction) {
		handleScroll(directionParam, currentIndex);
	}

	return (
		<button
			className='px-2 hover:bg-slate-800/30 duration-300'
			onClick={() => handleNavClick(direction)}
		>
			{children}
		</button>
	);
}
