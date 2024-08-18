import "./globals.css"

export default function Loading() {
	return (
		<div className="flex justify-center items-center h-screen w-screen">
			<div className="select-none image-container relative overflow-hidden">
			<img
				width={500}
				className="object-cover select-none pointer-events-none"
				src="/loading.gif"
			/>
			</div>
		</div>
	);
}
