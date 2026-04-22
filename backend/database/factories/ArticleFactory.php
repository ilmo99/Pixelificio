<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array
	{
		return [
			"title" => fake()->sentence(),
			"subtitle" => fake()->sentence(),
			"abstract" => Str::limit(fake()->sentence(), 25),
			"body_formatted" => fake()->paragraphs(5, true),
			"published" => fake()->boolean(),
		];
	}
}
