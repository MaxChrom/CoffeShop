<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/home', function () {
    return view('welcome');
});

Route::get('/menu', function () {
    return view('welcome');
});

Route::get('/shop', function () {
    return view('welcome');
});

Route::get('/story', function () {
    return view('welcome');
});

Route::get('/cart', function () {
    return view('welcome');
});