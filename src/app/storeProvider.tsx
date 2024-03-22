"use client";

/* libs */
import { Provider } from "react-redux";

/* store - redux */
import store from "@/stores/redux/store.ts";

/* types */
import { T_FunctionComponent } from "@/@types";

// =======================================

export default function StoreProvider({
	children,
}: {
	children: React.ReactNode;
}): T_FunctionComponent {
	return <Provider store={store}>{children}</Provider>;
}
