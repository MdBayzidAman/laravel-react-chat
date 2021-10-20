<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\massage;

class msgControll extends Controller
{


    public function index()
    {
       
    }

	
    public function create()
    {
        //
    }


    public function store(Request $request)
    {
       $data=new massage;
	   $data->from_user=$request->from_user;
	   $data->to_user=$request->to_user;
	   $data->massage=$request->msg;
	   $data->image=$request->img;
	   $data->save();
	   
	   return response()->json('Send...');
    }


    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
