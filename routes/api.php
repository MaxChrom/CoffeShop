<?php

use App\Http\Controllers\CoffeeController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::post('/coffee/store',[CoffeeController::class, 'store']);

Route::get('/fullmenu', [MenuController::class, 'showMenu']);
Route::get('/coffees', [CoffeeController::class, 'showCoffee']);
Route::post('/coffee/store',[CoffeeController::class, 'storeCoffee']);



Route::get('/products',[ProductController::class, 'showProduct']);
Route::get('/categories', [ProductController::class, 'showCategories']);
Route::post('/product/store',[ProductController::class, 'showProduct']);



