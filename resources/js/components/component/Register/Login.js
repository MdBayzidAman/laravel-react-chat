import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import logoImg from '../../image/self/logo.png';

function Login() {
	
	return (
		<>
			<section id="login-section" className="main-section">
				<div className="logo-section">
					<a href="">
						<img src={logoImg} alt="" />
						<span><b>ChatApplication</b></span>
					</a>
				</div>
				<div className="form-contentent">
				
					<form action="/login" method="post" >
						
						
						<input type="email" name="email" placeholder="Email Address" className="form-input" required />
						
						<input type="password" name="password" placeholder="Password" className="form-input" id="password" required />
						
						<input type="submit" value="Log In" className="submit " />
					</form>
					<div className="footer-section">
						<NavLink to="/forget" >
							<p>forget password</p>
						</NavLink>
						<div className="or-div">
							<hr className="or-row" /> <span>Or</span> <hr  className="or-row"  />
						</div>
						<NavLink to="/register" >
							<p id="create-account" >Create Account</p>
						</NavLink>
					</div>
				</div>
			</section>
		</>
	);
}

export default Login;