import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Header from './Header';
import NavSection from '../Navber/NavSection';
import Massage from '../Massage/Massage';
import InboxFeed from '../Massage/InboxFeed';
import Profile from '../Profile/Profile';
//import Register from '../Register/Register';
//import Login from '../Register/Login';

function Master(props) {
	
	const [user, setUser] = useState([]);
	const [selectUser, setSelectUser] = useState([]);
	const [msgbox, setMsgbox] = useState([]);
	const [logetInfo, setLogetInfo] = useState({});
	const [msgChat, setMsgChat] = useState([]);
	
	console.log(logetInfo);
	
	useEffect(()=>{
		axios.get('/inbox-chat')
		.then(response=>{
			setUser(response.data);
			console.log(response.data);
		})
		.catch(error=>{
			console.log(error);
		});
/* 		.then(response=>{	
			
		}); */
	},[]);
	
	const chatClick=(data)=>{
		setSelectUser(data);
		

		
		setMsgbox({
			from_user: logetInfo.username,
			to_user: data.username,
			msg:"",
			//image:"",
		});
		
		const formdata= new FormData();
		formdata.append('to_user', data.username);
		
		axios.post('/msgChat',formdata).then(response=>{
			
			if(response.status===200){
				setMsgChat(response.data)
				console.log(response.data);
			}else{
				
			}
			
		}).then(error=>{
			console.log(error);
		});
		
		
		clearInterval(msgChatsLiveTime);
	 	const msgChatsLiveTime = setInterval(msgChatsLive, 2000);
		msgChatsLive(formdata);
		
	};
		function msgChatsLive(formdata){
			console.log(msgbox);
			axios.post('/msgChatsLive', formdata)
			.then(response=>{
				console.log(response.data);
			}).then(error=>{
				//console.log(error);
			});
		};
	
	useEffect(()=>{
		$.ajax({
			type:'get',
			url:'/user_log',
			success:function(data){
				
				if( data === 'outedAuth'){
					//<Redirect to="/register" />
					props.history.push('/register');
					console.log(data);
					//alert('sdffg');
				}else{
					//sessionStorage.setItem('userInfo', JSON.stringify(data));
					setLogetInfo(data);
					console.log(data);
				}
				
			},
			error:function(data){
				console.log(data);
			},
		});	
	},[]);
	
	
	
	return (
			<>
				<Header logetInfo={logetInfo} />
				
				<section className="body-section">
					<div className="screen h-100">
						<div className="col h-100">
							<div className="col-s-3 md-none h-100 p-0">
								<div className="massage-section">
									<InboxFeed userInfo={user} chatClick={chatClick} />
								</div>
							</div>
							<div id="main-screen" className="col-s-6 mp-0 h-100">
								<Massage selectUser={selectUser} msgbox={msgbox} msgChat={msgChat} />
							</div>
							<div id="people-section" className="col-s-3 mp-0 md-none">
								<NavSection />
							</div>
						</div>
					</div>
				</section>
			</>
		);
}

export default Master;