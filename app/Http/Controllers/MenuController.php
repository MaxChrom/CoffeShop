<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function showMenu()
    {
        $menu = Menu::all();
        return $menu;
    }
}
