"use client";

import type React from "react";

/* libs */
import { Provider } from "react-redux";

/* store - redux */
import store from "@/stores/redux/store.ts";

/* types */
import type { T_FunctionComponent } from "@/@types";

// =======================================

export default function StoreProvider({
	children,
}: {
	children: React.ReactNode;
}): T_FunctionComponent {
	return <Provider store={store}>{children}</Provider>;
}
