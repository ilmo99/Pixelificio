// Server-Side Rendering (React generates HTML before hydration)
//
// import FramePage from "@/page/<route>"; // File import statement
import { HeroSectionComponent } from "@/components/blocks/HeroSection";

// 1. Core imports (React & Next.js)
// import Link from "next/link"; // Client-side routing with automatic pre-fetching
// import { cookies } from "next/headers"; // Access request cookies on the server (e.g., auth tokens, preferences)

// 2. External imports (third-party libraries)
// import axios from "axios"; // Promise-based HTTP client for data fetching (API requests)
// import clsx from "clsx"; // Conditional CSS class name joiner

// 3. Absolute internal (`@/` alias)
// import DefaultExportModule from "@/<path>/DefaultExport";
// import { NamedExportModule } from "@/<path>/NamedExport";
import * as constants from "@/config/constants"; // Global constants shared across the app
import { getDictionary } from "@/app/dictionaries"; // Fetch translation dictionary based on language
import { TranslateProvider } from "@/providers/Translate"; // Provides translation context and hook access for `lang` and `translates`

// 4. Relative internal (same directory)
import "./page.scss";
import { GridComponent } from "@/components/blocks/GridComponent";
import mockdata from "mockdata.json";
// ===============================================
// ## ############################################
// ===============================================

export default async function FramesPage({ params }) {
	// Get the language from route parameters
	const { lang } = await params;

	// Fetch translation dictionary based on language
	const translates = await getDictionary(lang);

	const url = `${constants.BACKEND_URL_SERVER}/api/article`;
	const options = { method: "GET", headers: { Accept: "application/json" } };

	const response = await fetch(url, options);
	const data = await response.json();
	console.log(data);

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
			<div className="frames_page">
				<div className="page_cont">
					<section className="cont_space_1">
						<div className="cont_mw_1">
							<div>
								<HeroSectionComponent mockdata={mockdata}>
									<div className="el_text obj_txt py-3 row">
										<div className="col-12 col-xl-6">
											<h1>Frames</h1>
										</div>
										<div className="col-12 col-xl-6">
											<h5 className="pt-5 pt-xl-0">
												<i>Can a collection of pixel-based artworks capture memories and ideas?</i>{" "}
												Pixelificio creates pieces that translate digital imagery into light. Explore
												the collection to see how each frame is carefully designed, hand-soldered,
												and composed to bring its concept to life.
											</h5>
											{data.map((p, i) => (
												<div key={p.id} className={`pb-1 ${i == 0 && `pt-6`}`}>
													<a href={`/frames/${p.id}`}>{p.title}</a>
												</div>
											))}
										</div>
									</div>
								</HeroSectionComponent>
								<GridComponent mockdata={data} />
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
