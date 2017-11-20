<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/**
** Basic Routes for a RESTful service:
**
** Route::get($uri, $callback);
** Route::post($uri, $callback);
** Route::put($uri, $callback);
** Route::delete($uri, $callback);
**
**/
Route::get('categories', 'CategoriesController@index');
 
Route::get('categories/{category}', 'CategoriesController@show');
 
Route::post('categories','CategoriesController@store');
 
Route::put('categories/{category}','CategoriesController@update');
 
Route::delete('categories/{category}', 'CategoriesController@delete');
