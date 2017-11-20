<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Payment extends Model
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'amount', 'direction', 'billing_id', 'category_id', 'comment'
    ];

    public function user()
    {
        return $this->belognsTo('App\User');
    }

    public function billing()
    {
        return $this->belognsTo('App\Billing');
    }

    public function category()
    {
        return $this->belognsTo('App\Category');
    }
}