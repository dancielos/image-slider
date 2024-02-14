export default function ImageIndex({
	currentIndex,
	len,
}: {
	currentIndex: number;
	len: number;
}) {
	return (
		<span className='relative z-30 py-1 px-2 rounded-[1px] bg-slate-950/50 text-white text-xs'>
			{+currentIndex + 1} / {len}
		</span>
	);
}
