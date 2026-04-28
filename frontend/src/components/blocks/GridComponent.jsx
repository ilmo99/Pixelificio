"use client"; // marks module for full browser execution
//
// import { GridComponent } from "@/components/blocks/GridComponent"; // File import statement

// 1. Core imports (React & Next.js)
// import Link from "next/link"; // Client-side routing with automatic pre-fetching {CSR}
import React, { // React hooks to manage state, context, and side effects {CSR}
	// 	createContext, // Create a global Context {CSR}
	//  useCallback, // Memoize a callback to avoid re-creating it on re-renders {CSR}
	// 	useContext, // Consume the nearest <Provider>'s Context value {CSR}
	useEffect, // Run side effects AFTER screen update (non-blocking; e.g., data fetch, event listener) {CSR}
	// 	useImperativeHandle, // [NICHE] Expose custom methods to parent refs instead of the DOM node (e.g., `focus()`, `scrollToBottom()`) {CSR}
	// 	useLayoutEffect, // [RARE] Run side effects BEFORE screen update (blocking; e.g., layout reads/writes) {CSR}
	// 	useMemo, // Memoize a value to avoid re-computing it on re-renders {CSR}
	// 	useReducer, // Manage complex state logic with a reducer function {CSR}
	useRef, // Create a mutable ref that persists across renders {CSR}
	useState, // Manage local component state {CSR}
} from "react";

// 2. External imports (third-party libraries)
// import axios from "axios"; // Promise-based HTTP client for data fetching (API requests) {CSR|SSR}
// import clsx from "clsx"; // Conditional CSS class name joiner {CSR|SSR}
// import useSWR from "swr"; // Client-side data fetching with automatic revalidation {CSR}
// import { AnimatePresence, motion } from "framer-motion"; // Declarative client-side animations and transitions {CSR}
// import { Bar, BarChart } from "recharts"; // Base components for rendering bar charts {CSR}
// import { Canvas } from "@react-three/fiber"; // Render 3D scenes with Three.js using JSX (client-only) {CSR}
// import { gsap } from "gsap"; // High-performance JS animation engine (scroll triggers, timelines, sequences) {CSR}
// import { HoverCard, Modal, Tabs } from "aceternity-ui"; // Prebuilt animated UI components (built on Framer Motion) {CSR}
// import { signIn, signOut, useSession } from "next-auth/react"; // Client-side user auth helpers {CSR}

// 3. Absolute internal (`@/` alias)
// IMPORT SYNTAX:
// import DefaultExportModule from "@/<path>/DefaultExport"; // {CSR|SSR}
// import { NamedExportModule } from "@/<path>/NamedExport"; // {CSR|SSR}
//
// UTILITY IMPORTS:
// import { getServer } from "@/lib/server"; // Provide server-only values to the current component {SSR}
// import { useClient } from "@/providers/Client"; // Provide client-only values to the current component {CSR}
// import { useTranslate } from "@/providers/Translate"; // Provides translation context and hook access for `lang` and `translates`
//

import useIntersection from "@/hooks/useIntersection";
// FUTURE REFERENCE IMPORTS:
// import { Alert, Dialog, Input } from "@/components/ui"; // Accessible component primitives (Radix-based, styled with Tailwind) {CSR}
// import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"; // Styled chart wrapper and tooltip content (ShadCN + Recharts) {CSR}

// 4. Relative internal (same directory)
import "./GridComponent.scss";
// import mockdata from "mockdata.json";

import * as constants from "@/config/constants";
// ===============================================
// ## ############################################
// ===============================================

export function GridComponent({ mockdata }) {
	// const ssr = await getServer();
	// const csr = useClient();
	// const lang = useTranslate()["lang"];
	// const translates = useTranslate()["translates"]; // E.g., {translates?.[csr.page]?.["<code>"]?.[lang] ?? "Translate fallback"}
	const [isHovered, setHover] = useState(null);
	const [isTouch, setIsTouch] = useState(false);

	useEffect(() => {
		const hoverDevice = window.matchMedia("(hover: hover) and (pointer: fine)");
		setIsTouch(!hoverDevice.matches);
	}, []);

	useIntersection(".obj_grid_item", {
		thresold: 0.8,
		rootMargin: "-100px 0px -100px 0px",
		disabled: !isTouch,
	});

	return (
		<>
			<div className="grid_component">
				<div className="container">
					<div className="row">
						{mockdata.map((p) => (
							<div key={p.id} className="obj_grid_item col-12 col-md-6 col-xl-4 py-6">
								<a
									onMouseEnter={() => setHover(p.id)}
									onMouseLeave={() => setHover(null)}
									// onTouchStart={() => setHover(p.id)}
									// onTouchEnd={() => setTimeout(() => setHover(null), 200)} soluzione di gipitero
									href={`/frames/${p.id}`}
									className="obj_cont_img d-flex justify-content-center">
									<img
										data-id={p.id}
										className={`obj_img_base ${isHovered === p.id && "fade_out"}`}
										src={`${constants.MEDIA_PATH}/uploads/${p.media[1].image_path}`}
										alt={p.title}
										width={p.media[1].width / 7.5}
										height={p.media[1].height / 7.5}></img>
									<img
										data-id={p.id}
										className={`obj_img_hover ${isHovered === p.id && "fade_in"}`}
										src={`${constants.MEDIA_PATH}/uploads/${p.media[0].image_path}`}
										alt={p.title}
										width={p.media[0].width / 7.5}
										height={p.media[0].height / 7.5}></img>
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
