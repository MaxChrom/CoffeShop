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
            array('NAME' => 'Espresso', 'PRICE' => 3.8),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9),
            array('NAME' => 'Americano', 'PRICE' => 5),
            array('NAME' => 'Espresso macchiato', 'PRICE' => 4.3),
            array('NAME' => 'Cappuccino', 'PRICE' => 5.2),
            array('NAME' => 'Flat white', 'PRICE' => 5.9),
            array('NAME' => 'Extra shot', 'PRICE' => 1.1),
            array('NAME' => 'House Drip coffee', 'PRICE' => 4.5),
            array('NAME' => 'AeroPress', 'PRICE' => 5.5),
            array('NAME' => 'V60', 'PRICE' => 6.5),
            array('NAME' => 'Kalita', 'PRICE' => 12),
            array('NAME' => 'Cascara', 'PRICE' => 4.9),
            array('NAME' => 'Irish coffee', 'PRICE' => 10.9),
            array('NAME' => 'Espresso', 'PRICE' => 3.8),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9),
            array('NAME' => 'Espresso', 'PRICE' => 3.8),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9),
            array('NAME' => 'Espresso', 'PRICE' => 3.8),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9),
            array('NAME' => 'House Drip coffee', 'PRICE' => 1),
            array('NAME' => 'AeroPress', 'PRICE' => 1),
            array('NAME' => 'V60', 'PRICE' => 6.5),
            array('NAME' => 'Kalita', 'PRICE' => 12),
            array('NAME' => 'Cascara', 'PRICE' => 4.9),
            array('NAME' => 'Irish coffee', 'PRICE' => 10.9),
            array('NAME' => 'Espresso', 'PRICE' => 3.8),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9),
            array('NAME' => 'Espresso', 'PRICE' => 3.8),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9),
            array('NAME' => 'Espresso', 'PRICE' => 3.8),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9),
            array('NAME' => 'Espresso', 'PRICE' => 3.8),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9),
            array('NAME' => 'Espresso', 'PRICE' => 3.8),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9),
            array('NAME' => 'Espresso', 'PRICE' => 3.8),
            array('NAME' => 'Double espresso', 'PRICE' => 4.9),
        ];


        foreach ($cofees as $cofee_value)
        {
            $coffee = new Coffee();
            $coffee->name = $cofee_value['NAME'];
            $coffee->price = $cofee_value['PRICE'];
            $coffee->save();
        }
    }
}
