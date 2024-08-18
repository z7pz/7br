import "./globals.css"

export default function Loading() {
	return (
		<div className="flex justify-center items-center h-screen w-screen">
			<div className="image-container relative overflow-hidden">
			<img
				width={500}
				className="object-cover pointer-events-none"
				src="/loading.gif"
			/>
			</div>
		</div>
	);
}
