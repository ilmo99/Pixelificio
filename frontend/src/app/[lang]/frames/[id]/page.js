// Server-Side Rendering (React generates HTML before hydration)
//
// import DetailPage from "@/page/<route>"; // File import statement

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
// import { DetailComponent } from "@/components/blocks/DetailComponent";
import mockdata from "mockdata.json";
// ===============================================
// ## ############################################
// ===============================================

export default async function DetailPage({ params }) {
	// Get the language from route parameters
	const { lang } = await params;

	// Fetch translation dictionary based on language
	const translates = await getDictionary(lang);
	const frame = mockdata.frame;
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

	const title = frame.find((p) => p.id === Number(params.id));

	if (!title) {
		return (
			<div className="detail_page">
				<div className="page_cont">
					<section className="cont_space_1">
						<div className="cont_mw_1 pb-5">
							<div>
								Non abbiamo trovato il quadro che stavi cercando perché la porta 3000 era chiusa purtroppo :(
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
	return (
		<>
			<div className="detail_page">
				<div className="page_cont">
					<section className="cont_space_1">
						<div className="cont_mw_1 pb-5">
							<div className="detail_component">
								<div className="el_img d-none d-md-block py-3">
									<img src="/images/logos/iride.svg" alt="Iride logo" />
								</div>
								<div className="el_title pb-4">
									<h1>{title.projtitle}</h1>
								</div>
								<div className="el_section row  justify-content-center justify-content-md-between">
									<div className="el_parag col-12 col-md-6 col-lg-8">
										<p className="el_txt py-2 py-lg-4">
											<i>{title.italictxt}</i>
										</p>
										<p className="el_txt obj_gray_txt py-2 py-lg-4">{title.bodytxt}</p>
										<div className="el_griglia_img row">
											<div className="col-6">
												<img></img>
											</div>
											<div className="col-6">
												<img></img>
											</div>
										</div>
										<div className="el_griglia_img row">
											<div className="col-6">
												<img></img>
											</div>
											<div className="col-6">
												<img></img>
											</div>
										</div>
									</div>
									<div className="el_img_parag obj_img col-12 col-md-5 col-lg-3 pt-5 pt-md-0">
										<img src={title.imghover}></img>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
