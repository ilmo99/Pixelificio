<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
	public function home()
	{
		// $lang = in_array($lang, ["en", "it"]) ? $lang : "en";
		$articles = Article::where("strillo_home", true)->with("media")->get();
		foreach ($articles as $article) {
			foreach ($article->media as $media) {
				$imagePath = storage_path("app/public/uploads/" . $media->image_path);
				if (file_exists($imagePath)) {
					$imageInfo = getimagesize($imagePath);
					if ($imageInfo !== false) {
						$media->width = $imageInfo[0];
						$media->height = $imageInfo[1];
					}
				}
			}
		}
		return response()->json($articles);
	}

	public function index()
	{
		// $lang = in_array($lang, ["en", "it"]) ? $lang : "en";
		$articles = Article::with("media")->get();
		foreach ($articles as $article) {
			foreach ($article->media as $media) {
				$imagePath = storage_path("app/public/uploads/" . $media->image_path);
				if (file_exists($imagePath)) {
					$imageInfo = getimagesize($imagePath);
					if ($imageInfo !== false) {
						$media->width = $imageInfo[0];
						$media->height = $imageInfo[1];
					}
				}
			}
		}
		return response()->json($articles);
	}
}
