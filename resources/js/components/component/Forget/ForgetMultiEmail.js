import React from 'react';

import logoImg from '../../image/self/logo.png';

function forgetMultiEmail() {
	
	
	$(document).ready(function(){
		
		var $user = $('.msg-people, .email');
		$('.msg-people').click(function() {
		  // var user=$user.eq($user.index(this) + 1).val();
		   $user.eq($user.index(this) + 1).attr('checked','true');
		   
		});

	});
	return (
		<>
			<section className="main-section">
				<div className="logo-section">
					<a href="#">
						<img src={logoImg} alt="" />
						<span><b>ChatApplication</b></span>
					</a>
				</div>
				<div className="form-contentent">
				
					<form action="/forget-email" method="post" >
						<br />
						<span style={{fontFamily: "system-ui", color: "#292929"}} ><b>Choese Your Account </b></span>
						<br />
						<br />
						
						<div className="account">
						
						{/* @foreach($email as $user) */}
						<div className="massages-people">
							<div className="msg-people">
							
{/* 						@if($user->image)
								<img className="user-img msg-user" src="{{asset('image/profile/'.$user->image)}}" />
							@else
								<img className="user-img msg-user" src="{{asset('image/self/user.jpg')}}"  />
							@endif */}
							<img className="user-img msg-user" src={logoImg}/>
							
								<div className="msg-info">			
									<span className="msg-people-name">User Name </span>
								</div>
							</div>
							<input type="radio" name="username" value="{{$user->username}}" className="email" required />
						</div>
						{/* @endforeach */}
						
						</div>		
						

						<input type="submit" value="Send Verify Code" className="submit " />
					</form>

				</div>
			</section>
		</>
	);
}

export default forgetMultiEmail;