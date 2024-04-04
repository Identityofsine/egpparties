import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { NavBar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Exquisite Gallery Photography",
	description: "Key moments in our lives act as milestones, encapsulating cherished memories that define us.",
	twitter: {
		title: "Exquisite Gallery Photography",
		description: "Key moments in our lives act as milestones, encapsulating cherished memories that define us.",
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
