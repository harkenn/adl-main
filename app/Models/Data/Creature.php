<?php

namespace App\Models\Data;

use Illuminate\Database\Eloquent\Model;

class Creature extends Model
{
    public function type()
    {
        return $this->belongsTo('App\Models\Data\CreatureType');
    }
}