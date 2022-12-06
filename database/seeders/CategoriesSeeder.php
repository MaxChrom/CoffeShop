<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $categories = ['Coffee', 'Accessories'];


        foreach ($categories as $category_name)
        {
            $category = new Category();
            $category->name = $category_name;
            $category->save();
        }
    }
}
