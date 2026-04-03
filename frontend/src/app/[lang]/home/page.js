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

// ===============================================
// ## ############################################
// ===============================================

// const PROJECT_INFO = [
// 	{
// 		id: 1,
// 		imgurl: "/images/other/MANATWORK.svg",
// 		projtitle: "Man at Work",
// 		projsub: "Falling blocks that stack themselves inside a frame",
// 		projabs:
// 			"A familiar set of shapes dropping one after the other, finding their place without any help. Lines form, disappear, and everything starts over. No player, no inputs, just the system doing its thing like it always has.",
// 	},
// 	{
// 		id: 2,
// 		imgurl: "/images/other/DONTMINDME.svg",
// 		projtitle: "Don't Mind Me",
// 		projsub: "A curious listeners that turn toward whoever is speaking",
// 		projabs:
// 			"A frame just minding his business until someone says something. Then he turn, like they suddenly care. A small reminder that being heard is sometimes more about timing than intention.",
// 	},
// 	{
// 		id: 3,
// 		imgurl: "/images/other/CONNOR.svg",
// 		projtitle: "Connor",
// 		projsub: "A double-side red circle marking a system starting to think for itself",
// 		projabs:
// 			"A red circle doing a lot of heavy lifting. It marks the exact point where a perfectly functioning system starts having second thoughts. You know, the moment things get interesting.",
// 	},
// 	// {id: 4, imgurl: , projtitle: , projsub: , projabs: },
// 	// {id: 5, imgurl: , projtitle: , projsub: , projabs: },
// 	// {id: 6, imgurl: , projtitle: , projsub: , projabs: },
// ];

export default async function HomePage({ params }) {
	// Get the language from route parameters
	const { lang } = await params;

	// Fetch translation dictionary based on language
	const translates = await getDictionary(lang);

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
							<HeroSectionComponent />
							<div className="obj_proj_title mt-10 pt-6">
								<h2>Latest works</h2>
							</div>
							{mockdata.frame.map((p) => (
								<ProjectSectionComponent
									key={p.id}
									imgurl={p.imgurl}
									projtitle={p.projtitle}
									projsub={p.projsub}
									projabs={p.projabs}
								/>
							))}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
