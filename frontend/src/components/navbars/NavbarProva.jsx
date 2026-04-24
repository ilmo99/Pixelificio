"use client";

import { useState } from "react";
import Link from "next/link";
import * as styles from "./NavbarProva.module.scss";

export default function NavbarProva() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="cont_space_1">
			<nav className={`${styles.navbar} cont_mw_1`}>
				<div className={styles.container}>
					<Link href="/" className={`${styles.logo} d-inline-flex`}>
						<img className="pe-3" src="/images/logos/pixelificio-logo.svg" width="150" height="20" />
						<img
							className="d-block d-md-none fx slide fade left"
							src="/images/logos/iride.svg"
							width="20"
							height="20"
						/>
					</Link>

					<div className={styles.desktopMenu}>
						<Link href="/" className={styles.link}>
							Home
						</Link>
						<Link href="/frames" className={styles.link}>
							Frames
						</Link>
						<Link href="/about" className={styles.link}>
							About
						</Link>
					</div>

					<button className={styles.burger} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
						<span className={`${styles.burgerLine} ${isOpen ? styles.open : ""}`}></span>
						<span className={`${styles.burgerLine} ${isOpen ? styles.open : ""}`}></span>
						<span className={`${styles.burgerLine} ${isOpen ? styles.open : ""}`}></span>
					</button>
				</div>

				{/* Menu Mobile con animazione fade + slide dal basso */}
				<div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
					<Link href="/" className={styles.mobileLink} onClick={() => setIsOpen(false)}>
						Home
					</Link>
					<Link href="/frames" className={styles.mobileLink} onClick={() => setIsOpen(false)}>
						Frames
					</Link>
					<Link href="/about" className={styles.mobileLink} onClick={() => setIsOpen(false)}>
						About
					</Link>
				</div>
			</nav>
		</div>
	);
}
