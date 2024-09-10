import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

/* styles */
import "@/styles/tailwind.scss";
import "@/styles/index.scss";

/* types */
import type { T_FunctionComponent } from "@/@types";

// =======================================

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next Boilerplate 🚀",
	description:
		"Minimalistic boilerplate to quick-start Next.js development in TypeScript, optimized for blazing-fast performance Bun & Turbopack 🚀",
	keywords: "typescript, turbopack, next, bun",
	authors: [{ name: "Raja Rakotonirina", url: "" }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): T_FunctionComponent {
	return (
		<html lang="en">
			<body className={quicksand.className}>{children}</body>
		</html>
	);
}
