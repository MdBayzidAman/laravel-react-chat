import React, { useState, useEffect } from 'react';

import userImg from '../../image/self/user.jpg';
import profileImg from '../../image/self/user.jpg';

function Massage(props) {
	
	const [massage, setMassage] = useState({
		username: "",
		msg:"",
		img:"",
	});
	
	console.log(massage);
	
	const sendMsg=()=>{
		
	};
	

	//
	
	const ChatBox=()=>{
		
	return(
		<>
			<div className="massage-div">
				<div className="massage-title">
				
					<img className="user-img msg-img" src={userImg} />
					
					<span className="msg-name" > {props.selectUser.firstName} {props.selectUser.lastName} </span>
				</div>
				<div className="massage-body">
					<p id="massage-end"></p>
				</div>
				<div className="massage-footer">
				
				
				<form onSubmit={sendMsg} encType="multipart/form-data" id="msg-form"  >
					
					<input onChange={(e)=>setMassage({...massage, username: props.selectUser.username, img:e.target.value})} type="file" name="image" id="image" className="ti-gallery" />
					
					<input id="username" type="hidden" value={ props.selectUser.username } />
					
					<input onChange={(e)=>setMassage({...massage, username: props.selectUser.username, msg:e.target.value})} type="text" name="massage" id="massage" placeholder="Text a massage" className="msg-text" />
					
					<button type="submit" className="ti-location-arrow send-btn" >
					</button>
				</form>
				
				
				</div>
			</div>
		</>
	)};
	
	
	return (
		<>
			<div className="middle-section h-100">		
				<div className="middle-section-load">
				</div>	
				<div className="chat-box h-100">
					<div className="massage-main-div h-100 bg-wht">
						{props.selectUser.username ? ChatBox() : <h6 className="text-center pt-4p c-gry" >You have not selected any massage. First  Select a massage. </h6>}
					</div>
				</div>
			</div>
		</>
	);
}

export default Massage;