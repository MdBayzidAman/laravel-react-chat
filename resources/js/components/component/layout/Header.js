import React from 'react';
import { useState, useEffect } from 'react';

import logoImg from '/public/image/self/logo.png';
import userImg from '/public/image/self/user.jpg';

function Header(props) {
	
	return (
		<>
			<header className="">
				<div className="screen">
					<div className="col">
						<div className="col-s-3">
							<div className="top-nav-left">
								<a href="/">
									<img src={logoImg} alt="" />
									<span><b>ChatApplication</b></span>
								</a>
								{ /* onclick="profileFunction()" */ }
								<div  className="m-user md-block">
									<a >
									{/* 									@if($user->image)
										<img className="user-img" src={profileImg} />
									@else
										<img className="user-img" src={userImg} />
@endif */}
									</a>
								</div>
							</div>
						</div>
						<div className="col-s-6 middle-nav">
							<div className="top-nav-middle">
								<div className="title section-title">
									<span>Inbox</span>
								</div>
								<input type="search" className="search" placeholder="Search People" />
								
							</div>
							<div className="search-result">
								<p className="search-result-info" >
									<b>' <span>0</span> ' RESULT FOUND.</b>
								</p>
								<div className="search-user-result">
								
								</div>
							</div>
						</div>
						<div className="col-s-3 md-none">
							<div className="top-nav-right">
								{/* onclick="profileFunction()"  */}
								<div  className="user">
									<a >
									
										{props.logetInfo.image?(
											<img className="user-img" src={'/image/self/'+props.logetInfo.image} />
										):
										(
											<img className="user-img" src='/image/self/user.jpg' />
										)}
										
										
										<span><b> { props.logetInfo.firstName } { props.logetInfo.lastName } </b></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>	
		</>
	);
}

export default Header;