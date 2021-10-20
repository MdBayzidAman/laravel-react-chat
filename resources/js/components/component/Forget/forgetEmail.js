import React from 'react';

import logoImg from '../../image/self/logo.png';

function ForgetEmail() {
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
				
					<form action="/forget" method="post" >
						<br />
						<span style={{ fonFamily:"system-ui", color:"#292929",}} ><b>Enter Email Address </b></span>
									
						<input type="email" name="email" placeholder="Enter Email" className="form-input"  required />

						<input type="submit" value="Send Verify Code" className="submit " />
					</form>
				</div>
			</section>
		</>
	);
}

export default ForgetEmail;
