import Ripple from "@/components/magicui/ripple";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { MountainIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

import Image from "next/image";
import Link from "next/link";
function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
	// await sleep(5000);
	return (
		<>
			<video
				className="w-screen h-screen object-cover fixed left-0 right-0 top-0 bottom-0 z-[-1] opacity-50"
				autoPlay
				loop
				muted
			>
				<source
					src="https://static.vecteezy.com/system/resources/previews/009/167/361/mp4/summer-concept-the-motion-of-leaves-sunlight-natural-shadow-overlay-on-white-texture-background-for-overlay-on-product-presentation-free-video.mp4"
					type="video/mp4"
				/>
			</video>
			<Header />
			<div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
				<p className="z-10 whitespace-pre-wrap max-w-[620px] leading-normal text-center text-5xl font-medium tracking-tighter text-primary">
					نراكم قريباً مع نسخة افضل لخادمكم المفضل حبر
				</p>
				<Ripple />
			</div>
			<Partners />
			{/* <div className="bg-primary/80 rounded-3xl py-40">
				<Course />
			</div> */}
		</>
	);
}

function Course() {
	// create video with two buttons
	return (
		<div className="container flex flex-col items-center relative py-32">
			<div className="relative">
				<video
					className="aspect-video w-[700px] m-24 "
					autoPlay={true}
					loop
					muted
				>
					<source src="/7br-course.mp4" type="video/mp4" />
				</video>
				<img
					src="/logo-no-bg.png"
					className="h-[400px] absolute -top-32 -right-60 opacity-50 -z-10"
					alt={""}
				/>
			</div>
			<div className="w-[120vw] h-[100%] -top-[0] rotate-3 bg-primary-foreground -z-20 absolute"></div>
		</div>
	);
}

const partners = [
	{
		icon: "/partners/IQ.png",
		name: "IQ Mafia",
		members: "27K",
	},
	{
		icon: "/partners/aros.png",
		name: "Aros Service",
		members: "3.5K",
	},

	{
		icon: "/partners/luna.png",
		name: "Luna Bot",
		members: "1.3M",
		label: "خادم",
	},
	{
		icon: "/partners/7br.png",
		name: "حبر",
		members: "2K",
	},
	{
		icon: "https://cdn.discordapp.com/avatars/1227001362831769652/1208f16c2a977f586eb19195b7607ed9.png?size=1024",
		name: "Kasper Maker",
		members: "1K",
	},
];

function Partners() {
	return (
		<div className="flex flex-col items-center gap-1 mb-10">
			<div className="flex text-center flex-col gap-1 mt-12">
				<div className="text-primary font-bold scroll-m-20 leading-7 tracking-tight">
					الشركاء
				</div>
				<div className="scroll-m-20 text-2xl font-bold tracking-tight">
					علاقة تعاونية
				</div>
				<div className="leading-7 font-bold opacity-60">
					متعاون في مجال الأعمال أو المهنة
				</div>
			</div>

			<div className="max-w-[1000px] relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">

				<Marquee className="[--duration:30s] mt-10">
					{partners.map((server, i) => (
						<ServerCard server={server} />
					))}
				</Marquee>
			</div>
		</div>
	);
}

function ServerCard({ server }: { server: (typeof partners)[number] }) {
	return (
		<TooltipProvider>
			<Tooltip>
				<div className="pb-8">
					<TooltipTrigger>
						<div className="flex gap-4 min-w-fit cursor-pointer hover:bg-accent rounded-sm px-3 py-1.5 w-64">
							<img
								className="inline-block h-10 rounded-sm ring-2 ring-secondary bg-secondary"
								src={server.icon}
								alt="Image Description"
							/>
							<div>
								<div className="text-sm flex font-semibold">
									{server.name}
								</div>
								<div className="text-sm text-gray-500">
									<span className="font-bold">{server.members}</span> {server.label || "عضو"}
								</div>
							</div>
						</div>
					</TooltipTrigger>

					<TooltipContent className="" side="bottom">
						<strong>{server.members}</strong> {server.label || "عضو"}
					</TooltipContent>
				</div>
			</Tooltip>
		</TooltipProvider>
	);
}

export function Header() {
	return (
		<header className="fixed top-0 z-50 w-full backdrop-blur-lg bg-black/05">
			<div className="container flex h-16 items-center justify-between">
				<Link href="#" className="flex items-center" prefetch={false}>
					<img src="/logo-no-bg.png" className="h-12" alt={""} />
					<span className="sr-only">Acme Inc</span>
				</Link>
				<nav className="hidden md:flex items-center gap-6">
					<Link
						href="#"
						className="text-sm font-medium hover:underline hover:underline-offset-4"
						prefetch={false}
					>
						الرئيسية{" "}
					</Link>
					<Link
						href="#"
						className="text-sm font-medium hover:underline hover:underline-offset-4"
						prefetch={false}
					>
						الاسعار
					</Link>
					<Link
						href="#"
						className="text-sm font-medium hover:underline hover:underline-offset-4"
						prefetch={false}
					>
						معلومات
					</Link>
					<Link
						href="#"
						className="text-sm font-medium hover:underline hover:underline-offset-4"
						prefetch={false}
					>
						تواصل
					</Link>
				</nav>
				<Link
					href="#"
					className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
					prefetch={false}
				>
					ابدأ الان
				</Link>
			</div>
		</header>
	);
}
