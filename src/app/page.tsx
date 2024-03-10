import ImageSlider from '@/components/ImageSlider/ImageSlider';

const images = [
	{
		src: 'https://image-slider-sample.s3.ca-central-1.amazonaws.com/golden-retriever-puppies-1280-720px.jpg',
		alt: 'Golden Retriever Puppies',
	},
	{
		src: 'https://image-slider-sample.s3.ca-central-1.amazonaws.com/border-collie-854x623px.jpg',
		alt: 'Border Collie',
	},
	{
		src: 'https://image-slider-sample.s3.ca-central-1.amazonaws.com/cheddar-1920-1080px.jpg',
		alt: 'Cheddar the Dog',
	},
	{
		src: 'https://image-slider-sample.s3.ca-central-1.amazonaws.com/hachiko-1366-768px.jpg',
		alt: 'Hachiko lookalike',
	},
	{
		src: 'https://image-slider-sample.s3.ca-central-1.amazonaws.com/husky-1000-1500px.jpg',
		alt: 'Husky Dog',
	},
	{
		src: 'https://image-slider-sample.s3.ca-central-1.amazonaws.com/squishy-dog-700-668px.jpg',
		alt: 'Adorable Squishy Dog',
	},
	{
		src: 'https://image-slider-sample.s3.ca-central-1.amazonaws.com/stella-1600-900px.jpg',
		alt: 'Stella the Dog',
	},
	{
		src: 'https://image-slider-sample.s3.ca-central-1.amazonaws.com/hachiko-1366-768px.jpg',
		alt: 'Hachiko lookalike',
	},
];

export default function Home() {
	return (
		<>
			<main
				style={{
					width: '720px',
					// height: '480px',
					// backgroundColor: '#000',
					margin: '72px auto',
				}}
			>
				<h1
					style={{
						fontSize: '2.8rem',
						fontWeight: '700',
						textAlign: 'center',
						color: '#66fcf1',
					}}
				>
					Image Slider by Dan
				</h1>
				<ImageSlider images={images} />
			</main>
		</>
	);
}
