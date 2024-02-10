import Image from 'next/image';

export default function ThumbnailItem({ image }: { image: string }) {
	return (
		<li key={image} className='relative h-24 min-w-24'>
			<Image
				src={image}
				alt='dog image'
				fill
				objectFit='cover'
				className='rounded-[1px]'
			/>
		</li>
	);
}
