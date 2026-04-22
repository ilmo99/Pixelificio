<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use App\Models\BackpackRole;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		User::create([
			"username" => "marcom",
			"name" => "Marco",
			"surname" => "Molinari",
			"address" => "Via della Moscova, 40",
			"email" => "marcom@cashberry.it",
			"phone" => fake()->phoneNumber(),
			"backpack_role_id" => BackpackRole::where("name", "Admin")->first()->id,
			"role_id" => Role::where("name", "User")->first()->id,
			"password" => bcrypt(config("backpack.base.backpack_admin_password")),
			"email_verified_at" => now(),
		]);
	}
}
