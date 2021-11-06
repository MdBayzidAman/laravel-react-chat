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
	
	
    public function user_log()
    {
		if(session()->has('LoggetUser')){
			//session()->forget('LoggetUser');
			$username=session('LoggetUser');
			$data=user::where('username',$username)->first();
			
			return response()->json($data);
		}else{
			return response()->json('outedAuth');
		}
		
/* 		        //RAM usage
        $free = shell_exec('free'); 
        $free = (string) trim($free);
        $free_arr = explode("\n", $free);
        $mem = explode(" ", $free_arr[1]);
        $mem = array_filter($mem);
        $mem = array_merge($mem);
        $usedmem = $mem[2];
        $usedmemInGB = number_format($usedmem / 1048576, 2) . ' GB';
        $memory1 = $mem[2] / $mem[1] * 100;
        $memory = round($memory1) . '%';
        $fh = fopen('/proc/meminfo', 'r');
        $mem = 0;
        while ($line = fgets($fh)) {
            $pieces = array();
            if (preg_match('/^MemTotal:\s+(\d+)\skB$/', $line, $pieces)) {
                $mem = $pieces[1];
                break;
            }
        }
        fclose($fh);
        $totalram = number_format($mem / 1048576, 2) . ' GB';

        //cpu usage
        $cpu_load = sys_getloadavg(); 
        $load = $cpu_load[0] . '% / 100%';

        return response()->json($memory.','.$totalram.','.$usedmemInGB.','.$load); */
		
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
				
				$request->session()->put('LoggetUser',$userInfo->username);
				
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
