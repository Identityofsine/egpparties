import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";
import { NavBar } from "../components/Navbar";
import brandSettings from "./brand.settings";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
	title: brandSettings.name,
	description: "Key moments in our lives act as milestones, encapsulating cherished memories that define us.",
	twitter: {
		title: brandSettings.name,
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
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-LYZ0Q6LZJN"
			/>

			<Script id="google-analytics">
				{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', G-LYZ0Q6LZJN);
          `}
			</Script>
		</html>
	);
}
