import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import logoImg from '../../image/self/logo.png';
import userImg from '../../image/self/user.jpg';
import profileImg from '../../image/self/user.jpg';

function Register() {
	
	const [values, setValues] = useState({
		firstName:"",
		lastName:"",
		email:"",
		password:"",
		confirmPassword:"",
		gender:"",
	});
	
	console.log(values);
	
	const formSubmit =(event)=>{
		event.preventDefault();
		
		axios.post('/register', values)
		.then(response=>{
			console.log(response.data);
			setValues({
				firstName:"",
				lastName:"",
				email:"",
				password:"",
				confirmPassword:"",
				gender:"",
			});
		})
		.then(error=>{
			console.log(error);
		});
	};
	
	return (
		<>
			<section id="register-section" className="main-section">
				<div className="logo-section">
					<a href="#">
						<img src={logoImg} alt="" />
						<span><b>ChatApplication</b></span>
					</a>
				</div>
				<div className="form-contentent">
					<form onSubmit={formSubmit} >
						
						<input onChange={(e)=>setValues({...values, firstName:e.target.value})} value={values.firstName} type="text" name="firstName" placeholder="First Name" className="form-input" required />
						
						<input onChange={(e)=>setValues({...values, lastName:e.target.value})} value={values.lastName} type="text" name="lastName" placeholder="Last Name" className="form-input" required />
						
						<input onChange={(e)=>setValues({...values, email:e.target.value})}  value={values.email} type="email" name="email" placeholder="Email Address" className="form-input" required />
						
						<input onChange={(e)=>setValues({...values, password:e.target.value})}value={values.password} type="password" name="password" placeholder="Create Password" className="form-input" required />
						
						<input onChange={(e)=>setValues({...values, confirmPassword:e.target.value})} value={values.confirmPassword} type="password" name="confirmPassword" placeholder="Confirm Password" className="form-input" required />
						
						<div className="label"><span>Gender</span></div>
						<div className="gender">
							
							<label htmlFor="Male" className="gender-label">
								<span>Male</span>
								<input onChange={(e)=>setValues({...values, gender:e.target.value})} type="radio" name="gender" id="Male" value="Male" required />	
							</label>
							
							<label htmlFor="Female" className="gender-label">
								<span>Female</span>
								<input onChange={(e)=>setValues({...values, gender:e.target.value})} type="radio" name="gender" id="Female"  value="Female"  required />
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