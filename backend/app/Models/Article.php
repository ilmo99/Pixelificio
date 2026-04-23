<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use App\Models\Traits\StorableMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
	use CrudTrait;
	use HasFactory;
	use StorableMedia;

	protected $fillable = [
		"title",
		"subtitle",
		"abstract",
		"body_formatted",
		"intro_body_formatted",
		"published",
		"height",
		"Width",
	];

	public function media()
	{
		return $this->hasMany(Media::class);
	}

	public function attachment()
	{
		return $this->hasMany(Attachment::class);
	}

	/**
	 * Ritorna l'attributo da utilizzare per la visualizzazione nelle liste
	 */
	public function getDisplayAttribute()
	{
		return $this->title;
	}
}
