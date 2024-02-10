import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function Home() {
	return (
		<>
			<h1
				style={{
					fontSize: '1.6rem',
					textAlign: 'center',
				}}
			>
				A sample image slider
			</h1>
			<main
				style={{
					width: '720px',
					// height: '480px',
					// backgroundColor: '#e5dbff',
					margin: '72px auto',
				}}
			>
				<ImageSlider />
			</main>
		</>
	);
}
