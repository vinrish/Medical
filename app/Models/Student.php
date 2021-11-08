<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class Student extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'students';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'name',
        'admission_number',
        'dob',
        'phone_number',
        'dob',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    // public function position()
    // {
    //     return $this->belongsTo(Position::class);
    // }

    // public function advance()
    // {
    //     return $this->hasOne(Advance::class);
    // }

    public function records()
    {
        return $this->hasMany(Record::class);
    }

    // public function nhif()
    // {
    //     return $this->hasOne(Nhif::class);
    // }

    // public function salary()
    // {
    //     return $this->belongsToMany(Salary::class);
    // }

    // public function deduction() {
    //     return $this->advance();
    // }
}
