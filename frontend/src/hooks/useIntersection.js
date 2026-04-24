"use client";

import { useEffect, useRef } from "react";

export default function useIntersection(selector, options = {}) {
	const observerRef = useRef(null);

	useEffect(() => {
		// Opzioni di default + merge con quelle passate dall'utente
		const defaultOptions = {
			threshold: 0.5,
			rootMargin: "0px 0px 0px 0px",
			// disabled: false,
		};

		const observerOptions = { ...defaultOptions, ...options };

		// if (disabled) {
		// 	return;
		// }

		observerRef.current = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const target = entry.target;

				if (entry.isIntersecting) {
					target.classList.add("is_visible");
				} else {
					target.classList.remove("is_visible");
				}
			});
		}, observerOptions);

		// Seleziona gli elementi
		const items = document.querySelectorAll(selector);

		if (items.length === 0) {
			console.warn(`useIntersection: Nessun elemento trovato per il selettore "${selector}"`);
		}

		items.forEach((item) => {
			observerRef.current?.observe(item);
		});

		// Cleanup
		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
		};
	}, [selector, options.disabled]); // Dipendenza dal selector (opzioni le gestiamo internamente)
}
