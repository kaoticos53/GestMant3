<?php

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//   return $request->user();
// });

Route::get('/verified-only', function (Request $request) {
  dd('your are verified', $request->user()->name);
})->middleware('auth:api', 'verified');

Route::post('/register', 'api\AuthController@register');
Route::post('/login', 'api\AuthController@login');

//Route::post(
//  '/password/email',
//  'Api\ForgotPasswordController@sendResetLinkEmail'
//);
//Route::post('/password/reset', 'Api\ResetPasswordController@reset');

//Route::get('/email/resend', 'Api\VerificationController@resend')->name(
//  'verification.resend'
//);

//Route::get(
//  '/email/verify/{id}/{hash}',
//  'Api\VerificationController@verify'
//)->name('verification.verify');

Route::apiResource('tasks', 'Api\TasksController')->middleware('auth:api');

// Test

Route::namespace('Api')
  ->prefix('user')
  ->middleware('auth:api')
  ->group(function () {
    Route::get('/{user}', 'UsersController@show');
    Route::put('/{user}', 'UsersController@update');
    Route::delete('/{user}', 'UsersController@destroy');
  });

Route::namespace('Api')
  ->prefix('users')
  ->middleware('auth:api')
  ->group(function () {
    Route::get('/', 'UsersController@index');
    Route::post('/create', 'UsersController@store');
    Route::get('/current', 'UsersController@currentUser');
  });
