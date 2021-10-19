import React from 'react';


function NavSection() {
	
	return (
		<>
			<menu className="">
				<div className="">
					<ul className="side-nave-ul" >
					{ /* onclick="massgeFunction()" */ }
						<li className="btn1 active"><i className="ti-comment-alt"></i>Massage</li>
							{ /* onclick="profileFunction()"  */ }
						<li className="btn3 "><i className="ti-user"></i>Profile</li>
												
						<li className="" id="setting"><i className="ti-settings"></i>Setting
						<i style={{float:'right'}} className="ti-angle-down"></i>
						</li>
						<ul className="setting-nav">
							<li><a href="/logout">LogIn Another Account</a></li>
							<li><a href="/forget">Forget Password</a></li>
						</ul>
						
						<li className="btn6 "><a style={{display: 'block'}} href="/logout"><i  className="ti-shift-right"></i>  Log Out</a></li>
					</ul>
				
				</div>
			</menu>
		</>
	);
}

export default NavSection;