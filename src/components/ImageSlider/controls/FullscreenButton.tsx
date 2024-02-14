import Image from 'next/image';
import fullScreenIcon from '../icons/fullscreen.svg';
import exitFullscreenIcon from '../icons/exitFullscreenIcon.svg';

type ChildProps = {
	onToggleFullScreen: (action: 'open' | 'close') => void;
	isFullscreen?: boolean;
};

export default function FullscreenButton({
	onToggleFullScreen,
	isFullscreen = false,
}: ChildProps) {
	function handleButtonClick() {
		onToggleFullScreen('open');
	}

	return (
		<button
			className='relative z-30 bg-slate-950/50 p-2 rounded-[1px] hidden sm:block'
			onClick={handleButtonClick}
		>
			{isFullscreen ? (
				<Image
					src={exitFullscreenIcon}
					alt='escape full screen'
					className='w-4 fill-white'
					width={36}
					height={36}
				/>
			) : (
				<Image
					src={fullScreenIcon}
					alt='enter full screen'
					className='w-4 fill-white'
					width={24}
					height={24}
				/>
			)}
		</button>
	);
}
