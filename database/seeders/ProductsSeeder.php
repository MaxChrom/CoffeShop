<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $coffees = [
                [
                    'name' => 'Armondo',
                    'category_id' => 1, 
                    'flavor' => 'Chocolate',
                    'discription' => 'Unique chocolate coffee from Africa',
                    'manufacturer' => 'Africa',
                    'price' => 23,
                    'quantity' => 150
                ],
                [
                    'name' => 'Armondo',
                    'category_id' => 1,
                    'flavor' => 'Chocolate',
                    'discription' => 'Unique chocolate coffee from Africa',
                    'manufacturer' => 'Africa',
                    'price' => 23,
                    'quantity' => 150
                ],
                [
                    'name' => 'Armondo',
                    'category_id' => 1,
                    'flavor' => 'Chocolate',
                    'discription' => 'Unique chocolate coffee from Africa',
                    'manufacturer' => 'Africa',
                    'price' => 23,
                    'quantity' => 150
                ],
                [
                    'name' => 'Armondo',
                    'category_id' => 1,
                    'flavor' => 'Chocolate',
                    'discription' => 'Unique chocolate coffee from Africa',
                    'manufacturer' => 'Africa',
                    'price' => 23,
                    'quantity' => 150
                ],
                [
                    'name' => 'Armondo',
                    'category_id' => 1,
                    'flavor' => 'Chocolate',
                    'discription' => 'Unique chocolate coffee from Africa',
                    'manufacturer' => 'Africa',
                    'price' => 23,
                    'quantity' => 150
                ],
                [
                    'name' => 'Armondo',
                    'category_id' => 1,
                    'flavor' => 'Chocolate',
                    'discription' => 'Unique chocolate coffee from Africa',
                    'manufacturer' => 'Africa',
                    'price' => 23,
                    'quantity' => 150
                ],
                [
                    'name' => 'Armondo',
                    'category_id' => 1,
                    'flavor' => 'Chocolate',
                    'discription' => 'Unique chocolate coffee from Africa',
                    'manufacturer' => 'Africa',
                    'price' => 23,
                    'quantity' => 150
                ],
                [
                    'name' => 'Armondo',
                    'category_id' => 1,
                    'flavor' => 'Chocolate',
                    'discription' => 'Unique chocolate coffee from Africa',
                    'manufacturer' => 'Africa',
                    'price' => 23,
                    'quantity' => 150
                ],
            ];


        

        foreach ($coffees as $coffee) {
            $product = new Product();
            $product->name = $coffee['name'];
            $product->category_id = $coffee['category_id'];
            $product->flavor = $coffee['flavor'];
            $product->discription = $coffee['discription'];
            $product->manufacturer = $coffee['manufacturer'];
            $product->price = $coffee['price'];
            $product->quantity = $coffee['quantity'];
            $product->save();
        }


        // $product = new Product();
        // $product->name = 'Armondo';
        // $product->category_id = 1;
        // $product->flavor = 'Chocolate';
        // $product->discription = 'Unique chocolate coffee from Africa';
        // $product->manufacturer = 'Africa';
        // $product->price = 23;
        // $product->quantity = 150;
        // $product->save();
    }
}
