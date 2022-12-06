<?php

namespace Database\Seeders;

use App\Models\Coffee;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CoffeesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cofees = [
            array('NAME' => 'Espresso', 'PRICE' => 3.8, "MENU_ID" => 1),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9, "MENU_ID" => 1),
            array('NAME' => 'Americano', 'PRICE' => 5, "MENU_ID" => 1),
            array('NAME' => 'Espresso macchiato', 'PRICE' => 4.3, "MENU_ID" => 1),
            array('NAME' => 'Cappuccino', 'PRICE' => 5.2, "MENU_ID" => 1),
            array('NAME' => 'Flat white', 'PRICE' => 5.9, "MENU_ID" => 1),
            array('NAME' => 'Extra shot', 'PRICE' => 1.1, "MENU_ID" => 1),
            array('NAME' => 'House Drip coffee', 'PRICE' => 4.5, "MENU_ID" => 1),
            array('NAME' => 'AeroPress', 'PRICE' => 5.5, "MENU_ID" => 1),
            array('NAME' => 'V60', 'PRICE' => 6.5, "MENU_ID" => 1),
            array('NAME' => 'Kalita', 'PRICE' => 12, "MENU_ID" => 1),
            array('NAME' => 'Cascara', 'PRICE' => 4.9, "MENU_ID" => 1),
            array('NAME' => 'Irish coffee', 'PRICE' => 10.9, "MENU_ID" => 1),
            array('NAME' => 'Espresso', 'PRICE' => 3.8, "MENU_ID" => 1),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9, "MENU_ID" => 1),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9, "MENU_ID" => 1),
            array('NAME' => 'Espresso', 'PRICE' => 3.8, "MENU_ID" => 1),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9, "MENU_ID" => 1),
            array('NAME' => 'Espresso', 'PRICE' => 3.8, "MENU_ID" => 1),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9, "MENU_ID" => 1),
            array('NAME' => 'House Drip coffee', 'PRICE' => 1, "MENU_ID" => 1),
            array('NAME' => 'AeroPress', 'PRICE' => 1, "MENU_ID" => 1),
            array('NAME' => 'V60', 'PRICE' => 6.5, "MENU_ID" => 1),
            array('NAME' => 'Kalita', 'PRICE' => 12, "MENU_ID" => 1),
            array('NAME' => 'Cascara', 'PRICE' => 4.9, "MENU_ID" => 1),
            array('NAME' => 'Irish coffee', 'PRICE' => 10.9, "MENU_ID" => 1),
            array('NAME' => 'Espresso', 'PRICE' => 3.8, "MENU_ID" => 1),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9, "MENU_ID" => 1),
            array('NAME' => 'Espresso', 'PRICE' => 3.8, "MENU_ID" => 1),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9, "MENU_ID" => 1),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9, "MENU_ID" => 1),
            array('NAME' => 'Espresso', 'PRICE' => 3.8, "MENU_ID" => 1),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9, "MENU_ID" => 1),
            array('NAME' => 'Espresso', 'PRICE' => 3.8, "MENU_ID" => 1),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9, "MENU_ID" => 1),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9, "MENU_ID" => 1),
            array('NAME' => 'Espresso', 'PRICE' => 3.8, "MENU_ID" => 1),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9, "MENU_ID" => 1),
            array('NAME' => 'Espresso', 'PRICE' => 3.8, "MENU_ID" => 1),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9, "MENU_ID" => 1),
        ];


        foreach ($cofees as $cofee_value)
        {
            $coffee = new Coffee();
            $coffee->name = $cofee_value['NAME'];
            $coffee->price = $cofee_value['PRICE'];
            $coffee->menu_id = $cofee_value['MENU_ID'];
            $coffee->save();
        }
    }
}
