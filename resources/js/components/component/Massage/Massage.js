import React, { useState, useEffect } from 'react';

import userImg from '../../image/self/user.jpg';
import profileImg from '../../image/self/user.jpg';

function Massage(props) {
	
	const [massage, setMassage] = useState(props.msgbox);
	const [msgImage, setMsgImage] = useState([]);
	console.log(massage);
	
	
	const SendMsg=(event)=>{
		event.preventDefault();
		
		const formData = new FormData();
		formData.append('from_user', massage.from_user);
		formData.append('to_user', massage.to_user);
		formData.append('image', msgImage.image);
		formData.append('msg', massage.msg);
		
		axios.post('/user-massages', formData)
		.then(response=>{
			console.log(response.data);
			setMassage({...massage, msg:""});
			setMsgImage({image: ""});
		})
		.then(error=>{
			console.log(error);
		});
		
	};
	
	useEffect(()=>{
		setMassage(props.msgbox);
	},[props.selectUser])
	
	const imgChang=(event)=>{
		setMsgImage({image: event.target.files[0]})
	};
	

//	useEffect(()=>{
		//console.log(massage.to_user);
/* 		const msgChatsLiveTime = setInterval(msgChatsLive, 2000);
		function msgChatsLive(){
			
			axios.post('/msgChatsLive', {'to_user': massage.to_user})
			.then(response=>{
				console.log(response.data);
			}).then(error=>{
				//console.log(error);
			});
		};
 */		
//	},[]);
	
	
	const ChatBox=()=>{
	
	
		return(
			<>
			
				<div className="massage-div">
					<div className="massage-title">
					
						<img className="user-img msg-img" src={userImg} />
						
						<span className="msg-name" > {props.selectUser.firstName} {props.selectUser.lastName} </span>
					</div>
					<div className="massage-body">
						
						
						{props.msgChat.map((data, index)=>{
							return(
								massage.from_user===data.from_user?(
									data.image===null?(
										<div key={index} className="from-msg"><p>{data.massage}</p></div>
									):data.massage===null?(
										<div key={index} className="from-msg"><img src={'image/user/'+data.image} alt="" /></div>
									):(
										<div key={index} className="from-msg">
										<p>{data.massage}</p>
										<img src={'image/user/'+data.image} alt="" />
										</div>
									)
									
								):
								(
								
									data.image===null?(
										<div key={index} className="to-msg"><p>{data.massage}</p></div>
									):data.massage===null?(
										<div key={index} className="to-msg"><img src={'image/user/'+data.image} alt="" /></div>
									):(
										<div key={index} className="to-msg">
										<p>{data.massage}</p>
										<img src={'image/user/'+data.image} alt="" />
										</div>
									)
								)
							)
						})}
						
						
						
						<p id="massage-end"></p>
					</div>
					<div className="massage-footer">
					
					
					<form onSubmit={SendMsg} id="msg-form" >
						
						<input onChange={imgChang} type="file" name="image" id="image" className="ti-gallery" />
						
						<input id="username" type="hidden" value={ props.selectUser.username } />
						
						<input onChange={(e)=>setMassage({...massage, msg:e.target.value})} value={massage.msg || ''} type="text" name="massage" id="massage" placeholder="Text a massage" className="msg-text" />
						
						<button type="submit" className="ti-location-arrow send-btn" >
						</button>
					</form>
					
					</div>
				</div>
			</>
		)
	
	};
	
	
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