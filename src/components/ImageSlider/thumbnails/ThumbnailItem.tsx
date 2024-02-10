import Image from 'next/image';

export default function ThumbnailItem({ image }: { image: string }) {
	return (
		<li key={image} className='relative h-24 min-w-24'>
			<Image
				src={image}
				alt='dog image'
				style={{
					objectFit: 'cover',
				}}
				quality={30}
				className='rounded-[1px]'
				fill
				sizes='25vw'
			/>
		</li>
	);
}
