<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\QuestionController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ReplyController;

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



Route::resource('/question', QuestionController::class);
Route::resource('/category', CategoryController::class);
Route::resource('/question/{question}/reply', ReplyController::class);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
