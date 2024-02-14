import { ReactNode, useRef } from 'react';

export default function FullscreenContainer({
	children,
}: {
	children: ReactNode;
}) {
	const dialogRef = useRef<HTMLDialogElement>(null);

	function showFullscreen() {
		dialogRef.current?.showModal();
	}

	function hideFullScreen() {
		dialogRef.current?.close();
	}

	return (
		<dialog ref={dialogRef} className='w-screen h-screen'>
			{children}
			<button onClick={hideFullScreen}>Close</button>
		</dialog>
	);
}
