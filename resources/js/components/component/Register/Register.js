import React from 'react';
import { NavLink } from 'react-router-dom';

import logoImg from '../../image/self/logo.png';
import userImg from '../../image/self/user.jpg';
import profileImg from '../../image/self/user.jpg';

function Register() {
	
	return (
		<>
			<section id="register-section" className="main-section">
				<div className="logo-section">
					<a href="#">
						<img src={userImg} alt="" />
						<span><b>ChatApplication</b></span>
					</a>
				</div>
				<div className="form-contentent">
					<form  action="/sign-up" method="post" >
						
						<input type="text" name="firstName" placeholder="First Name" className="form-input" required />
						
						<input type="text" name="lastName" placeholder="Last Name" className="form-input" required />
						
						<input type="email" name="email" placeholder="Email Address" className="form-input" required />
						
						<input type="password" name="password" placeholder="Create Password" className="form-input" required />
						
						<div className="label"><span>Gender</span></div>
						<div className="gender">
							
							<label for="Male" className="gender-label">
								<span>Male</span>
								<input type="radio" name="gender" id="Male" value="Male" required />	
							</label>
							
							<label for="Female" className="gender-label">
								<span>Female</span>
								<input type="radio" name="gender" id="Female"  value="Female"  required />
							</label>
						
						</div>
						
						<input type="submit" value="Register" className="submit " />
					</form>
					<div className="footer-section">
						<p> Already have an account ?
							<NavLink to="/login" >
								<span style={{color:'green'}} > Log In  </span>
							</NavLink>
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Register;