import React from 'react';

import logoImg from '../../image/self/logo.png';
import userImg from '../../image/self/user.jpg';
import profileImg from '../../image/self/user.jpg';

function Register() {
	
	return (
		<>
			<section id="register-section" class="main-section">
				<div class="logo-section">
					<a href="#">
						<img src={userImg} alt="" />
						<span><b>ChatApplication</b></span>
					</a>
				</div>
				<div class="form-contentent">
					<form  action="/sign-up" method="post" >
						
						<input type="text" name="firstName" placeholder="First Name" class="form-input" required />
						
						<input type="text" name="lastName" placeholder="Last Name" class="form-input" required />
						
						<input type="email" name="email" placeholder="Email Address" class="form-input" required />
						
						<input type="password" name="password" placeholder="Create Password" class="form-input" required />
						
						<div class="label"><span>Gender</span></div>
						<div class="gender">
							
							<label for="Male" class="gender-label">
								<span>Male</span>
								<input type="radio" name="gender" id="Male" value="Male" required />	
							</label>
							
							<label for="Female" class="gender-label">
								<span>Female</span>
								<input type="radio" name="gender" id="Female"  value="Female"  required />
							</label>
						
						</div>
						
						<input type="submit" value="Register" class="submit " />
					</form>
					<div class="footer-section">
						<p> Already have an account ? <span style={{color:'green'}} > Log In  </span></p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Register;