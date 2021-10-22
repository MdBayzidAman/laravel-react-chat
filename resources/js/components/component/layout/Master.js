import React, { useState, useEffect } from 'react';

import Header from './Header';
import NavSection from '../Navber/NavSection';
import Massage from '../Massage/Massage';
import InboxFeed from '../Massage/InboxFeed';
import Profile from '../Profile/Profile';
//import Register from '../Register/Register';
//import Login from '../Register/Login';


function Master() {
	
	const [user, setUser] = useState([]);
	const [selectUser, setSelectUser] = useState([]);
	const [msgbox, setMsgbox] = useState([]);
	
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
			from_user: data.username,
			to_user: data.username,
			msg:"",
			img:"",
		});
		//alert(data.username);
		
	};
	
	
/* 
	$.ajax({
		type:'get',
		url:'/inbox-chat',
		success:function(data){
			console.log(data);
		},
		error:function(data){
			console.log(data);
		},
	});	 */
	
	return (
		<>
			<Header/>
			
			<section className="body-section">
				<div className="screen h-100">
					<div className="col h-100">
						<div className="col-s-3 md-none h-100 p-0">
							<div className="massage-section">
								<InboxFeed userInfo={user} chatClick={chatClick} />
							</div>
						</div>
						<div id="main-screen" className="col-s-6 mp-0 h-100">
							<Massage selectUser={selectUser} msgbox={msgbox} />
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