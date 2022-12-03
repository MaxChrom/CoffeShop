<?php

namespace Database\Seeders;
use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $categories = array('coffee', 'accessory');

        // foreach ($categories as $category_name) {
        //     $category = new Category;
        //     $category->name = $category_name;
        //     $category->save();
        // }

        DB::table('categories')->insert([
            'name' => Str::random(10)
        ]);

    }
}
