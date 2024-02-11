'use client';

import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../redux/store';
import { goToNext, goToPrev } from '../redux/imageSliderSlice';

type Direction = 'left' | 'right';

export default function Navigation({
	direction,
	children,
}: {
	direction: Direction;
	children: ReactNode;
}) {
	const dispatch = useDispatch<AppDispatch>();
	function handleNavClick(directionParam: Direction) {
		if (directionParam === 'left') {
			dispatch(goToPrev());
		} else dispatch(goToNext());
		// console.log({ currentIndex });
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
