import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../redux/store';
import { NavigationAction } from '../types/types';
// import { goToNext, goToPrev } from '../redux/imageSliderSlice';

export default function Navigation({
	direction,
	children,
	handleScroll,
}: {
	direction: NavigationAction;
	children: ReactNode;
	handleScroll: (action: 'prev' | 'next' | 'jump', index: number) => void;
}) {
	const currentIndex = useAppSelector(
		(state) => state.imageSliderReducer.currentIndex
	);
	// const dispatch = useDispatch<AppDispatch>();
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
