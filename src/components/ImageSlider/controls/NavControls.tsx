import Navigation from './Navigation';

export default function NavControls() {
	return (
		<div className='flex justify-between h-full'>
			<Navigation direction='left' />
			<Navigation direction='right' />
		</div>
	);
}
