import Image from 'next/image';
import fullScreenIcon from '../icons/fullscreen.svg';

export default function FullscreenButton({
	onToggleFullScreen,
}: {
	onToggleFullScreen: () => void;
}) {
	function handleButtonClick() {
		onToggleFullScreen();
	}

	return (
		<button
			className='relative z-30 bg-slate-950/50 p-2 rounded-[1px] hidden sm:block'
			onClick={handleButtonClick}
		>
			<Image
				src={fullScreenIcon}
				alt='enter full screen'
				className='w-4 fill-white'
				width={24}
				height={24}
			/>
		</button>
	);
}
