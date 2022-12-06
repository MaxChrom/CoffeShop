<?php

use App\Http\Controllers\CoffeeController;
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

Route::post('/coffee/store',[CoffeeController::class, 'showCoffee']);
Route::post('/product/store',[ProductController::class, 'showProduct']);
//Route::post('/coffee/store',[CoffeeController::class, 'store']);

// Route::get('/product', [CoffeeController::class, 'showCoffee']);

