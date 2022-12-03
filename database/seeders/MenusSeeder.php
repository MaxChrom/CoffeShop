<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $menus = ['ESPRESSO COFFEE', 'FILTER COFFEE', 'COFFEE SPECIALITIES', 'ICED', 'HOT', 'LEMONADES', 'WATER'];


        foreach ($menus as $menu_name)
        {
            $menu = new Menu();
            $menu->name = $menu_name;
            $menu->save();
        }
    }
}
