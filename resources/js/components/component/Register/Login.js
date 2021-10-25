import React, { useState, useEffect } from 'react';
import {Link, NavLink, Redirect} from 'react-router-dom';

import logoImg from '../../image/self/logo.png';

function Login(props) {
	
	const [values, setValues] = useState({
		email:"",
		password:"",
	});
	
	const loginSubmit =()=>{
		event.preventDefault();
		
		axios.post('/login', values)
		.then(response=>{
			
			if(response.data == 200){
				props.history.push('/');
			}else{
			};
			//console.log(response.data);
		})
		.then(error=>{
			console.log(error);
		});
		
	};
	
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
				
					<form onSubmit={loginSubmit}  >
						
						
						<input onChange={(e)=>setValues({...values, email:e.target.value})} type="email" name="email" placeholder="Email Address" className="form-input" required />
						
						<input onChange={(e)=>setValues({...values, password:e.target.value})} type="password" name="password" placeholder="Password" className="form-input" id="password" required />
						
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