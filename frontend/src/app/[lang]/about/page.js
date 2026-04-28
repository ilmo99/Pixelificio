// Server-Side Rendering (React generates HTML before hydration)
//
// import AboutPage from "@/page/<route>"; // File import statement

// 1. Core imports (React & Next.js)
// import Link from "next/link"; // Client-side routing with automatic pre-fetching
// import { cookies } from "next/headers"; // Access request cookies on the server (e.g., auth tokens, preferences)

// 2. External imports (third-party libraries)
// import axios from "axios"; // Promise-based HTTP client for data fetching (API requests)
// import clsx from "clsx"; // Conditional CSS class name joiner

// 3. Absolute internal (`@/` alias)
// import DefaultExportModule from "@/<path>/DefaultExport";
// import { NamedExportModule } from "@/<path>/NamedExport";
// import * as constants from "@/config/constants"; // Global constants shared across the app
import { getDictionary } from "@/app/dictionaries"; // Fetch translation dictionary based on language
// import { TranslateProvider } from "@/providers/Translate"; // Provides translation context and hook access for `lang` and `translates`
import { getServer } from "@/lib/server"; // Provide server-only values to the current component {SSR}

// 4. Relative internal (same directory)
import "./page.scss";
import { HeroSectionComponent } from "@/components/blocks/HeroSection";

// ===============================================
// ## ############################################
// ===============================================

export default async function AboutPage({ params }) {
	// Get the language from route parameters
	const { lang } = await params;
	const ssr = await getServer();
	// Fetch translation dictionary based on language
	const translates = await getDictionary(lang);

	// Fetch data from the API with language header
	// const dataResponse = await fetch(`${constants.APP_URL}/api/${lang}/<route>/<section>`, {
	// 	method: "GET",
	// 	credentials: "include",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 		"locale": lang,
	// 	},
	// });
	// const dataResponseJson = await dataResponse.json();

	return (
		<>
			<div className="about_page">
				<div className="page_cont">
					<section className="cont_space_1">
						<div className="cont_mw_1">
							<HeroSectionComponent>
								<div className="el_text obj_txt col-lg-11 pe-lg-4 pt-3 pb-6 pb-md-10">
									<h1>
										Our team may be just me, but together we make pixels, circuits, and ideas come to
										life: mostly with soldering and coffee.
									</h1>
								</div>
								<div className="row">
									<div className="el_num col-md-4 pb-md-6 text-white fx reveal right">
										<p className="obj_numb biggest text-black">
											{translates?.[ssr.page]?.["glowing_pixels"]?.[lang] ?? "Translate fallback"}
										</p>
										<p className="text-black pt-4">Glowing pixels in our frames</p>
									</div>
									<div className="el_num pt-md-0 ps-md-4 col-md-4 text-white fx reveal right">
										<p className="obj_numb biggest text-black">
											{translates?.[ssr.page]?.["crafted_frames"]?.[lang] ?? "Translate fallback"}
										</p>
										<p className="text-black pt-4">Crafted frames</p>
									</div>
									<div className="pt-md-0 ps-md-4 col-md-4 text-white fx reveal right">
										<p className="obj_nubm biggest text-black">
											{translates?.[ssr.page]?.["arduino_boards"]?.[lang] ?? "Translate fallback"}
										</p>
										<p className="text-black pt-4">Arduino boards sacrificed</p>
									</div>
									<div className="el_team row mt-4 mb-9 pt-[2rem] ">
										<div className="col-md-6 pb-5">
											<h1>Our Team</h1>
											<div className="d-none d-md-block pt-4">
												<p>Matteo Busan</p>
												<p className="el_founder pt-2 mb-2">Founder, Coder and Crafter</p>
												<a className="el_founder p">Link Instagram</a>
											</div>
										</div>
										<div className="col-md-6">
											<img src="/images/other/Matt_Caricatura.png"></img>
											<div className="d-block d-md-none pt-6">
												<p>Matteo Busan</p>
												<p className="el_founder pt-2 mb-2">Founder, Coder and Crafter</p>
												<a className="el_founder">Link Instagram</a>
											</div>
										</div>
									</div>
								</div>
							</HeroSectionComponent>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
