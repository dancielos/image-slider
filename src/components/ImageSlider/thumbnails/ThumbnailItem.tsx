'use client';

import Image from 'next/image';
import { TypeImage } from '../types/TypeImage';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

export default function ThumbnailItem({
	image,
	href,
}: {
	image: TypeImage;
	href: Url;
}) {
	function handleThumbnailClick(href: Url) {
		const el = document.getElementById(String(href));

		el?.scrollIntoView();
	}

	return (
		<li className='relative h-24 min-w-24'>
			<Link
				href={href}
				className='block relative h-full w-full'
				scroll={false}
				onClick={() => handleThumbnailClick(href)}
			>
				<Image
					src={image.src}
					alt={image.alt}
					style={{
						objectFit: 'cover',
					}}
					quality={30}
					className='rounded-[1px]'
					fill
					sizes='25vw'
				/>
			</Link>
		</li>
	);
}
