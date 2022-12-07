<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coffee;
use App\Models\Menu;

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
<<<<<<< HEAD
        $allCoffee = Coffee::with('menu')->get();

=======

        $allCoffee = Coffee::with('menu')->get();
>>>>>>> master
        return $allCoffee;
    }
}
