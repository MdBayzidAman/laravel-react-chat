<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\massage;
use File;

class msgControll extends Controller
{


    public function index()
    {
       
    }

	
    public function msgChats(Request $request)
    {
		$from_user=session('LoggetUser');
		
		$data=massage::where([['to_user',$request->to_user],['from_user',$from_user]])->orWhere([['to_user',$from_user],['from_user',$request->to_user]])->get();
		
		
        return response()->json($data);
    }
	
	
	
    public function msgChatsLive(Request $request)
    {
		$from_user=session('LoggetUser');
		
		$data=massage::where([['to_user',$request->to_user],['from_user',$from_user]])->orWhere([['to_user',$from_user],['from_user',$request->to_user]])->get();
		
		
        return response()->json($data);
    }
	

    public function store(Request $request)
    {
		
		
		if($request->hasFile('image') && $request->msg){
			
				
			$imageName=date('d').time().date('m').'.'.$request->image->extension();
			
			$request->image->move(public_path('image/user'),$imageName);
			
			
			$massage=new massage;
			$massage->from_user=$request->from_user;
			$massage->to_user=$request->to_user;
			$massage->image=$imageName;
			$massage->massage=$request->msg;
			$massage->save();
		
			return response()->json('send');
			
		}else if($request->msg){
			
			$massage=new massage;
			$massage->from_user=$request->from_user;
			$massage->to_user=$request->to_user;
			$massage->massage=$request->msg;
			$massage->save();
			
			
			return response()->json('send');
			
		}else if($request->hasFile('image')){
			
			$imageName=date('d').time().date('m').'.'.$request->image->extension();
			
			$request->image->move(public_path('image/user'),$imageName);
			
			$massage=new massage;
			$massage->from_user=$request->from_user;
			$massage->to_user=$request->to_user;
			$massage->image=$imageName;
			$massage->save();
		
			return response()->json('send');
		}else{
			
			return response()->json('something went wrong !');
		};
		

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
