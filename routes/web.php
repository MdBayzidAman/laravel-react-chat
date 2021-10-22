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


//		JESON
route::get('/inbox-chat','inboxController@chat');
route::post('/user-massages','msgControll@store');		// massage send

route::post('/register','registerController@store');	// register ueser
route::post('/login','registerController@login');	// LOGIN ueser














// ROUTING FOR  REACT JS
Route::get('/{path?}',[
    'uses' => function () {
    return view('welcome');
},
    'as' => 'react',
    'where' => ['path' => '.*']
]);


