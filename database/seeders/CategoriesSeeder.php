<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $categories = ['coffee', 'accessory'];

        foreach ($categories as $category_name) {
            $category = new Category();
            $category->name = $category_name;
            $category->save();
        }


        
    }
}
