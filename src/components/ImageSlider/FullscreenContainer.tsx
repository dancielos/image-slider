import { ReactNode, forwardRef } from 'react';

type ChildProps = {
	children: ReactNode;
	hideFullScreen: () => void;
};

const FullscreenContainer = forwardRef<HTMLDialogElement, ChildProps>(
	function FullscreenContainer({ children, hideFullScreen }, ref) {
		return (
			<dialog ref={ref} className='w-screen h-screen'>
				{children}
				<button onClick={hideFullScreen}>Close</button>
			</dialog>
		);
	}
);

export default FullscreenContainer;
