import Image from 'next/image';
import './ImageSlider.css';

import ImageIndex from './ImageIndex';
import FullscreenButton from './controls/FullscreenButton';
import Thumbnails from './thumbnails/Thumbnails';
import NavControls from './controls/NavControls';

const images = [
	'https://image-slider-sample.s3.ca-central-1.amazonaws.com/golden-retriever-puppies-1280-720px.jpg',
	'https://image-slider-sample.s3.ca-central-1.amazonaws.com/border-collie-854x623px.jpg',
	'https://image-slider-sample.s3.ca-central-1.amazonaws.com/cheddar-1920-1080px.jpg',
	'https://image-slider-sample.s3.ca-central-1.amazonaws.com/hachiko-1366-768px.jpg',
	'https://image-slider-sample.s3.ca-central-1.amazonaws.com/husky-1000-1500px.jpg',
	'https://image-slider-sample.s3.ca-central-1.amazonaws.com/squishy-dog-700-668px.jpg',
	'https://image-slider-sample.s3.ca-central-1.amazonaws.com/stella-1600-900px.jpg',
];

export default function ImageSlider() {
	return (
		<div className='p-4 flex flex-col gap-2'>
			<div className='container relative h-[360px] overflow-hidden'>
				<Image
					src={images[0]}
					alt='dog image'
					fill
					objectFit='cover'
					className='rounded-[1px]'
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