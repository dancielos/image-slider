import { ReactNode } from 'react';

export default function DefaultContainer({
	children,
}: {
	children: ReactNode;
}) {
	return <div className='m-4 flex flex-col gap-2'>{children}</div>;
}
