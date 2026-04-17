// "use client"; // marks module for full browser execution
//
// import { AboutComponent } from "@/components/blocks/AboutComponent"; // File import statement

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
import "./AboutComponent.scss";

// ===============================================
// ## ############################################
// ===============================================

export async function AboutComponent({ props }) {
	// const ssr = await getServer();
	// const csr = useClient();
	// const lang = useTranslate()["lang"];
	// const translates = useTranslate()["translates"]; // E.g., {translates?.[csr.page]?.["<code>"]?.[lang] ?? "Translate fallback"}

	return (
		<>
			<div className="About_component">
				<div className="size_cont">
					<div className="block_wrap">
						<div className="el_img d-none d-md-block py-3">
							<img className="obj_hero_img" src="/images/logos/iride.svg" alt="Iride logo" />
						</div>
						<div className="el_text obj_hero_txt col-lg-11 pe-lg-4 pt-3 pb-6">
							<h1>
								Our team may be just me, but together we make pixels, circuits, and ideas come to life:
								mostly with soldering and coffee.
							</h1>
						</div>
						<div className="row">
							<div className="el_num col-md-4">
								<p className="obj_numb biggest">1659</p>
								<p>Glowing pixels in our frames</p>
							</div>
							<div className="el_num pt-4 pt-md-0 ps-md-4 col-md-4">
								<p className="obj_numb biggest">6</p>
								<p>Crafted frames</p>
							</div>
							<div className="pt-4 pt-md-0 ps-md-4 col-md-4">
								<p className="obj_nubm biggest">2</p>
								<p>Arduino boards sacrificed</p>
							</div>
							<div className="el_team row mt-4 pt-5">
								<div className="col-md-6">
									<h1>Our Team</h1>
								</div>
								<div className="col-md-6">
									<img src="/images/other/Matt_Caricatura.png"></img>
									<p>Matteo Busan</p>
									<p className="el_founder pt-2">Founder, Coder and Crafter</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
