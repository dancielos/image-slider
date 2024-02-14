import ImageIndex from '../ImageIndex';
import { useAppSelector } from '../redux/store';
import { NavigationAction } from '../types/types';
import FullscreenButton from './FullscreenButton';
import NavControls from './NavControls';

type ChildProps = {
	handleFullscreen: (action: 'open' | 'close') => void;
	handleScroll: (action: NavigationAction, index: number) => void;
};

export default function Controls({
	handleScroll,
	handleFullscreen,
}: ChildProps) {
	const currentIndex = useAppSelector(
		(state) => state.imageSliderReducer.currentIndex
	);
	const len = useAppSelector((state) => state.imageSliderReducer.len);

	return (
		<>
			<div className='absolute top-0 w-full'>
				<div className='flex justify-between p-3 items-start'>
					<ImageIndex currentIndex={currentIndex} len={len} />
					<FullscreenButton onToggleFullScreen={handleFullscreen} />
				</div>
			</div>
			<NavControls handleScroll={handleScroll} />
		</>
	);
}
