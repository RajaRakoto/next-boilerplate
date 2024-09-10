"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

/* assets */
import { TURBOPACKLOGO, NEXTLOGO, BUNLOGO } from "@/constants";

/* store - redux */
import { useStoreDispatch, useStoreSelector } from "@/hooks/redux";
import {
	increment__redux,
	decrement__redux,
	reset__redux,
} from "@/stores/redux/reducer/global";

/* store - zustand */
import useZustandStore from "@/stores/zustand/store";

/* styles */
import "@/components/demo/Demo.scss";

/* types */
import { T_FunctionComponent } from "@/@types";

// =======================================

export default function Demo(): T_FunctionComponent {
	// basic state
	const [count, setCount] = useState(0);

	// redux
	const REDUX_STORE = useStoreSelector((state) => state.global);
	const REDUX = useStoreDispatch();

	useEffect(() => {
		console.log("[useEffect] -> redux");
		console.log(REDUX_STORE);
	}, [REDUX_STORE]);

	const handleUserRedux = (id: string): void => {
		const users = REDUX_STORE.user_redux;
		const result = users.find((user) => user.id === id);
		console.log("[handleUserRedux] -> redux");
		console.log(result);
	};

	// zustand
	const {
		count_zustand,
		user_zustand,
		increment__zustand,
		decrement__zustand,
		reset__zustand,
	} = useZustandStore();

	useEffect(() => {
		console.log("[useEffect] -> zustand");
		console.log(useZustandStore.getState());
	}, [count_zustand, user_zustand]);

	const handleUserZustand = (id: string): void => {
		const users = user_zustand;
		const result = users.find((user) => user.id === id);
		console.log("[handleUserZustand] -> zustand");
		console.log(result);
	};

	return (
		<div id="demo">
			<div className="flex flex-row flex-wrap gap-5 justify-center items-center">
				<Link
					href="https://turbo.build/pack"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						className="logo turbopack"
						src={TURBOPACKLOGO}
						alt="Turbopack Logo"
						width={164}
						height={164}
						priority
					/>
				</Link>
				<Link
					href="https://nextjs.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						className="logo next dark:invert"
						src={NEXTLOGO}
						alt="Next.js Logo"
						width={164}
						height={164}
						priority
					/>
				</Link>
				<Link href="https://bun.sh/" target="_blank" rel="noopener noreferrer">
					<Image
						className="logo bun"
						src={BUNLOGO}
						alt="Bun.js Logo"
						width={164}
						height={164}
						priority
					/>
				</Link>
			</div>
			<h1>Turbopack + Next + Bun</h1>
			<div className="cards">
				<div className="card">
					<h3>useState</h3>
					<button onClick={() => setCount((count) => count + 1)}>
						count is {count}
					</button>
				</div>
				<div className="card">
					<h3>Redux</h3>
					<p>count is {REDUX_STORE.count_redux}</p>
					<button onClick={() => REDUX(increment__redux())}>increment</button>
					<button onClick={() => REDUX(decrement__redux())}>decrement</button>
					<button onClick={() => REDUX(reset__redux())}>reset</button>
					<button onClick={() => handleUserRedux("user")}>get user</button>
				</div>
				<div className="card">
					<h3>Zustand</h3>
					<p>count is {count_zustand}</p>
					<button onClick={() => increment__zustand()}>increment</button>
					<button onClick={() => decrement__zustand()}>decrement</button>
					<button onClick={() => reset__zustand()}>reset</button>
					<button onClick={() => handleUserZustand("admin")}>get admin</button>
				</div>
			</div>
			<p>
				You can view the outcome in the browser console to experiment with{" "}
				<strong>redux</strong> or <strong>zustand</strong>
			</p>
			<p className="read-the-docs">
				Click on the Turbopack, Next and Bun logos to learn more
			</p>
		</div>
	);
}
