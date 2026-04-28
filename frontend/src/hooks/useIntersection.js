"use client";

import { useEffect, useRef } from "react";

export default function useIntersection(selector, options = {}) {
	const observerRef = useRef(null);

	// Destrutturazione con valori di default
	const { threshold = 0.5, rootMargin = "0px 0px 0px 0px", disabled = false, triggerOnce = false } = options;

	useEffect(() => {
		// Se l'hook è disabilitato, non facciamo niente
		if (disabled) {
			return;
		}

		// Creazione dell'observer
		observerRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const target = entry.target;

					if (entry.isIntersecting) {
						target.classList.add("is_visible");

						if (triggerOnce) {
							observerRef.current?.unobserve(target);
						}
					} else if (!triggerOnce) {
						target.classList.remove("is_visible");
					}
				});
			},
			{
				threshold,
				rootMargin,
			}
		);

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
	}, [selector, threshold, rootMargin, disabled, triggerOnce]);

	// Cleanup extra quando `disabled` diventa true
	useEffect(() => {
		if (disabled && observerRef.current) {
			observerRef.current.disconnect();
		}
	}, [disabled]);
}
