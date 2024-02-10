import ThumbnailItem from './ThumbnailItem';

export default function Thumbnails({ images }: { images: string[] }) {
	return (
		<ul
			className={`flex flex-row gap-2 ${
				images.length < 7 ? 'justify-center' : 'justify-start'
			}`}
		>
			{images.map((image) => (
				<ThumbnailItem key={image} image={image} />
			))}
		</ul>
	);
}
