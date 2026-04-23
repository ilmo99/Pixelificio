// Server-Side Rendering (React generates HTML before hydration)
//
// import HomePage from "@/page/home"; // File import statement
import { HeroSectionComponent } from "@/components/blocks/HeroSection";
import { ProjectSectionComponent } from "@/components/blocks/ProjectSection";

import * as constants from "@/config/constants"; // Global constants shared across the app
import { getDictionary } from "@/app/dictionaries"; // Fetch translation dictionary based on language
import { TranslateProvider } from "@/providers/Translate"; // Provides translation context and hook access for `lang` and `translates`
import "./page.scss";
import mockdata from "mockdata.json";
import { get } from "http";

// ===============================================
// ## ############################################
// ===============================================

export default async function HomePage({ params }) {
	// Get the language from route parameters
	const { lang } = await params;

	// Fetch translation dictionary based on language
	const translates = await getDictionary(lang);

	const url = `${constants.BACKEND_URL_SERVER}/api/article-home`;
	const options = { method: "GET", headers: { Accept: "application/json" } };

	const response = await fetch(url, options);
	const data = await response.json();
	// Fetch data from the API with language header
	// const heroResponse = await fetch(`${constants.BASE_URL}/api/${lang}/home/<section>`, {
	// 	method: "GET",
	// 	credentials: "include",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 		"locale": lang,
	// 	},
	// });
	// const heroResponseJson = await heroResponse.json();
	return (
		<div className="home_page">
			<div className="page_cont">
				<section className="cont_space_1">
					<div className="cont_mw_1">
						<div>
							<HeroSectionComponent>
								<div className="el_text obj_hero_txt py-3">
									<h1>
										Pixelificio is where digital images are reduced to their essential units and rebuilt
										as physical, light-based compositions.
									</h1>
								</div>
							</HeroSectionComponent>
							<div className="obj_proj_title mt-10 pt-6">
								<h2>Latest works</h2>
							</div>
							{data.map((p) => (
								<ProjectSectionComponent
									key={p.id}
									id={p.id}
									imghover={p.media[0].image_path}
									projtitle={p.title}
									projsub={p.subtitle}
									projabs={p.abstract}
									width={p.media[1].width / 7.5}
									height={p.media[1].height / 7.5}
								/>
							))}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
