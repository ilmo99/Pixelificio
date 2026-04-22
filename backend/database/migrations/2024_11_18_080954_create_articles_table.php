<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create("articles", function (Blueprint $table) {
			$table->id();
			$table->string("title");
			$table->string("subtitle")->nullable();
			$table->string("abstract")->nullable();
			$table->longText("body_formatted")->nullable();
			$table->longText("intro_body_formatted")->nullable();
			$table->boolean("published")->default(false);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists("articles");
	}
};
