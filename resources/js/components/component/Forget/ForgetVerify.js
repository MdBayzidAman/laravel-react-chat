import React from 'react';

import logoImg from '../../image/self/logo.png';

function ForgetVrify() {
	return (
		<>
			<section class="main-section">
				<div class="logo-section">
					<a href="#">
						<img src={logoImg} alt="" />
						<span><b>ChatApplication</b></span>
					</a>
				</div>
				<div class="form-contentent verify-section">
				
					<form action="/forget-verify" method="post" >
						<br />
						<span style={{ fonFamily:"system-ui", color:"#292929",}} ><b>Enter Verify Code</b></span>
						
						<input type="hidden" name="username" value="<?php echo $_REQUEST['username'] ?>" class="form-input" required />
						
						
						<input type="number" name="verify" placeholder="Verify Code" class="form-input" id="password" required />

						<input type="submit" value="Verify Account" class="submit " />
					</form>
					<div class="footer-section">
					<form action="/resend" method="post" >
						
						<input type="hidden" name="username" value="<?php echo $_REQUEST['username'] ?>" class="form-input" required />
						
						<input type="submit" value="Resend code ?" class="resend" />
					</form>

						
						
					</div>

				</div>
			</section>
		</>
	);
}

export default ForgetVrify;