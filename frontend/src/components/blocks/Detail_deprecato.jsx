// "use client"; // marks module for full browser execution
//
// import { DetailComponent } from "@/components/blocks/DetailComponent.jsx"; // File import statement

// 1. Core imports (React & Next.js)
// import Link from "next/link"; // Client-side routing with automatic pre-fetching {CSR}
// import React, { // React hooks to manage state, context, and side effects {CSR}
// 	createContext, // Create a global Context {CSR}
// 	useCallback, // Memoize a callback to avoid re-creating it on re-renders {CSR}
// 	useContext, // Consume the nearest <Provider>'s Context value {CSR}
// 	useEffect, // Run side effects AFTER screen update (non-blocking; e.g., data fetch, event listener) {CSR}
// 	useImperativeHandle, // [NICHE] Expose custom methods to parent refs instead of the DOM node (e.g., `focus()`, `scrollToBottom()`) {CSR}
// 	useLayoutEffect, // [RARE] Run side effects BEFORE screen update (blocking; e.g., layout reads/writes) {CSR}
// 	useMemo, // Memoize a value to avoid re-computing it on re-renders {CSR}
// 	useReducer, // Manage complex state logic with a reducer function {CSR}
// 	useRef, // Create a mutable ref that persists across renders {CSR}
// 	useState, // Manage local component state {CSR}
// } from "react";

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
// FUTURE REFERENCE IMPORTS:
// import { Alert, Dialog, Input } from "@/components/ui"; // Accessible component primitives (Radix-based, styled with Tailwind) {CSR}
// import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"; // Styled chart wrapper and tooltip content (ShadCN + Recharts) {CSR}

// 4. Relative internal (same directory)
import "./DetailComponent.scss";
import mockdata from "mockdata.json";

// ===============================================
// ## ############################################
// ===============================================

export async function DetailComponent({ props }) {
	// const ssr = await getServer();
	// const csr = useClient();
	// const lang = useTranslate()["lang"];
	// const translates = useTranslate()["translates"]; // E.g., {translates?.[csr.page]?.["<code>"]?.[lang] ?? "Translate fallback"}

	return (
		<>
			<div className="detail_component">
				<div className="el_img d-none d-md-block py-3">
					<img src="/images/logos/iride.svg" alt="Iride logo" />
				</div>
				<div className="el_title pb-4">
					<h1>Man at work</h1>
				</div>
				<div className="el_section row  justify-content-center justify-content-md-between">
					<div className="el_parag col-12 col-md-6 col-lg-8">
						<p className="el_txt py-2 py-lg-4">
							<i>
								Behind the scenes, it’s a fairly simple setup. A 28 by 8 LED matrix running on 5V, driven by
								an Arduino Pro Micro that keeps everything moving at its own pace. No inputs, no interaction,
								just a small system doing exactly what it was built to do, over and over again.
							</i>
						</p>
						<p className="el_txt obj_gray_txt py-2 py-lg-4">
							The idea came from a habit. Watching other people play that classic falling-block game as a way
							to switch off for a bit. It worked surprisingly well, until a very reasonable question showed up:
							why watch someone play when you could just watch the game play itself? So this happened. A
							self-running version that doesn’t need anyone, quietly doing its thing in a frame. It’s probably
							a worse distraction now than the videos ever were, but at least it’s honest about it. And
							honestly, that feels like an upgrade.
						</p>
					</div>
					<div className="el_img_parag obj_img col-12 col-md-5 col-lg-3 pt-5 pt-md-0">
						<img src="/images/other/MANATWORK.svg"></img>
					</div>
				</div>
			</div>
		</>
	);
}
