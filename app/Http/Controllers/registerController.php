<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\user;
use App\user_parmition;
use Mail;

class registerController extends Controller
{
	
    public function index()
    {
        //
    }
	
	
    public function create()
    {
        //
    }
	
	
    public function store(Request $request)
    {
		
		
		$code=rand(111111,999999);
		
/* 		Mail::send('register.mail',[
		
			'name' => $request->firstName,
			'code' => $code,
		
		],function($mail) use($request){
			
			$mail->from(env('MAIL_FROM_ADDRESS',$request->email));
			$mail->to("$request->email")->subject('ChatApplication Verification Code');
		
		});
		 */

 		 $username_replace=str_replace(' ', '', $request->firstName .'-'.$request->lastName);
		 
		 $count_username=count(user::where('username_short',$username_replace)->get());
		
		 if($count_username==0){
			 $username=$username_replace;
			 
		 }elseif($count_username>0){
			 
			 $username=$username_replace.$count_username;
		 };
		 
		 
		$user=new user;
		$user->firstName=$request->firstName;
		$user->lastName=$request->lastName;
		$user->username_short=$username_replace;
		$user->username=$username;
		$user->verify=$code;
		$user->email=$request->email;
		//$user->password=$request->password;
		//$user->password=Hash::make($request->password);
		$user->gender=$request->gender;
		$user->save();

		$userParmition=new user_parmition;
		$userParmition->user_id=$username;
		$userParmition->parmition=2;
		$userParmition->password=$request->password;
		$userParmition->verifyed=0;
		$userParmition->save();
		 
		 
		return response()->json('success');
		
	  //return view('register.verify',compact('username'))->with('success','Please check your email inbox !. We send a verify code to your email.');
		
    }
	
	
	
	
	
	//		LOGIN FUNCTION
    public function login(Request $request)
    {
		
		
		$user=user::where('email',$request->email)->first();
	
		if($user){
			//Hash::check($request->password,$user->password)
			if(user::where([['email',$request->email],['password',$request->password]])->first() && user_parmition::where([['user_id',$user->username],['verifyed','1']])->first()){
				
				$userInfo=user::where([['email',$request->email],['password',$request->password]])->first();
				
				$request->session()->put('LoggetUser',$userInfo);
				
				return response()->json('200');
				//return redirect('/');

			}else if(user_parmition::where([['user_id',$user->username],['verifyed','0']])->first()){
				
				return response()->json('Oops !  your account is not verifyed. Please verify your account or create new account.');
				//return redirect()->back()->with('warning','Oops !  your account is not verifyed. Please verify your account or create new account.');
			}else{
				return response()->json('Oops !  your passwor	is wrong. Please try again.');
				//return redirect()->back()->with('warning','Oops !  your passwor	is wrong. Please try again.');

			}
			
		}else{
			return response()->json('warning','Oops ! Account not found.');
			//return redirect()->back()->with('warning','Oops ! Account not found.');

		};
		
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
