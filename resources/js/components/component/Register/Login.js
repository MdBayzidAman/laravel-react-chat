import React from 'react';

import logoImg from '../../image/self/logo.png';

function Login() {
	
	return (
		<>
			<section id="login-section" class="main-section">
				<div class="logo-section">
					<a href="">
						<img src={logoImg} alt="" />
						<span><b>ChatApplication</b></span>
					</a>
				</div>
				<div class="form-contentent">
				
					<form action="/login" method="post" >
						
						
						<input type="email" name="email" placeholder="Email Address" class="form-input" required />
						
						<input type="password" name="password" placeholder="Password" class="form-input" id="password" required />
						
						<input type="submit" value="Log In" class="submit " />
					</form>
					<div class="footer-section">
						<p><a href="/forget">forget password</a></p>
						<div class="or-div">
							<hr class="or-row" /> <span>Or</span> <hr  class="or-row"  />
						</div>
						<p id="create-account" >Create Account</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Login;