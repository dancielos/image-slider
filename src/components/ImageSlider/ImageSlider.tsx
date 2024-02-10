import Image from 'next/image';
import './ImageSlider.css';

import leftIcon from './icons/chevron-left.svg';
import rightIcon from './icons/chevron-right.svg';
import fullScreenIcon from './icons/fullscreen.svg';

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
		<div className='p-4'>
			<div className='container relative mb-2 h-[360px]'>
				<div className='container absolute h-full w-11/12 z-10 mx-auto left-1/2 transform -translate-x-1/2'>
					<Image
						src={images[0]}
						alt='dog image'
						fill
						objectFit='cover'
						className='rounded-[1px]'
					/>
					<div className='flex justify-between p-3'>
						<span className='relative z-30 py-1 px-2 rounded-[1px] bg-slate-950/50 text-white text-sm'>
							1 / 6
						</span>
						<button className='relative z-30 bg-slate-950/50 px-2 py-1 rounded-[1px]'>
							<Image
								src={fullScreenIcon}
								alt='enter full screen'
								className='w-4 fill-white'
								width={24}
								height={24}
							/>
						</button>
					</div>
				</div>

				<div className='absolute top-1/2 left-0 transform -translate-y-1/2 w-full z-20'>
					<div className='flex justify-between'>
						<button className='bg-gray-100 p-1 py-2 shadow-sm rounded-[1px]'>
							<Image
								src={leftIcon}
								alt='image slider left nav'
								className='w-8'
								width={50}
								height={50}
							/>
						</button>
						<button className='bg-gray-100 p-1 py-2 shadow-sm rounded-[1px]'>
							<Image
								src={rightIcon}
								alt='image slider right nav'
								className='w-8'
								width={50}
								height={50}
							/>
						</button>
					</div>
				</div>
			</div>
			<div className='container relative h-1/4 '>
				<ul className='flex flex-row gap-2'>
					{images.map((image) => (
						<li key={image} className='relative h-24 w-24'>
							<Image
								src={image}
								alt='dog image'
								fill
								objectFit='cover'
								className='rounded-[1px]'
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
