import type React from "react";

import { Quicksand } from "next/font/google";

/* styles */
import "@/styles/tailwind.scss";
import "@/styles/index.scss";

/* types */
import type { T_FunctionComponent } from "@/@types";

/* metadata */
import { metadata } from "@/metadata";

// =======================================

const quicksand = Quicksand({ subsets: ["latin"] });
// eslint-disable-next-line react-refresh/only-export-components
export { metadata };

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
