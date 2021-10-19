import React from 'react';

import userImg from '../../image/self/user.jpg';
import profileImg from '../../image/self/user.jpg';

function InboxFeed(props) {
	
	
    return (
        <>
			{ props.userInfo.map((data, index)=>{
				return(
					<>
						<div onClick={()=>props.chatClick(data)}  className="people-user-massage">
							<div className="massages-people">
								<div className="msg-people">
									<img className="user-img msg-user" src={userImg} />
									<div className="msg-info">
										<input type="hidden" value="{{$msgesPeople->username}}" className="userInfo" />
										
										<span className="msg-people-name">{data.firstName+' '+data.lastName}</span>
										<span className="msg-people-info">
										Last Massage
										</span>
									</div>
								</div>
								<div className="msg-count">
									<span> 1</span>
								</div>
							</div>						
						</div>	
					</>
				);
			})}
        </>
    );
}

export default InboxFeed;
