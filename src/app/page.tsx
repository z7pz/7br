import Ripple from "@/components/magicui/ripple";
function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
	await sleep(5000);
	return (
		<div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background">
			<p className="z-10 whitespace-pre-wrap max-w-[620px] leading-normal text-center text-5xl font-medium tracking-tighter text-primary">
				نراكم قريباً مع نسخة افضل لخادمكم المفضل حبر
			</p>
			<Ripple />
		</div>
	);
}
