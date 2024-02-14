import { ReactNode, forwardRef } from 'react';

import styles from './FullscreenContainer.module.css';

type ChildProps = {
	children: ReactNode;
};

const FullscreenContainer = forwardRef<HTMLDialogElement, ChildProps>(
	function FullscreenContainer({ children }, ref) {
		return (
			<dialog
				className={`w-screen h-screen backdrop:bg-gray-50 ${styles['dialog']}`}
				ref={ref}
			>
				{children}
			</dialog>
		);
	}
);

export default FullscreenContainer;
