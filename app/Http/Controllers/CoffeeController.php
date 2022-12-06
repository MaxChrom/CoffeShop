<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coffee;

class CoffeeController extends Controller
{
    public function store(Request $request)
    {
       $request->all();
       $data = $request;
       $coffee = new Coffee; 
       $coffee->name = $data['coffee']['name'];
       $coffee->save();
    }

    public function showCoffee()
    {
        
        $allCoffee = Coffee::all();
        return $allCoffee;
    }
}
