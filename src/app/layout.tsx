import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const alexandria = Alexandria({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "7br store",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={alexandria.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
