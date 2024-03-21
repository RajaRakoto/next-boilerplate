import type { Metadata } from "next";
import { Inter } from "next/font/google";

/* types */
import { T_FunctionComponent } from "@/@types";

/* styles */
import "@/styles/tailwind.scss";

// =======================================

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next Boilerplate 🚀",
	description:
		"Minimalistic boilerplate to quick-start Next.js development in TypeScript, optimized for blazing-fast performance Bun & Turbopack 🚀",
	keywords: "next, turbopack, typescript, bun",
	authors: [{ name: "Raja Rakotonirina", url: "" }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): T_FunctionComponent {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
