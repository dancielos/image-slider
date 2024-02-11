import Image from 'next/image';
import './ImageSlider.css';

import ImageIndex from './ImageIndex';
import FullscreenButton from './controls/FullscreenButton';
import Thumbnails from './thumbnails/Thumbnails';
import NavControls from './controls/NavControls';
import { TypeImage } from './types/TypeImage';
import ImageGallery from './gallery/ImageGallery';

export default function ImageSlider({ images }: { images: TypeImage[] }) {
	return (
		<div className='m-4 flex flex-col gap-2'>
			<div className='container relative h-[360px] w-full overflow-hidden'>
				<ImageGallery images={images} />
				{/* <div className='flex justify-between p-3 items-start'>
					<ImageIndex />
					<FullscreenButton />
				</div> */}
				<div className='absolute top-1/2 transform -translate-y-1/2 w-full z-20 h-full'>
					<NavControls />
				</div>
			</div>
			<div className='container relative h-1/4 overflow-scroll'>
				<Thumbnails images={images} />
			</div>
		</div>
	);
}
