<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        $request->all();
        $data = $request;
        $product = new Product;
        $product->name = $data['product']['name'];
        $product->save();
    }

    public function showProduct()
    {

        $allProduct = Product::with('category')->get();
        return $allProduct;
//        return Product::all();
    }
}
