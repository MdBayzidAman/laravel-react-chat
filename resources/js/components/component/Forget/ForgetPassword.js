import React from 'react';

import logoImg from '../../image/self/logo.png';

function ForgetPassword() {
	return (
		<>
			<section className="main-section">
				<div className="logo-section">
					<a href="#">
						<img src={logoImg} alt="" />
						<span><b>ChatApplication</b></span>
					</a>
				</div>
				<div className="form-contentent verify-section">
				
					<form action="/forget-password" method="post" >
						<br />
						<span style={{fontFamily:"system-ui", color:"#292929",}}  ><b>Enter new password</b></span>
						
						<input type="hidden" name="username" value="{{$username}}" className="form-input" required />
						
						<input type="password" name="password" placeholder="Enter New Password" className="form-input" id="password" required />
						<br />
						<br />
						<span style={{ fonFamily:"system-ui", color:"#292929",}} ><b>Confirm your password</b></span>
						
						<input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-input"  required />
						
						<input type="submit" value="Change password" className="submit" />
					</form>

				</div>
			</section>

		</>
	);
}

export default ForgetPassword;