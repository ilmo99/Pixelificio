"use client"; // marks module for full browser execution
//
// import { FooterComponent } from "@/components/footers/"; // File import statement

// 1. Core imports (React & Next.js)
import Image from "next/image";
import Link from "next/link"; // Client-side routing with automatic pre-fetching {CSR}
import React, { // React hooks to manage state, context, and side effects {CSR}
	// 	createContext, // Create a global Context {CSR}
	// 	useCallback, // Memoize a callback to avoid re-creating it on re-renders {CSR}
	// 	useContext, // Consume the nearest <Provider>'s Context value {CSR}
	useEffect, // Run side effects AFTER screen update (non-blocking; e.g., data fetch, event listener) {CSR}
	// 	useImperativeHandle, // [NICHE] Expose custom methods to parent refs instead of the DOM node (e.g., `focus()`, `scrollToBottom()`) {CSR}
	// 	useLayoutEffect, // [RARE] Run side effects BEFORE screen update (blocking; e.g., layout reads/writes) {CSR}
	// 	useMemo, // Memoize a value to avoid re-computing it on re-renders {CSR}
	// 	useReducer, // Manage complex state logic with a reducer function {CSR}
	useRef, // Create a mutable ref that persists across renders {CSR}
	// 	useState, // Manage local component state {CSR}
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
import "./FooterComponent.scss";

// ===============================================
// ## ############################################
// ===============================================

export function FooterComponent({ ...props }) {
	// const ssr = await getServer();
	// const csr = useClient();
	// const lang = useTranslate()["lang"];
	// const translates = useTranslate()["translates"]; // E.g., {translates?.[csr.page]?.["<code>"]?.[lang] ?? "Translate fallback"}

	useIntersection(".obj_logo", {
		threshold: 0,
		rootMargin: "0px 0px -90px 1000px",
	});

	return (
		<>
			<div className="footer_component cont_space_1">
				<div className="cont_mw_1">
					<div className="el_foot_title obj_foot_title row py-4 mt-6 mt-md-4">
						<h6 className="text-center">Curious how they look in your space?</h6>
					</div>
					<div className="el_foot_cont row py-4 py-lg-6">
						<div className="el_logo col-12 col-md-2 col-lg-6">
							<img className="logo_iride obj_logo img-fluid" src={props.iride.src} alt="Iride" />
						</div>
						<div className="el_contatti col-12 col-md-4 col-lg-4">
							<p className="pt-5 pt-md-0">OFFICE</p>
							<a
								className="d-flex pt-3"
								href="https://www.google.com/maps/place/Mr+Rex/@33.9206945,-116.7754723,17z/data=!3m1!4b1!4m6!3m5!1s0x80db3f0004e92663:0xf0d7c70a2f883831!8m2!3d33.9206945!4d-116.7728974!16s%2Fg%2F11x37bq6gs?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D">
								Milan, Italy
							</a>
							<a
								className="d-flex pt-1"
								href="https://www.google.com/maps/place/Flintstones+Bedrock+City/@35.650556,-112.1526552,15z/data=!4m6!3m5!1s0x8732efd9157aba0f:0xdc970beb8ded01e2!8m2!3d35.6549936!4d-112.1396682!16s%2Fg%2F11s9jrchmc?entry=ttu&g_ep=EgoyMDI2MDQyMS4wIKXMDSoASAFQAw%3D%3D">
								Venice, Italy
							</a>
							<p className="pt-5">CONTACT</p>
							<a className="d-flex pt-3">+39 346-3197010</a>
							<a className="d-flex pt-1">pixelificio@gmail.com</a>
						</div>
						<div className="el_social col-12 col-md-3 ms-md-auto col-lg-2">
							<p className="pt-5 pt-md-0">SOCIAL</p>
							<a href="https://www.instagram.com/" className="d-flex pt-3">
								Instagram
							</a>
							<a href="https://web.telegram.org/a/" className="d-flex pt-1">
								Telegram
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
