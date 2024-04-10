import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";
import { NavBar } from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Exquisite Gallery Photography",
	description: "Key moments in our lives act as milestones, encapsulating cherished memories that define us.",
	twitter: {
		title: "Exquisite Gallery Photography",
	}
};

const DynamicNavbar = dynamic(() => import("../components/Navbar").then((module) => module.NavBar), {
	loading: () => <p>Loading...</p>,
});

const DynamicFooter = dynamic(() => import("../components/Footer").then((module) => module.Footer), {
	loading: () => <p>Loading...</p>,
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<DynamicNavbar />
				{children}
				<DynamicFooter />
			</body>
		</html>
	);
}
