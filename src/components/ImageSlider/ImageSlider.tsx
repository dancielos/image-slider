import Image from 'next/image';
import './ImageSlider.css';

import ImageIndex from './ImageIndex';
import FullscreenButton from './controls/FullscreenButton';
import Thumbnails from './thumbnails/Thumbnails';
import NavControls from './controls/NavControls';
import { TypeImage } from './types/TypeImage';

export default function ImageSlider({ images }: { images: TypeImage[] }) {
	return (
		<div className='p-4 flex flex-col gap-2'>
			<div className='container relative h-[360px] overflow-hidden'>
				<Image
					src={images[0].src}
					alt={images[0].alt}
					width={720}
					height={360}
					// fill
					// sizes='(max-width: 600px) 100%'
					style={{
						objectFit: 'cover',
					}}
					className='rounded-[1px]'
					priority
				/>
				<div className='flex justify-between p-3 items-start'>
					<ImageIndex />
					<FullscreenButton />
				</div>
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
